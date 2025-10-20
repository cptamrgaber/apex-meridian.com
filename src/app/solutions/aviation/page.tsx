import React from 'react';
import Image from 'next/image';
import { Zap, Plane, Shield, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';

const AviationPage: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-100">
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
                <div className="w-20 h-20 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
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
                <button className="px-8 py-4 bg-gray-900 text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-gray-900/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-900/30 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Operation Management & Control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Fleet Management & Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Smart Scheduling & Routing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>ADS-B Flight Following</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Predictive Maintenance AI</span>
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Aviation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              AeroMind transforms every aspect of aviation operations with cutting-edge AI technology
            </p>
            <div className="flex justify-center">
              <Image
                src="/assets/aviation-ai-analytics.png"
                alt="Aviation AI Analytics Dashboard"
                width={900}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Operation Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive operation control with AI-powered flight planning, smart scheduling, and real-time fleet management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smart scheduling & routing systems</li>
                <li>• Fleet management & optimization</li>
                <li>• ADS-B flight following & tracking</li>
                <li>• Operation control center integration</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Maintenance</h3>
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
              <h3 className="text-2xl font-bold text-white mb-4">Passenger Experience</h3>
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

      {/* Performance Targets - Legally Safe */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Targets</h2>
            <p className="text-xl text-blue-200">AeroMind aims to deliver significant improvements across aviation operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">Enhanced</div>
              <div className="text-blue-200">Fuel Efficiency</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">Reduced</div>
              <div className="text-blue-200">Operational Delays</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">Advanced</div>
              <div className="text-blue-200">Safety Systems</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">Improved</div>
              <div className="text-blue-200">Passenger Experience</div>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Global Aviation Compliance</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg">IATA</div>
                <div className="text-sm text-blue-200">Standards</div>
              </div>
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg">ICAO</div>
                <div className="text-sm text-blue-200">Regulations</div>
              </div>
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg">EASA</div>
                <div className="text-sm text-blue-200">Compliance</div>
              </div>
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg">ECARS</div>
                <div className="text-sm text-blue-200">Reporting</div>
              </div>
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-bold text-lg">FAA</div>
                <div className="text-sm text-blue-200">Standards</div>
              </div>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Advanced Scheduling & Rostering System</h3>
            <p className="text-blue-200 mb-6">Competing with industry leaders through AI-powered optimization</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">vs. Jeppesen</h4>
                <p className="text-sm text-blue-200">Enhanced AI-powered flight planning and navigation solutions</p>
              </div>
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">vs. AIMS</h4>
                <p className="text-sm text-blue-200">Advanced Aviation Information Management with predictive analytics</p>
              </div>
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">vs. Lido</h4>
                <p className="text-sm text-blue-200">Superior operational systems with real-time optimization</p>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-xs text-blue-300 max-w-3xl mx-auto">
              * Performance targets represent development goals and expected improvements. Actual results may vary based on implementation, operational conditions, and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Aviation Operations?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading airlines and aviation companies already using AeroMind to revolutionize their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-gray-900 text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AviationPage;
