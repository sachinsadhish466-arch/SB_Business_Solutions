'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/site/Section';
import { WHY_AI } from '@/lib/content';

export default function WhyAI() {
  return (
    <Section id="why-ai" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[30%] top-0 h-72 w-72 animate-blob rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why AI"
          title={<>Why Businesses Choose <span className="text-gradient">AI</span></>}
          description="Artificial intelligence is no longer optional. Here&apos;s what it delivers when implemented right."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_AI.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/40 p-5 text-center transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-accent transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
