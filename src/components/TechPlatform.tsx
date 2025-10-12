'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Eye, 
  Lock, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Activity,
  Database,
  Cloud
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface TechFeature {
  icon: React.ComponentType<any>;
  titleKey: string;
  descriptionKey: string;
  stats: string;
  color: string;
}

const TechPlatform: React.FC = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);

  const techFeatures: TechFeature[] = [
    {
      icon: Cpu,
      titleKey: 'platform.features.1',
      descriptionKey: 'platform.features.1',
      stats: '1000x Faster',
      color: '#00d4ff'
    },
    {
      icon: Shield,
      titleKey: 'platform.features.2',
      descriptionKey: 'platform.features.2',
      stats: '99.99% Secure',
      color: '#ff073a'
    },
    {
      icon: Brain,
      titleKey: 'platform.features.3',
      descriptionKey: 'platform.features.3',
      stats: 'Self-Learning',
      color: '#8b5cf6'
    },
    {
      icon: Globe,
      titleKey: 'platform.features.4',
      descriptionKey: 'platform.features.4',
      stats: '50+ Countries',
      color: '#10b981'
    },
    {
      icon: Eye,
      titleKey: 'platform.features.5',
      descriptionKey: 'platform.features.5',
      stats: '99.8% Accuracy',
      color: '#f59e0b'
    },
    {
      icon: Lock,
      titleKey: 'platform.features.6',
      descriptionKey: 'platform.features.6',
      stats: 'Quantum-Safe',
      color: '#ef4444'
    }
  ];

  const capabilities = [
    'Real-time Processing',
    'Scalable Architecture', 
    'Ethical AI Framework',
    'Advanced Analytics',
    'Multi-Modal Intelligence',
    'Quantum-Safe Encryption'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % techFeatures.length);
    }, 3000);

    const pulseInterval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1000);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-tech-black via-tech-darker to-tech-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80h-80z" stroke="#00d4ff" strokeWidth="0.5" fill="none" opacity="0.3"/>
                <circle cx="20" cy="20" r="2" fill="#00d4ff" opacity="0.5"/>
                <circle cx="80" cy="20" r="2" fill="#00d4ff" opacity="0.5"/>
                <circle cx="20" cy="80" r="2" fill="#00d4ff" opacity="0.5"/>
                <circle cx="80" cy="80" r="2" fill="#00d4ff" opacity="0.5"/>
                <path d="M20 20h60M20 80h60M20 20v60M80 20v60" 
                      stroke="#00d4ff" strokeWidth="0.5" fill="none" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating data streams */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute bg-neon-blue/20 animate-matrix"
            style={{
              left: `${(i * 7) % 100}%`,
              top: '-10px',
              width: '1px',
              height: `${30 + Math.random() * 50}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column - Content */}
          <div className="mb-12 lg:mb-0">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <Database className="h-6 w-6 text-neon-blue animate-pulse" />
                <div className="w-8 h-px bg-neon-blue"></div>
                <Cloud className="h-6 w-6 text-neon-cyan animate-bounce" style={{ animationDuration: '2s' }} />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
                {t('platform.title')}
              </h2>
              
              <p className="text-xl text-neon-cyan mb-8 animate-flicker">
                {t('platform.subtitle')}
              </p>
            </div>

            {/* Capabilities List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-tech-darker/30 backdrop-blur-sm border border-neon-blue/20 rounded-lg hover:border-neon-blue/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-neon-blue flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{capability}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl blur-lg opacity-50 animate-pulse"></div>
              <Link
                href="/technology/platform"
                className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-tech-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <span>{t('platform.exploreBtn')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column - Interactive Tech Display */}
          <div className="relative">
            {/* Main display container */}
            <div className="relative bg-tech-darker/50 backdrop-blur-sm border border-neon-blue/30 rounded-2xl p-8 shadow-neon">
              {/* Active feature display */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <div 
                    className={`absolute inset-0 rounded-full blur-lg transition-all duration-500 ${
                      pulseActive ? 'animate-ping' : ''
                    }`}
                    style={{ backgroundColor: `${techFeatures[activeFeature].color}40` }}
                  ></div>
                  <div 
                    className="relative p-6 rounded-full border-2 transition-all duration-500"
                    style={{ 
                      borderColor: techFeatures[activeFeature].color,
                      backgroundColor: `${techFeatures[activeFeature].color}20`
                    }}
                  >
                    {React.createElement(techFeatures[activeFeature].icon, {
                      className: "h-12 w-12",
                      style: { color: techFeatures[activeFeature].color }
                    })}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(techFeatures[activeFeature].titleKey as any)}
                </h3>
                <p className="text-neon-cyan mb-4">
                  {t(techFeatures[activeFeature].descriptionKey as any)}
                </p>
                <div 
                  className="text-3xl font-bold animate-glow"
                  style={{ color: techFeatures[activeFeature].color }}
                >
                  {techFeatures[activeFeature].stats}
                </div>
              </div>

              {/* Feature indicators */}
              <div className="flex justify-center space-x-2">
                {techFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature 
                        ? 'bg-neon-blue shadow-neon' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-tech-darker/80 backdrop-blur-sm border border-neon-cyan/30 rounded-xl p-4 shadow-neon">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-neon-cyan animate-pulse" />
                <div>
                  <div className="text-lg font-bold text-white">10 PetaFLOPS</div>
                  <div className="text-xs text-neon-cyan">Processing Power</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-tech-darker/80 backdrop-blur-sm border border-neon-purple/30 rounded-xl p-4 shadow-neon">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-neon-purple animate-spin" style={{ animationDuration: '3s' }} />
                <div>
                  <div className="text-lg font-bold text-white">99.99%</div>
                  <div className="text-xs text-neon-purple">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Cpu, value: '1000x Faster', label: 'Processing Speed' },
            { icon: Shield, value: '99.99%', label: 'Security Level' },
            { icon: Globe, value: '50+ Countries', label: 'Global Reach' },
            { icon: Brain, value: 'Quantum-Safe', label: 'Data Security' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-tech-darker/30 backdrop-blur-sm border border-neon-blue/20 rounded-xl hover:border-neon-blue/40 transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-neon-blue mx-auto mb-2 animate-pulse" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neon-cyan">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPlatform;
