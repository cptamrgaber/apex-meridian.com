import React from 'react';
import Link from 'next/link';
import { TrendingUp, Target, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function InvestmentOpportunityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Investment Opportunity
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Join us in revolutionizing artificial intelligence across multiple industries. Discover why <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                <span>A  p  e  x</span>
                
                <span>M e r i d i a n</span>
                <sup className="text-xs ml-1">®</sup>
              </span> represents a compelling investment opportunity in the rapidly growing AI market.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Massive Market Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The AI market is experiencing unprecedented growth, with our target sectors representing over $74 billion in combined market opportunity by 2028.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aviation AI</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.1B</div>
              <p className="text-gray-600 text-sm mb-2">Market size by 2028</p>
              <p className="text-green-600 font-medium">CAGR: 35%</p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity AI</h3>
              <div className="text-3xl font-bold text-red-600 mb-2">$46.3B</div>
              <p className="text-gray-600 text-sm mb-2">Market size by 2028</p>
              <p className="text-green-600 font-medium">CAGR: 23%</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education AI</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$25.7B</div>
              <p className="text-gray-600 text-sm mb-2">Market size by 2028</p>
              <p className="text-green-600 font-medium">CAGR: 32%</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Addressable Market</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">$74.1B</div>
                <p className="text-lg text-gray-600 mb-4">Combined TAM across our target markets by 2028</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Early-stage market with significant growth potential</li>
                  <li>• Limited competition in specialized AI applications</li>
                  <li>• High barriers to entry due to technical complexity</li>
                  <li>• Strong demand for AI solutions across all sectors</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Market Position</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Market Share</span>
                      <span className="font-bold text-blue-600">2.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target by 2028</span>
                      <span className="font-bold text-green-600">8.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Potential</span>
                      <span className="font-bold text-purple-600">$6.3B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Advantages</h2>
            <p className="text-lg text-gray-600">
              What sets <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                <span>A  p  e  x</span>
                
                <span>M e r i d i a n</span>
                <sup className="text-xs ml-1">®</sup>
              </span> apart in the competitive AI landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proprietary Technology</h3>
              <p className="text-gray-600 mb-4">
                Our MeridianAI platform represents 5+ years of R&D investment, with 50+ patents filed and industry-leading performance metrics.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Advanced neural architectures</li>
                <li>• Real-time processing capabilities</li>
                <li>• Industry-specific optimizations</li>
                <li>• Continuous learning systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Industry Focus</h3>
              <p className="text-gray-600 mb-4">
                Unlike competitors focused on single verticals, we address multiple high-growth markets with a unified platform approach.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Diversified revenue streams</li>
                <li>• Cross-industry synergies</li>
                <li>• Reduced market risk</li>
                <li>• Scalable business model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Execution</h3>
              <p className="text-gray-600 mb-4">
                Strong track record of product delivery, customer acquisition, and revenue growth with world-class leadership team.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 300% YoY revenue growth</li>
                <li>• 150+ enterprise customers</li>
                <li>• 99.9% platform uptime</li>
                <li>• Industry recognition & awards</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Key partnerships with industry leaders provide distribution channels, validation, and accelerated market penetration.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Major airline partnerships</li>
                <li>• Fortune 500 cybersecurity deals</li>
                <li>• Educational institution network</li>
                <li>• Technology integration partners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Projections</h2>
            <p className="text-lg text-gray-600">
              Conservative growth projections based on current market trends and customer pipeline
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2025</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">$45M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2026</h3>
                <div className="text-2xl font-bold text-green-600 mb-1">$120M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2027</h3>
                <div className="text-2xl font-bold text-purple-600 mb-1">$280M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2028</h3>
                <div className="text-2xl font-bold text-orange-600 mb-1">$580M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Gross Margin</h4>
                <div className="text-3xl font-bold text-green-600">85%</div>
                <p className="text-sm text-gray-600">Software-based revenue model</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Customer LTV</h4>
                <div className="text-3xl font-bold text-blue-600">$2.3M</div>
                <p className="text-sm text-gray-600">Average enterprise customer</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">CAC Payback</h4>
                <div className="text-3xl font-bold text-purple-600">8 months</div>
                <p className="text-sm text-gray-600">Efficient customer acquisition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Investment Round</h2>
            <p className="text-lg text-gray-600">
              Series C funding to accelerate growth and expand market presence
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Investment Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Series C round: $100M target</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Pre-money valuation: $800M</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Minimum investment: $1M</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Expected close: Q2 2025</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Board seat available for lead investor</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Use of Funds</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">R&D and Product Development</span>
                    <span className="font-bold text-blue-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sales and Marketing</span>
                    <span className="font-bold text-green-600">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">International Expansion</span>
                    <span className="font-bold text-purple-600">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Working Capital</span>
                    <span className="font-bold text-orange-600">10%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Expected Outcomes</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 3x revenue growth over 24 months</li>
                    <li>• Expansion to European and Asian markets</li>
                    <li>• Launch of AGI research platform</li>
                    <li>• Strategic acquisition opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Partner with us to shape the future of artificial intelligence and capture significant returns in the rapidly growing AI market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Contact Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investors/financials"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Financial Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
