'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const el = e.target as HTMLElement;
      setHovering(!!el.closest('a, button, [role="button"], input, textarea, select, label'));
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="pointer-events-none fixed z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
            animate={{ x: pos.x, y: pos.y, scale: hovering ? 1.6 : 1 }}
            transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.3 }}
          />
          <motion.div
            className="pointer-events-none fixed z-[99] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 md:block"
            animate={{ x: pos.x, y: pos.y, width: hovering ? 48 : 32, height: hovering ? 48 : 32 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.4 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
