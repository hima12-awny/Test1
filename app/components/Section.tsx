'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'gradient';
  id?: string;
}

const variantClasses = {
  light: 'bg-white',
  dark: 'bg-gray-900 text-white',
  gradient: 'bg-gradient-to-br from-blue-50/50 to-white',
};

export const Section = ({
  children,
  className = '',
  variant = 'light',
  id,
}: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`py-16 px-4 ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};
