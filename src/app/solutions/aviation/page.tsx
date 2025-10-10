import React from 'react';
import Image from 'next/image';
import { Zap, Plane, Shield, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';

const AviationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            src="/images/solutions/aviation-ai.jpg"
            alt="Aviation AI Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">AeroMind</h1>
                  <p className="text-xl text-blue-200">Aviation Intelligence Platform</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Revolutionizing aviation through intelligent automation, predictive analytics, and real-time decision making that transforms how aircraft operate, maintain, and serve passengers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Predictive Maintenance AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Real-time Route Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Passenger Experience Enhancement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Safety Compliance Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Aviation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AeroMind transforms every aspect of aviation operations with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flight Operations</h3>
              <p className="text-gray-600 mb-4">
                AI-powered flight planning, weather analysis, and real-time adjustments for optimal performance and safety.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Dynamic route optimization</li>
                <li>• Weather pattern prediction</li>
                <li>• Fuel efficiency maximization</li>
                <li>• Air traffic coordination</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics predict component failures before they occur, reducing downtime and ensuring safety.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Component health monitoring</li>
                <li>• Failure prediction algorithms</li>
                <li>• Maintenance scheduling optimization</li>
                <li>• Parts inventory management</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passenger Experience</h3>
              <p className="text-gray-600 mb-4">
                Personalized services and proactive communication enhance every aspect of the passenger journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalized recommendations</li>
                <li>• Real-time updates</li>
                <li>• Service optimization</li>
                <li>• Sentiment analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-blue-200">AeroMind delivers measurable improvements across all aviation metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-blue-200">Fuel Savings</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-200">Reduced Delays</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Safety Score</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Passenger Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Aviation Operations?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading airlines and aviation companies already using AeroMind to revolutionize their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AviationPage;
