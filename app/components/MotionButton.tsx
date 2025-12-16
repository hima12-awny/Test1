'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface MotionButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const variantClasses = {
  primary:
    'px-8 py-3 rounded-lg bg-[#2B9A9A] text-white font-semibold hover:bg-[#218282] shadow-lg',
  secondary:
    'px-8 py-3 rounded-lg border-2 border-[#2B9A9A] text-[#2B9A9A] font-semibold hover:bg-blue-50',
  ghost:
    'px-8 py-3 rounded-lg text-[#2B9A9A] font-semibold hover:bg-[#2B9A9A]/5',
};

export const MotionButton = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}: MotionButtonProps) => {
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const buttonVariants = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          scale: 1.05,
        },
        whileTap: {
          scale: 0.95,
        },
      };

  return (
    <motion.button
      className={`${variantClasses[variant]} transition-all ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
      {...buttonVariants}
    >
      {children}
    </motion.button>
  );
};
