import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Database, Network } from 'lucide-react';

export default function TechnologyPage() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technology & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
            Cutting-edge AI technology stack powering the future of intelligent solutions
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on modern, scalable architecture with enterprise-grade security and performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                MeridianAI Platform
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship AI platform provides the foundation for all our solutions, 
                offering enterprise-grade infrastructure, advanced AI models, and 
                comprehensive development tools.
              </p>
              <Link
                href="/technology/platform"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">AI Models</h4>
                <p className="text-gray-600 text-sm">Advanced neural networks and machine learning algorithms</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <Cpu className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Processing</h4>
                <p className="text-gray-600 text-sm">High-performance computing with GPU acceleration</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Data Storage</h4>
                <p className="text-gray-600 text-sm">Distributed databases with real-time synchronization</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <Network className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Networking</h4>
                <p className="text-gray-600 text-sm">Global edge network for low-latency access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-16 sm:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Innovation Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pushing the boundaries of AI technology across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-600 mb-4">
                Advanced language models for understanding, generation, and translation 
                across multiple languages and domains.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conversational AI</li>
                <li>• Document Analysis</li>
                <li>• Sentiment Analysis</li>
                <li>• Language Translation</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                State-of-the-art image and video analysis for object detection, 
                recognition, and real-time monitoring applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Medical Imaging</li>
                <li>• Autonomous Systems</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Machine learning models for forecasting, risk assessment, 
                and decision support across various industries.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Time Series Forecasting</li>
                <li>• Risk Modeling</li>
                <li>• Anomaly Detection</li>
                <li>• Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research & Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous innovation through cutting-edge research and development initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                AGI Research Initiative
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our dedicated research team is working on the next generation of artificial 
                general intelligence, focusing on ethical AI development and human-AI collaboration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Ethical AI Framework</h4>
                    <p className="text-gray-600">Developing responsible AI with built-in ethical guidelines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Human-AI Collaboration</h4>
                    <p className="text-gray-600">Enhancing human capabilities through AI augmentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Adaptive Learning</h4>
                    <p className="text-gray-600">AI systems that continuously learn and improve</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Open Source Contributions
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe in advancing the entire AI community through open source 
                contributions and collaborative research initiatives.
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">Current Projects</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• MeridianAI Core Libraries</li>
                  <li>• Ethical AI Evaluation Tools</li>
                  <li>• Industry-Specific AI Models</li>
                  <li>• Educational AI Resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Our Technology Team
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Collaborate with our experts to build custom AI solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/technology/platform"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-blue-900 transition-colors"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
