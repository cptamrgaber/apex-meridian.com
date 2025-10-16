'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    // Add a small delay to prevent accidental closing
    setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Increased Size */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/Apex-Meridianlogofull_red_1.png"
                alt="A  p  e  x  M  e  r  i  d  i  a  n"
                width={360}
                height={108}
                className="h-16 w-auto object-contain"
                priority
                style={{ aspectRatio: '280/84' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.about')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'about' && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/about/overview" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.overview')}
                  </Link>
                  <Link href="/about/leadership" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.leadership')}
                  </Link>
                  <Link href="/about/history" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.history')}
                  </Link>
                  <Link href="/about/careers" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.careers')}
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
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.solutions')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'solutions' && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/solutions/aviation" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.aviation')}
                  </Link>
                  <Link href="/solutions/cybersecurity" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.cybersecurity')}
                  </Link>
                  <Link href="/solutions/education" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.education')}
                  </Link>
                  <Link href="/solutions/agi" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
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
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.technology')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'technology' && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown('technology')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/technology/platform" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
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
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap py-2">
                {t('nav.investors')}
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {activeDropdown === 'investors' && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseEnter={() => setActiveDropdown('investors')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/investors/opportunity" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.opportunity')}
                  </Link>
                  <Link href="/investors/financials" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.financials')}
                  </Link>
                  <Link href="/investors/governance" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {t('nav.governance')}
                  </Link>
                </div>
              )}
            </div>

            {/* AI Vision Link */}
            <Link href="/vision" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              {t('nav.vision')}
            </Link>

            {/* Pricing Link */}
            <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              Pricing
            </Link>

            {/* Support Link */}
            <Link href="/support" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              Support
            </Link>

            {/* Legal Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap"
                onMouseEnter={() => handleDropdownEnter('legal')}
                onMouseLeave={handleDropdownLeave}
              >
                Legal
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'legal' && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseEnter={() => handleDropdownEnter('legal')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/privacy" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link href="/legal/llc-responsibility" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    LLC Responsibility
                  </Link>
                  <Link href="/legal/liability" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    Liability
                  </Link>
                  <Link href="/legal/licenses" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    Licenses & IP
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Controls - Language and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4 ml-8">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-200"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                {t('nav.about')}
              </Link>
              <Link href="/solutions" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                {t('nav.solutions')}
              </Link>
              <Link href="/technology" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                {t('nav.technology')}
              </Link>
              <Link href="/investors" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                {t('nav.investors')}
              </Link>
              <Link href="/vision" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                {t('nav.vision')}
              </Link>
              <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                Pricing
              </Link>
              <Link href="/support" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                Support
              </Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                FAQ
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                {t('nav.contact')}
              </Link>
              
              {/* Legal Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Legal
                </div>
                <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/legal/llc-responsibility" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                  LLC Responsibility
                </Link>
                <Link href="/legal/liability" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                  Liability
                </Link>
                <Link href="/legal/licenses" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200">
                  Licenses & IP
                </Link>
              </div>
              
              {/* Mobile Controls */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-200"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
