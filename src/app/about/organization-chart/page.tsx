import React from 'react';
import Link from 'next/link';
import { Mail, Users, Crown, Shield, Code, Brain, Database, Palette, Globe, Calculator, HeartHandshake, BookOpen, Building, ChevronDown, ExternalLink } from 'lucide-react';
import BrandName from '@/components/BrandName';

export default function OrganizationChartPage() {
  const organizationStructure = {
    board: {
      title: "Board of Directors",
      icon: Crown,
      color: "purple",
      positions: [
        { title: "Chairman & CEO", email: "ceo@apex-meridian.com", status: "Position Available" },
        { title: "Independent Director - Technology", email: "tech-director@apex-meridian.com", status: "Position Available" },
        { title: "Independent Director - Finance", email: "finance-director@apex-meridian.com", status: "Position Available" },
        { title: "Independent Director - Legal", email: "legal-director@apex-meridian.com", status: "Position Available" },
        { title: "Independent Director - Strategy", email: "strategy-director@apex-meridian.com", status: "Position Available" },
        { title: "Investor Representative", email: "investor-rep@apex-meridian.com", status: "Position Available" }
      ]
    },
    executive: {
      title: "Executive Leadership",
      icon: Building,
      color: "blue",
      positions: [
        { title: "Chief Executive Officer", email: "ceo@apex-meridian.com", status: "Position Available" },
        { title: "Chief Technology Officer", email: "cto@apex-meridian.com", status: "Position Available" },
        { title: "Chief Operating Officer", email: "coo@apex-meridian.com", status: "Position Available" },
        { title: "Chief Financial Officer", email: "cfo@apex-meridian.com", status: "Position Available" },
        { title: "Chief Security Officer", email: "cso@apex-meridian.com", status: "Position Available" },
        { title: "Chief Product Officer", email: "cpo@apex-meridian.com", status: "Position Available" },
        { title: "Chief Marketing Officer", email: "cmo@apex-meridian.com", status: "Position Available" },
        { title: "Chief Human Resources Officer", email: "chro@apex-meridian.com", status: "Position Available" }
      ]
    },
    departments: [
      {
        title: "Research & Development",
        icon: Brain,
        color: "blue",
        head: { title: "VP of Research", email: "vp-research@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "AI Research Team",
            lead: { title: "Research Director", email: "research-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior AI Research Scientist", email: "senior-ai-researcher@apex-meridian.com", status: "Hiring" },
              { title: "AI Research Engineer", email: "ai-research-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Computer Vision Researcher", email: "cv-researcher@apex-meridian.com", status: "Hiring" },
              { title: "NLP Research Scientist", email: "nlp-researcher@apex-meridian.com", status: "Hiring" },
              { title: "Research Intern", email: "research-intern@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "AGI Development Team",
            lead: { title: "AGI Research Lead", email: "agi-lead@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "AGI Architect", email: "agi-architect@apex-meridian.com", status: "Hiring" },
              { title: "Cognitive Systems Engineer", email: "cognitive-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Ethics & Safety Researcher", email: "ethics-researcher@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Engineering",
        icon: Code,
        color: "green",
        head: { title: "VP of Engineering", email: "vp-engineering@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Platform Engineering",
            lead: { title: "Engineering Manager - Platform", email: "platform-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior ML Engineer", email: "senior-ml-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Senior Backend Engineer", email: "senior-backend@apex-meridian.com", status: "Hiring" },
              { title: "Senior Frontend Engineer", email: "senior-frontend@apex-meridian.com", status: "Hiring" },
              { title: "Full Stack Engineer", email: "fullstack-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Mobile App Developer", email: "mobile-developer@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Quality Assurance",
            lead: { title: "QA Manager", email: "qa-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior QA Engineer", email: "senior-qa@apex-meridian.com", status: "Hiring" },
              { title: "Automation Test Engineer", email: "automation-qa@apex-meridian.com", status: "Hiring" },
              { title: "Performance Test Engineer", email: "performance-qa@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Infrastructure & DevOps",
        icon: Database,
        color: "purple",
        head: { title: "VP of Infrastructure", email: "vp-infrastructure@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Cloud Infrastructure",
            lead: { title: "Infrastructure Manager", email: "infra-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior DevOps Engineer", email: "senior-devops@apex-meridian.com", status: "Hiring" },
              { title: "Cloud Infrastructure Engineer", email: "cloud-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Site Reliability Engineer", email: "sre@apex-meridian.com", status: "Hiring" },
              { title: "Data Engineer", email: "data-engineer@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Security Infrastructure",
            lead: { title: "Security Infrastructure Lead", email: "security-infra-lead@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Security Engineer", email: "security-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Cloud Security Specialist", email: "cloud-security@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Cybersecurity",
        icon: Shield,
        color: "red",
        head: { title: "VP of Security", email: "vp-security@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "AI Security Research",
            lead: { title: "Security Research Manager", email: "security-research-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "AI Security Researcher", email: "ai-security-researcher@apex-meridian.com", status: "Hiring" },
              { title: "Threat Intelligence Analyst", email: "threat-analyst@apex-meridian.com", status: "Hiring" },
              { title: "Penetration Tester", email: "pentest@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Security Operations",
            lead: { title: "Security Operations Manager", email: "security-ops-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "SOC Analyst", email: "soc-analyst@apex-meridian.com", status: "Hiring" },
              { title: "Incident Response Specialist", email: "incident-response@apex-meridian.com", status: "Hiring" },
              { title: "Compliance Specialist", email: "compliance@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Product & Design",
        icon: Palette,
        color: "orange",
        head: { title: "VP of Product", email: "vp-product@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Product Management",
            lead: { title: "Director of Product", email: "product-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior Product Manager - AI Solutions", email: "senior-pm-ai@apex-meridian.com", status: "Hiring" },
              { title: "Technical Product Manager", email: "technical-pm@apex-meridian.com", status: "Hiring" },
              { title: "Product Analyst", email: "product-analyst@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Design Team",
            lead: { title: "Design Manager", email: "design-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior UX/UI Designer", email: "senior-designer@apex-meridian.com", status: "Hiring" },
              { title: "Product Designer", email: "product-designer@apex-meridian.com", status: "Hiring" },
              { title: "Visual Designer", email: "visual-designer@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Business & Operations",
        icon: Globe,
        color: "teal",
        head: { title: "VP of Business Operations", email: "vp-business@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Sales & Business Development",
            lead: { title: "Sales Director", email: "sales-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Business Development Manager", email: "bd-manager@apex-meridian.com", status: "Hiring" },
              { title: "Sales Engineer", email: "sales-engineer@apex-meridian.com", status: "Hiring" },
              { title: "Account Manager", email: "account-manager@apex-meridian.com", status: "Hiring" },
              { title: "Customer Success Manager", email: "customer-success@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Marketing",
            lead: { title: "Marketing Director", email: "marketing-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Marketing Manager", email: "marketing-manager@apex-meridian.com", status: "Hiring" },
              { title: "Content Marketing Specialist", email: "content-marketing@apex-meridian.com", status: "Hiring" },
              { title: "Digital Marketing Specialist", email: "digital-marketing@apex-meridian.com", status: "Hiring" },
              { title: "PR & Communications Manager", email: "pr-manager@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Operations",
            lead: { title: "Operations Director", email: "operations-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Operations Manager", email: "operations-manager@apex-meridian.com", status: "Hiring" },
              { title: "Business Analyst", email: "business-analyst@apex-meridian.com", status: "Hiring" },
              { title: "Project Manager", email: "project-manager@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Finance & Legal",
        icon: Calculator,
        color: "indigo",
        head: { title: "VP of Finance & Legal", email: "vp-finance-legal@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Finance",
            lead: { title: "Finance Director", email: "finance-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Financial Analyst", email: "financial-analyst@apex-meridian.com", status: "Hiring" },
              { title: "Accounting Manager", email: "accounting-manager@apex-meridian.com", status: "Hiring" },
              { title: "Budget Analyst", email: "budget-analyst@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Legal",
            lead: { title: "Legal Counsel", email: "legal-counsel@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Compliance Officer", email: "compliance-officer@apex-meridian.com", status: "Hiring" },
              { title: "IP Specialist", email: "ip-specialist@apex-meridian.com", status: "Hiring" },
              { title: "Contract Manager", email: "contract-manager@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Human Resources",
        icon: HeartHandshake,
        color: "pink",
        head: { title: "VP of Human Resources", email: "vp-hr@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Talent Acquisition",
            lead: { title: "Talent Acquisition Manager", email: "talent-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Senior Technical Recruiter", email: "tech-recruiter@apex-meridian.com", status: "Hiring" },
              { title: "Talent Acquisition Specialist", email: "talent-specialist@apex-meridian.com", status: "Hiring" },
              { title: "Employer Branding Specialist", email: "employer-branding@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "HR Operations",
            lead: { title: "HR Operations Manager", email: "hr-ops-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "HR Business Partner", email: "hr-business-partner@apex-meridian.com", status: "Hiring" },
              { title: "Learning & Development Coordinator", email: "learning-coordinator@apex-meridian.com", status: "Hiring" },
              { title: "HR Generalist", email: "hr-generalist@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      },
      {
        title: "Education & Training",
        icon: BookOpen,
        color: "emerald",
        head: { title: "VP of Education", email: "vp-education@apex-meridian.com", status: "Position Available" },
        teams: [
          {
            title: "Educational Content",
            lead: { title: "Education Director", email: "education-director@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "AI Education Specialist", email: "ai-education@apex-meridian.com", status: "Hiring" },
              { title: "Curriculum Developer", email: "curriculum-developer@apex-meridian.com", status: "Hiring" },
              { title: "Instructional Designer", email: "instructional-designer@apex-meridian.com", status: "Hiring" }
            ]
          },
          {
            title: "Documentation & Training",
            lead: { title: "Documentation Manager", email: "docs-manager@apex-meridian.com", status: "Position Available" },
            positions: [
              { title: "Technical Writer", email: "technical-writer@apex-meridian.com", status: "Hiring" },
              { title: "Training Specialist", email: "training-specialist@apex-meridian.com", status: "Hiring" },
              { title: "Documentation Specialist", email: "docs-specialist@apex-meridian.com", status: "Hiring" }
            ]
          }
        ]
      }
    ]
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      purple: { bg: "bg-purple-900", text: "text-purple-300", border: "border-purple-700", hover: "hover:bg-purple-800" },
      blue: { bg: "bg-blue-900", text: "text-blue-300", border: "border-blue-700", hover: "hover:bg-blue-800" },
      green: { bg: "bg-green-900", text: "text-green-300", border: "border-green-700", hover: "hover:bg-green-800" },
      red: { bg: "bg-red-900", text: "text-red-300", border: "border-red-700", hover: "hover:bg-red-800" },
      orange: { bg: "bg-orange-900", text: "text-orange-300", border: "border-orange-700", hover: "hover:bg-orange-800" },
      teal: { bg: "bg-teal-900", text: "text-teal-300", border: "border-teal-700", hover: "hover:bg-teal-800" },
      indigo: { bg: "bg-indigo-900", text: "text-indigo-300", border: "border-indigo-700", hover: "hover:bg-indigo-800" },
      pink: { bg: "bg-pink-900", text: "text-pink-300", border: "border-pink-700", hover: "hover:bg-pink-800" },
      emerald: { bg: "bg-emerald-900", text: "text-emerald-300", border: "border-emerald-700", hover: "hover:bg-emerald-800" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const PositionCard = ({ position, color }: { position: any; color: string }) => {
    const colors = getColorClasses(color);
    return (
      <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 ${colors.hover} transition-colors`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-white mb-1">{position.title}</h4>
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
              position.status === 'Hiring' 
                ? 'bg-green-900 text-green-100 dark:bg-green-900/30 dark:text-green-200' 
                : 'bg-yellow-900 text-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-200'
            }`}>
              {position.status}
            </span>
          </div>
          <Link 
            href={`mailto:${position.email}?subject=Inquiry about ${position.title} position&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in learning more about the ${position.title} position.%0D%0A%0D%0APlease let me know about the requirements and application process.%0D%0A%0D%0ABest regards`}
            className={`ml-3 p-2 ${colors.text} hover:bg-gray-900 rounded-full transition-colors`}
            title={`Contact ${position.title}`}
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Organization Chart
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-6">
              Explore our organizational structure and connect directly with team members across all departments.
            </p>
            <div className="bg-indigo-800/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">Complete Organizational Structure</p>
              <p className="text-indigo-200">
                From Board of Directors to individual contributors - every role with direct email contact.
              </p>
            </div>
            <div className="mt-6">
              <Link 
                href="/about/careers" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-indigo-50 font-semibold rounded-lg hover:bg-indigo-800 transition-colors"
              >
                View Open Positions
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-purple-300 mr-3" />
              <h2 className="text-3xl font-bold text-white">Board of Directors</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Strategic oversight and governance leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationStructure.board.positions.map((position, index) => (
              <PositionCard key={index} position={position} color="purple" />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-blue-300 mr-3" />
              <h2 className="text-3xl font-bold text-white">Executive Leadership</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              C-level executives driving company strategy and operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationStructure.executive.positions.map((position, index) => (
              <PositionCard key={index} position={position} color="blue" />
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Departments & Teams</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive view of all departments, teams, and individual positions within <BrandName />
            </p>
          </div>

          <div className="space-y-12">
            {organizationStructure.departments.map((department, deptIndex) => {
              const IconComponent = department.icon;
              const colors = getColorClasses(department.color);
              
              return (
                <div key={deptIndex} className="bg-gray-900 rounded-lg shadow-lg p-8">
                  {/* Department Header */}
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{department.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {department.teams.reduce((total, team) => total + team.positions.length, 0) + 1} positions
                      </p>
                    </div>
                  </div>

                  {/* Department Head */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Department Leadership</h4>
                    <PositionCard position={department.head} color={department.color} />
                  </div>

                  {/* Teams */}
                  <div className="space-y-6">
                    {department.teams.map((team, teamIndex) => (
                      <div key={teamIndex} className={`border ${colors.border} rounded-lg p-6`}>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-white">{team.title}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {team.positions.length + 1} positions
                          </span>
                        </div>

                        {/* Team Lead */}
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-300 mb-2">Team Leadership</h5>
                          <PositionCard position={team.lead} color={department.color} />
                        </div>

                        {/* Team Members */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-300 mb-2">Team Members</h5>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {team.positions.map((position, posIndex) => (
                              <PositionCard key={posIndex} position={position} color={department.color} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Connect with Our Team
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Each position has a direct email contact. Click the mail icon next to any role to get in touch with that team member or department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="mailto:info@apex-meridian.com?subject=General Inquiry"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-indigo-50 font-semibold rounded-lg hover:bg-indigo-800 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              General Inquiries
            </Link>
            <Link 
              href="mailto:careers@apex-meridian.com?subject=Career Opportunities"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-indigo-50 transition-colors"
            >
              <Users className="mr-2 h-5 w-5" />
              Career Opportunities
            </Link>
          </div>
          
          <div className="mt-8 p-6 bg-indigo-800/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-indigo-200 text-sm">
              <strong>Note:</strong> Board of Directors and Executive Leadership positions are currently not open for external applications. 
              All other positions across departments are actively hiring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
// Force rebuild Mon Oct 20 02:50:26 EDT 2025
