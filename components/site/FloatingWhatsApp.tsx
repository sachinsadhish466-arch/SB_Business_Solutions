'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/content';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY.phoneRaw}?text=Hi%20SB%20Business%20Solutions%2C%20I%27d%20like%20a%20free%20consultation.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
