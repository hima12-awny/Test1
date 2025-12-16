'use client';

import { motion } from 'framer-motion';
import { MotionButton } from './MotionButton';

export const PremiumCTA = () => {
  return (
    <motion.div
      className="relative py-24 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#2B9A9A]/20 via-blue-500/10 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Glassy backdrop */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 border-t border-b border-white/10" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience clarity in education.
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MotionButton
            variant="primary"
            className="bg-white text-[#2B9A9A] hover:bg-white/90 border-0"
          >
            Get a Demo
          </MotionButton>
          <MotionButton
            variant="secondary"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Talk to Us
          </MotionButton>
        </motion.div>
      </div>
    </motion.div>
  );
};
