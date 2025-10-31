'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const { t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-slate-900 shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo-new.png"
                alt="Apex Meridian"
                width={540}
                height={162}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[200px] sm:max-w-[240px] md:max-w-none"
                style={{ aspectRatio: '280/84' }}
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-4 flex-1 justify-end mr-4">
            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.about')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <Link href="/about/overview" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.overview')}
                  </Link>
                  <Link href="/about/leadership" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.leadership')}
                  </Link>
                  <Link href="/about/history" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.history')}
                  </Link>
                  <Link href="/about/careers" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.careers')}
                  </Link>
                  <Link href="/about/organization-chart" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.organizationChart')}
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.solutions')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <Link href="/solutions/aviation" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.aviation')}
                  </Link>
                  <Link href="/solutions/cybersecurity" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.cybersecurity')}
                  </Link>
                  <Link href="/solutions/education" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.education')}
                  </Link>
                  <Link href="/solutions/agi" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.agi')}
                  </Link>
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('technology')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.technology')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'technology' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <Link href="/technology/platform" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.platform')}
                  </Link>
                </div>
              )}
            </div>

            {/* Investors Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('investors')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.investors')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'investors' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <Link href="/investors/opportunity" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.opportunity')}
                  </Link>
                  <Link href="/investors/financials" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.financials')}
                  </Link>
                  <Link href="/investors/governance" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    {t('nav.governance')}
                  </Link>
                </div>
              )}
            </div>

            <Link href="/vision" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              {t('nav.vision')}
            </Link>

            <Link href="/pricing" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              Pricing
            </Link>

            <Link href="/support" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              Support
            </Link>

            {/* Legal Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('legal')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
                Legal
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'legal' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                  <Link href="/privacy" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link href="/legal/llc-responsibility" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    LLC Responsibility
                  </Link>
                  <Link href="/legal/liability" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    Liability
                  </Link>
                  <Link href="/legal/licenses" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-200">
                    Licenses & IP
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              {t('nav.contact')}
            </Link>

            {/* Dummy Language Button */}
            <button
              disabled
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 border border-gray-600 rounded-md cursor-not-allowed opacity-50"
              title="Language selection coming soon"
            >
              <Globe className="h-4 w-4 mr-1" />
              EN
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="space-y-2">
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                {t('nav.about')}
              </Link>
              <Link href="/solutions" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                {t('nav.solutions')}
              </Link>
              <Link href="/technology" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                {t('nav.technology')}
              </Link>
              <Link href="/investors" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                {t('nav.investors')}
              </Link>
              <Link href="/vision" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                {t('nav.vision')}
              </Link>
              <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                Pricing
              </Link>
              <Link href="/support" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                Support
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors duration-200">
                {t('nav.contact')}
              </Link>
              
              {/* Mobile Dummy Language Button */}
              <div className="flex items-center justify-center pt-4 border-t border-gray-700 mt-4">
                <button
                  disabled
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 border border-gray-600 rounded-md cursor-not-allowed opacity-50"
                  title="Language selection coming soon"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
