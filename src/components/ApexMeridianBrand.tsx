'use client';

import React from 'react';

interface ApexMeridianBrandProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showRegistered?: boolean;
  color?: 'blue' | 'white' | 'dark' | 'gradient';
}

export const ApexMeridianBrand: React.FC<ApexMeridianBrandProps> = ({
  className = '',
  size = 'md',
  showRegistered = true,
  color = 'blue'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    white: 'text-white',
    dark: 'text-gray-900 dark:text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
  };

  const baseClasses = `
    font-light 
    ${sizeClasses[size]} 
    ${colorClasses[color]}
    ${className}
  `;

  return (
    <span className={baseClasses} style={{ letterSpacing: '0.2em' }}>
      <span>A  p  e  x  M  e  r  i  d  i  a  n</span>
      {showRegistered && (
        <sup className="text-xs ml-1">®</sup>
      )}
    </span>
  );
};

// Utility function for consistent company name styling
export const apexMeridianText = (options?: {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'blue' | 'white' | 'dark' | 'gradient';
  showRegistered?: boolean;
}) => {
  const { size = 'md', color = 'blue', showRegistered = true } = options || {};
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    white: 'text-white',
    dark: 'text-gray-900 dark:text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
  };

  return `font-light ${sizeClasses[size]} ${colorClasses[color]}`;
};

export default ApexMeridianBrand;
