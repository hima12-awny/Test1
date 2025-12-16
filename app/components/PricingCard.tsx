'use client';

import { motion } from 'framer-motion';

interface PricingCardProps {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  index: number;
}

export const PricingCard = ({
  name,
  description,
  features,
  highlighted = false,
  index,
}: PricingCardProps) => {
  return (
    <motion.div
      className={`relative backdrop-blur-md border rounded-2xl p-8 space-y-6 transition-all ${
        highlighted
          ? 'bg-gradient-to-br from-[#2B9A9A]/30 to-white/10 border-[#2B9A9A] scale-105'
          : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {highlighted && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2B9A9A] text-white px-4 py-1 rounded-full text-sm font-semibold"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          Most Popular
        </motion.div>
      )}

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-white/60 font-light">{description}</p>
      </div>

      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-white/80 font-light">
            <span className="text-[#2B9A9A] font-bold mt-0.5">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <motion.button
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          highlighted
            ? 'bg-[#2B9A9A] text-white hover:bg-[#1f7a7a]'
            : 'border border-white/30 text-white hover:bg-white/20'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};
