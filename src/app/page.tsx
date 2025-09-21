'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, BookOpen, Brain, Users, TrendingUp } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function HomePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/assets/logo_white.png"
              alt="Apex-Meridian Logo"
              width={80}
              height={80}
              className="h-20 w-auto mr-6"
            />
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Apex-Meridian
            </h1>
          </div>
          <p className="mt-6 text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Pioneering the Future of Artificial Intelligence
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
            Advanced AI solutions transforming aviation, cybersecurity, education, and AGI development. 
            Join us in shaping tomorrow&apos;s intelligent world.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 sm:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Solutions Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming complex challenges into intelligent opportunities with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aviation AI</h3>
              <p className="text-gray-600 mb-4">
                Intelligent flight operations, passenger experience optimization, and safety compliance automation.
              </p>
              <Link href="/solutions/aviation" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Advanced threat detection, automated incident response, and predictive risk management.
              </p>
              <Link href="/solutions/cybersecurity" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 mb-4">
                Personalized learning paths, intelligent tutoring systems, and adaptive educational content.
              </p>
              <Link href="/solutions/education" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AGI Development</h3>
              <p className="text-gray-600 mb-4">
                Research platform for artificial general intelligence with ethical AI development frameworks.
              </p>
              <Link href="/solutions/agi" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-16 sm:py-24 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                MeridianAI Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our proprietary AI platform powers intelligent solutions across all industries. Built with 
                advanced machine learning, natural language processing, and computer vision capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Scalable Architecture</h3>
                    <p className="text-gray-600">Cloud-native platform designed for enterprise-scale deployments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Real-time Processing</h3>
                    <p className="text-gray-600">Sub-second response times for mission-critical applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Ethical AI Framework</h3>
                    <p className="text-gray-600">Built-in safeguards ensuring responsible AI deployment</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/technology/platform"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Explore Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image
                src="/assets/Apex-Meridian_drawing.png"
                alt="MeridianAI Platform"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Driving Innovation at Scale
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our AI solutions are transforming industries and creating measurable impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-400 mr-2" />
                <div className="text-4xl font-bold">500K+</div>
              </div>
              <p className="text-blue-200">Users Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400 mr-2" />
                <div className="text-4xl font-bold">99.9%</div>
              </div>
              <p className="text-blue-200">Uptime Reliability</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-blue-400 mr-2" />
                <div className="text-4xl font-bold">50ms</div>
              </div>
              <p className="text-blue-200">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-2" />
                <div className="text-4xl font-bold">100%</div>
              </div>
              <p className="text-blue-200">Security Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join leading organizations already leveraging Apex-Meridian&apos;s AI solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Investment Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
