'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  icon: string;
  index: number;
}

export const StatCard = ({ value, label, description, icon, index }: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 space-y-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(43,154,154,0.5)' }}
    >
      <motion.div
        className="text-5xl"
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <div>
        <motion.div className="text-4xl font-bold text-[#2B9A9A] mb-2">{value}</motion.div>
        <h3 className="text-lg font-semibold text-white">{label}</h3>
      </div>
      <p className="text-white/60 font-light text-sm">{description}</p>
    </motion.div>
  );
};
