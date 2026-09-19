'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { AI_SOLUTIONS } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AISolutions() {
  const [active, setActive] = useState(0);
  const current = AI_SOLUTIONS[active];
  const Icon = current.icon;

  return (
    <Section id="ai-solutions" className="relative overflow-hidden bg-card/20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-[10%] h-72 w-72 animate-blob rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute right-[15%] bottom-[15%] h-80 w-80 animate-blob rounded-full bg-accent/15 blur-3xl" style={{ animationDelay: '5s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="AI Solutions"
          title={<>Intelligent AI That <span className="text-gradient">Works for You</span></>}
          description="From conversational chatbots to autonomous agents and generative AI — we put artificial intelligence at the heart of your business."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Tab list */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {AI_SOLUTIONS.map((s, i) => {
              const TabIcon = s.icon;
              const isActive = active === i;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    'group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all lg:w-full',
                    isActive
                      ? 'border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground'
                      : 'border-border/50 bg-card/30 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  )}
                >
                  <TabIcon className={cn('h-5 w-5 shrink-0', isActive ? 'text-primary' : '')} />
                  <span className="whitespace-nowrap text-sm font-medium lg:whitespace-normal">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="gradient-border relative overflow-hidden rounded-2xl p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground">{current.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{current.desc}</p>
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {current.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-center gap-2 rounded-lg border border-border/40 bg-card/40 px-3 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/30"
          >
            Explore AI for Your Business
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
