'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-white/15 transition-colors text-left"
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
      >
        <span className="font-semibold text-white">{question}</span>
        <motion.span
          className="text-[#2B9A9A] text-xl font-bold"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 border-t border-white/10 text-white/70 font-light leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};
