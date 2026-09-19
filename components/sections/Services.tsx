'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { SERVICES, MORE_SERVICES } from '@/lib/content';
import { Button } from '@/components/ui/button';

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Services"
          title={<>Everything You Need to <span className="text-gradient">Grow Digitally</span></>}
          description="From websites and mobile apps to custom software, marketing, and training — we deliver complete business transformation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const isOpen = openIdx === i;
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/10" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <button
                    aria-label={isOpen ? 'Collapse' : 'Expand'}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/40 pt-4">
                        {s.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional services grid */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-display text-xl font-semibold text-foreground">Additional Expertise</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {MORE_SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-accent/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-display text-sm font-semibold text-foreground">{s.title}</h4>
                  <ul className="mt-2 space-y-1">
                    {s.items.slice(0, 5).map((item) => (
                      <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
