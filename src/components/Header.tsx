'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-gray-900 dark:to-gray-800 shadow-lg relative z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo_white.png"
                alt="Apex-Meridian Logo"
                width={120}
                height={40}
                className="w-auto h-10"
                style={{ aspectRatio: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('about')}
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'about' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/about/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Company Overview
                  </Link>
                  <Link href="/about/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Leadership
                  </Link>
                  <Link href="/about/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Company History
                  </Link>
                  <Link href="/about/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('solutions')}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/solutions/aviation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Aviation Solutions
                  </Link>
                  <Link href="/solutions/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cybersecurity
                  </Link>
                  <Link href="/solutions/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Education
                  </Link>
                  <Link href="/solutions/agi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AGI Solutions
                  </Link>
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('technology')}
              >
                Technology
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'technology' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/technology/platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    MeridianAI Platform
                  </Link>
                </div>
              )}
            </div>

            {/* Investors Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('investors')}
              >
                Investors
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'investors' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/investors/opportunity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Investment Opportunity
                  </Link>
                  <Link href="/investors/financials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Financial Information
                  </Link>
                  <Link href="/investors/governance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Governance
                  </Link>
                </div>
              )}
            </div>

            <Link href="/vision" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors">
              AI Vision
            </Link>
            <Link href="/documents" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors">
              Documents
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.contact')}
            </Link>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center space-x-2 text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{t('nav.language')}</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <Link href="/employees/login" className="bg-white text-blue-900 px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors shadow-md">
              {t('nav.employeeLogin')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800/95 border-t border-blue-700">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                About
              </Link>
              <Link href="/solutions" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                Solutions
              </Link>
              <Link href="/technology" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                Technology
              </Link>
              <Link href="/investors" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                Investors
              </Link>
              <Link href="/vision" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                AI Vision
              </Link>
              <Link href="/documents" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                Documents
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200">
                Contact
              </Link>
              <Link href="/employees/login" className="block px-3 py-2 text-base font-medium text-blue-900 bg-white rounded-md mx-3 mt-2 text-center hover:bg-blue-50">
                Employee Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
