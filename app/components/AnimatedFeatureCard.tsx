'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export const AnimatedFeatureCard = ({
  title,
  description,
  icon,
  index,
}: AnimatedFeatureCardProps) => {
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      };

  const hoverVariants = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          y: -8,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        },
      };

  return (
    <motion.div
      className="p-6 rounded-xl border border-gray-200 hover:border-[#2B9A9A] transition-colors bg-white"
      {...containerVariants}
      {...hoverVariants}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="text-4xl mb-4"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }
        }
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
