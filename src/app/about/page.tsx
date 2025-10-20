'use client';

import React from 'react';
import Link from 'next/link';
import { Building, Users, History, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`bg-gray-900 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about/overview" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.overview.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {t('about.overview.description')}
                </p>
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                  <span className="font-medium">{t('about.learnMore')}</span>
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </div>
              </div>
            </Link>

            <Link href="/about/leadership" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.leadership.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {t('about.leadership.description')}
                </p>
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                  <span className="font-medium">{t('about.meetTeam')}</span>
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </div>
              </div>
            </Link>

            <Link href="/about/history" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                  <History className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.history.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {t('about.history.description')}
                </p>
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                  <span className="font-medium">{t('about.ourStory')}</span>
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </div>
              </div>
            </Link>

            <Link href="/about/careers" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                  <Briefcase className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.careers.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {t('about.careers.description')}
                </p>
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                  <span className="font-medium">{t('about.viewOpportunities')}</span>
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview - Legally Safe */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('about.whyChoose.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.whyChoose.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Growing</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.stats.users')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Trusted</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.stats.clients')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Reliable</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t('about.stats.uptime')}</p>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              * Company metrics represent current development status and growth targets. Performance may vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              {t('about.cta.exploreSolutions')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 hover:text-blue-900 transition-colors"
            >
              {t('about.cta.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
