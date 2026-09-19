'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/content';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((l) => l.href);
      const offset = window.innerHeight * 0.4;
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActive(id);
            break;
          }
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <button onClick={() => handleNav('#home')} className="group flex items-center gap-2.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-lg shadow-primary/30">
            <span className="font-display text-lg font-bold">SB</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent opacity-0 blur-md transition-opacity group-hover:opacity-60" />
          </div>
          <div className="text-left leading-tight">
            <div className="font-display text-sm font-bold tracking-tight text-foreground">SB Business</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Solutions</div>
          </div>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span layoutId="nav-active" className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="hidden items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary xl:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {COMPANY.phone}
          </a>
          <Button
            size="sm"
            onClick={() => handleNav('#contact')}
            className="hidden bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 sm:flex"
          >
            Free Consultation
          </Button>
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/50 text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/40 glass-strong lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    active === link.href ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="col-span-2 mt-2 flex flex-col gap-2 border-t border-border/40 pt-3">
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80">
                  <Phone className="h-4 w-4 text-primary" /> {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80">
                  <Mail className="h-4 w-4 text-primary" /> {COMPANY.email}
                </a>
                <Button onClick={() => handleNav('#contact')} className="mt-1 bg-gradient-to-r from-primary to-secondary text-white">
                  Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
