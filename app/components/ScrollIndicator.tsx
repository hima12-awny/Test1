'use client';

import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-white/50 text-sm font-light">Scroll to explore</span>
      <div className="w-px h-8 bg-gradient-to-b from-white/80 to-white/0" />
    </motion.div>
  );
};
