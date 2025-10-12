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
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-tech-dark dark:to-tech-darker text-gray-900 dark:text-white py-24 sm:py-32 overflow-hidden min-h-screen flex items-center transition-colors duration-300">
      {/* Dramatic Tech Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-neon-blue/10 animate-pulse-slow"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Matrix rain effect */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute bg-neon-blue/15 animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-neon-blue/30 animate-scan" style={{ top: '25%' }} />
          <div className="absolute w-full h-px bg-neon-cyan/20 animate-scan" style={{ top: '50%', animationDelay: '1s' }} />
          <div className="absolute w-full h-px bg-neon-purple/20 animate-scan" style={{ top: '75%', animationDelay: '2s' }} />
        </div>
        
        {/* Floating orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              background: `radial-gradient(circle, ${
                ['rgba(0, 212, 255, 0.1)', 'rgba(139, 92, 246, 0.08)', 'rgba(255, 0, 110, 0.06)'][i % 3]
              } 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Glitch overlay */}
        <div className={`absolute inset-0 bg-tech-black/20 transition-all duration-200 ${glitchActive ? 'animate-glitch' : ''}`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Logo with dramatic entrance */}
        <div className="flex items-center justify-center mb-8 animate-slide-up">
          <div className="relative">
            <Image
              src="/assets/Apex-Meridianlogofull.png"
              alt="Apex-Meridian Logo"
              width={500}
              height={150}
              className="h-32 w-auto object-contain drop-shadow-2xl"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)) invert(1)',
                maxWidth: '500px',
                aspectRatio: 'auto'
              }}
            />
            {/* Holographic effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan opacity-30"></div>
          </div>
        </div>

        {/* AGI Tree Icon */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link href="/solutions/agi" className="group relative">
            <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl group-hover:bg-neon-blue/30 transition-all duration-300"></div>
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

        {/* Dynamic Hero Text */}
        <div className="relative mb-8">
          {/* Text background for better contrast */}
          <div className="absolute inset-0 bg-white/80 dark:bg-tech-black/60 backdrop-blur-sm rounded-2xl mx-auto max-w-6xl"></div>
          <h1 className={`relative text-4xl md:text-6xl font-bold text-gray-900 dark:text-white animate-glow max-w-5xl mx-auto transition-all duration-500 py-6 ${glitchActive ? 'animate-glitch' : ''}`}
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)' 
              }}>
            {heroTexts[currentText]}
          </h1>
          
          {/* Text glitch effect */}
          {glitchActive && (
            <>
              <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-neon-pink animate-glow max-w-5xl mx-auto opacity-70 transform translate-x-1">
                {heroTexts[currentText]}
              </h1>
              <h1 className="absolute inset-0 text-4xl md:text-6xl font-bold text-neon-cyan animate-glow max-w-5xl mx-auto opacity-50 transform -translate-x-1">
                {heroTexts[currentText]}
              </h1>
            </>
          )}
        </div>

        {/* Subtitle with typewriter effect */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-white/70 dark:bg-tech-black/40 backdrop-blur-sm rounded-xl mx-auto max-w-5xl"></div>
          <p className="relative text-xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto animate-flicker py-4 px-6" 
             style={{ 
               animationDelay: '1s',
               textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' 
             }}>
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Action buttons with enhanced effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{ animationDelay: '1.5s' }}>
          <Link
            href="/solutions"
            className="group relative inline-flex items-center px-10 py-5 bg-neon-blue text-tech-black font-bold rounded-lg hover:bg-neon-cyan transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Zap className="mr-3 h-6 w-6 group-hover:animate-spin" />
            {t('hero.exploreBtn')}
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="group relative inline-flex items-center px-10 py-4 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue hover:text-tech-black transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
          >
            <Eye className="mr-3 h-6 w-6 group-hover:animate-pulse" />
            {t('hero.startBtn')}
          </Link>
        </div>

        {/* Tech stats with dramatic counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '2s' }}>
          {[
            { icon: Brain, label: t('stats.aiModels'), value: '50+', color: 'text-neon-blue' },
            { icon: Shield, label: t('stats.securityLevel'), value: '99.9%', color: 'text-neon-cyan' },
            { icon: Zap, label: t('stats.processingSpeed'), value: '<1ms', color: 'text-neon-purple' },
            { icon: Eye, label: t('stats.visionAccuracy'), value: '99.8%', color: 'text-neon-pink' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-tech-darker/50 backdrop-blur-sm border border-neon-blue/20 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-neon animate-fade-in"
              style={{ animationDelay: `${2 + index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:animate-pulse`} />
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dramatic bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tech-darker to-transparent"></div>
    </section>
  );
};

export default DramaticHero;
