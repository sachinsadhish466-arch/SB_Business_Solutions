'use client';

import { motion } from 'framer-motion';
import { Store, HeartPulse, GraduationCap, Building2, Home, Factory, Car, UtensilsCrossed, Hotel, Plane, Banknote, ShieldCheck, Truck, ShoppingCart, Rocket, Building, Landmark, HandHeart, Briefcase } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { INDUSTRIES } from '@/lib/content';

const ICONS = [
  Store, HeartPulse, GraduationCap, Building2, Home, Factory, Car, UtensilsCrossed, Hotel, Plane,
  Banknote, ShieldCheck, Truck, ShoppingCart, Rocket, Building, Landmark, HandHeart, Briefcase,
];

export default function Industries() {
  return (
    <Section id="industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Industries We Serve"
          title={<>Trusted Across <span className="text-gradient">Every Sector</span></>}
          description="From startups to enterprises, we deliver tailored technology and AI solutions for diverse industries."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">{industry}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
