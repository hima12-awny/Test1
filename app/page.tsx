'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { AnimatedFeatureCard } from './components/AnimatedFeatureCard';
import { MotionButton } from './components/MotionButton';
import { Section } from './components/Section';

const Hero3D = dynamic(() => import('./components/Hero3D').then((mod) => ({ default: mod.Hero3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-[#2B9A9A]/10 to-blue-100/30 rounded-2xl animate-pulse" />
  ),
});

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      title: 'Adaptive Quizzes',
      description: 'Question difficulty adjusts in real time based on student answers.',
      icon: '📊',
    },
    {
      title: 'Smart Reports',
      description: 'Visual dashboards show knowledge gaps, engagement trends, and at-risk students.',
      icon: '📈',
    },
    {
      title: 'Cheating Detection',
      description: 'Automated detectors flag suspicious behavior during assessments.',
      icon: '🛡️',
    },
    {
      title: 'Content Generation',
      description: 'Teachers can auto-generate summaries, lesson outlines, and extra practice.',
      icon: '✍️',
    },
    {
      title: 'Integration Ready',
      description: 'Works with existing LMS, single-sign-on, and school databases.',
      icon: '🔗',
    },
    {
      title: 'Secure & Scalable',
      description: 'Role-based access, encrypted data storage, GDPR-like privacy controls.',
      icon: '🔐',
    },
  ];

  const testimonials = [
    {
      quote: 'Azka cut grading time in half and made it clear which students needed help.',
      author: 'Ms. Fatma',
      role: 'Primary School Teacher',
    },
    {
      quote: 'My son improved his math score by two levels in one semester.',
      author: 'Parent',
      role: '',
    },
  ];

  const faqs = [
    {
      question: 'Is student data secure?',
      answer: 'Yes — role-based access, encrypted storage, and export controls ensure your data is protected.',
    },
    {
      question: 'Can we integrate with our existing system?',
      answer: 'Yes — Azka supports APIs and common LMS integrations; custom work is available for enterprise clients.',
    },
    {
      question: 'Do teachers need training?',
      answer: 'Minimal — in-app guides and onboarding webinars are included. Optional professional training packages are available.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-2xl font-bold text-[#2B9A9A]" whileHover={{ scale: 1.05 }}>
              Azka
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              {['How it Works', 'Features', 'Pricing', 'FAQ', 'Contact'].map((item, idx) => (
                <motion.li key={idx} whileHover={{ color: '#2B9A9A' }}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <MotionButton variant="primary" className="hidden md:block">
              Get a Demo
            </MotionButton>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden mt-4 border-t border-gray-200 pt-4"
          >
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              {['How it Works', 'Features', 'Pricing', 'FAQ', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#2B9A9A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Learn smarter. Teach easier. Grow faster.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Azka uses AI to personalize lessons, detect learning gaps, and simplify school management — so teachers teach and students succeed.
                </p>
              </motion.div>
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <MotionButton variant="primary">Get a Demo</MotionButton>
                <MotionButton variant="secondary">Explore Features</MotionButton>
              </motion.div>
              <motion.p className="text-sm text-gray-500" variants={itemVariants}>
                Free demo • No credit card • 14-day trial
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Hero3D />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Three Key Benefits */}
      <Section variant="light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🎯',
                title: 'Personalized Learning',
                desc: "Adaptive quizzes and content that fit each student's level, ensuring everyone progresses at their own pace.",
              },
              {
                icon: '⚡',
                title: 'Teacher-first Tools',
                desc: 'Auto-summaries, cheating detection, and gap reports so teachers spend time teaching, not grading.',
              },
              {
                icon: '🏫',
                title: 'School-ready Management',
                desc: 'Attendance, batch/section management, and reporting integrated with learning data.',
              },
            ].map((benefit, idx) => (
              <motion.div key={idx} className="space-y-4" variants={itemVariants}>
                <motion.div
                  className="w-12 h-12 rounded-lg bg-[#2B9A9A]/10 flex items-center justify-center text-2xl"
                  whileHover={{ scale: 1.1, backgroundColor: '#2B9A9A' }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" variant="gradient">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: 1, title: 'Onboard & Assess', desc: 'Import classes or invite students — start with a baseline assessment.' },
              { step: 2, title: 'Personalize & Assign', desc: 'Azka creates adaptive learning paths and recommended activities.' },
              { step: 3, title: 'Track & Intervene', desc: 'Teachers get automated gap reports and suggested interventions.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                className="space-y-4 text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#2B9A9A] text-white font-bold text-2xl flex items-center justify-center mx-auto shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" variant="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Features
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Everything you need to deliver personalized learning at scale
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedFeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="gradient">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Loved by Educators
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                  {testimonial.role && <p className="text-sm text-gray-600">{testimonial.role}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" variant="light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple Pricing
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Starter',
                description: 'For single teachers',
                features: ['Baseline adaptive quizzes', 'Class analytics', 'Free or low-cost'],
              },
              {
                name: 'School',
                description: 'Full school suite',
                features: ['Full teacher & admin suite', 'Integrations', 'Attendance & reporting'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                description: 'Custom solutions',
                features: ['Custom integrations', 'Advanced analytics', 'On-prem option', 'SLAs'],
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-8 border transition-all ${
                  tier.highlighted
                    ? 'border-[#2B9A9A] bg-gradient-to-br from-[#2B9A9A]/5 to-white shadow-xl'
                    : 'border-gray-200'
                }`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
                style={tier.highlighted ? { scale: 1.05 } : {}}
              >
                {tier.highlighted && (
                  <div className="text-sm font-semibold text-[#2B9A9A] mb-4">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#2B9A9A] font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <MotionButton
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full text-center block"
                >
                  Get Started
                </MotionButton>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" variant="gradient">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-[#2B9A9A] focus:ring-offset-2"
                  aria-expanded={expandedFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.span
                    className="text-[#2B9A9A] text-xl font-bold"
                    animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{ height: expandedFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-[#2B9A9A] to-teal-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 className="text-3xl md:text-4xl font-bold">
            Ready to transform your school?
          </motion.h2>
          <motion.p className="text-lg text-teal-100">
            See how Azka helps teachers teach better and students learn faster.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <MotionButton variant="primary" className="bg-white text-[#2B9A9A] hover:bg-gray-100">
                Get a Demo
              </MotionButton>
            </motion.div>
            <motion.div variants={itemVariants}>
              <MotionButton variant="ghost" className="border-2 border-white text-white hover:bg-white/10">
                Start Free Trial
              </MotionButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h4 className="text-white font-bold mb-4">Azka</h4>
              <p className="text-sm">Personalized AI-powered learning for schools.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">contact@azkaedu.com</p>
              <p className="text-sm">+20 1X XXX XXXX</p>
            </motion.div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">© 2024 Azka. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
