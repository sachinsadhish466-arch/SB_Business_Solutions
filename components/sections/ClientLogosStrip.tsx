'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/site/Section';
import { ClientLogos } from '@/lib/content';

export default function ClientLogosStrip() {
  return (
    <Section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Trusted by businesses across industries
        </motion.p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {ClientLogos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-display text-lg font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/70 sm:text-xl"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
