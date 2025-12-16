'use client';

import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const features = [
    {
      title: 'Adaptive Quizzes',
      description: 'Question difficulty adjusts in real time based on student answers.'
    },
    {
      title: 'Smart Reports',
      description: 'Visual dashboards show knowledge gaps, engagement trends, and at-risk students.'
    },
    {
      title: 'Cheating Detection',
      description: 'Automated detectors flag suspicious behavior during assessments.'
    },
    {
      title: 'Content Generation',
      description: 'Teachers can auto-generate summaries, lesson outlines, and extra practice.'
    },
    {
      title: 'Integration Ready',
      description: 'Works with existing LMS, single-sign-on, and school databases.'
    },
    {
      title: 'Secure & Scalable',
      description: 'Role-based access, encrypted data storage, GDPR-like privacy controls.'
    }
  ];

  const testimonials = [
    {
      quote: 'Azka cut grading time in half and made it clear which students needed help.',
      author: 'Ms. Fatma',
      role: 'Primary School Teacher'
    },
    {
      quote: 'My son improved his math score by two levels in one semester.',
      author: 'Parent',
      role: ''
    }
  ];

  const faqs = [
    {
      question: 'Is student data secure?',
      answer: 'Yes — role-based access, encrypted storage, and export controls ensure your data is protected.'
    },
    {
      question: 'Can we integrate with our existing system?',
      answer: 'Yes — Azka supports APIs and common LMS integrations; custom work is available for enterprise clients.'
    },
    {
      question: 'Do teachers need training?',
      answer: 'Minimal — in-app guides and onboarding webinars are included. Optional professional training packages are available.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#2B9A9A]">Azka</div>
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              <li><a href="#how-it-works" className="hover:text-[#2B9A9A] transition-colors">How it Works</a></li>
              <li><a href="#features" className="hover:text-[#2B9A9A] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#2B9A9A] transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-[#2B9A9A] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#2B9A9A] transition-colors">Contact</a></li>
            </ul>
            <button className="hidden md:block px-6 py-2 rounded-lg bg-[#2B9A9A] text-white font-medium hover:bg-[#218282] transition-colors">
              Get a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Learn smarter. Teach easier. Grow faster.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Azka uses AI to personalize lessons, detect learning gaps, and simplify school management — so teachers teach and students succeed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 rounded-lg bg-[#2B9A9A] text-white font-semibold hover:bg-[#218282] transition-colors shadow-lg hover:shadow-xl">
                  Get a Demo
                </button>
                <button className="px-8 py-3 rounded-lg border-2 border-[#2B9A9A] text-[#2B9A9A] font-semibold hover:bg-blue-50 transition-colors">
                  Explore Features
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Free demo • No credit card • 14-day trial
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2B9A9A]/10 to-blue-100/30 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-lg font-semibold">Dashboard Preview</p>
                <p className="text-sm mt-2">Interactive analytics & student insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Key Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#2B9A9A]/10 flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900">Personalized Learning</h3>
              <p className="text-gray-600">
                Adaptive quizzes and content that fit each student&apos;s level, ensuring everyone progresses at their own pace.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#2B9A9A]/10 flex items-center justify-center text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900">Teacher-first Tools</h3>
              <p className="text-gray-600">
                Auto-summaries, cheating detection, and gap reports so teachers spend time teaching, not grading.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#2B9A9A]/10 flex items-center justify-center text-2xl">
                🏫
              </div>
              <h3 className="text-xl font-bold text-gray-900">School-ready Management</h3>
              <p className="text-gray-600">
                Attendance, batch/section management, and reporting integrated with learning data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Onboard & Assess',
                description: 'Import classes or invite students — start with a baseline assessment.'
              },
              {
                step: 2,
                title: 'Personalize & Assign',
                description: 'Azka creates adaptive learning paths and recommended activities.'
              },
              {
                step: 3,
                title: 'Track & Intervene',
                description: 'Teachers get automated gap reports and suggested interventions.'
              }
            ].map((item) => (
              <div key={item.step} className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#2B9A9A] text-white font-bold text-2xl flex items-center justify-center mx-auto shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Powerful Features</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Everything you need to deliver personalized learning at scale
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-[#2B9A9A] hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Loved by Educators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                  {testimonial.role && <p className="text-sm text-gray-600">{testimonial.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                description: 'For single teachers',
                features: ['Baseline adaptive quizzes', 'Class analytics', 'Free or low-cost']
              },
              {
                name: 'School',
                description: 'Full school suite',
                features: ['Full teacher & admin suite', 'Integrations', 'Attendance & reporting'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                description: 'Custom solutions',
                features: ['Custom integrations', 'Advanced analytics', 'On-prem option', 'SLAs']
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border transition-all ${
                  tier.highlighted
                    ? 'border-[#2B9A9A] bg-gradient-to-br from-[#2B9A9A]/5 to-white shadow-xl scale-105'
                    : 'border-gray-200 hover:border-[#2B9A9A] hover:shadow-lg'
                }`}
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
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-[#2B9A9A] text-white hover:bg-[#218282]'
                      : 'border-2 border-[#2B9A9A] text-[#2B9A9A] hover:bg-blue-50'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-blue-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-[#2B9A9A] text-xl font-bold">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#2B9A9A] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your school?</h2>
          <p className="text-lg text-teal-100">
            See how Azka helps teachers teach better and students learn faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-white text-[#2B9A9A] font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Get a Demo
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Azka</h4>
              <p className="text-sm">Personalized AI-powered learning for schools.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">contact@azkaedu.com</p>
              <p className="text-sm">+20 1X XXX XXXX</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">© 2024 Azka. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
