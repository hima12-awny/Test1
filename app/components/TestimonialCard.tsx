'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  icon: string;
  index: number;
}

export const TestimonialCard = ({ quote, author, role, icon, index }: TestimonialCardProps) => {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.15)' }}
    >
      <div className="text-4xl">{icon}</div>
      <blockquote className="text-white/90 italic font-light leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </motion.div>
  );
};
