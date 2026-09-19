'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { TESTIMONIALS } from '@/lib/content';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const count = TESTIMONIALS.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[index];

  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What Our <span className="text-gradient">Clients Say</span></>}
          description="Real results from real businesses we've helped transform."
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-8 sm:p-12">
            <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/10" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-display font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary sm:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary sm:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index ? 'w-8 bg-gradient-to-r from-primary to-secondary' : 'w-2 bg-border hover:bg-primary/40'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
