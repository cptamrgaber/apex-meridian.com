import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, TrendingUp, Award, ArrowRight, CheckCircle, Brain } from 'lucide-react';
import BrandName from '@/components/BrandName';

export default function EducationSolutionsPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-teal-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            src="/images/solutions/education-ai-hq.jpg"
            alt="Education AI Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-green-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">EduGenius</h1>
                  <p className="text-xl text-green-200">Personalized Learning Platform</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                Transform learning experiences with personalized AI tutoring, adaptive content delivery, and intelligent assessment systems that empower both educators and students.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gray-900 text-green-50 rounded-xl font-semibold hover:bg-green-800 transition-all duration-300 transform hover:scale-105">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-gray-900/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-900/30 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Personalized Learning Paths</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Intelligent Content Adaptation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Real-time Progress Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Automated Assessment & Feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Personalized Learning at Scale</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered education platform adapts to each learner&apos;s unique needs, providing personalized instruction and support that maximizes learning outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-green-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adaptive Learning</h3>
              <p className="text-gray-300 mb-4">
                AI algorithms adjust content difficulty and learning paths in real-time based on student performance and engagement.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Personalized learning paths</li>
                <li>• Dynamic content adjustment</li>
                <li>• Learning style recognition</li>
                <li>• Progress tracking & analytics</li>
              </ul>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Intelligent Tutoring</h3>
              <p className="text-gray-300 mb-4">
                AI-powered virtual tutors provide 24/7 personalized support, answering questions and guiding students through complex concepts.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Natural language interaction</li>
                <li>• Concept explanation & examples</li>
                <li>• Homework assistance</li>
                <li>• Socratic questioning methods</li>
              </ul>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment & Analytics</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive assessment tools with detailed analytics help educators understand student progress and optimize instruction.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Automated grading & feedback</li>
                <li>• Learning gap identification</li>
                <li>• Predictive performance modeling</li>
                <li>• Educator dashboard & insights</li>
              </ul>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Proven Learning Outcomes</h2>
            <p className="text-lg text-gray-300 mb-8">
              Educational institutions using our AI see significant improvements in student performance
            </p>
            <div className="flex justify-center">
              <Image
                src="/assets/education-learning-analytics.png"
                alt="Education Learning Analytics Dashboard"
                width={900}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">35%</div>
              <p className="text-gray-300 font-medium">Improvement in Test Scores</p>
              <p className="text-sm text-gray-400 mt-1">Across all grade levels</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">50%</div>
              <p className="text-gray-300 font-medium">Reduction in Learning Time</p>
              <p className="text-sm text-gray-400 mt-1">Through personalized paths</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">90%</div>
              <p className="text-gray-300 font-medium">Student Engagement Rate</p>
              <p className="text-sm text-gray-400 mt-1">Interactive AI tutoring</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">25%</div>
              <p className="text-gray-300 font-medium">Teacher Time Savings</p>
              <p className="text-sm text-gray-400 mt-1">Automated grading & feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Educational AI</h2>
            <p className="text-lg text-gray-300">
              Powered by cutting-edge machine learning and cognitive science research
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">How Our AI Personalizes Learning</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-300 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Learning Profile Creation</h4>
                    <p className="text-gray-300">
                      AI analyzes student interactions, performance patterns, and learning preferences to create detailed learner profiles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-300 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Content Adaptation</h4>
                    <p className="text-gray-300">
                      Machine learning algorithms adjust content presentation, difficulty, and pacing to match individual learning needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-300 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Real-time Feedback</h4>
                    <p className="text-gray-300">
                      Continuous assessment and feedback help students understand concepts and correct misconceptions immediately.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-300 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h4>
                    <p className="text-gray-300">
                      AI predicts learning outcomes and identifies students at risk, enabling proactive intervention and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-white mb-6">Key AI Features</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-gray-300">Natural language processing for content understanding</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-gray-300">Computer vision for handwriting and diagram analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-gray-300">Reinforcement learning for adaptive questioning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-gray-300">Knowledge graph modeling for concept relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-gray-300">Emotion recognition for engagement monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span className="text-gray-300">Collaborative filtering for peer learning recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Success Story</h2>
              <p className="text-lg text-gray-300">
                How Lincoln High School transformed student outcomes with AI-powered learning
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <p className="text-gray-300 mb-6">
                  Lincoln High School struggled with diverse learning needs across 2,000 students. Traditional one-size-fits-all instruction left many students behind, particularly in STEM subjects.
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-gray-300 mb-6">
                  We implemented our comprehensive AI education platform across all grade levels, providing personalized learning paths and intelligent tutoring for every student.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span className="text-gray-300">Personalized learning paths for 2,000+ students</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span className="text-gray-300">24/7 AI tutoring support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    <span className="text-gray-300">Real-time teacher analytics dashboard</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Results After One Academic Year</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Math Test Scores</span>
                    <span className="text-2xl font-bold text-green-300">+42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Science Test Scores</span>
                    <span className="text-2xl font-bold text-blue-300">+38%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Student Engagement</span>
                    <span className="text-2xl font-bold text-purple-300">+55%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Graduation Rate</span>
                    <span className="text-2xl font-bold text-orange-300">+15%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-300 italic">
                    &quot;Our students are more engaged and achieving better results than ever before. The AI tutoring has been a game-changer for personalized learning.&quot;
                  </p>
                  <p className="text-sm font-medium text-white mt-2">
                    - Principal, Lincoln High School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Easy Implementation</h2>
            <p className="text-lg text-gray-300">
              Get started with AI-powered education in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-300 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Setup & Integration</h3>
              <p className="text-gray-300">
                Quick integration with existing LMS and student information systems. No disruption to current workflows.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-300 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Teacher Training</h3>
              <p className="text-gray-300">
                Comprehensive training program to help educators maximize the benefits of AI-powered teaching tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-300 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Launch & Support</h3>
              <p className="text-gray-300">
                Go live with full support from our education specialists. Ongoing optimization and feature updates included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Education with AI</h2>
          <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
            Join thousands of educators already using <BrandName /> AI to personalize learning and improve student outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-50 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/technology/platform"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-green-50 transition-colors"
            >
              Learn About Our Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
