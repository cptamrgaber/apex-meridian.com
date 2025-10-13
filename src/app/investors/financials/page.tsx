import React from 'react';
import Link from 'next/link';
import { TrendingUp, DollarSign, BarChart3, PieChart, FileText, Download, ArrowRight } from 'lucide-react';
import VisualChart from '@/components/VisualChart';

export default function FinancialInformationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Financial Information
            </h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Access comprehensive financial data, performance metrics, and reports to make informed investment decisions about <span className="font-light text-blue-600 text-sm" style={{ letterSpacing: '0.2em' }}>
                <span>A p e x</span>
                <span className="mx-1">•</span>
                <span>M e r i d i a n</span>
                <sup className="text-xs ml-1">®</sup>
              </span>.
            </p>
          </div>
        </div>
      </section>

      {/* Key Financial Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Financial Metrics</h2>
            <p className="text-lg text-gray-600">
              Current performance indicators demonstrating strong growth and financial health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Annual Revenue</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">$28M</div>
              <p className="text-green-600 text-sm">+300% YoY</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gross Margin</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
              <p className="text-gray-600 text-sm">Industry leading</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ARR Growth</h3>
              <div className="text-3xl font-bold text-purple-600 mb-1">280%</div>
              <p className="text-gray-600 text-sm">Annual recurring revenue</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <PieChart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Net Revenue Retention</h3>
              <div className="text-3xl font-bold text-orange-600 mb-1">145%</div>
              <p className="text-gray-600 text-sm">Customer expansion</p>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Breakdown by Segment</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Target: $12.6M</div>
                <p className="text-gray-600 font-medium">Aviation Solutions</p>
                <p className="text-sm text-gray-500">45% of projected revenue</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">Target: $9.8M</div>
                <p className="text-gray-600 font-medium">Cybersecurity</p>
                <p className="text-sm text-gray-500">35% of projected revenue</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Target: $5.6M</div>
                <p className="text-gray-600 font-medium">Education</p>
                <p className="text-sm text-gray-500">20% of projected revenue</p>
              </div>
            </div>
            
            {/* Financial Charts */}
            <div className="grid md:grid-cols-2 gap-8">
              <VisualChart 
                type="pie" 
                title="Revenue Distribution" 
                data={[45, 35, 20]} 
                labels={['Aviation', 'Cybersecurity', 'Education']}
                color="#3B82F6"
              />
              <VisualChart 
                type="growth" 
                title="Projected Revenue Growth" 
                data={[5, 12, 18, 25, 28]} 
                labels={['2020', '2021', '2022', '2023', '2024']}
                color="#10B981"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Reports</h2>
            <p className="text-lg text-gray-600">
              Download our latest financial statements and investor presentations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q4 2024 Financial Results</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive quarterly financial report including revenue, expenses, and key metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • 2.3 MB</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2024 Annual Report</h3>
              <p className="text-gray-600 mb-4">
                Complete annual financial report with audited statements and management discussion.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • 4.7 MB</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investor Presentation</h3>
              <p className="text-gray-600 mb-4">
                Latest investor deck with company overview, market opportunity, and financial projections.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • 8.1 MB</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cash Flow Statement</h3>
              <p className="text-gray-600 mb-4">
                Detailed cash flow analysis showing operating, investing, and financing activities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • 1.8 MB</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Balance Sheet</h3>
              <p className="text-gray-600 mb-4">
                Current balance sheet showing assets, liabilities, and shareholders&apos; equity.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">PDF • 1.2 MB</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">KPI Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Real-time key performance indicators and business metrics dashboard.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Interactive</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View Dashboard
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Performance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Historical Performance</h2>
            <p className="text-lg text-gray-600">
              Track record of consistent growth and strong financial performance
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2021</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">$2.1M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2022</h3>
                <div className="text-2xl font-bold text-green-600 mb-1">$7.8M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2023</h3>
                <div className="text-2xl font-bold text-purple-600 mb-1">$18.5M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2024</h3>
                <div className="text-2xl font-bold text-orange-600 mb-1">$28.0M</div>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Customer Growth</h4>
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <p className="text-sm text-gray-600">Enterprise customers</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Platform Users</h4>
                <div className="text-3xl font-bold text-green-600">500K+</div>
                <p className="text-sm text-gray-600">Active users</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Market Presence</h4>
                <div className="text-3xl font-bold text-purple-600">25</div>
                <p className="text-sm text-gray-600">Countries served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Highlights</h2>
            <p className="text-lg text-gray-600">
              Key financial achievements and milestones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Quality</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recurring Revenue</span>
                  <span className="font-bold text-green-600">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Retention</span>
                  <span className="font-bold text-blue-600">96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Gross Revenue Retention</span>
                  <span className="font-bold text-purple-600">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Contract Value</span>
                  <span className="font-bold text-orange-600">$186K</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Efficiency</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">CAC Payback Period</span>
                  <span className="font-bold text-green-600">8 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">LTV/CAC Ratio</span>
                  <span className="font-bold text-blue-600">12:1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sales Efficiency</span>
                  <span className="font-bold text-purple-600">2.8x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">R&D Investment</span>
                  <span className="font-bold text-orange-600">35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Contact our investor relations team for additional financial data, detailed reports, or to schedule a management presentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Contact Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investors/governance"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-900 transition-colors"
            >
              Corporate Governance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
