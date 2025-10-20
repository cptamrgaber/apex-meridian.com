import React from 'react';
import Link from 'next/link';
import { Calendar, Award, Users, TrendingUp, ArrowRight, MapPin, Rocket } from 'lucide-react';
import BrandName from '@/components/BrandName';

export default function CompanyHistoryPage() {
  return (
    <div className="bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Journey
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From a startup in Cairo to a pioneering AI company, discover how <BrandName /> has evolved to become a leader in artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Company Timeline</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Key milestones in our journey to revolutionize artificial intelligence
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-12">
              {/* March 2020 - Founding */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-end mb-2">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">March 2020</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Company Founded in Cairo</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <BrandName /> was established in Cairo, Egypt as a startup with a vision to create ethical, beneficial AI solutions. Founded with initial focus on developing intelligent systems for emerging markets.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Late 2020 - First Developments */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-600 font-semibold">Late 2020</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">First Aviation Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Launched our first project: an aviation platform for operations and scheduling. This foundational system established our expertise in aviation intelligence and became the cornerstone of our AI development journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021 - Platform Foundation */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-purple-600 font-semibold">2021</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Platform Evolution & Expansion</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Built upon our successful aviation operations and scheduling platform to create the broader MeridianAI platform. Expanded our team in Cairo and began developing AI solutions for cybersecurity and education sectors.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2022 - Multi-Industry Expansion */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="text-orange-600 font-semibold">2022</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Multi-Industry Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Expanded platform to support cybersecurity threat detection and educational AI solutions. Developed comprehensive AI modules serving aviation, cybersecurity, and education sectors from our Cairo headquarters.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 - Growth and Recognition */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-red-600 mr-2" />
                      <span className="text-red-600 font-semibold">2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Market Recognition</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Gained significant market traction with partnerships across the Middle East and Africa. Established strategic alliances with regional technology companies and expanded our Cairo operations.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2024 - AGI Research & Funding */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <Rocket className="h-5 w-5 text-indigo-600 mr-2" />
                      <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="text-indigo-600 font-semibold">2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AGI Research & Funding Round</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Launched dedicated AGI research division and secured our first major funding round. Established AI Safety Institute in Cairo and began development of advanced general intelligence capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2025 - Present */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-blue-500">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Government Partnership & Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Currently developing an advanced security system for the Ministry of Internal Affairs, demonstrating our trusted position in critical infrastructure. Operating from our Cairo headquarters, we continue to pioneer AI solutions across multiple industries while maintaining our commitment to ethical AI development.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Milestones that define our impact on the AI industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Cairo</h3>
              <p className="text-gray-600 dark:text-gray-300">Headquarters</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">All operations based in Egypt</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years of Innovation</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Since March 2020 founding</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Startup</h3>
              <p className="text-gray-600 dark:text-gray-300">Growth Journey</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Recent funding round completed</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">3</h3>
              <p className="text-gray-600 dark:text-gray-300">Core Industries</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Aviation, Cybersecurity, Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision for the Future</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From our Cairo headquarters, we continue to push the boundaries of artificial intelligence, 
              developing solutions that benefit humanity while maintaining the highest ethical standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ethical AI Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leading the development of responsible AI technologies that prioritize human welfare and ethical considerations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Regional Innovation Hub</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Establishing Cairo as a major center for AI innovation in the Middle East and Africa region.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expanding our reach to serve organizations worldwide while maintaining our strong Egyptian roots and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Be part of the next chapter in AI innovation. Discover how our Cairo-based team is shaping the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/careers"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
