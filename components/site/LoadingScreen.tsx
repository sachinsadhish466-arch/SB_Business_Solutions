'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 animate-orbit rounded-full border-2 border-primary/20 border-t-primary" />
              <div className="absolute inset-2 animate-orbit rounded-full border-2 border-secondary/20 border-t-secondary" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white font-display text-lg font-bold shadow-lg">
                SB
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="font-display text-sm font-bold tracking-wide text-foreground">SB Business Solutions</div>
              <div className="mt-1 text-xs text-muted-foreground">Innovating Today. Empowering Tomorrow.</div>
            </motion.div>
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-border">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
