'use client';

import { motion } from 'framer-motion';

export const Hero3D = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-[#2B9A9A]/20 to-blue-100/30 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
      <div className="text-center text-gray-600">
        <motion.div
          className="text-5xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎓
        </motion.div>
        <p className="text-lg font-semibold">Interactive Classroom</p>
        <p className="text-sm mt-2">Adaptive learning with AI-powered insights</p>
      </div>
    </div>
  );
};
