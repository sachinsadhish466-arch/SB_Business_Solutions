'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/content';

const socialIcons: Record<string, typeof Facebook> = {
  Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube,
};

const serviceLinks = SERVICES.map((s) => s.title).concat(['AI Chatbots', 'AI Agents', 'Digital Marketing', 'SEO Services']);

export default function Footer() {
  const handleNav = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-card/30">
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-lg shadow-primary/30">
                <span className="font-display text-lg font-bold">SB</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold text-foreground">SB Business</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Solutions</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {COMPANY.tagline} Your trusted partner for AI-powered digital transformation, software, and business consulting.
            </p>
            <div className="mt-5 flex gap-2">
              {COMPANY.socials.map((s) => {
                const Icon = socialIcons[s.name] ?? ArrowRight;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.slice(0, 8).map((l) => (
                <li key={l.href}>
                  <button onClick={() => handleNav(l.href)} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.slice(0, 8).map((s) => (
                <li key={s}>
                  <button onClick={() => handleNav('#services')} className="text-left text-sm text-muted-foreground transition-colors hover:text-primary">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Chennai, Tamil Nadu, India
              </li>
            </ul>
            <div className="mt-4 rounded-lg border border-border/40 bg-card/40 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Leadership Team</p>
              <div className="mt-1.5 space-y-0.5">
                {COMPANY.leadership.map((member) => (
                  <p key={member.name} className="text-sm text-foreground">
                    <span className="font-medium">{member.name}</span>
                    <span className="text-muted-foreground"> — {member.role}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
