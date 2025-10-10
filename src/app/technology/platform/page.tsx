import React from 'react';
import Image from 'next/image';
import { Brain, Zap, Shield, Globe, Database, Cpu, Network, Lock } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MeridianAI Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              The comprehensive AI platform powering intelligent solutions across industries. 
              Built for scale, designed for innovation.
            </p>
            <div className="flex justify-center">
              <Image
                src="/assets/Apex-Meridian_drawing.png"
                alt="MeridianAI Platform Architecture"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade AI Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MeridianAI provides the foundation for deploying, managing, and scaling AI solutions 
              across your organization with enterprise-level security and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced AI Models</h3>
              <p className="text-gray-600">
                Pre-trained and custom AI models for natural language processing, computer vision, 
                predictive analytics, and decision support systems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600">
                Sub-second response times with distributed computing architecture designed 
                for mission-critical applications and high-throughput scenarios.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                End-to-end encryption, role-based access control, and compliance with 
                industry standards including SOC 2, GDPR, and HIPAA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Details */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on modern cloud-native principles with microservices architecture 
              for maximum scalability and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Layer</h3>
                <p className="text-gray-600 text-sm">
                  Distributed data storage with real-time synchronization and automated backup systems.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Cpu className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compute Engine</h3>
                <p className="text-gray-600 text-sm">
                  GPU-accelerated processing with auto-scaling capabilities for variable workloads.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Network className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">API Gateway</h3>
                <p className="text-gray-600 text-sm">
                  RESTful and GraphQL APIs with rate limiting, authentication, and monitoring.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security Layer</h3>
                <p className="text-gray-600 text-sm">
                  Multi-factor authentication, encryption at rest and in transit, audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Scalable AI Infrastructure
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Auto-scaling</h4>
                    <p className="text-gray-600">Automatically scales resources based on demand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Multi-cloud Support</h4>
                    <p className="text-gray-600">Deploy across AWS, Azure, and Google Cloud</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Edge Computing</h4>
                    <p className="text-gray-600">Process data closer to the source for reduced latency</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/assets/Apex-Meridian_drawing.png"
                alt="Platform Infrastructure"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Performance
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Industry-leading performance metrics that power mission-critical applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <p className="text-blue-200">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt;50ms</div>
              <p className="text-blue-200">API Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-blue-200">Requests per Second</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-200">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build with MeridianAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get started with our platform today and transform your business with enterprise-grade AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="mailto:platform@apex-meridian.com"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Platform Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
