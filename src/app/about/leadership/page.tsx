import React from 'react';
import Link from 'next/link';
import { Users, Target, Award, ArrowRight } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Leadership Team
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Building a world-class team of AI experts, engineers, and visionaries to lead the future of artificial intelligence across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in building diverse, innovative teams that combine deep technical expertise with strong business acumen and ethical leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vision-Driven</h3>
              <p className="text-gray-600">
                Leaders who can see beyond current limitations and drive breakthrough innovations in AI technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative</h3>
              <p className="text-gray-600">
                Team-first approach that values diverse perspectives and fosters an inclusive, high-performance culture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence-Focused</h3>
              <p className="text-gray-600">
                Commitment to the highest standards of technical excellence, ethical practices, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Leadership Positions</h2>
            <p className="text-lg text-gray-600">
              Key leadership roles driving our mission to revolutionize AI across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">CEO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chief Executive Officer</h3>
                <p className="text-gray-600">Executive Leadership</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Visionary leader responsible for overall company strategy, growth, and execution. Drives innovation and market expansion across all AI verticals.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Strategic planning and execution</p>
                <p>• Investor and stakeholder relations</p>
                <p>• Market positioning and growth</p>
                <p>• Company culture and vision</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">CTO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chief Technology Officer</h3>
                <p className="text-gray-600">Technology Leadership</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Technical visionary leading AI research, platform development, and technology strategy. Oversees all engineering and R&D initiatives.
              </p>
              <div className="text-xs text-gray-500">
                <p>• AI research and development</p>
                <p>• Technology roadmap planning</p>
                <p>• Engineering team leadership</p>
                <p>• Technical architecture decisions</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">CFO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chief Financial Officer</h3>
                <p className="text-gray-600">Financial Leadership</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Financial strategist managing company finances, fundraising, and investor relations. Ensures sustainable growth and profitability.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Financial planning and analysis</p>
                <p>• Fundraising and investor relations</p>
                <p>• Risk management and compliance</p>
                <p>• Strategic financial partnerships</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-lg">CPO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chief Product Officer</h3>
                <p className="text-gray-600">Product Leadership</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Product visionary defining AI solutions across aviation, cybersecurity, and education. Drives product strategy and user experience.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Product strategy and roadmap</p>
                <p>• User experience design</p>
                <p>• Market research and validation</p>
                <p>• Cross-functional team coordination</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-lg">CSO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chief Sales Officer</h3>
                <p className="text-gray-600">Sales Leadership</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Sales leader driving revenue growth and market expansion. Builds strategic partnerships and enterprise customer relationships.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Sales strategy and execution</p>
                <p>• Enterprise customer acquisition</p>
                <p>• Strategic partnerships</p>
                <p>• Revenue growth optimization</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-lg">CHRO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chief Human Resources Officer</h3>
                <p className="text-gray-600">People Leadership</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                People leader building world-class teams and fostering inclusive culture. Drives talent acquisition and employee development.
              </p>
              <div className="text-xs text-gray-500">
                <p>• Talent acquisition and retention</p>
                <p>• Culture and employee engagement</p>
                <p>• Performance management</p>
                <p>• Diversity and inclusion initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Principles</h2>
            <p className="text-lg text-gray-600">
              The core values that guide our leadership team and decision-making
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600 mb-4">
                We prioritize breakthrough thinking and encourage calculated risk-taking to push the boundaries of what&apos;s possible in AI.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Embrace emerging technologies</li>
                <li>• Foster creative problem-solving</li>
                <li>• Invest in R&D and experimentation</li>
                <li>• Challenge conventional approaches</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Obsession</h3>
              <p className="text-gray-600 mb-4">
                Every decision starts with understanding and serving our customers&apos; needs, ensuring our AI solutions deliver real value.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Deep customer understanding</li>
                <li>• Rapid response to feedback</li>
                <li>• Continuous product improvement</li>
                <li>• Long-term partnership mindset</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ethical AI Development</h3>
              <p className="text-gray-600 mb-4">
                We are committed to developing AI responsibly, with transparency, fairness, and safety at the core of everything we build.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Transparent AI decision-making</li>
                <li>• Bias detection and mitigation</li>
                <li>• Privacy and security by design</li>
                <li>• Responsible AI governance</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 mb-4">
                We foster a culture of continuous learning and adaptation, staying ahead of the rapidly evolving AI landscape.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Regular skill development</li>
                <li>• Knowledge sharing culture</li>
                <li>• Industry conference participation</li>
                <li>• Cross-functional collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Leadership Team</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            We&apos;re building a world-class team of leaders who share our vision for the future of AI. Explore leadership opportunities at <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
              <span>A p e x</span>
              
              <span>M e r i d i a n</span>
              <sup className="text-xs ml-1">®</sup>
            </span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/careers"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              View Open Positions
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
