'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function DramaticHero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Professional Text Logo */}
        <div className="flex items-center justify-center mb-8 animate-slide-up">
          <div className="relative">
            <h1 className="text-center font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2" style={{ letterSpacing: '0.2em' }}>
              A p e x  M e r i d i a n<sup className="text-2xl ml-1">®</sup>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* AGI Tree Icon */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link href="/solutions/agi" className="group relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full p-8 border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300">
              <Image
                src="/assets/Apex-Meridian_tree_drowing.png"
                alt="AI Technology"
                width={180}
                height={180}
                className="w-36 h-36 md:w-48 md:h-48 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t('hero.title1')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '1.5s' }}>
          <Link
            href="/solutions"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <span className="relative z-10">{t('hero.startBtn')}</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            href="/about/overview"
            className="group inline-flex items-center px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-full hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            {t('about.learnMore')}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Enterprise-Grade</div>
            <p className="text-blue-200 text-sm">Security Level</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Lightning Fast</div>
            <p className="text-blue-200 text-sm">Processing Speed</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Advanced</div>
            <p className="text-blue-200 text-sm">Learning Capabilities</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Global</div>
            <p className="text-blue-200 text-sm">Market Reach</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
