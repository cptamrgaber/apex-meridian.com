'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.technology': 'Technology',
    'nav.platform': 'Platform',
    'nav.investors': 'Investors',
    'nav.vision': 'AI Vision',
    'nav.documents': 'Documents',
    'nav.contact': 'Contact',
    'nav.employeeLogin': 'Employee Login',
    'nav.language': 'العربية',
    
    // Homepage
    'hero.title': 'Pioneering the Future of Artificial Intelligence',
    'hero.subtitle': 'Advanced AI solutions transforming industries through intelligent automation, predictive analytics, and revolutionary AGI development.',
    'hero.cta1': 'Explore Solutions',
    'hero.cta2': 'Get Started',
    
    // Solutions
    'solutions.title': 'AI Solutions Across Industries',
    'solutions.subtitle': 'Transforming complex challenges into intelligent opportunities with cutting-edge artificial intelligence',
    'solutions.aeromind.title': 'AeroMind',
    'solutions.aeromind.subtitle': 'Aviation Intelligence Platform',
    'solutions.aeromind.description': 'Revolutionary flight operations AI that predicts maintenance needs, optimizes routes in real-time, and enhances passenger safety through intelligent automation.',
    'solutions.aeromind.cta': 'Explore AeroMind',
    
    'solutions.cyberguard.title': 'CyberGuard',
    'solutions.cyberguard.subtitle': 'Intelligent Security Shield',
    'solutions.cyberguard.description': 'Next-generation cyber defense that anticipates threats before they materialize, using advanced AI to create an impenetrable digital fortress.',
    'solutions.cyberguard.cta': 'Discover CyberGuard',
    
    'solutions.edugenius.title': 'EduGenius',
    'solutions.edugenius.subtitle': 'Personalized Learning AI',
    'solutions.edugenius.description': 'Adaptive learning companion that understands each student\'s unique learning style, creating personalized educational journeys that maximize potential.',
    'solutions.edugenius.cta': 'Experience EduGenius',
    
    'solutions.meridianagi.title': 'MeridianAGI',
    'solutions.meridianagi.subtitle': 'Artificial General Intelligence',
    'solutions.meridianagi.description': 'The future of artificial intelligence - a general intelligence system that thinks, learns, and adapts like humans, but with unlimited potential.',
    'solutions.meridianagi.cta': 'Enter MeridianAGI',
    
    // Platform
    'platform.title': 'MeridianAI Platform',
    'platform.description': 'Our proprietary AI platform powers intelligent solutions across all industries. Built with advanced machine learning, natural language processing, and computer vision capabilities.',
    'platform.feature1.title': 'Scalable Architecture',
    'platform.feature1.description': 'Cloud-native platform designed for enterprise-scale deployments',
    'platform.feature2.title': 'Real-time Processing',
    'platform.feature2.description': 'Sub-second response times for mission-critical applications',
    'platform.feature3.title': 'Ethical AI Framework',
    'platform.feature3.description': 'Built-in safeguards ensuring responsible AI deployment',
    'platform.cta': 'Explore Platform',
    
    // Footer
    'footer.company': 'Company',
    'footer.solutions': 'Solutions',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.contactUs': 'Contact Us',
    'common.readMore': 'Read More',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'حول',
    'nav.technology': 'التكنولوجيا',
    'nav.platform': 'المنصة',
    'nav.investors': 'المستثمرون',
    'nav.vision': 'رؤية الذكاء الاصطناعي',
    'nav.documents': 'الوثائق',
    'nav.contact': 'اتصل بنا',
    'nav.employeeLogin': 'دخول الموظفين',
    'nav.language': 'English',
    
    // Homepage
    'hero.title': 'ريادة مستقبل الذكاء الاصطناعي',
    'hero.subtitle': 'حلول ذكاء اصطناعي متقدمة تحول الصناعات من خلال الأتمتة الذكية والتحليلات التنبؤية وتطوير الذكاء الاصطناعي العام الثوري.',
    'hero.cta1': 'استكشف الحلول',
    'hero.cta2': 'ابدأ الآن',
    
    // Solutions
    'solutions.title': 'حلول الذكاء الاصطناعي عبر الصناعات',
    'solutions.subtitle': 'تحويل التحديات المعقدة إلى فرص ذكية باستخدام الذكاء الاصطناعي المتطور',
    'solutions.aeromind.title': 'إيروماند',
    'solutions.aeromind.subtitle': 'منصة ذكاء الطيران',
    'solutions.aeromind.description': 'ذكاء اصطناعي ثوري لعمليات الطيران يتنبأ باحتياجات الصيانة، ويحسن المسارات في الوقت الفعلي، ويعزز سلامة الركاب من خلال الأتمتة الذكية.',
    'solutions.aeromind.cta': 'استكشف إيروماند',
    
    'solutions.cyberguard.title': 'سايبرجارد',
    'solutions.cyberguard.subtitle': 'درع الأمان الذكي',
    'solutions.cyberguard.description': 'دفاع سيبراني من الجيل التالي يتوقع التهديدات قبل تحققها، باستخدام ذكاء اصطناعي متقدم لإنشاء حصن رقمي منيع.',
    'solutions.cyberguard.cta': 'اكتشف سايبرجارد',
    
    'solutions.edugenius.title': 'إيدوجينيوس',
    'solutions.edugenius.subtitle': 'ذكاء التعلم الشخصي',
    'solutions.edugenius.description': 'رفيق تعلم تكيفي يفهم أسلوب التعلم الفريد لكل طالب، وينشئ رحلات تعليمية شخصية تعظم الإمكانات.',
    'solutions.edugenius.cta': 'جرب إيدوجينيوس',
    
    'solutions.meridianagi.title': 'مريديان إيه جي آي',
    'solutions.meridianagi.subtitle': 'الذكاء الاصطناعي العام',
    'solutions.meridianagi.description': 'مستقبل الذكاء الاصطناعي - نظام ذكاء عام يفكر ويتعلم ويتكيف مثل البشر، ولكن بإمكانات لا محدودة.',
    'solutions.meridianagi.cta': 'ادخل مريديان إيه جي آي',
    
    // Platform
    'platform.title': 'منصة مريديان إيه آي',
    'platform.description': 'منصة الذكاء الاصطناعي الخاصة بنا تشغل الحلول الذكية عبر جميع الصناعات. مبنية بتعلم آلة متقدم ومعالجة لغة طبيعية وقدرات رؤية حاسوبية.',
    'platform.feature1.title': 'هندسة قابلة للتوسع',
    'platform.feature1.description': 'منصة سحابية مصممة لنشر على نطاق المؤسسات',
    'platform.feature2.title': 'معالجة في الوقت الفعلي',
    'platform.feature2.description': 'أوقات استجابة أقل من الثانية للتطبيقات الحرجة',
    'platform.feature3.title': 'إطار ذكاء اصطناعي أخلاقي',
    'platform.feature3.description': 'ضمانات مدمجة تضمن نشر ذكاء اصطناعي مسؤول',
    'platform.cta': 'استكشف المنصة',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.solutions': 'الحلول',
    'footer.resources': 'الموارد',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.contactUs': 'اتصل بنا',
    'common.readMore': 'اقرأ المزيد',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

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
