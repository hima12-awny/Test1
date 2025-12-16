'use client';

import { motion } from 'framer-motion';
import { GlassPanel } from './components/GlassPanel';
import { AudienceToggle } from './components/AudienceToggle';
import { ScrollIndicator } from './components/ScrollIndicator';
import { FeatureCarousel } from './components/FeatureCarousel';
import { PremiumCTA } from './components/PremiumCTA';
import { TestimonialCard } from './components/TestimonialCard';
import { PricingCard } from './components/PricingCard';
import { FAQItem } from './components/FAQItem';
import { StatCard } from './components/StatCard';
import { UseCaseCard } from './components/UseCaseCard';

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
          <a href="#pricing" className="hover:text-[#2B9A9A] transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-[#2B9A9A] transition-colors">
            FAQ
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

      {/* Section 7: Real Impact (Testimonials) */}
      <section className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Educators and students speak.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: 'I can now identify struggling students within days instead of weeks. It changed how I teach.',
                author: 'Sarah Chen',
                role: 'High School Math Teacher',
                icon: '💡',
              },
              {
                quote: 'Learning at my own pace finally made sense. I actually understand what we&rsquo;re studying.',
                author: 'Marcus',
                role: 'Grade 9 Student',
                icon: '🚀',
              },
              {
                quote: 'Azka gave us visibility into our entire school&rsquo;s learning outcomes. Unprecedented.',
                author: 'Dr. Patel',
                role: 'School Principal',
                icon: '🎯',
              },
              {
                quote: 'My daughter&rsquo;s confidence in STEM skyrocketed. The personalized approach works.',
                author: 'James W.',
                role: 'Parent',
                icon: '⭐',
              },
            ].map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                icon={testimonial.icon}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Use Cases */}
      <section className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Works for any learning context.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🏫',
                title: 'Traditional Schools',
                description: 'Enhance classroom learning with adaptive personalization.',
                benefits: ['Differentiated instruction', 'Real-time progress tracking', 'Teacher guidance'],
              },
              {
                icon: '💻',
                title: 'Online Learning',
                description: 'Scale personalized education across digital platforms.',
                benefits: ['Scalable infrastructure', 'Self-paced modules', 'Community insights'],
              },
              {
                icon: '🌍',
                title: 'Hybrid Programs',
                description: 'Seamlessly blend in-person and remote instruction.',
                benefits: ['Consistent experience', 'Flexible scheduling', 'Unified analytics'],
              },
              {
                icon: '🚀',
                title: 'Educational Tech',
                description: 'Integrate Azka into existing EdTech ecosystems.',
                benefits: ['API integration', 'LMS compatibility', 'Data portability'],
              },
            ].map((useCase, idx) => (
              <UseCaseCard
                key={idx}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                benefits={useCase.benefits}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Detailed Impact */}
      <section id="impact" className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Measurable impact. Real results.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                value: '3.2x',
                label: 'Faster Issue Detection',
                description: 'Identify learning gaps before they become problems.',
                icon: '⚡',
              },
              {
                value: '47%',
                label: 'Less Grading Time',
                description: 'Automate assessment workflows for teachers.',
                icon: '⏱️',
              },
              {
                value: '89%',
                label: 'Student Engagement',
                description: 'Boost completion rates with adaptive pathways.',
                icon: '🎯',
              },
              {
                value: '2.5',
                label: 'Grade Improvement',
                description: 'Average improvement in standardized scores.',
                icon: '📈',
              },
              {
                value: '100%',
                label: 'Data Security',
                description: 'GDPR-compliant, encrypted, role-based access.',
                icon: '🔒',
              },
              {
                value: '24/7',
                label: 'Support Available',
                description: 'Responsive support team for your success.',
                icon: '🤝',
              },
            ].map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                icon={stat.icon}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Pricing */}
      <section id="pricing" className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transparent pricing.
          </motion.h2>
          <motion.p
            className="text-center text-white/60 mb-16 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Choose the plan that fits your needs. No hidden fees.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                description: 'For individual educators',
                features: ['Up to 100 students', 'Basic analytics', 'Email support', 'Adaptive quizzes'],
              },
              {
                name: 'Professional',
                description: 'For schools and districts',
                features: ['Unlimited students', 'Advanced analytics', 'Priority support', 'API access', 'Custom branding', 'SSO integration'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                description: 'For large organizations',
                features: ['Dedicated account manager', 'Custom integration', 'On-premises option', 'Advanced security', 'SLA guarantee', 'Training included'],
              },
            ].map((plan, idx) => (
              <PricingCard
                key={idx}
                name={plan.name}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section id="faq" className="relative min-h-screen py-24 px-4 md:px-12 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently asked questions.
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                question: 'How long does it take to see results?',
                answer: 'Most educators see significant insights within the first 2-3 weeks. Students typically report noticeable personalization within the first 10-15 learning sessions. Full impact is usually visible after one semester.',
              },
              {
                question: 'Is student data secure and private?',
                answer: 'Yes. We use enterprise-grade encryption, comply with GDPR and FERPA, and implement strict role-based access controls. Student data is never sold or shared with third parties. We conduct regular security audits.',
              },
              {
                question: 'Can we integrate Azka with our existing systems?',
                answer: 'Absolutely. We support LMS integration (Canvas, Blackboard, Moodle), single sign-on (SSO), and REST APIs for custom integrations. Our technical team can help with implementation.',
              },
              {
                question: 'What training do teachers need?',
                answer: 'Minimal. We provide in-app guidance, video tutorials, and optional live onboarding sessions. Most teachers are productive within a few hours. Advanced training is available for power users.',
              },
              {
                question: 'How much does it cost?',
                answer: 'Pricing starts at a low per-teacher cost for individual educators and scales based on district size. We offer flexible billing (per-student or per-teacher) and volume discounts. Contact us for a custom quote.',
              },
              {
                question: 'Do you offer a free trial?',
                answer: 'Yes! We offer a 30-day free trial for qualified schools and educators. No credit card required. You get access to all Professional features during the trial.',
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Premium CTA */}
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
