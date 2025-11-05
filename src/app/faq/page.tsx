'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import BrandName from '@/components/BrandName';
import { useLanguage } from '@/lib/language-context';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      category: "General",
      question: "What is <BrandName />?",
      answer: "Apex-Meridian is a leading artificial intelligence company that develops cutting-edge AI solutions for aviation, cybersecurity, education, and AGI development. We focus on creating AI that augments human capabilities and solves complex real-world problems."
    },
    {
      category: "General",
      question: "What industries do you serve?",
      answer: "We primarily serve four key industries: Aviation (with AeroMind), Cybersecurity (with CyberGuard), Education (with EduGenius), and Artificial General Intelligence development (with MeridianAGI)."
    },
    {
      category: "Services",
      question: "How does AeroMind improve aviation operations?",
      answer: "AeroMind uses advanced AI to predict maintenance needs, optimize flight routes in real-time, enhance passenger safety through intelligent automation, and provide comprehensive analytics for operational efficiency."
    },
    {
      category: "Services",
      question: "What makes CyberGuard different from other security solutions?",
      answer: "CyberGuard uses next-generation AI to anticipate threats before they materialize, providing proactive defense rather than reactive responses. It includes behavioral analysis, advanced threat prediction, and automated incident response."
    },
    {
      category: "Services",
      question: "How does EduGenius personalize learning?",
      answer: "EduGenius analyzes each student's unique learning style, pace, and preferences to create personalized educational journeys. It adapts content difficulty, suggests learning paths, and provides real-time feedback to maximize learning potential."
    },
    {
      category: "Technical",
      question: "What is the MeridianAI Platform?",
      answer: "MeridianAI is our proprietary AI platform that powers all our solutions. It features real-time processing, scalable architecture, enterprise-grade security, and advanced analytics capabilities."
    },
    {
      category: "Technical",
      question: "How secure is your AI platform?",
      answer: "Our platform implements enterprise-grade security with end-to-end encryption, quantum-safe protocols, compliance with industry standards (IATA, ICAO, EASA, ECARS, FAA), and regular security audits."
    },
    {
      category: "Technical",
      question: "Can your solutions integrate with existing systems?",
      answer: "Yes, our AI solutions are designed with integration in mind. We provide comprehensive APIs, support for industry-standard protocols, and work closely with clients to ensure seamless integration with existing infrastructure."
    },
    {
      category: "Business",
      question: "How do I get started with <BrandName /> solutions?",
      answer: "Contact our team through the website or email to schedule a consultation. We'll assess your needs, provide a customized demonstration, and develop an implementation plan tailored to your organization."
    },
    {
      category: "Business",
      question: "Do you offer training and support?",
      answer: "Yes, we provide comprehensive training programs, ongoing technical support, and dedicated customer success managers to ensure you get maximum value from our AI solutions."
    },
    {
      category: "Business",
      question: "What is your pricing model?",
      answer: "Our pricing is customized based on your specific needs, scale of implementation, and required features. We offer flexible licensing options including subscription-based and enterprise licensing models."
    },
    {
      category: "Compliance",
      question: "Are your solutions compliant with industry regulations?",
      answer: "Yes, our solutions comply with relevant industry standards including IATA, ICAO, EASA, ECARS, and FAA regulations for aviation, as well as cybersecurity frameworks and educational standards."
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about{' '}
            <BrandName />{' '}
            AI solutions
          </p>
        </div>

        {/* FAQ Categories */}
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              {category}
            </h2>
            
            <div className="space-y-4">
              {faqData
                .filter(item => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqData.indexOf(item);
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={globalIndex} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        <span className="text-lg font-medium text-white">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-12 bg-blue-50 dark:bg-slate-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@apex-meridian.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-300 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
