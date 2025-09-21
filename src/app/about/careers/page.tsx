import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Star } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Shape the future of artificial intelligence with a team of world-class innovators, researchers, and engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Apex-Meridian?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a company that&apos;s not just building AI solutions, but creating the future of intelligent technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600">Work on breakthrough AI technologies that will shape the next decade.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">World-Class Team</h3>
              <p className="text-gray-600">Collaborate with leading experts from top universities and tech companies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Accelerate your career with mentorship and learning opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules and comprehensive benefits for your well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Discover exciting opportunities to make an impact in artificial intelligence
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Senior AI Research Scientist */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior AI Research Scientist</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Cairo, Egypt / Remote</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>Research</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lead groundbreaking research in AGI development, working on cognitive architectures and ethical AI frameworks. PhD in AI/ML required with 5+ years of research experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Deep Learning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">AGI Research</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Machine Learning Engineer */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning Engineer</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Cairo, Egypt</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>Engineering</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Build and deploy scalable ML systems for our aviation and cybersecurity solutions. Experience with Python, TensorFlow/PyTorch, and cloud platforms required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Python</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">TensorFlow</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">AWS/GCP</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Manager */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Product Manager - AI Solutions</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Cairo, Egypt / Remote</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>Product</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Drive product strategy for our AI platform, working closely with engineering and research teams. 5+ years PM experience with AI/ML products preferred.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Product Strategy</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">AI/ML</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">B2B SaaS</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* DevOps Engineer */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior DevOps Engineer</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Cairo, Egypt</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>Infrastructure</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Scale our AI infrastructure to handle enterprise workloads. Experience with Kubernetes, Docker, and cloud-native technologies required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Kubernetes</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Docker</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">CI/CD</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-600">
              We invest in our team&apos;s success and well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive medical, dental, and vision coverage plus wellness programs.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Work</h3>
              <p className="text-gray-600">Remote-friendly culture with flexible hours and unlimited PTO.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learning & Development</h3>
              <p className="text-gray-600">Conference attendance, courses, and research publication opportunities.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Equity & Bonuses</h3>
              <p className="text-gray-600">Competitive equity packages and performance-based bonuses.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Top-Tier Equipment</h3>
              <p className="text-gray-600">Latest MacBooks, monitors, and any tools you need to be productive.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Team Events</h3>
              <p className="text-gray-600">Regular team building, hackathons, and company retreats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Don&apos;t see the perfect role? We&apos;re always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Send Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about/overview"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
