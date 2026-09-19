'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/site/Section';
import { PROCESS_STEPS } from '@/lib/content';

export default function Process() {
  return (
    <Section id="process" className="bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Process"
          title={<>A Proven Path to <span className="text-gradient">Business Growth</span></>}
          description="Every engagement follows a structured, transparent process designed to deliver results."
        />

        <div className="mt-14">
          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
              <div className="grid grid-cols-5 gap-4">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="relative text-center"
                  >
                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-card text-primary shadow-lg">
                      <span className="font-display text-lg font-bold">{i + 1}</span>
                      <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/10" />
                    </div>
                    <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden">
            <div className="relative space-y-6 pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/40 bg-card text-[10px] font-bold text-primary">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
