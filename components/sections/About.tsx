'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { CORE_VALUES, COMPANY } from '@/lib/content';

export default function About() {
  return (
    <Section id="about" className="bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Us"
          title={<>A Modern <span className="text-gradient">Digital Transformation</span> & AI Company</>}
          description="We help businesses establish, grow, and scale through innovative technology and intelligent business strategies."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Empower businesses with affordable, intelligent, scalable, and innovative digital solutions that drive measurable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="gradient-border rounded-2xl p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              To become India&apos;s most trusted Digital Transformation and AI Solutions company, recognized for innovation and client success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="gradient-border rounded-2xl p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Our Promise</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Complete business transformation under one roof — combining AI, software, consulting, marketing, and analytics into one cohesive strategy.
            </p>
          </motion.div>
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-semibold text-foreground">Core Values</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border/50 bg-card/40 p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-primary/20 transition-colors group-hover:text-primary/40">
                    0{i + 1}
                  </span>
                  <h4 className="font-display text-base font-semibold text-foreground">{v.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-border/40 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-6 sm:p-8"
        >
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Our Leadership Team</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center rounded-xl border border-border/40 bg-card/40 p-4 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-display text-lg font-bold shadow-lg shadow-primary/20">
                  {member.name.charAt(0)}
                </div>
                <p className="mt-3 font-display text-sm font-semibold text-foreground">{member.name}</p>
                <p className="mt-0.5 text-xs font-medium text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm italic text-muted-foreground">&ldquo;{COMPANY.tagline}&rdquo;</p>
        </motion.div>
      </div>
    </Section>
  );
}
