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

const DramaticCTA: React.FC = () => {
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
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
            {Array.from({ length: 192 }).map((_, i) => (
              <div
                key={i}
                className="border border-neon-blue/10 animate-pulse-slow"
                style={{
                  animationDelay: `${(i * 0.05) % 4}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Scanning beams */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-scan opacity-60" 
               style={{ top: '30%' }} />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan opacity-40" 
               style={{ top: '70%', animationDelay: '1s' }} />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-neon-blue/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Glitch overlay */}
        <div className={`absolute inset-0 transition-all duration-200 ${
          glitchActive ? 'bg-neon-pink/10 animate-glitch' : 'bg-transparent'
        }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Header Section */}
        <div className="mb-16">
          {/* Icon Array */}
          <div className="flex justify-center items-center space-x-4 mb-8">
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
            Ready to Transform Your Industry?
          </h2>

          {/* Glitch text overlay */}
          {glitchActive && (
            <>
              <h2 className="absolute inset-0 text-4xl md:text-6xl font-bold text-neon-pink animate-glow opacity-70 transform translate-x-1">
                Ready to Transform Your Industry?
              </h2>
              <h2 className="absolute inset-0 text-4xl md:text-6xl font-bold text-neon-cyan animate-glow opacity-50 transform -translate-x-1">
                Ready to Transform Your Industry?
              </h2>
            </>
          )}

          {/* Subtitle */}
          <p className="text-xl text-neon-cyan max-w-4xl mx-auto animate-flicker">
            Join leading organizations already leveraging Apex-Meridian&apos;s AI solutions to drive innovation and growth.
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link
            href="/contact"
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-neon-blue to-neon-cyan text-tech-black font-bold rounded-lg hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce relative z-10" />
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
          </Link>
          
          <Link
            href="/investors"
            className="group relative inline-flex items-center px-10 py-4 border-2 border-neon-purple text-neon-purple font-bold rounded-lg hover:bg-neon-purple hover:text-tech-black transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:scale-105"
          >
            <TrendingUp className="mr-3 h-6 w-6 group-hover:animate-pulse" />
            Investment Opportunities
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Eye, label: 'Trusted Vision', value: 'AI-Powered' },
            { icon: Zap, label: 'Lightning Fast', value: 'Real-Time' },
            { icon: Brain, label: 'Smart Solutions', value: 'Adaptive' },
            { icon: Globe, label: 'Global Reach', value: 'Worldwide' }
          ].map((indicator, index) => (
            <div
              key={indicator.label}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-neon">
                <indicator.icon className="h-8 w-8 text-neon-blue group-hover:animate-pulse" />
              </div>
              <div className="text-lg font-bold text-white mb-1">{indicator.value}</div>
              <div className="text-sm text-white/60">{indicator.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-neon-blue"></div>
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple"></div>
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-neon-purple"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaticCTA;
