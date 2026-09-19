'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/site/Section';
import { COMPANY } from '@/lib/content';
import ContactForm from './ContactForm';

export default function Contact() {
  const contactItems = [
    { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: 'https://maps.google.com/?q=Chennai,Tamil+Nadu,India' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat, 9:00 AM - 7:00 PM', href: null },
  ];

  return (
    <Section id="contact" className="relative overflow-hidden bg-card/20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[10%] h-72 w-72 animate-blob rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[15%] h-80 w-80 animate-blob rounded-full bg-secondary/10 blur-3xl" style={{ animationDelay: '5s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact Us"
          title={<>Let&apos;s Build Your <span className="text-gradient">Digital Future</span></>}
          description="Get a free consultation today. Tell us about your goals and we'll recommend the right solutions."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">Get in Touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out through any channel below. We respond within 24 hours.
              </p>
              <div className="mt-5 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/40 p-3 transition-colors hover:border-primary/40">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</div>
                        <div className="truncate text-sm font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp + Directors */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=Hi%20SB%20Business%20Solutions%2C%20I%27d%20like%20a%20free%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 transition-all hover:border-[#25D366]/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">WhatsApp Chat</div>
                  <div className="text-xs text-muted-foreground">Chat with us instantly</div>
                </div>
              </a>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Leadership</div>
                    <div className="space-y-0.5">
                      {COMPANY.leadership.map((m) => (
                        <div key={m.name} className="text-sm font-medium text-foreground">
                          {m.name} <span className="text-muted-foreground">— {m.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-border/50">
              <iframe
                title="SB Business Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124406.47342849327!2d80.12773973046873!3d13.041352800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d2863%3A0x6e9421b1d4d0b65e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/50 bg-card/40 p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
