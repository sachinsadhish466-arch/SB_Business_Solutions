'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from '@/lib/content';
import { supabase } from '@/lib/supabase';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  business: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', business: '', phone: '', email: '', service: '', budget: '', message: '' },
  });

  const serviceValue = watch('service');
  const budgetValue = watch('budget');

  const onSubmit = async (data: FormData) => {
    setStatus('submitting');
    try {
      const { error } = await supabase.from('leads').insert({
        name: data.name,
        business: data.business || null,
        phone: data.phone,
        email: data.email,
        service: data.service,
        budget: data.budget,
        message: data.message,
      });
      if (error) throw error;
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/5 p-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-500">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your request has been received. Our team will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Name *</label>
          <Input
            {...register('name')}
            placeholder="Your full name"
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Business</label>
          <Input
            {...register('business')}
            placeholder="Company name (optional)"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Phone *</label>
          <Input
            {...register('phone')}
            placeholder="+91 98765 43210"
            className={errors.phone ? 'border-destructive' : ''}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Email *</label>
          <Input
            type="email"
            {...register('email')}
            placeholder="you@company.com"
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Service *</label>
          <Select
            value={serviceValue}
            onValueChange={(v) => setValue('service', v, { shouldValidate: true })}
          >
            <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {SERVICE_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Budget *</label>
          <Select
            value={budgetValue}
            onValueChange={(v) => setValue('budget', v, { shouldValidate: true })}
          >
            <SelectTrigger className={errors.budget ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {BUDGET_OPTIONS.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && <p className="text-xs text-destructive">{errors.budget.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Message *</label>
        <Textarea
          {...register('message')}
          placeholder="Tell us about your project, goals, and timeline..."
          rows={4}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            Something went wrong. Please try again or call us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="group flex-1 bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            'Book Free Consultation'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={status === 'submitting'}
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="border-border/60 hover:border-primary/50 hover:text-primary"
        >
          Request Quote
        </Button>
      </div>
    </form>
  );
}
