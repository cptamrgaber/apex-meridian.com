'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, BookOpen, Brain, Eye, Lock, Cpu, Rocket } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface Solution {
  id: string;
  nameKey: string;
  taglineKey: string;
  descriptionKey: string;
  icon: React.ComponentType<any>;
  href: string;
  gradient: string;
  glowColor: string;
  featureKeys: string[];
  stats: { labelKey: string; value: string }[];
}

const ThrillerSolutions: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);
  const [activeParticles, setActiveParticles] = useState<number[]>([]);

  const solutions: Solution[] = [
    {
      id: 'aeromind',
      nameKey: 'aeromind.name',
      taglineKey: 'aeromind.tagline',
      descriptionKey: 'aeromind.description',
      icon: Zap,
      href: '/solutions/aviation',
      gradient: 'from-blue-900 via-blue-800 to-cyan-900',
      glowColor: '#00d4ff',
      featureKeys: ['aeromind.features.1', 'aeromind.features.2', 'aeromind.features.3', 'aeromind.features.4'],
      stats: [
        { labelKey: 'Target Efficiency', value: 'Enhanced' },
        { labelKey: 'Cost Optimization', value: 'Significant' }
      ]
    },
    {
      id: 'cyberguard',
      nameKey: 'cyberguard.name',
      taglineKey: 'cyberguard.tagline',
      descriptionKey: 'cyberguard.description',
      icon: Shield,
      href: '/solutions/cybersecurity',
      gradient: 'from-red-900 via-red-800 to-orange-900',
      glowColor: '#ff073a',
      featureKeys: ['cyberguard.features.1', 'cyberguard.features.2', 'cyberguard.features.3', 'cyberguard.features.4'],
      stats: [
        { labelKey: 'Threat Detection', value: 'Advanced' },
        { labelKey: 'Response Time', value: 'Rapid' }
      ]
    },
    {
      id: 'edugenius',
      nameKey: 'edugenius.name',
      taglineKey: 'edugenius.tagline',
      descriptionKey: 'edugenius.description',
      icon: BookOpen,
      href: '/solutions/education',
      gradient: 'from-green-900 via-green-800 to-emerald-900',
      glowColor: '#10b981',
      featureKeys: ['edugenius.features.1', 'edugenius.features.2', 'edugenius.features.3', 'edugenius.features.4'],
      stats: [
        { labelKey: 'Learning Enhancement', value: 'Accelerated' },
        { labelKey: 'Retention Goal', value: 'Improved' }
      ]
    },
    {
      id: 'meridianagi',
      nameKey: 'meridianagi.name',
      taglineKey: 'meridianagi.tagline',
      descriptionKey: 'meridianagi.description',
      icon: Brain,
      href: '/solutions/agi',
      gradient: 'from-purple-900 via-purple-800 to-indigo-900',
      glowColor: '#8b5cf6',
      featureKeys: ['meridianagi.features.1', 'meridianagi.features.2', 'meridianagi.features.3', 'meridianagi.features.4'],
      stats: [
        { labelKey: 'Intelligence Level', value: 'Advanced' },
        { labelKey: 'Learning Capability', value: 'Adaptive' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParticles(prev => {
        const newParticles = [...prev];
        if (newParticles.length < 20) {
          newParticles.push(Math.random());
        } else {
          newParticles.shift();
          newParticles.push(Math.random());
        }
        return newParticles;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-tech-darker relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-bg opacity-20" />
        
        {/* Animated particles */}
        {activeParticles.map((particle, index) => (
          <div
            key={index}
            className="absolute bg-neon-blue/20 rounded-full animate-ping"
            style={{
              left: `${particle * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
        
        {/* Scanning grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="border border-neon-blue/20 animate-pulse-slow"
                style={{
                  animationDelay: `${(i * 0.1) % 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          {/* Background for better contrast */}
          <div className="absolute inset-0 bg-tech-black/50 backdrop-blur-sm rounded-3xl mx-auto max-w-6xl"></div>
          
          {/* Floating tech icons */}
          <div className="relative flex justify-center items-center space-x-6 mb-8 pt-8">
            <Brain className="h-8 w-8 text-neon-blue animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <Cpu className="h-10 w-10 text-neon-cyan animate-glow" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            <Rocket className="h-8 w-8 text-neon-light-blue animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
          
          <h2 className="relative text-5xl md:text-6xl font-bold text-white mb-6 animate-glow"
              style={{ 
                textShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.8)' 
              }}>
            {t('solutions.title')}
          </h2>
          
          <p className="relative text-xl text-white max-w-3xl mx-auto animate-flicker pb-8"
             style={{ 
               textShadow: '0 0 10px rgba(0, 212, 255, 0.6), 1px 1px 2px rgba(0, 0, 0, 0.8)' 
             }}>
            {t('solutions.subtitle')}
          </p>     
          {/* Dramatic underline */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-glow"></div>
          </div>
        </div>    

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative bg-gradient-to-br ${solution.gradient} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden animate-fade-in`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: hoveredSolution === solution.id ? `0 0 40px ${solution.glowColor}40` : undefined
              }}
              onMouseEnter={() => setHoveredSolution(solution.id)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
              
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1"
                          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                        {t(solution.nameKey as any)}
                      </h3>
                      <p className="text-white/80 text-sm font-medium"
                         style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
                        {t(solution.taglineKey as any)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Stats - Now Legally Safe */}
                  <div className="text-right">
                    {solution.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="mb-1">
                        <div className="text-lg font-bold text-white"
                             style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/70"
                             style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
                          {stat.labelKey}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 mb-6 leading-relaxed"
                   style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
                  {t(solution.descriptionKey as any)}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.featureKeys.map((featureKey, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-sm"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
                        {t(featureKey as any)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={solution.href}
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  <span>Explore {t(solution.nameKey as any)}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="text-center mt-8 mb-8">
          <p className="text-xs text-white/60 max-w-3xl mx-auto">
            * Performance targets and capabilities represent development goals. Actual results may vary based on implementation and usage conditions.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue rounded-2xl blur-lg opacity-50 animate-pulse"></div>
            <Link
              href="/solutions"
              className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-tech-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
            >
              <span>{t('cta.button')}</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThrillerSolutions;
