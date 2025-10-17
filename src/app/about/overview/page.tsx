import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Globe, TrendingUp, Target, ArrowRight } from 'lucide-react';
import VisualChart from '@/components/VisualChart';

export default function CompanyOverviewPage() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen">
      {/* Hero Section */}
      <section className="bg-light-surface dark:bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 text-light-text dark:text-dark-text py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Company Overview
            </h1>
            <p className="text-xl text-light-muted dark:text-blue-200 max-w-3xl mx-auto">
              Leading the artificial intelligence revolution with innovative solutions that transform industries and empower human potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">Our Mission</h2>
              <p className="text-lg text-light-muted dark:text-dark-muted mb-6">
                To democratize artificial intelligence by developing cutting-edge solutions that solve complex real-world problems across aviation, cybersecurity, education, and AGI development. We believe AI should augment human capabilities, not replace them.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-light-text dark:text-dark-text">Innovation First</h3>
                    <p className="text-light-muted dark:text-dark-muted">Pushing the boundaries of what&apos;s possible with AI technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-light-text dark:text-dark-text">Human-Centered</h3>
                    <p className="text-light-muted dark:text-dark-muted">Designing AI that enhances human decision-making and creativity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-light-text dark:text-dark-text">Global Impact</h3>
                    <p className="text-light-muted dark:text-dark-muted">Creating solutions that benefit organizations and communities worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/assets/A  p  e  x  M  e  r  i  d  i  a  n_tree_not-glowing.png"
                alt="A  p  e  x  M  e  r  i  d  i  a  n Vision"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">
              <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                <span>A  p  e  x</span>
                
                <span>M e r i d i a n</span>
                <sup className="text-xs ml-1">®</sup>
              </span>
              <span className="text-light-text dark:text-dark-text"> by the Numbers</span>
            </h2>
            <p className="text-lg text-light-muted dark:text-dark-muted">Our growth and impact across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Growing</div>
              <p className="text-light-muted dark:text-dark-muted">User Base</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Expanding</div>
              <p className="text-light-muted dark:text-dark-muted">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Enterprise-Grade</div>
              <p className="text-light-muted dark:text-dark-muted">Platform Reliability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Global</div>
              <p className="text-light-muted dark:text-dark-muted">Market Presence</p>
            </div>
          </div>
          
          {/* Growth Chart */}
          <div className="grid md:grid-cols-2 gap-8">
            <VisualChart 
              type="growth" 
              title="User Growth Trajectory" 
              data={[20, 45, 65, 80, 95]} 
              labels={['2020', '2021', '2022', '2023', '2024']}
              color="#3B82F6"
            />
            <VisualChart 
              type="bar" 
              title="Market Expansion" 
              data={[30, 60, 85, 70, 90]} 
              labels={['Aviation', 'Cyber', 'Education', 'AGI', 'Platform']}
              color="#10B981"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">Our Core Values</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-light-muted dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">Excellence</h3>
              <p className="text-light-muted dark:text-dark-muted">
                We strive for excellence in every solution we deliver, maintaining the highest standards of quality and performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-light-muted dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">Collaboration</h3>
              <p className="text-light-muted dark:text-dark-muted">
                We believe in the power of collaboration, working closely with clients and partners to achieve shared success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-light-muted dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">Integrity</h3>
              <p className="text-light-muted dark:text-dark-muted">
                We operate with transparency and ethical responsibility, ensuring our AI solutions benefit society as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-dark-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-xl text-light-muted dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Discover how <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
              <span>A  p  e  x</span>
              
              <span>M e r i d i a n</span>
              <sup className="text-xs ml-1">®</sup>
            </span> can transform your industry with cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/leadership"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rborder-dark-border text-dark-text hover:bg-dark-bg hover:text-blue-900ansition-colors"
            >
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-light-bg hover:bg-light-muted transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
