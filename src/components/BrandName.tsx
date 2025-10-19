import React from 'react';

interface BrandNameProps {
  className?: string;
  showRegistered?: boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  style?: React.CSSProperties;
}

export default function BrandName({ 
  className = '', 
  showRegistered = true, 
  size = 'base',
  style = {}
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

  return (
    <span 
      className={`${sizeClasses[size]} ${className} whitespace-nowrap inline-block`}
      style={style}
    >
      A  p  e  x    M  e  r  i  d  i  a  n{showRegistered && <sup className={`${registeredSizes[size]} ml-1`}>®</sup>}
    </span>
  );
}
