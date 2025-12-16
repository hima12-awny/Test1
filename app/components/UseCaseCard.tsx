'use client';

import { motion } from 'framer-motion';

interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

export const UseCaseCard = ({ icon, title, description, benefits, index }: UseCaseCardProps) => {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 space-y-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)', x: 4 }}
    >
      <div className="text-5xl">{icon}</div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-white/70 font-light">{description}</p>
      <ul className="space-y-2 pt-2">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white/60 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B9A9A]" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
