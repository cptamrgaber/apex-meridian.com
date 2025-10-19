'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Handle initial theme setup on client side only
  useEffect(() => {
    setMounted(true);
    
    try {
      // Get saved theme from localStorage or system preference
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme);
        // Apply immediately to prevent flash
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = systemPrefersDark ? 'dark' : 'light';
        setTheme(initialTheme);
        localStorage.setItem('theme', initialTheme);
        
        // Apply immediately to prevent flash
        if (initialTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch (error) {
      // Fallback if localStorage is not available
      console.warn('Theme context: localStorage not available, using light theme');
      setTheme('light');
    }
  }, []);

  // Apply theme changes to DOM when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Theme context: Could not save theme to localStorage');
    }
    
    // Apply or remove dark class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during SSR to prevent errors
    if (typeof window === 'undefined') {
      return {
        theme: 'light' as Theme,
        setTheme: () => {},
        toggleTheme: () => {}
      };
    }
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
