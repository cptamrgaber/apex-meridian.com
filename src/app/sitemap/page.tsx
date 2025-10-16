'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Info, 
  Cpu, 
  Shield, 
  Zap, 
  BookOpen, 
  Brain, 
  Users, 
  TrendingUp, 
  Mail, 
  FileText, 
  Eye,
  Building,
  UserCheck,
  Globe,
  ChevronRight,
  Scale
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: React.ComponentType<any>;
  links: {
    title: string;
    href: string;
    description: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { title: 'Homepage', href: '/', description: 'Main landing page with company overview' },
      { title: 'About Us', href: '/about', description: 'Company information and mission' },
      { title: 'Contact', href: '/contact', description: 'Get in touch with our team' },
      { title: 'Pricing', href: '/pricing', description: 'Service pricing and plans' },
      { title: 'Support', href: '/support', description: 'Help center and support resources' },
      { title: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    ]
  },
  {
    title: 'About Section',
    icon: Info,
    links: [
      { title: 'Company Overview', href: '/about/overview', description: 'Detailed company information' },
      { title: 'Leadership Team', href: '/about/leadership', description: 'Meet our executive team' },
      { title: 'Company History', href: '/about/history', description: 'Our journey and milestones' },
      { title: 'Careers', href: '/about/careers', description: 'Join our team' },
    ]
  },
  {
    title: 'AI Solutions',
    icon: Brain,
    links: [
      { title: 'Solutions Overview', href: '/solutions', description: 'All AI solutions and services' },
      { title: 'AeroMind', href: '/solutions/aviation', description: 'Aviation intelligence platform' },
      { title: 'CyberGuard', href: '/solutions/cybersecurity', description: 'Intelligent security shield' },
      { title: 'EduGenius', href: '/solutions/education', description: 'Personalized learning AI' },
      { title: 'MeridianAGI', href: '/solutions/agi', description: 'Artificial general intelligence' },
    ]
  },
  {
    title: 'Technology',
    icon: Cpu,
    links: [
      { title: 'Technology Overview', href: '/technology', description: 'Our technology stack and capabilities' },
      { title: 'MeridianAI Platform', href: '/technology/platform', description: 'Core AI platform details' },
      { title: 'Research & Development', href: '/technology/research', description: 'Latest research initiatives' },
      { title: 'Technical Documentation', href: '/technology/docs', description: 'Developer resources and APIs' },
    ]
  },
  {
    title: 'Investors',
    icon: TrendingUp,
    links: [
      { title: 'Investor Relations', href: '/investors', description: 'Information for current and potential investors' },
      { title: 'Financial Reports', href: '/investors/financials', description: 'Quarterly and annual reports' },
      { title: 'Investment Opportunities', href: '/investors/opportunity', description: 'Current investment options' },
      { title: 'Corporate Governance', href: '/investors/governance', description: 'Governance and compliance information' },
    ]
  },
  {
    title: 'Resources',
    icon: FileText,
    links: [
      { title: 'AI Vision', href: '/vision', description: 'Our vision for artificial intelligence' },
      { title: 'Documents', href: '/documents', description: 'Important company documents' },
      { title: 'Support Center', href: '/support', description: 'Help and support resources' },
      { title: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    ]
  },
  {
    title: 'Employee Portal',
    icon: UserCheck,
    links: [
      { title: 'Employee Portal', href: '/employees', description: 'Employee access and resources' },
      { title: 'Employee Login', href: '/employees/login', description: 'Secure login for employees' },
      { title: 'HR Resources', href: '/hr', description: 'Human resources and employee services' },
    ]
  },
  {
    title: 'Legal & Compliance',
    icon: Shield,
    links: [
      { title: 'Privacy Policy', href: '/privacy', description: 'Data privacy and protection policy' },
      { title: 'Terms of Service', href: '/terms', description: 'Terms and conditions of service' },
      { title: 'LLC Responsibility', href: '/legal/llc-responsibility', description: 'Company responsibility and governance' },
      { title: 'Liability Information', href: '/legal/liability', description: 'Liability limitations and coverage' },
      { title: 'Licenses & IP', href: '/legal/licenses', description: 'Software licenses and intellectual property' },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-professional-bg opacity-50"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="border border-neon-blue/20"
                style={{
                  animationDelay: `${(i * 0.01) % 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Globe className="h-12 w-12 text-neon-blue animate-pulse mr-4" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <Building className="h-10 w-10 text-neon-cyan animate-glow mx-4" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            <Eye className="h-12 w-12 text-neon-light-blue animate-pulse ml-4" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-glow"
              style={{ 
                textShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.8)' 
              }}>
            Site Map
          </h1>
          
          <p className="text-xl text-white max-w-3xl mx-auto"
             style={{ 
               textShadow: '0 0 10px rgba(0, 212, 255, 0.6), 1px 1px 2px rgba(0, 0, 0, 0.8)' 
             }}>
            Navigate through all sections of the A  p  e  x  M  e  r  i  d  i  a  n website. Find exactly what you&apos;re looking for with our comprehensive site organization.
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mt-8 text-sm">
            <Link href="/" className="text-neon-blue hover:text-neon-cyan transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
            <span className="text-white/80">Sitemap</span>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="bg-tech-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-2xl p-6 hover:border-neon-blue/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              {/* Section Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>

              {/* Section Links */}
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block p-3 rounded-lg bg-tech-darker/50 hover:bg-tech-darker border border-transparent hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white group-hover:text-neon-blue transition-colors">
                        {link.title}
                      </h3>
                      <ChevronRight className="h-4 w-4 text-white/40 group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-neon-blue text-tech-black font-semibold rounded-lg hover:bg-neon-cyan transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center px-6 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-tech-black transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
            >
              <Brain className="mr-2 h-5 w-5" />
              Explore Solutions
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center px-6 py-3 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-tech-black transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Investment Info
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-tech-black/40 backdrop-blur-sm rounded-xl border border-neon-blue/20">
            <Info className="h-5 w-5 text-neon-blue mr-3" />
            <p className="text-white/80">
              Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="text-neon-blue hover:text-neon-cyan transition-colors underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
