'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Audience = 'teacher' | 'student' | 'school';

interface AudienceToggleProps {
  onToggle?: (audience: Audience) => void;
}

interface AudienceContent {
  title: string;
  description: string;
}

const audienceContent: Record<Audience, AudienceContent> = {
  teacher: {
    title: 'See who needs help before they ask.',
    description: 'Automated gap detection and intelligent intervention suggestions help you focus on what matters: teaching.',
  },
  student: {
    title: 'Learn at your pace, not the class pace.',
    description: 'Personalized learning paths adapt to your strengths and challenges in real time.',
  },
  school: {
    title: 'One system. Total visibility.',
    description: 'Centralized management with deep insights into student progress, teacher performance, and school-wide outcomes.',
  },
};

export const AudienceToggle = ({ onToggle }: AudienceToggleProps) => {
  const [selected, setSelected] = useState<Audience>('teacher');

  const handleToggle = (audience: Audience) => {
    setSelected(audience);
    onToggle?.(audience);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 justify-center">
        {(['teacher', 'student', 'school'] as const).map((audience) => (
          <motion.button
            key={audience}
            onClick={() => handleToggle(audience)}
            className={`px-6 py-3 rounded-full font-semibold transition-all backdrop-blur-md border ${
              selected === audience
                ? 'bg-[#2B9A9A]/30 border-[#2B9A9A] text-[#2B9A9A]'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {audience.charAt(0).toUpperCase() + audience.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={selected}
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-3xl font-bold text-white">{audienceContent[selected].title}</h3>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">{audienceContent[selected].description}</p>
      </motion.div>
    </div>
  );
};
