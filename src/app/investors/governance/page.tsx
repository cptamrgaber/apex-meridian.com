import React from 'react';
import Link from 'next/link';
import { Shield, Users, FileText, Scale, ArrowRight, CheckCircle } from 'lucide-react';

export default function CorporateGovernancePage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Corporate Governance
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Committed to the highest standards of corporate governance, transparency, and ethical business practices to protect and serve our stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Governance Principles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our governance framework is built on transparency, accountability, and ethical leadership to ensure sustainable long-term value creation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparency</h3>
              <p className="text-gray-600">
                Open communication with stakeholders through regular reporting and disclosure of material information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accountability</h3>
              <p className="text-gray-600">
                Clear roles and responsibilities with robust oversight mechanisms and performance measurement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ethics</h3>
              <p className="text-gray-600">
                Unwavering commitment to ethical business practices and compliance with all applicable laws and regulations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance</h3>
              <p className="text-gray-600">
                Rigorous adherence to regulatory requirements and industry best practices across all jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Board of Directors</h2>
            <p className="text-lg text-gray-600">
              Our board brings together diverse expertise in technology, finance, and governance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">CEO</span>
                </div>
                <h3 className="text-xl font-bold text-white">Position Available</h3>
                <p className="text-gray-600">Chairman & CEO</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
Seeking qualified candidate with PhD in Computer Science and 15+ years experience in AI and machine learning research.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Board member since 2020</p>
                <p>• Audit Committee Chair</p>
                <p>• Technology Committee</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">ID</span>
                </div>
                <h3 className="text-xl font-bold text-white">Position Available</h3>
                <p className="text-gray-600">Independent Director</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
Seeking qualified CPA with 20+ years in finance and operations, with expertise in scaling technology companies.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Board member since 2021</p>
                <p>• Compensation Committee Chair</p>
                <p>• Finance Committee</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">ID</span>
                </div>
                <h3 className="text-xl font-bold text-white">Position Available</h3>
                <p className="text-gray-600">Independent Director</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
Seeking qualified candidate with PhD in Artificial Intelligence and pioneering experience in AGI research.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Board member since 2022</p>
                <p>• Technology Committee Chair</p>
                <p>• Nominating Committee</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-xl">ID</span>
                </div>
                <h3 className="text-xl font-bold text-white">Position Available</h3>
                <p className="text-gray-600">Independent Director</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
Seeking qualified candidate with JD degree and expertise in technology law and regulatory compliance.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Board member since 2023</p>
                <p>• Governance Committee Chair</p>
                <p>• Risk Committee</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">ID</span>
                </div>
                <h3 className="text-xl font-bold text-white">Position Available</h3>
                <p className="text-gray-600">Independent Director</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
Seeking qualified candidate with MBA and 18+ years experience in strategic planning and business development.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Board member since 2023</p>
                <p>• Strategy Committee Chair</p>
                <p>• Compensation Committee</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">IR</span>
                </div>
                <h3 className="text-xl font-bold text-white">Position Available</h3>
                <p className="text-gray-600">Investor Representative</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
Seeking qualified candidate with 12+ years experience in venture capital and technology investments.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Board member since 2022</p>
                <p>• Investment Committee</p>
                <p>• Strategy Committee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Board Committees</h2>
            <p className="text-lg text-gray-600">
              Specialized committees ensure focused oversight and governance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Audit Committee</h3>
              <p className="text-gray-600 mb-4">
                Oversees financial reporting, internal controls, and external audit processes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Financial statement review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Internal control assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">External auditor oversight</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Risk management oversight</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Compensation Committee</h3>
              <p className="text-gray-600 mb-4">
                Determines executive compensation and oversees equity incentive programs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Executive compensation design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Equity plan administration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Performance metrics setting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Succession planning</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technology Committee</h3>
              <p className="text-gray-600 mb-4">
                Provides oversight of technology strategy, innovation, and cybersecurity.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Technology roadmap review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">R&D investment oversight</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Cybersecurity governance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">AI ethics and safety</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Nominating & Governance</h3>
              <p className="text-gray-600 mb-4">
                Oversees board composition, governance practices, and director nominations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Board composition planning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Director candidate evaluation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Governance policy development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-300">Board effectiveness assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Governance Documents</h2>
            <p className="text-lg text-gray-600">
              Access our key governance policies and procedures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Corporate Charter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Articles of incorporation and corporate bylaws governing company structure.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Download PDF →
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Code of Ethics</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive code of conduct and ethical guidelines for all employees.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Download PDF →
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Board Charter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Board of directors charter outlining roles, responsibilities, and procedures.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Download PDF →
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Committee Charters</h3>
              <p className="text-gray-600 text-sm mb-4">
                Individual charters for all board committees including audit and compensation.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Download PDF →
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Insider Trading Policy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Policy governing securities trading by directors, officers, and employees.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Download PDF →
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Whistleblower Policy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Procedures for reporting concerns about accounting, auditing, or ethical violations.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Download PDF →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">ESG Commitment</h2>
            <p className="text-lg text-gray-600">
              Environmental, Social, and Governance initiatives driving sustainable value creation
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">E</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Environmental</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Carbon neutral operations by 2026</li>
                  <li>• Renewable energy for all data centers</li>
                  <li>• AI for climate change solutions</li>
                  <li>• Sustainable supply chain practices</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Social</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Diverse and inclusive workforce</li>
                  <li>• AI education accessibility programs</li>
                  <li>• Community technology initiatives</li>
                  <li>• Employee wellbeing and development</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">G</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Governance</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Independent board majority</li>
                  <li>• Transparent reporting practices</li>
                  <li>• Ethical AI development standards</li>
                  <li>• Stakeholder engagement programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Governance?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Contact our investor relations team for more information about our governance practices and policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Contact Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investors/financials"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-purple-900 transition-colors"
            >
              Financial Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
