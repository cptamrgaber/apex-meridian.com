import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function AGISolutionsPage() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24 overflow-hidden">
        <Image
          src="/assets/agi-hero.jpg"
          alt="AGI background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <a 
                href="https://apex-meridian.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
                title="Visit Apex-Meridian AI LLM & Agent Platform"
              >
                <Image
                  src="/assets/Apex-Meridian_tree_drowing.png"
                  alt="Apex-Meridian AGI Tree of Knowledge - Click to visit AI Platform"
                  width={600}
                  height={600}
                  className="h-60 w-60 object-contain"
                />
              </a>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Artificial General Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-light-muted dark:text-purple-200 max-w-4xl mx-auto mb-8">
              Pioneering the next frontier of AI with ethical, safe, and beneficial AGI development that augments human intelligence and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-light-bg hover:bg-light-muted transition-colors"
              >
                Explore AGI Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* AGI Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              The Future of Intelligence
            </h2>
            <p className="text-xl text-light-muted dark:text-dark-muted max-w-3xl mx-auto">
              Our AGI research focuses on creating artificial intelligence that can understand, learn, and apply knowledge across diverse domains while maintaining human values and ethical principles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">Our AGI Philosophy</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Human-Aligned Intelligence</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      Developing AGI systems that understand and align with human values, ensuring beneficial outcomes for all of humanity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Safety-First Approach</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      Implementing robust safety measures and ethical frameworks to ensure AGI development remains controllable and beneficial.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Collaborative Intelligence</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      Creating AGI that enhances human capabilities rather than replacing them, fostering human-AI collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-light-surface dark:bg-dark-surface rounded-lg p-8">
                <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">AGI Research Areas</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Multi-modal reasoning and understanding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Continual learning and adaptation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Ethical decision-making frameworks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Human-AI interaction protocols</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Interpretable AI systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-16 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">AGI Research Pillars</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted">
              Our comprehensive approach to developing safe and beneficial artificial general intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg p-6">
              <div className="bg-light-muted dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Cognitive Architecture</h3>
              <p className="text-light-muted dark:text-dark-muted mb-4">
                Developing advanced cognitive architectures that can reason, learn, and adapt across multiple domains with human-like flexibility.
              </p>
              <ul className="text-sm text-light-muted dark:text-dark-muted space-y-1">
                <li>• Neural-symbolic integration</li>
                <li>• Memory and attention systems</li>
                <li>• Meta-learning capabilities</li>
              </ul>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg p-6">
              <div className="bg-light-muted dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Emergent Intelligence</h3>
              <p className="text-light-muted dark:text-dark-muted mb-4">
                Researching how complex intelligent behaviors can emerge from simpler components and interactions.
              </p>
              <ul className="text-sm text-light-muted dark:text-dark-muted space-y-1">
                <li>• Self-organizing systems</li>
                <li>• Emergent problem-solving</li>
                <li>• Adaptive behavior patterns</li>
              </ul>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg p-6">
              <div className="bg-light-muted dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">AI Safety & Ethics</h3>
              <p className="text-light-muted dark:text-dark-muted mb-4">
                Ensuring AGI systems remain aligned with human values and operate safely in complex real-world environments.
              </p>
              <ul className="text-sm text-light-muted dark:text-dark-muted space-y-1">
                <li>• Value alignment research</li>
                <li>• Robustness testing</li>
                <li>• Ethical decision frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">AGI Development Roadmap</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted">
              Our phased approach to achieving safe and beneficial artificial general intelligence
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">Foundation Models (2024-2025)</h3>
                <p className="text-light-muted dark:text-dark-muted">
                  Developing robust foundation models with enhanced reasoning capabilities and multi-modal understanding.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">Cognitive Integration (2025-2027)</h3>
                <p className="text-light-muted dark:text-dark-muted">
                  Integrating cognitive architectures with advanced learning systems for more flexible and adaptable AI.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">AGI Emergence (2027-2030)</h3>
                <p className="text-light-muted dark:text-dark-muted">
                  Achieving artificial general intelligence with human-level performance across diverse cognitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-dark-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the AGI Revolution</h2>
          <p className="text-xl text-light-muted dark:text-purple-200 mb-8 max-w-3xl mx-auto">
            Be part of the most important technological advancement in human history. Partner with us to shape the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-light-bg hover:bg-light-muted transition-colors"
            >
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about/careers"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-mediumborder-dark-border text-dark-text hover:bg-dark-bg hover:text-purple-900transition-colors"
            >
              Join Our Research Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
