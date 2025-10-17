import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, TrendingUp, Award, ArrowRight, CheckCircle, Brain } from 'lucide-react';

export default function EducationSolutionsPage() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-teal-900 text-white py-16">
        <Image
          src="/assets/education-hero.jpg"
          alt="Education background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-green-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education AI Solutions
            </h1>
            <p className="text-xl text-light-muted dark:text-green-200 max-w-3xl mx-auto">
              Transform learning experiences with personalized AI tutoring, adaptive content delivery, and intelligent assessment systems that empower both educators and students.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">Personalized Learning at Scale</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted max-w-3xl mx-auto">
              Our AI-powered education platform adapts to each learner&apos;s unique needs, providing personalized instruction and support that maximizes learning outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-light-muted dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Adaptive Learning</h3>
              <p className="text-light-muted dark:text-dark-muted mb-4">
                AI algorithms adjust content difficulty and learning paths in real-time based on student performance and engagement.
              </p>
              <ul className="text-sm text-light-muted dark:text-dark-muted space-y-1 mb-4">
                <li>• Personalized learning paths</li>
                <li>• Dynamic content adjustment</li>
                <li>• Learning style recognition</li>
                <li>• Progress tracking & analytics</li>
              </ul>
              <Link href="/contact" className="text-green-600 hover:text-green-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-light-muted dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Intelligent Tutoring</h3>
              <p className="text-light-muted dark:text-dark-muted mb-4">
                AI-powered virtual tutors provide 24/7 personalized support, answering questions and guiding students through complex concepts.
              </p>
              <ul className="text-sm text-light-muted dark:text-dark-muted space-y-1 mb-4">
                <li>• Natural language interaction</li>
                <li>• Concept explanation & examples</li>
                <li>• Homework assistance</li>
                <li>• Socratic questioning methods</li>
              </ul>
              <Link href="/contact" className="text-green-600 hover:text-green-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-light-muted dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Assessment & Analytics</h3>
              <p className="text-light-muted dark:text-dark-muted mb-4">
                Comprehensive assessment tools with detailed analytics help educators understand student progress and optimize instruction.
              </p>
              <ul className="text-sm text-light-muted dark:text-dark-muted space-y-1 mb-4">
                <li>• Automated grading & feedback</li>
                <li>• Learning gap identification</li>
                <li>• Predictive performance modeling</li>
                <li>• Educator dashboard & insights</li>
              </ul>
              <Link href="/contact" className="text-green-600 hover:text-green-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">Proven Learning Outcomes</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
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
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <p className="text-light-muted dark:text-dark-muted font-medium">Improvement in Test Scores</p>
              <p className="text-sm text-light-muted dark:text-dark-muted mt-1">Across all grade levels</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <p className="text-light-muted dark:text-dark-muted font-medium">Reduction in Learning Time</p>
              <p className="text-sm text-light-muted dark:text-dark-muted mt-1">Through personalized paths</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <p className="text-light-muted dark:text-dark-muted font-medium">Student Engagement Rate</p>
              <p className="text-sm text-light-muted dark:text-dark-muted mt-1">Interactive AI tutoring</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
              <p className="text-light-muted dark:text-dark-muted font-medium">Teacher Time Savings</p>
              <p className="text-sm text-light-muted dark:text-dark-muted mt-1">Automated grading & feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">Advanced Educational AI</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted">
              Powered by cutting-edge machine learning and cognitive science research
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">How Our AI Personalizes Learning</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-light-muted dark:bg-green-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Learning Profile Creation</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      AI analyzes student interactions, performance patterns, and learning preferences to create detailed learner profiles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light-muted dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Content Adaptation</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      Machine learning algorithms adjust content presentation, difficulty, and pacing to match individual learning needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light-muted dark:bg-purple-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Real-time Feedback</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      Continuous assessment and feedback help students understand concepts and correct misconceptions immediately.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">Predictive Analytics</h4>
                    <p className="text-light-muted dark:text-dark-muted">
                      AI predicts learning outcomes and identifies students at risk, enabling proactive intervention and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-light-surface dark:bg-dark-surface rounded-lg p-8">
              <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">Key AI Features</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-light-text dark:text-dark-text">Natural language processing for content understanding</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-light-text dark:text-dark-text">Computer vision for handwriting and diagram analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-light-text dark:text-dark-text">Reinforcement learning for adaptive questioning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-light-text dark:text-dark-text">Knowledge graph modeling for concept relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-light-text dark:text-dark-text">Emotion recognition for engagement monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-light-text dark:text-dark-text">Collaborative filtering for peer learning recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">Success Story</h2>
              <p className="text-lg text-light-muted dark:text-dark-muted">
                How Lincoln High School transformed student outcomes with AI-powered learning
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">The Challenge</h3>
                <p className="text-light-muted dark:text-dark-muted mb-6">
                  Lincoln High School struggled with diverse learning needs across 2,000 students. Traditional one-size-fits-all instruction left many students behind, particularly in STEM subjects.
                </p>
                
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">The Solution</h3>
                <p className="text-light-muted dark:text-dark-muted mb-6">
                  We implemented our comprehensive AI education platform across all grade levels, providing personalized learning paths and intelligent tutoring for every student.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Personalized learning paths for 2,000+ students</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">24/7 AI tutoring support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-light-text dark:text-dark-text">Real-time teacher analytics dashboard</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">Results After One Academic Year</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-light-muted dark:text-dark-muted">Math Test Scores</span>
                    <span className="text-2xl font-bold text-green-600">+42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light-muted dark:text-dark-muted">Science Test Scores</span>
                    <span className="text-2xl font-bold text-blue-600">+38%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light-muted dark:text-dark-muted">Student Engagement</span>
                    <span className="text-2xl font-bold text-purple-600">+55%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light-muted dark:text-dark-muted">Graduation Rate</span>
                    <span className="text-2xl font-bold text-orange-600">+15%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-light-surface dark:bg-dark-surface rounded-lg">
                  <p className="text-sm text-light-muted dark:text-dark-muted italic">
                    &quot;Our students are more engaged and achieving better results than ever before. The AI tutoring has been a game-changer for personalized learning.&quot;
                  </p>
                  <p className="text-sm font-medium text-light-text dark:text-dark-text mt-2">
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
            <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4">Easy Implementation</h2>
            <p className="text-lg text-light-muted dark:text-dark-muted">
              Get started with AI-powered education in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-light-muted dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Setup & Integration</h3>
              <p className="text-light-muted dark:text-dark-muted">
                Quick integration with existing LMS and student information systems. No disruption to current workflows.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-light-muted dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Teacher Training</h3>
              <p className="text-light-muted dark:text-dark-muted">
                Comprehensive training program to help educators maximize the benefits of AI-powered teaching tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-light-muted dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">Launch & Support</h3>
              <p className="text-light-muted dark:text-dark-muted">
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
          <p className="text-xl text-light-muted dark:text-green-200 mb-8 max-w-3xl mx-auto">
            Join thousands of educators already using A  p  e  x  M  e  r  i  d  i  a  n AI to personalize learning and improve student outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/technology/platform"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-900 transition-colors"
            >
              Learn About Our Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
