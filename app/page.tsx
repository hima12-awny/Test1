'use client';

import { motion } from 'framer-motion';
import { GlassPanel } from './components/GlassPanel';
import { AudienceToggle } from './components/AudienceToggle';
import { ScrollIndicator } from './components/ScrollIndicator';
import { FeatureCarousel } from './components/FeatureCarousel';
import { PremiumCTA } from './components/PremiumCTA';

export default function Home() {
  // Generate stable random values per component instance
  const getStableRandoms = (seed: number) => {
    const random1 = Math.sin(seed) * 100;
    const random2 = Math.sin(seed * 2) * 80;
    const random3 = Math.sin(seed * 3) * 120;
    return { random1: Math.abs(random1) % 100, random2: Math.abs(random2) % 80, random3: Math.abs(random3) % 120 };
  };

  const valueProps = [
    { title: 'Personalize', icon: '🎯' },
    { title: 'Measure', icon: '📊' },
    { title: 'Improve', icon: '📈' },
  ];

  const statements = [
    'Every student learns differently.',
    'Teachers need clarity, not more work.',
    'Schools need insight, not noise.',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Minimal Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-black/20 border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="text-2xl font-bold text-[#2B9A9A]" whileHover={{ scale: 1.05 }}>
          Azka
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-light">
          <a href="#features" className="hover:text-[#2B9A9A] transition-colors">
            Features
          </a>
          <a href="#contact" className="hover:text-[#2B9A9A] transition-colors">
            Contact
          </a>
        </div>
      </motion.nav>

      {/* Section 1: Immersive Brand Intro */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(600px at 50% 50%, rgba(43, 154, 154, 0.2) 0%, transparent 80%)',
              'radial-gradient(600px at 60% 40%, rgba(43, 154, 154, 0.2) 0%, transparent 80%)',
              'radial-gradient(600px at 40% 60%, rgba(43, 154, 154, 0.2) 0%, transparent 80%)',
              'radial-gradient(600px at 50% 50%, rgba(43, 154, 154, 0.2) 0%, transparent 80%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 text-center space-y-8">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#2B9A9A] to-cyan-400 bg-clip-text text-transparent">
              Azka
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-powered learning.
            <br />
            <span className="text-[#2B9A9A]">Designed for clarity.</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-lg font-light max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform education through insight, not complexity.
          </motion.p>
        </div>

        <ScrollIndicator />
      </section>

      {/* Section 2: Split Reality */}
      <section className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Glass Statements */}
          <motion.div className="space-y-6">
            {statements.map((statement, idx) => (
              <GlassPanel key={idx} delay={idx * 0.1}>
                <p className="text-xl font-light text-white/90">{statement}</p>
              </GlassPanel>
            ))}
          </motion.div>

          {/* Right: Floating Shards */}
          <motion.div className="relative h-96 hidden md:block">
            {['Learning', 'Assessment', 'Insight'].map((label, idx) => {
              const randoms = getStableRandoms(idx + 1);
              return (
                <motion.div
                  key={idx}
                  className="absolute backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 w-48"
                  initial={{
                    x: (idx - 1) * 120,
                    y: randoms.random1,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: (idx - 1) * 80,
                    y: randoms.random2,
                    opacity: 1,
                  }}
                  animate={{
                    y: [randoms.random2, randoms.random3, randoms.random2],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-2">{['📚', '✅', '💡'][idx]}</div>
                  <p className="text-white/70 font-light">{label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Core Value Reveal */}
      <section className="relative min-h-screen py-24 px-4 flex items-center justify-center">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Azka turns data into understanding.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {valueProps.map((prop, idx) => (
              <motion.button
                key={idx}
                className="relative w-32 h-32 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-2 hover:bg-white/20 transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-4xl">{prop.icon}</span>
                <span className="text-sm font-semibold group-hover:text-[#2B9A9A]">{prop.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Section 4: Feature Experience */}
      <section id="features" className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Designed for every role.
          </motion.h2>
          <FeatureCarousel />
        </div>
      </section>

      {/* Section 5: Audience Toggle */}
      <section className="relative min-h-screen py-24 px-4 flex items-center justify-center">
        <motion.div
          className="max-w-3xl mx-auto w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AudienceToggle />
        </motion.div>
      </section>

      {/* Section 6: Trust & Intelligence */}
      <section className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built on evidence.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                label: 'Real Classrooms',
                value: '500+',
              },
              {
                icon: '👥',
                label: 'Active Learners',
                value: '50K+',
              },
              {
                icon: '✅',
                label: 'Success Rate',
                value: '94%',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#2B9A9A]">{stat.value}</div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-white/60 mt-12 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Built with real classrooms in mind. Designed by engineers who understand education.
          </motion.p>
        </div>
      </section>

      {/* Section 7: Premium CTA */}
      <section className="relative">
        <PremiumCTA />
      </section>

      {/* Section 8: Footer */}
      <footer id="contact" className="relative border-t border-white/10 py-12 px-4">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 font-light">© 2024 Azka Education Platform</p>
          <div className="flex gap-8 text-white/50 font-light">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms
            </a>
            <a href="mailto:contact@azkaedu.com" className="hover:text-white/80 transition-colors">
              contact@azkaedu.com
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
