'use client';

import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always use dark theme
  const theme: Theme = 'dark';

  // Apply dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Dummy functions for compatibility
  const setTheme = () => {};
  const toggleTheme = () => {};

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
        theme: 'dark' as Theme,
        setTheme: () => {},
        toggleTheme: () => {}
      };
    }
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

