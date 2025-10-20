'use client';

import React from 'react';
import Link from 'next/link';

interface ApexMeridianBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showRegistered?: boolean;
  asLink?: boolean;
}

export const ApexMeridianBrand: React.FC<ApexMeridianBrandProps> = ({
  className = '',
  size = 'md',
  showRegistered = true,
  asLink = true
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const baseClasses = `
    font-light 
    ${sizeClasses[size]} 
    text-blue-400
    hover:text-blue-300
    transition-colors
    ${className}
  `;

  const content = (
    <span className={baseClasses}>
      <span className="whitespace-nowrap">
        A  p  e  x    M  e  r  i  d  i  a  n
      </span>
      {showRegistered && (
        <sup className="text-sm ml-1">®</sup>
      )}
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
};

export default ApexMeridianBrand;

