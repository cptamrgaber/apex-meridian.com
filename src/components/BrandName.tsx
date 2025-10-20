import React from 'react';
import Link from 'next/link';

interface BrandNameProps {
  className?: string;
  showRegistered?: boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  style?: React.CSSProperties;
  asLink?: boolean;
}

export default function BrandName({ 
  className = '', 
  showRegistered = true, 
  size = 'base',
  style = {},
  asLink = true
}: BrandNameProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm', 
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const registeredSizes = {
    xs: 'text-xs',
    sm: 'text-xs',
    base: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
    '2xl': 'text-lg',
    '3xl': 'text-xl',
    '4xl': 'text-2xl',
    '5xl': 'text-3xl',
    '6xl': 'text-4xl'
  };

  const content = (
    <span 
      className={`${sizeClasses[size]} ${className} whitespace-nowrap inline-block text-blue-400 hover:text-blue-300 transition-colors font-light`}
      style={{ letterSpacing: '0.2em', ...style }}
    >
      A  p  e  x    M  e  r  i  d  i  a  n{showRegistered && <sup className={`${registeredSizes[size]} ml-1`}>®</sup>}
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

