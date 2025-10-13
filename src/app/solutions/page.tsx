import React from 'react';
import Link from 'next/link';
import { Zap, Shield, BookOpen, Brain, ArrowRight } from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Solutions for Every Industry
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of artificial intelligence solutions designed for aviation, cybersecurity, education, and AGI development.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Link href="/solutions/aviation" className="group">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-500 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aviation Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Revolutionize aviation operations with AI-powered flight management, passenger experience optimization, and safety compliance automation. Our solutions enhance efficiency while maintaining the highest safety standards.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Intelligent Flight Operations</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Passenger Experience Enhancement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Safety & Compliance Automation</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                  <span>Explore Aviation AI</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/cybersecurity" className="group">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-red-500 h-full">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Protect your organization with advanced AI-driven threat detection, automated incident response, and predictive risk management. Stay ahead of evolving cyber threats with intelligent security.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span>Advanced Threat Detection</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span>Automated Incident Response</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span>Predictive Risk Management</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                  <span>Explore Security AI</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/education" className="group">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-green-500 h-full">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Transform learning experiences with personalized AI tutoring, adaptive content delivery, and intelligent assessment systems. Empower educators and students with cutting-edge educational technology.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Personalized Learning Paths</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Intelligent Tutoring Systems</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Adaptive Content Delivery</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                  <span>Explore Education AI</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/agi" className="group">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-purple-500 h-full">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AGI Development</h3>
                <p className="text-gray-600 mb-6">
                  Pioneer the future of artificial intelligence with our AGI research platform. Develop safe, ethical, and beneficial artificial general intelligence that augments human capabilities.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Cognitive Architecture Research</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Ethical AI Frameworks</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Human-AI Collaboration</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                  <span>Explore AGI Research</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by MeridianAI Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our solutions are built on our proprietary MeridianAI platform, providing scalable, secure, and intelligent AI capabilities across industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Processing</h3>
              <p className="text-gray-600">
                Sub-second response times for mission-critical applications with our optimized AI infrastructure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with end-to-end encryption and compliance with industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">
                Cloud-native platform that scales from startup to enterprise with seamless performance.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/technology/platform"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Learn About Our Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join leading organizations already leveraging A  p  e  x  M  e  r  i  d  i  a  n&apos;s AI solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Investment Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
