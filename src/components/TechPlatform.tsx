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

interface TechFeature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stats: string;
  color: string;
}

const techFeatures: TechFeature[] = [
  {
    icon: Cpu,
    title: 'Quantum Processing',
    description: 'Advanced quantum-inspired algorithms for exponential performance gains',
    stats: '1000x Faster',
    color: '#00d4ff'
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Zero-trust architecture with quantum encryption protocols',
    stats: '99.99% Secure',
    color: '#ff073a'
  },
  {
    icon: Brain,
    title: 'Neural Architecture',
    description: 'Self-evolving AI models that adapt and improve autonomously',
    stats: 'Self-Learning',
    color: '#8b5cf6'
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'Distributed computing across 50+ data centers worldwide',
    stats: '<1ms Latency',
    color: '#00ff88'
  }
];

const platformCapabilities = [
  'Real-time Processing',
  'Scalable Architecture', 
  'Ethical AI Framework',
  'Advanced Analytics',
  'Multi-Modal Intelligence',
  'Quantum-Safe Encryption'
];

const TechPlatform: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [pulseActive, setPulseActive] = useState<boolean>(false);

  useEffect(() => {
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % techFeatures.length);
    }, 4000);

    // Pulse effect
    const pulseInterval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1000);
    }, 3000);

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
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" 
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
                MeridianAI Platform
              </h2>
              
              <p className="text-xl text-neon-cyan mb-8 animate-flicker">
                Our proprietary AI platform powers intelligent solutions across all industries. Built with 
                advanced machine learning, natural language processing, and computer vision capabilities.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="space-y-4 mb-8">
              {platformCapabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${pulseActive ? 'animate-ping' : ''}`}
                       style={{ backgroundColor: '#00d4ff20' }}>
                    <CheckCircle className="w-4 h-4 text-neon-blue" />
                  </div>
                  <span className="text-lg font-medium text-white hover:text-neon-blue transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/technology/platform"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-tech-black font-bold rounded-lg hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Explore Platform
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Interactive Features */}
          <div className="relative">
            {/* Central Hub */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Core circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border border-neon-blue/30 flex items-center justify-center animate-glow">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center shadow-neon">
                  <Brain className="h-16 w-16 text-tech-black animate-pulse" />
                </div>
              </div>

              {/* Orbiting features */}
              {techFeatures.map((feature, index) => {
                const angle = (index * 90) - 90; // Start from top
                const radius = 140;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className={`absolute w-20 h-20 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-500 ${
                      isActive 
                        ? 'border-white bg-white/20 scale-110 shadow-neon' 
                        : 'border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/15'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                      boxShadow: isActive ? `0 0 20px ${feature.color}` : undefined
                    }}
                    onClick={() => setActiveFeature(index)}
                  >
                    <feature.icon 
                      className={`h-8 w-8 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/70'
                      }`} 
                    />
                    
                    {/* Connection line */}
                    <div 
                      className={`absolute w-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-30'
                      }`}
                      style={{
                        height: `${radius - 50}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top',
                        transform: `rotate(${angle + 180}deg) translateY(-10px)`
                      }}
                    />
                  </div>
                );
              })}

              {/* Feature info panel */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-72">
                <div className="bg-tech-darker/80 backdrop-blur-sm border border-neon-blue/30 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {techFeatures[activeFeature].title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                    {techFeatures[activeFeature].description}
                  </p>
                  <div className="inline-flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-neon-blue animate-pulse" />
                    <span className="text-neon-blue font-bold">
                      {techFeatures[activeFeature].stats}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Processing Power', value: '10 PetaFLOPS', icon: Cpu },
            { label: 'Global Reach', value: '50+ Countries', icon: Globe },
            { label: 'Uptime', value: '99.99%', icon: Activity },
            { label: 'Data Security', value: 'Quantum-Safe', icon: Lock }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-neon-blue group-hover:animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPlatform;
