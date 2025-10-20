'use client';

import { useLanguage } from '@/lib/language-context';
import BrandName from '@/components/BrandName';

export default function LLCResponsibility() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-8">
            LLC Company Responsibility
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Company Structure and Governance
              </h2>
              <p className="text-gray-300 mb-4">
                <span className="font-light" style={{ letterSpacing: '0.2em' }}>
                  <BrandName />
                </span> operates as a Limited Liability Company (LLC) under Egyptian law, 
                providing a structured framework for corporate governance, operational transparency, 
                and stakeholder accountability.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Registered under Egyptian Commercial Law</li>
                <li>Compliance with Corporate Governance Code</li>
                <li>Regular board meetings and decision documentation</li>
                <li>Transparent financial reporting and auditing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Corporate Social Responsibility
              </h2>
              <p className="text-gray-300 mb-4">
                Our commitment to responsible business practices extends beyond legal compliance 
                to encompass ethical AI development, environmental sustainability, and community engagement.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Ethical AI development and deployment standards</li>
                <li>Environmental impact assessment and mitigation</li>
                <li>Community technology education programs</li>
                <li>Diversity and inclusion in workforce development</li>
                <li>Responsible data handling and privacy protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Stakeholder Responsibilities
              </h2>
              <p className="text-gray-300 mb-4">
                We maintain clear responsibilities toward all stakeholders including customers, 
                employees, investors, partners, and the broader community.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Customer Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Delivering high-quality AI solutions as promised</li>
                <li>Providing comprehensive support and documentation</li>
                <li>Maintaining service availability and performance standards</li>
                <li>Protecting customer data and intellectual property</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Employee Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Providing safe and inclusive work environment</li>
                <li>Fair compensation and professional development opportunities</li>
                <li>Compliance with labor laws and employment standards</li>
                <li>Supporting work-life balance and employee wellbeing</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Investor Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Transparent financial reporting and communication</li>
                <li>Prudent risk management and strategic planning</li>
                <li>Maximizing long-term shareholder value</li>
                <li>Regular updates on company performance and outlook</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Regulatory Compliance
              </h2>
              <p className="text-gray-300 mb-4">
                As an AI technology company, we maintain strict compliance with applicable 
                regulations across all jurisdictions where we operate.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Egyptian Investment and Company Law compliance</li>
                <li>International data protection regulations (GDPR, CCPA)</li>
                <li>AI ethics and algorithmic accountability standards</li>
                <li>Industry-specific regulations (aviation, cybersecurity, education)</li>
                <li>Export control and technology transfer regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Risk Management and Mitigation
              </h2>
              <p className="text-gray-300 mb-4">
                We implement comprehensive risk management frameworks to identify, 
                assess, and mitigate potential risks to our business and stakeholders.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Technology and cybersecurity risk assessment</li>
                <li>Financial and operational risk monitoring</li>
                <li>Regulatory and compliance risk management</li>
                <li>Business continuity and disaster recovery planning</li>
                <li>Insurance coverage and liability protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Contact Information
              </h2>
              <p className="text-gray-300">
                For questions regarding our corporate responsibilities or governance practices:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg">
                <p className="text-gray-300">
                  Email: governance@apex-meridian.com<br />
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
