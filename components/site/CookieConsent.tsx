'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const dismissed = localStorage.getItem('sb-cookie-consent');
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);
  const dismiss = () => {
    localStorage.setItem('sb-cookie-consent', '1');
    setShow(false);
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2"
        >
          <div className="glass-strong flex flex-col gap-3 rounded-2xl p-4 shadow-xl sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/80">
              We use cookies to enhance your browsing experience and analyze site traffic. By continuing, you agree to our use of cookies.
            </p>
            <div className="flex shrink-0 gap-2">
              <Button size="sm" onClick={dismiss} className="bg-gradient-to-r from-primary to-secondary text-white">
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
