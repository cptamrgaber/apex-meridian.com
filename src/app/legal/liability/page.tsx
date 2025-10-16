'use client';

import { useLanguage } from '@/lib/language-context';

export default function CompanyLiability() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Company Liability and Limitations
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <span className="font-light" style={{ letterSpacing: '0.2em' }}>
                  A  p  e  x  M  e  r  i  d  i  a  n<sup className="text-xs ml-1">®</sup>
                </span> operates under Egyptian Limited Liability Company (LLC) structure, 
                which provides specific protections and limitations regarding company liability.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Limited liability protection for company members and shareholders</li>
                <li>Liability limited to company assets and capital contributions</li>
                <li>Personal assets of members protected under Egyptian LLC law</li>
                <li>Professional indemnity insurance coverage for technology services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Service Liability Limitations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our AI technology services are provided with specific limitations and disclaimers 
                to ensure clear understanding of responsibilities and expectations.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Performance Disclaimers</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>AI predictions and recommendations are probabilistic, not guaranteed</li>
                <li>Performance metrics represent targets and may vary based on implementation</li>
                <li>Results depend on data quality, system integration, and usage patterns</li>
                <li>Continuous monitoring and adjustment may be required for optimal performance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technical Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Service availability subject to maintenance windows and technical requirements</li>
                <li>Third-party integrations may affect system performance and availability</li>
                <li>Data processing limitations based on computational resources and algorithms</li>
                <li>Network connectivity and infrastructure dependencies acknowledged</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Exclusions and Limitations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The following exclusions and limitations apply to our services and liability:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Excluded Damages</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Indirect, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Data loss not caused by our direct negligence</li>
                <li>Third-party claims arising from customer's use of our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Maximum Liability Cap</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Total liability limited to fees paid for services in the 12 months preceding the claim</li>
                <li>Professional indemnity insurance coverage up to policy limits</li>
                <li>Force majeure events exclude liability for service interruptions</li>
                <li>Customer's own negligence or misuse limits our liability exposure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Insurance and Risk Management
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We maintain comprehensive insurance coverage and risk management practices 
                to protect both our company and our clients.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Professional indemnity insurance for technology services</li>
                <li>General liability coverage for business operations</li>
                <li>Cyber liability insurance for data protection and security incidents</li>
                <li>Directors and officers insurance for corporate governance protection</li>
                <li>Regular risk assessments and mitigation strategies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Customer Responsibilities
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Customers have specific responsibilities that affect liability and service delivery:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Providing accurate and complete information for AI training and implementation</li>
                <li>Following recommended security practices and access controls</li>
                <li>Maintaining appropriate backup and disaster recovery procedures</li>
                <li>Complying with applicable laws and regulations in their jurisdiction</li>
                <li>Promptly reporting issues or concerns to enable timely resolution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Dispute Resolution
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We are committed to resolving disputes fairly and efficiently through established procedures:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Initial resolution through direct communication and technical support</li>
                <li>Escalation to management for complex or unresolved issues</li>
                <li>Mediation services available for commercial disputes</li>
                <li>Arbitration under Egyptian Commercial Arbitration Law when required</li>
                <li>Court jurisdiction in Cairo, Egypt for legal proceedings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                For questions regarding liability, insurance, or legal matters:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  Email: legal@apex-meridian.com<br />
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
