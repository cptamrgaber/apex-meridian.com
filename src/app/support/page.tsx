'use client';

import { useState } from 'react';
import { Search, MessageCircle, Book, Video, Download, ArrowRight, Clock, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import BrandName from '@/components/BrandName';

export default function Support() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      items: [
        "Getting Started Guide",
        "API Reference",
        "Integration Tutorials",
        "Best Practices"
      ],
      link: "/docs"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      items: [
        "Platform Overview",
        "Setup & Configuration",
        "Advanced Features",
        "Troubleshooting"
      ],
      link: "/tutorials"
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with other users and experts",
      items: [
        "General Discussions",
        "Technical Questions",
        "Feature Requests",
        "Success Stories"
      ],
      link: "/community"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "SDKs, tools, and resources",
      items: [
        "Python SDK",
        "JavaScript SDK",
        "Mobile SDKs",
        "Code Examples"
      ],
      link: "/downloads"
    }
  ];

  const supportPlans = [
    {
      name: "Community",
      price: "Free",
      features: [
        "Community forum access",
        "Basic documentation",
        "Email support (48h response)",
        "Standard tutorials"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299/month",
      features: [
        "Priority email support (24h response)",
        "Live chat support",
        "Advanced documentation",
        "Video call support",
        "Custom integration help"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "24/7 dedicated support",
        "Assigned account manager",
        "On-site training",
        "Custom SLA",
        "Priority feature requests",
        "Direct engineering access"
      ],
      popular: false
    }
  ];

  const quickLinks = [
    { title: "System Status", description: "Check current system status and uptime", icon: Shield },
    { title: "Release Notes", description: "Latest updates and new features", icon: Clock },
    { title: "Training Sessions", description: "Scheduled training and webinars", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get help with{' '}
            <span className="font-light" style={{ letterSpacing: '0.2em' }}>
              <BrandName />
            </span>{' '}
            AI solutions
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <link.icon className="h-8 w-8 text-blue-300 dark:text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">
                  {link.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {link.description}
              </p>
              <button className="text-blue-300 dark:text-blue-400 hover:text-blue-200 dark:hover:text-blue-300 font-medium flex items-center">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How can we help you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 dark:bg-blue-900 rounded-full mb-4">
                    <category.icon className="h-8 w-8 text-blue-300 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {category.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Explore {category.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Support Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-slate-800 rounded-lg shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-blue-500 dark:border-blue-400' 
                    : 'border-gray-200 dark:border-gray-700'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-8000 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-300 dark:text-blue-400 mb-4">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-8000 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-800 dark:bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need immediate assistance?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our support team is here to help you succeed with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Live Chat
            </button>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-300 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              Contact Support Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
