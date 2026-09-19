'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { PORTFOLIO } from '@/lib/content';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'Web Development', 'Software', 'AI Solutions', 'Mobile', 'E-Commerce', 'BI'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <Section id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Work That <span className="text-gradient">Speaks for Itself</span></>}
          description="A selection of projects spanning web, mobile, software, AI, and business intelligence."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20'
                  : 'border border-border/50 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white opacity-80 shadow-xl transition-transform group-hover:scale-110">
                      <ArrowUpRight className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 transition-opacity group-hover:opacity-90" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
