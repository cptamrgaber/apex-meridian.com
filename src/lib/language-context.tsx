'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { translations, Language, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always use English
  const language: Language = 'en';
  const isRTL = false;

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.body.className = document.body.className.replace(/\b(lang-en|lang-ar)\b/g, '');
    document.body.classList.add('lang-en');
  }, []);

  const t = (key: TranslationKey): string => {
    return translations.en?.[key] || key;
  };

  // Dummy function for compatibility
  const setLanguage = () => {};

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

