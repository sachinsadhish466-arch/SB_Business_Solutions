'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { CAREERS, INTERNSHIPS } from '@/lib/content';
import { Button } from '@/components/ui/button';

export default function Careers() {
  return (
    <Section id="careers" className="bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Careers"
          title={<>Join Our <span className="text-gradient">Mission</span></>}
          description="We're always looking for passionate people who want to build the future of digital business."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Openings */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <Briefcase className="h-5 w-5 text-primary" /> Current Openings
            </h3>
            <div className="space-y-3">
              {CAREERS.map((job, i) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground">{job.role}</h4>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{job.type}</span>
                      <span className="flex items-center gap-1 text-xs"><MapPin className="h-3 w-3" /> {job.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 text-secondary" /> Internships
            </h3>
            <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/5 to-accent/5 p-5">
              <p className="text-sm text-muted-foreground">
                Kickstart your career with hands-on experience in cutting-edge technology.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {INTERNSHIPS.map((role) => (
                  <span key={role} className="rounded-full border border-border/50 bg-card/40 px-3 py-1 text-xs font-medium text-foreground/80">
                    {role}
                  </span>
                ))}
              </div>
              <Button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-5 w-full bg-gradient-to-r from-secondary to-accent text-white"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
