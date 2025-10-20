import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, AlertTriangle, Eye, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import BrandName from '@/components/BrandName';

export default function CybersecuritySolutionsPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            src="/images/solutions/cybersecurity-ai.jpg"
            alt="Cybersecurity AI Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">CyberGuard</h1>
                  <p className="text-xl text-red-200">Intelligent Security Shield</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
                Protect your organization with advanced AI-driven threat detection, automated incident response, and predictive risk management that stays ahead of evolving cyber threats.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gray-900 text-red-900 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-gray-900/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-900/30 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Real-time Threat Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Automated Incident Response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Predictive Risk Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Zero-Day Vulnerability Protection</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">Next-Generation Cyber Defense</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform provides comprehensive protection against sophisticated threats, from zero-day attacks to advanced persistent threats.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Threat Detection</h3>
              <p className="text-gray-600 mb-4">
                Advanced AI algorithms detect known and unknown threats in real-time across your entire network infrastructure.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Zero-day attack detection</li>
                <li>• Behavioral anomaly analysis</li>
                <li>• Network traffic monitoring</li>
                <li>• Endpoint threat hunting</li>
              </ul>
              <Link href="/contact" className="text-red-600 hover:text-red-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Automated incident response and containment to minimize damage and reduce response times from hours to seconds.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Automated threat containment</li>
                <li>• Incident classification</li>
                <li>• Response orchestration</li>
                <li>• Forensic analysis automation</li>
              </ul>
              <Link href="/contact" className="text-red-600 hover:text-red-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Predictive risk assessment and vulnerability management to prevent attacks before they happen.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Vulnerability prioritization</li>
                <li>• Risk scoring algorithms</li>
                <li>• Compliance monitoring</li>
                <li>• Security posture assessment</li>
              </ul>
              <Link href="/contact" className="text-red-600 hover:text-red-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Defending Against Modern Threats</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI adapts to the evolving threat landscape, protecting against the latest attack vectors
            </p>
            <div className="flex justify-center">
              <Image
                src="/assets/cybersecurity-threat-map.png"
                alt="Global Cybersecurity Threat Intelligence Map"
                width={900}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">99.7%</div>
              <p className="text-gray-600 font-medium">Threat Detection Rate</p>
              <p className="text-sm text-gray-500 mt-1">Including zero-day attacks</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">&lt;30s</div>
              <p className="text-gray-600 font-medium">Response Time</p>
              <p className="text-sm text-gray-500 mt-1">Automated threat containment</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600 font-medium">False Positive Reduction</p>
              <p className="text-sm text-gray-500 mt-1">Compared to traditional tools</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Continuous Monitoring</p>
              <p className="text-sm text-gray-500 mt-1">AI-powered surveillance</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Security Technology</h2>
            <p className="text-lg text-gray-600">
              Powered by cutting-edge machine learning and behavioral analysis
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">How Our AI Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Data Ingestion</h4>
                    <p className="text-gray-600">
                      Collect and analyze data from network traffic, endpoints, logs, and threat intelligence feeds in real-time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Behavioral Analysis</h4>
                    <p className="text-gray-600">
                      Machine learning models establish baseline behaviors and detect anomalies that indicate potential threats.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Threat Classification</h4>
                    <p className="text-gray-600">
                      Advanced algorithms classify threats by severity, type, and potential impact to prioritize response efforts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Automated Response</h4>
                    <p className="text-gray-600">
                      Immediate containment and remediation actions are executed automatically to minimize damage and exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-white mb-6">Key AI Capabilities</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">Deep learning neural networks for pattern recognition</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">Natural language processing for threat intelligence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">Reinforcement learning for adaptive defense</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">Graph analytics for attack path analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">Ensemble methods for improved accuracy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-300">Federated learning for privacy-preserving updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Success Story</h2>
              <p className="text-lg text-gray-600">
                How GlobalTech Corp prevented a major cyber attack with <BrandName /> AI
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Threat</h3>
                <p className="text-gray-600 mb-6">
                  A sophisticated APT group launched a multi-stage attack targeting GlobalTech&apos;s intellectual property. Traditional security tools failed to detect the initial compromise.
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Our Response</h3>
                <p className="text-gray-600 mb-6">
                  Our AI detected anomalous behavior patterns within 15 minutes of the initial breach, automatically contained the threat, and prevented data exfiltration.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-300">Detected zero-day exploit in real-time</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-300">Automatically isolated compromised systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-300">Prevented $50M in potential damages</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Attack Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <div>
                      <span className="text-sm text-gray-500">00:00</span>
                      <p className="text-gray-300">Initial phishing email delivered</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <div>
                      <span className="text-sm text-gray-500">00:05</span>
                      <p className="text-gray-300">Malicious payload executed</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <div>
                      <span className="text-sm text-gray-500">00:15</span>
                      <p className="text-gray-300">AI detects anomalous behavior</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <span className="text-sm text-gray-500">00:16</span>
                      <p className="text-gray-300">Automatic containment activated</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    &quot;<BrandName />&apos;s AI saved us from what could have been a catastrophic breach. Their technology is years ahead of anything else we&apos;ve seen.&quot;
                  </p>
                  <p className="text-sm font-medium text-white mt-2">
                    - Chief Information Security Officer, GlobalTech Corp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Organization Today</h2>
          <p className="text-xl text-red-200 mb-8 max-w-3xl mx-auto">
            Don&apos;t wait for the next attack. Deploy AI-powered cybersecurity that adapts and evolves with the threat landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-900 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/technology/platform"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-red-900 transition-colors"
            >
              Learn About Our Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
