import React from 'react';
import Link from 'next/link';
import { Building, Users, History, Briefcase, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Apex-Meridian
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover our mission, leadership, history, and opportunities to join our team in revolutionizing artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about/overview" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Company Overview</h3>
                <p className="text-gray-600 text-center mb-4">
                  Learn about our mission, vision, values, and the impact we&apos;re making in the AI industry.
                </p>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/about/leadership" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Leadership Team</h3>
                <p className="text-gray-600 text-center mb-4">
                  Meet the visionary leaders driving innovation and excellence at Apex-Meridian.
                </p>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800">
                  <span className="font-medium">Meet the Team</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/about/history" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <History className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Company History</h3>
                <p className="text-gray-600 text-center mb-4">
                  Explore our journey from startup to industry leader in artificial intelligence solutions.
                </p>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800">
                  <span className="font-medium">Our Story</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/about/careers" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Briefcase className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Careers</h3>
                <p className="text-gray-600 text-center mb-4">
                  Join our team of innovators and help shape the future of artificial intelligence.
                </p>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800">
                  <span className="font-medium">View Opportunities</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Apex-Meridian?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just building AI solutions – we&apos;re creating the future of intelligent technology that benefits humanity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <p className="text-gray-600 font-medium">Users Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600 font-medium">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600 font-medium">Platform Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Discover how Apex-Meridian can transform your industry with cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
