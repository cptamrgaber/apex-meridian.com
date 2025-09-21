import React from 'react';
import Link from 'next/link';
import { Plane, Shield, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function AviationSolutionsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Plane className="h-16 w-16 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Aviation AI Solutions
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transform aviation operations with intelligent flight management, predictive maintenance, passenger experience optimization, and safety compliance automation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Aviation AI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI solutions address every aspect of aviation operations, from flight planning to passenger services, ensuring safety, efficiency, and exceptional experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flight Operations</h3>
              <p className="text-gray-600 mb-4">
                Optimize flight paths, fuel consumption, and scheduling with AI-powered operational intelligence.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Route optimization algorithms</li>
                <li>• Fuel efficiency predictions</li>
                <li>• Weather impact analysis</li>
                <li>• Crew scheduling optimization</li>
              </ul>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure the highest safety standards with predictive maintenance and automated compliance monitoring.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Predictive maintenance alerts</li>
                <li>• Safety risk assessment</li>
                <li>• Regulatory compliance tracking</li>
                <li>• Incident prediction models</li>
              </ul>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passenger Experience</h3>
              <p className="text-gray-600 mb-4">
                Enhance passenger satisfaction with personalized services and proactive communication.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Personalized recommendations</li>
                <li>• Delay prediction & communication</li>
                <li>• Dynamic pricing optimization</li>
                <li>• Customer service automation</li>
              </ul>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">
              Airlines using our AI solutions see significant improvements across key metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <p className="text-gray-600 font-medium">Fuel Cost Reduction</p>
              <p className="text-sm text-gray-500 mt-1">Through optimized flight paths</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <p className="text-gray-600 font-medium">Maintenance Cost Savings</p>
              <p className="text-sm text-gray-500 mt-1">Via predictive maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-gray-600 font-medium">Passenger Satisfaction</p>
              <p className="text-sm text-gray-500 mt-1">Improvement in experience scores</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.8%</div>
              <p className="text-gray-600 font-medium">Safety Compliance</p>
              <p className="text-sm text-gray-500 mt-1">Automated monitoring accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Story</h2>
              <p className="text-lg text-gray-600">
                How SkyLine Airlines transformed their operations with Apex-Meridian AI
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-6">
                  SkyLine Airlines was facing rising fuel costs, increasing maintenance expenses, and declining passenger satisfaction scores. They needed a comprehensive solution to optimize operations while maintaining safety standards.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                <p className="text-gray-600 mb-6">
                  We implemented our complete aviation AI suite, including flight optimization, predictive maintenance, and passenger experience enhancement across their entire fleet of 150 aircraft.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Real-time flight path optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Predictive maintenance scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Personalized passenger services</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results After 12 Months</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fuel Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600">$12M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maintenance Savings</span>
                    <span className="text-2xl font-bold text-blue-600">$8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">On-time Performance</span>
                    <span className="text-2xl font-bold text-purple-600">+15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-orange-600">+25%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    &quot;Apex-Meridian&apos;s AI solutions have transformed our operations. We&apos;re now more efficient, safer, and our passengers are happier than ever.&quot;
                  </p>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    - Sarah Johnson, CEO, SkyLine Airlines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Technology</h2>
            <p className="text-lg text-gray-600">
              Built on our MeridianAI platform with aviation-specific optimizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600 mb-4">
                Process millions of data points from aircraft sensors, weather systems, and operational databases in real-time to make instant optimization decisions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sub-second response times</li>
                <li>• 99.99% uptime guarantee</li>
                <li>• Edge computing capabilities</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning Models</h3>
              <p className="text-gray-600 mb-4">
                Advanced ML algorithms trained on aviation-specific datasets to understand complex operational patterns and predict optimal outcomes.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Deep learning neural networks</li>
                <li>• Reinforcement learning optimization</li>
                <li>• Continuous model improvement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integration Capabilities</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate with existing aviation systems including flight management, maintenance, and passenger service platforms.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• API-first architecture</li>
                <li>• Legacy system compatibility</li>
                <li>• Cloud and on-premise deployment</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Meet the highest aviation security standards with end-to-end encryption and compliance with international aviation regulations.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• FAA/EASA certified</li>
                <li>• SOC 2 Type II compliant</li>
                <li>• End-to-end encryption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Aviation Operations?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join leading airlines already using Apex-Meridian AI to optimize operations, reduce costs, and enhance passenger experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/technology/platform"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn About Our Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
