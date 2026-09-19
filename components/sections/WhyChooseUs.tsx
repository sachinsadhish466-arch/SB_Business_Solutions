'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/site/Section';
import { STATS, WHY_CHOOSE_US } from '@/lib/content';
import AnimatedCounter from '@/components/site/AnimatedCounter';

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="relative overflow-hidden bg-card/20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 animate-blob rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[20%] h-72 w-72 animate-blob rounded-full bg-secondary/10 blur-3xl" style={{ animationDelay: '6s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Stats */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Numbers That <span className="text-gradient">Reflect Our Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base text-muted-foreground"
            >
              We measure success by your growth. Here&apos;s what we&apos;ve delivered for businesses like yours.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="gradient-border rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">What Sets Us Apart</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {WHY_CHOOSE_US.map((reason, i) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-primary/40"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-sm font-medium text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 to-secondary/5 p-5"
            >
              <p className="text-sm text-foreground">
                <span className="font-semibold">Not sure where to start?</span> Our team will assess your business and recommend the right mix of technology and AI — at no cost.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
