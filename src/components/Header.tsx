'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/logo_blue.png"
                alt="Apex-Meridian Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900">Apex-Meridian</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('about')}
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'about' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
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
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('solutions')}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
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
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('technology')}
              >
                Technology
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'technology' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
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
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown('investors')}
              >
                Investors
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'investors' && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
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

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Solutions
              </Link>
              <Link href="/technology" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Technology
              </Link>
              <Link href="/investors" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Investors
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
