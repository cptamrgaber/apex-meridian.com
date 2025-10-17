'use client';

import { useLanguage } from '@/lib/language-context';

export default function Licenses() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Licenses and Intellectual Property
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Software Licenses
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <span className="font-light" style={{ letterSpacing: '0.2em' }}>
                  A  p  e  x    M  e  r  i  d  i  a  n<sup className="text-xs ml-1">®</sup>
                </span> provides various software licensing options to meet different customer needs 
                and use cases across our AI technology platforms.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Commercial Licenses</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Enterprise License:</strong> Full commercial use with unlimited deployment</li>
                <li><strong>Professional License:</strong> Commercial use with specified user limits</li>
                <li><strong>Starter License:</strong> Limited commercial use for small organizations</li>
                <li><strong>Developer License:</strong> Development and testing environments only</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Academic and Research Licenses</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Academic License:</strong> Free use for educational institutions</li>
                <li><strong>Research License:</strong> Non-commercial research and development</li>
                <li><strong>Student License:</strong> Individual student use for learning purposes</li>
                <li><strong>Open Source Contributions:</strong> Selected components under open source licenses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our intellectual property portfolio includes patents, trademarks, copyrights, 
                and trade secrets that protect our innovative AI technologies.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Patents and Patent Applications</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>AI algorithm optimization and neural network architectures</li>
                <li>Predictive maintenance systems for aviation industry</li>
                <li>Cybersecurity threat detection and response mechanisms</li>
                <li>Adaptive learning systems for personalized education</li>
                <li>Artificial General Intelligence (AGI) reasoning frameworks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Trademarks and Service Marks</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Apex Meridian®</strong> - Registered trademark for AI technology services</li>
                <li><strong>AeroMind™</strong> - Aviation intelligence platform</li>
                <li><strong>CyberGuard™</strong> - Intelligent security shield</li>
                <li><strong>EduGenius™</strong> - Personalized learning AI</li>
                <li><strong>MeridianAGI™</strong> - Artificial General Intelligence platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Third-Party Licenses
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We acknowledge and comply with all third-party software licenses and 
                open source components used in our technology stack.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Open Source Components</h3>
              <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>TensorFlow:</strong> Apache License 2.0</li>
                  <li><strong>PyTorch:</strong> BSD 3-Clause License</li>
                  <li><strong>React:</strong> MIT License</li>
                  <li><strong>Node.js:</strong> MIT License</li>
                  <li><strong>PostgreSQL:</strong> PostgreSQL License</li>
                  <li><strong>Redis:</strong> BSD 3-Clause License</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Commercial Third-Party Software</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Cloud infrastructure services (AWS, Azure, Google Cloud)</li>
                <li>Database management systems and analytics platforms</li>
                <li>Security and monitoring tools</li>
                <li>Development and deployment tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. License Terms and Conditions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All software licenses are subject to specific terms and conditions that govern usage, 
                distribution, and modification rights.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage Rights</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Right to use software within scope of purchased license</li>
                <li>Installation and deployment on specified number of systems</li>
                <li>Access to updates and patches during license period</li>
                <li>Technical support according to license tier</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Restrictions</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Prohibition on reverse engineering or decompilation</li>
                <li>No redistribution without explicit written permission</li>
                <li>Compliance with export control regulations</li>
                <li>Respect for intellectual property and patent rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Compliance and Audit Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We maintain the right to verify license compliance and conduct audits 
                to ensure proper usage of our software and intellectual property.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Annual compliance reporting for enterprise licenses</li>
                <li>Audit rights with reasonable notice and business hours</li>
                <li>Automated usage monitoring and reporting tools</li>
                <li>Cooperation required for license verification processes</li>
                <li>Remediation procedures for compliance violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. License Violations and Enforcement
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We take license violations seriously and will pursue appropriate legal remedies 
                to protect our intellectual property rights.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Immediate termination of license for material breaches</li>
                <li>Legal action for unauthorized use or distribution</li>
                <li>Damages and injunctive relief for intellectual property infringement</li>
                <li>Cooperation with law enforcement for criminal violations</li>
                <li>DMCA takedown procedures for copyright infringement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                For licensing inquiries, intellectual property matters, or compliance questions:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Licensing:</strong> licensing@apex-meridian.com<br />
                  <strong>Legal:</strong> legal@apex-meridian.com<br />
                  <strong>IP Matters:</strong> ip@apex-meridian.com<br />
                  Address: New Cairo, Cairo Governorate, Egypt<br />
                  Phone: +201200929092
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
