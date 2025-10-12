'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Rocket, 
  Zap, 
  Eye, 
  Brain, 
  Target,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const DramaticCTA: React.FC = () => {
  const { t } = useLanguage();
  const [glitchActive, setGlitchActive] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Users, value: '500K+', label: 'Users Transformed' },
    { icon: TrendingUp, value: '99.9%', label: 'Success Rate' },
    { icon: Zap, value: '<1ms', label: 'Response Time' },
    { icon: Globe, value: '50+', label: 'Countries Served' }
  ];

  useEffect(() => {
    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 8000 + Math.random() * 4000);

    // Stat rotation
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(statInterval);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-tech-black via-tech-darker to-tech-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className="border border-neon-blue/20 animate-pulse-slow"
                style={{
                  animationDelay: `${(i * 0.05) % 4}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-neon-blue/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}

        {/* Scanning beams */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-neon-cyan/30 animate-scan" 
               style={{ top: '25%', animationDelay: '0s' }} />
          <div className="absolute w-full h-px bg-neon-blue/30 animate-scan" 
               style={{ top: '75%', animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="relative mb-12">
          {/* Tech icons */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <Target className="h-8 w-8 text-neon-blue animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <Brain className="h-10 w-10 text-neon-cyan animate-glow" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            <Rocket className="h-8 w-8 text-neon-purple animate-bounce" style={{ animationDuration: '2s' }} />
          </div>

          {/* Main Headline */}
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 animate-glow transition-all duration-300 ${
            glitchActive ? 'animate-glitch' : ''
          }`}>
            {t('cta.title')}
          </h2>

          {/* Glitch text overlay */}
          {glitchActive && (
            <>
              <h2 className="absolute inset-0 text-4xl md:text-6xl font-bold text-neon-pink animate-glow opacity-70 transform translate-x-1">
                {t('cta.title')}
              </h2>
              <h2 className="absolute inset-0 text-4xl md:text-6xl font-bold text-neon-cyan animate-glow opacity-50 transform -translate-x-1">
                {t('cta.title')}
              </h2>
            </>
          )}

          {/* Subtitle */}
          <p className="text-xl text-neon-cyan max-w-4xl mx-auto animate-flicker">
            {t('cta.subtitle')}
          </p>
        </div>

        {/* Dynamic Stats Display */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-80 h-32 bg-tech-darker/50 backdrop-blur-sm border border-neon-blue/30 rounded-2xl shadow-neon">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                {React.createElement(stats[currentStat].icon, {
                  className: "h-8 w-8 text-neon-blue mr-3 animate-pulse"
                })}
                <div className="text-4xl font-bold text-white animate-glow">
                  {stats[currentStat].value}
                </div>
              </div>
              <div className="text-sm text-neon-cyan">
                {stats[currentStat].label}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-2xl blur-xl opacity-50 animate-pulse"></div>
          
          <Link
            href="/contact"
            className="relative inline-flex items-center space-x-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-tech-black px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl group"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
          >
            <Rocket className="h-8 w-8 group-hover:animate-bounce" />
            <span>{t('cta.button')}</span>
            <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center space-x-8">
          {[Eye, Brain, Zap, Target].map((Icon, index) => (
            <div
              key={index}
              className="p-4 bg-tech-darker/30 backdrop-blur-sm border border-neon-blue/20 rounded-xl animate-glow"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <Icon className="h-6 w-6 text-neon-cyan" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DramaticCTA;
