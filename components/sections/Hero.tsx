'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY, HERO_TECH_ICONS } from '@/lib/content';

const TYPING_WORDS = ['AI Solutions', 'Digital Innovation', 'Intelligent Automation', 'Business Consulting', 'Web & Mobile Apps'];

function useTyping(words: string[], typingSpeed = 90, deletingSpeed = 45, pause = 1600) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(TYPING_WORDS);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade animate-grid-pan opacity-60" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[12%] top-[15%] h-80 w-80 animate-blob rounded-full bg-secondary/20 blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 animate-blob rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: '8s' }} />
      </div>

      {/* Floating tech icons */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        {HERO_TECH_ICONS.map((item, i) => {
          const positions = [
            { top: '18%', left: '8%' }, { top: '28%', left: '86%' }, { top: '52%', left: '4%' },
            { top: '68%', left: '90%' }, { top: '14%', left: '42%' }, { top: '76%', left: '48%' },
            { top: '40%', left: '92%' }, { top: '60%', left: '10%' }, { top: '22%', left: '68%' },
            { top: '82%', left: '24%' }, { top: '34%', left: '26%' }, { top: '48%', left: '72%' },
          ];
          const p = positions[i % positions.length];
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="absolute flex flex-col items-center gap-1"
              style={{ top: p.top, left: p.left }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.12, type: 'spring', stiffness: 120, damping: 14 }}
            >
              <div className="animate-float glass flex h-12 w-12 items-center justify-center rounded-xl text-primary shadow-lg" style={{ animationDelay: `${item.delay}s` }}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="whitespace-nowrap text-[10px] font-medium text-muted-foreground/70">{item.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Particle dots */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {COMPANY.altTagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Empowering Businesses Through
          <br className="hidden sm:block" />
          <span className="block sm:inline"> AI, </span>
          <span className="text-gradient">{typed}</span>
          <span className="ml-0.5 inline-block h-[0.9em] w-[3px] animate-pulse bg-primary align-middle" />
          <span className="block sm:inline"> & Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {COMPANY.name} helps businesses transform digitally through AI-powered solutions, intelligent automation,
          websites, mobile applications, digital marketing, analytics, and strategic business consulting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('#contact')}
            className="group w-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo('#services')}
            className="w-full border-border/60 bg-card/50 backdrop-blur-md hover:border-primary/50 hover:text-primary sm:w-auto"
          >
            Explore Our Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /> 100+ Projects Delivered</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> 50+ Happy Clients</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> 24/7 Support</span>
          <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-1.5 font-medium text-primary hover:underline">
            <Phone className="h-3 w-3" /> {COMPANY.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
