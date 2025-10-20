import React from 'react';
import Link from 'next/link';
import { TrendingUp, DollarSign, Shield, Users, ArrowRight } from 'lucide-reac
  import BrandName from '@/components/BrandName';';

export default function InvestorsPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Investor Relations
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Join us in shaping the future of artificial intelligence. Discover investment opportunities in the next generation of AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Investment Highlights</h2>
            <p className="text-lg text-gray-600">
Why <BrandName asLink={false} className="text-blue-300 font-light inline" /> represents a compelling investment opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Market Leadership</h3>
              <p className="text-gray-600">Leading position in AI solutions across aviation, cybersecurity, and education sectors.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strong Revenue Growth</h3>
              <p className="text-gray-600">300% year-over-year revenue growth with expanding enterprise customer base.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Technology</h3>
              <p className="text-gray-600">Proprietary AI platform with 50+ patents and industry-leading performance metrics.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">World-Class Team</h3>
              <p className="text-gray-600">Leadership team from Google, OpenAI, Tesla, and other top technology companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/investors/opportunity" className="group">
              <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Investment Opportunity</h3>
                <p className="text-gray-600 text-center mb-4">
                  Learn about our market opportunity, competitive advantages, and growth strategy in the AI industry.
                </p>
                <div className="flex items-center justify-center text-blue-300 group-hover:text-blue-100">
                  <span className="font-medium">Explore Opportunity</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/investors/financials" className="group">
              <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-green-500">
                <div className="bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <DollarSign className="h-8 w-8 text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Financial Information</h3>
                <p className="text-gray-600 text-center mb-4">
                  Access our financial reports, key metrics, and performance data for informed investment decisions.
                </p>
                <div className="flex items-center justify-center text-blue-300 group-hover:text-blue-100">
                  <span className="font-medium">View Financials</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/investors/governance" className="group">
              <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-purple-500">
                <div className="bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Shield className="h-8 w-8 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Corporate Governance</h3>
                <p className="text-gray-600 text-center mb-4">
                  Information about our board of directors, governance policies, and commitment to transparency.
                </p>
                <div className="flex items-center justify-center text-blue-300 group-hover:text-blue-100">
                  <span className="font-medium">Learn About Governance</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Key Performance Metrics</h2>
            <p className="text-lg text-gray-600">
              Our strong fundamentals demonstrate sustainable growth and market leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">$150M</div>
              <p className="text-gray-600 font-medium">Total Funding Raised</p>
              <p className="text-sm text-gray-500 mt-1">Series A, B, and C rounds</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">500K+</div>
              <p className="text-gray-600 font-medium">Active Users</p>
              <p className="text-sm text-gray-500 mt-1">Across all platforms</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">150+</div>
              <p className="text-gray-600 font-medium">Enterprise Clients</p>
              <p className="text-sm text-gray-500 mt-1">Fortune 500 companies</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">300%</div>
              <p className="text-gray-600 font-medium">YoY Revenue Growth</p>
              <p className="text-sm text-gray-500 mt-1">Consistent growth trajectory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Massive Market Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The AI market is experiencing unprecedented growth, and <span className="font-light text-blue-300" style={{ letterSpacing: '0.2em' }}>
                <span>A  p  e  x</span>
                
                <span>M e r i d i a n</span>
                <sup className="text-xs ml-1">®</sup>
              </span> is positioned to capture significant market share across multiple verticals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Aviation AI Market</h3>
              <div className="text-3xl font-bold text-blue-300 mb-2">$2.1B</div>
              <p className="text-gray-600 text-sm">Expected market size by 2028</p>
              <p className="text-gray-500 text-xs mt-1">CAGR: 35%</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity AI Market</h3>
              <div className="text-3xl font-bold text-red-300 mb-2">$46.3B</div>
              <p className="text-gray-600 text-sm">Expected market size by 2028</p>
              <p className="text-gray-500 text-xs mt-1">CAGR: 23%</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Education AI Market</h3>
              <div className="text-3xl font-bold text-green-300 mb-2">$25.7B</div>
              <p className="text-gray-600 text-sm">Expected market size by 2028</p>
              <p className="text-gray-500 text-xs mt-1">CAGR: 32%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in the Future?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join leading investors who are backing the next generation of artificial intelligence technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-50 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Contact Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investors/opportunity"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
