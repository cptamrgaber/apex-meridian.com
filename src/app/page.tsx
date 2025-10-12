'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, BookOpen, Brain, Users, TrendingUp } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import DramaticHero from '@/components/DramaticHero';
import ThrillerSolutions from '@/components/ThrillerSolutions';
import TechPlatform from '@/components/TechPlatform';
import DramaticCTA from '@/components/DramaticCTA';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatedBackground />
      
      <DramaticHero />
      
      <ThrillerSolutions />

      <TechPlatform />

      <DramaticCTA />
    </div>
  );
}
