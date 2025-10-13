'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Eye, Brain, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const DramaticHero: React.FC = () => {
  const { t } = useLanguage();
  const [glitchActive, setGlitchActive] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    t('hero.title1'),
    t('hero.title2'), 
    t('hero.title3'),
    t('hero.title4')
  ];

  useEffect(() => {
    // Glitch effect timer
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000 + Math.random() * 6000);

    // Text rotation timer
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 sm:py-32 overflow-hidden min-h-screen flex items-center transition-colors duration-300">
      {/* Subtle Tech Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Subtle grid */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-blue-400/10 animate-pulse-slow"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Professional Text Logo */}
        <div className="flex items-center justify-center mb-8 animate-slide-up">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
              Apex-Meridian
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* AGI Tree Icon */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link href="/solutions/agi" className="group relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
            <Image
              src="/assets/Apex-Meridian_tree_not-glowing.png"
              alt="AGI Tree"
              width={100}
              height={100}
              className="h-24 w-24 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
              style={{ aspectRatio: '1/1' }}
            />
          </Link>
        </div>

        {/* Dynamic Hero Text with Better Contrast */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl mx-auto max-w-6xl"></div>
          <h2 className={`relative text-3xl md:text-5xl font-bold text-white max-w-5xl mx-auto transition-all duration-500 py-8 px-6 ${glitchActive ? 'animate-glitch' : ''}`}
              style={{ 
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' 
              }}>
            {heroTexts[currentText]}
          </h2>
        </div>

        {/* Subtitle with Better Readability */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl mx-auto max-w-5xl"></div>
          <p className="relative text-lg md:text-xl text-gray-100 max-w-4xl mx-auto py-6 px-8" 
             style={{ 
               textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' 
             }}>
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Professional Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{ animationDelay: '1.5s' }}>
          <Link
            href="/solutions"
            className="group relative inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Zap className="mr-3 h-5 w-5" />
            {t('hero.exploreBtn')}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="group relative inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Eye className="mr-3 h-5 w-5" />
            {t('hero.startBtn')}
          </Link>
        </div>

        {/* Clean Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" style={{ animationDelay: '2s' }}>
          {[
            { icon: Brain, label: t('stats.aiModels'), value: '50+', color: 'text-blue-400' },
            { icon: Shield, label: t('stats.securityLevel'), value: '99.9%', color: 'text-cyan-400' },
            { icon: Zap, label: t('stats.processingSpeed'), value: '<1ms', color: 'text-purple-400' },
            { icon: Eye, label: t('stats.visionAccuracy'), value: '99.8%', color: 'text-pink-400' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-black/40 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${2 + index * 0.2}s` }}
            >
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent"></div>
    </section>
  );
};

export default DramaticHero;
