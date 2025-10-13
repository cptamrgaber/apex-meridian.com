import React from 'react';
import Link from 'next/link';
import { Calendar, Award, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function CompanyHistoryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Journey
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From a small research lab to a leading AI company, discover how <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                <span>A  p  e  x  M  e  r  i  d  i  a  n</span>
                <sup className="text-xs ml-1">®</sup>
              </span> has evolved to become a pioneer in artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Timeline</h2>
            <p className="text-lg text-gray-600">
              Key milestones in our journey to revolutionize artificial intelligence
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {/* 2019 - Founding */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">2019</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Company Founded</h3>
                    <p className="text-gray-600">
                      Dr. Sarah Chen and Michael Rodriguez establish <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                        <span>A  p  e  x  M  e  r  i  d  i  a  n</span>
                        <sup className="text-xs ml-1">®</sup>
                      </span> in San Francisco with a vision to create ethical, beneficial AI. Initial focus on aviation safety systems.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2020 - First Product */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-600 font-semibold">2020</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">First Product Launch</h3>
                    <p className="text-gray-600">
                      Launch of MeridianAI 1.0 for aviation predictive maintenance. First commercial deployment with regional airline partners, achieving 40% reduction in unplanned maintenance.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021 - Series A */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-purple-600 font-semibold">2021</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Series A Funding</h3>
                    <p className="text-gray-600">
                      Raised $25M Series A led by Andreessen Horowitz. Expanded team to 50 employees and began development of cybersecurity AI solutions.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2022 - Platform Launch */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="text-orange-600 font-semibold">2022</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">MeridianAI Platform 2.0</h3>
                    <p className="text-gray-600">
                      Launch of unified AI platform supporting multiple industries. Added cybersecurity threat detection and education personalization modules. Reached 100K+ users.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 - International Expansion */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-red-600 mr-2" />
                      <span className="text-red-600 font-semibold">2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Expansion</h3>
                    <p className="text-gray-600">
                      Opened offices in London and Singapore. Partnerships with major airlines and cybersecurity firms. Series B funding of $75M led by Sequoia Capital.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2024 - AGI Research */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="text-indigo-600 font-semibold">2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AGI Research Initiative</h3>
                    <p className="text-gray-600">
                      Launched dedicated AGI research division with Dr. Aisha Patel as Chief Scientist. Established AI Safety Institute and ethical AI development frameworks.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2025 - Present */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Leading the Future</h3>
                    <p className="text-gray-600">
                      500K+ users across 25 countries. Platform 3.0 with advanced AGI capabilities. Recognized as one of the most innovative AI companies globally.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white animate-pulse"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600">
              Milestones that define our impact on the AI industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Industry Awards</p>
              <p className="text-sm text-gray-500 mt-1">Including AI Innovation of the Year 2024</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500K+</h3>
              <p className="text-gray-600">Active Users</p>
              <p className="text-sm text-gray-500 mt-1">Across aviation, cybersecurity, and education</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">$150M</h3>
              <p className="text-gray-600">Total Funding</p>
              <p className="text-sm text-gray-500 mt-1">From top-tier venture capital firms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Patents Filed</p>
              <p className="text-sm text-gray-500 mt-1">In AI, ML, and cognitive computing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journey is just beginning. We&apos;re committed to pushing the boundaries of what&apos;s possible with artificial intelligence while maintaining our core values of safety, ethics, and human benefit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2025-2027: AGI Breakthrough</h3>
              <p className="text-gray-600">
                Achieve significant milestones in artificial general intelligence research while maintaining industry-leading safety standards.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2027-2030: Global Impact</h3>
              <p className="text-gray-600">
                Scale our solutions to serve millions of users worldwide, transforming how industries operate and people learn.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beyond 2030: AI for Humanity</h3>
              <p className="text-gray-600">
                Lead the development of beneficial AGI that augments human capabilities and helps solve global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join us as we continue to write the next chapter in artificial intelligence history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/careers"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Join Our Team
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
