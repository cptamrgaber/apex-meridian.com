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

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white/95 dark:bg-cyber-gradient shadow-lg dark:shadow-cyber relative z-[100] overflow-hidden border-b border-gray-200 dark:border-neon-blue/30 backdrop-blur-sm transition-colors duration-300">
      {/* Dramatic Tech Background */}
      <div className="absolute inset-0 bg-cyber-gradient overflow-hidden">
        {/* Matrix-style falling particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-neon-blue/20 rounded-full animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-neon-blue/30 animate-scan" 
               style={{ top: '20%', animationDelay: '0s' }} />
          <div className="absolute w-full h-px bg-neon-cyan/20 animate-scan" 
               style={{ top: '60%', animationDelay: '1s' }} />
          <div className="absolute w-full h-px bg-neon-purple/20 animate-scan" 
               style={{ top: '80%', animationDelay: '2s' }} />
        </div>
        
        {/* Glowing orbs */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-neon-blue/10 animate-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/Apex-Meridianlogofull.png"
                alt="Apex-Meridian Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                style={{ 
                  aspectRatio: 'auto',
                  maxWidth: '180px'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                {t('nav.about')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-blue-500/30 rounded-xl shadow-2xl py-2 z-[200] transition-all duration-300 ${
                activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
                   style={{ backdropFilter: 'blur(12px)' }}>
                <Link href="/about/overview" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('overview')}
                </Link>
                <Link href="/about/leadership" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('leadership')}
                </Link>
                <Link href="/about/history" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('history')}
                </Link>
                <Link href="/about/careers" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('careers')}
                </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                {t('nav.solutions')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-blue-500/30 rounded-xl shadow-2xl py-2 z-[200] transition-all duration-300 ${
                activeDropdown === 'solutions' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
                   style={{ backdropFilter: 'blur(12px)' }}>
                <Link href="/solutions/aviation" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('aviation')}
                </Link>
                <Link href="/solutions/cybersecurity" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('cybersecurity')}
                </Link>
                <Link href="/solutions/education" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('education')}
                </Link>
                <Link href="/solutions/agi" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('agi')}
                </Link>
              </div>
            </div>

            {/* Technology Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('technology')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                {t('nav.technology')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-blue-500/30 rounded-xl shadow-2xl py-2 z-[200] transition-all duration-300 ${
                activeDropdown === 'technology' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
                   style={{ backdropFilter: 'blur(12px)' }}>
                <Link href="/technology/platform" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('platform')}
                </Link>
              </div>
            </div>

            {/* Investors Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('investors')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                {t('nav.investors')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-blue-500/30 rounded-xl shadow-2xl py-2 z-[200] transition-all duration-300 ${
                activeDropdown === 'investors' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
                   style={{ backdropFilter: 'blur(12px)' }}>
                <Link href="/investors/opportunity" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('opportunity')}
                </Link>
                <Link href="/investors/financials" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('financials')}
                </Link>
                <Link href="/investors/governance" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-neon-blue/20 hover:text-blue-600 dark:hover:text-neon-cyan transition-all duration-300"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {t('governance')}
                </Link>
              </div>
            </div>

            {/* Regular Navigation Links */}
            <Link href="/vision" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              {t('nav.vision')}
            </Link>
            <Link href="/documents" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              {t('nav.documents')}
            </Link>
            <Link href="/sitemap" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              {t('nav.sitemap')}
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              {t('nav.contact')}
            </Link>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{t('nav.language')}</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <Link href="/employees/login" className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md">
              {t('nav.employeeLogin')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-800/95 border-t border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.about')}
              </Link>
              <Link href="/solutions" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.solutions')}
              </Link>
              <Link href="/technology" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.technology')}
              </Link>
              <Link href="/investors" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.investors')}
              </Link>
              <Link href="/vision" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.vision')}
              </Link>
              <Link href="/documents" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.documents')}
              </Link>
              <Link href="/sitemap" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.sitemap')}
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {t('nav.contact')}
              </Link>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
              >
                <Globe className="w-4 h-4" />
                <span>{t('nav.language')}</span>
              </button>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
              
              <Link href="/employees/login" className="block px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md mx-3 mt-2 text-center hover:bg-blue-700">
                {t('nav.employeeLogin')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
