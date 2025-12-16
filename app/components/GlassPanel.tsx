'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassPanel = ({ children, className = '', delay = 0 }: GlassPanelProps) => {
  return (
    <motion.div
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
