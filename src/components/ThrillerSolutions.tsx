'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, BookOpen, Brain, Eye, Lock, Cpu, Rocket } from 'lucide-react';

interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  gradient: string;
  glowColor: string;
  features: string[];
  stats: { label: string; value: string }[];
}

const solutions: Solution[] = [
  {
    id: 'aeromind',
    name: 'AeroMind',
    tagline: 'Aviation Intelligence Platform',
    description: 'Revolutionary flight operations AI that predicts maintenance needs, optimizes routes in real-time, and enhances passenger safety through intelligent automation.',
    icon: Zap,
    href: '/solutions/aviation',
    gradient: 'from-blue-900 via-blue-800 to-cyan-900',
    glowColor: '#00d4ff',
    features: ['Predictive Maintenance', 'Route Optimization', 'Safety Enhancement', 'Real-time Analytics'],
    stats: [
      { label: 'Efficiency Gain', value: '35%' },
      { label: 'Cost Reduction', value: '28%' }
    ]
  },
  {
    id: 'cyberguard',
    name: 'CyberGuard',
    tagline: 'Intelligent Security Shield',
    description: 'Next-generation cyber defense that anticipates threats before they materialize, using advanced AI to create an impenetrable digital fortress.',
    icon: Shield,
    href: '/solutions/cybersecurity',
    gradient: 'from-red-900 via-red-800 to-orange-900',
    glowColor: '#ff073a',
    features: ['Threat Prediction', 'Zero-Day Protection', 'Behavioral Analysis', 'Quantum Encryption'],
    stats: [
      { label: 'Threat Detection', value: '99.9%' },
      { label: 'Response Time', value: '<100ms' }
    ]
  },
  {
    id: 'edugenius',
    name: 'EduGenius',
    tagline: 'Personalized Learning AI',
    description: 'Adaptive learning companion that understands each student\'s unique learning style, creating personalized educational journeys that maximize potential.',
    icon: BookOpen,
    href: '/solutions/education',
    gradient: 'from-green-900 via-green-800 to-emerald-900',
    glowColor: '#00ff88',
    features: ['Adaptive Learning', 'Progress Tracking', 'Skill Assessment', 'Content Generation'],
    stats: [
      { label: 'Learning Speed', value: '3x Faster' },
      { label: 'Retention Rate', value: '94%' }
    ]
  },
  {
    id: 'meridianagi',
    name: 'MeridianAGI',
    tagline: 'Artificial General Intelligence',
    description: 'The future of artificial intelligence - a general intelligence system that thinks, learns, and adapts like humans, but with unlimited potential.',
    icon: Brain,
    href: '/solutions/agi',
    gradient: 'from-purple-900 via-purple-800 to-pink-900',
    glowColor: '#8b5cf6',
    features: ['General Intelligence', 'Self-Learning', 'Creative Problem Solving', 'Ethical Reasoning'],
    stats: [
      { label: 'IQ Equivalent', value: '200+' },
      { label: 'Learning Rate', value: '1000x Human' }
    ]
  }
];

const ThrillerSolutions: React.FC = () => {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);
  const [activeParticles, setActiveParticles] = useState<number[]>([]);

  useEffect(() => {
    // Create random particle animations
    const interval = setInterval(() => {
      setActiveParticles(prev => {
        const newParticles = [...prev];
        // Add new particle
        if (newParticles.length < 20) {
          newParticles.push(Math.random());
        }
        // Remove old particles
        return newParticles.slice(-15);
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
            AI Solutions Across Industries
          </h2>
          
          <p className="relative text-xl text-white max-w-3xl mx-auto animate-flicker pb-8"
             style={{ 
               textShadow: '0 0 10px rgba(0, 212, 255, 0.6), 1px 1px 2px rgba(0, 0, 0, 0.8)' 
             }}>
            Transforming complex challenges into intelligent opportunities with cutting-edge artificial intelligence
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
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                        {solution.name}
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>{solution.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="text-right">
                    {solution.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="mb-1">
                        <div className="text-lg font-bold text-neon-blue">{stat.value}</div>
                        <div className="text-xs text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                  {solution.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                      style={{ 
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                        animationDelay: `${featureIndex * 0.1}s` 
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={solution.href}
                  className="group/btn relative inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Explore {solution.name}</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                </Link>
              </div>

              {/* Floating particles */}
              {hoveredSolution === solution.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-blue"></div>
            <Brain className="h-8 w-8 text-neon-blue animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-blue"></div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Industry?
          </h3>
          
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-tech-black font-bold rounded-lg hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
          >
            <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            Start Your AI Journey
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThrillerSolutions;
