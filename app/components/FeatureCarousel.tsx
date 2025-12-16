'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCarouselProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: '📚',
    title: 'Adaptive Learning',
    description: 'Paths that adjust to each student in real time.',
  },
  {
    icon: '🔍',
    title: 'Smart Detection',
    description: 'Identify learning gaps before they widen.',
  },
  {
    icon: '🛡️',
    title: 'Integrity Assurance',
    description: 'Confident assessments with automated oversight.',
  },
  {
    icon: '✨',
    title: 'Teacher Empowerment',
    description: 'AI tools that enhance, never replace.',
  },
];

export const FeatureCarousel = ({ features = defaultFeatures }: FeatureCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full py-16">
      <motion.div
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8"
        ref={scrollRef}
        onScroll={handleScroll}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-80 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 space-y-4 hover:bg-white/15 transition-colors"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicators */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white"
          aria-label="Scroll left"
        >
          ← 
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white"
          aria-label="Scroll right"
        >
          →
        </button>
      )}
    </div>
  );
};
