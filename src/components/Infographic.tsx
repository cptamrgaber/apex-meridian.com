'use client';

import { TrendingUp, Users, Globe, Zap, Shield, Brain } from 'lucide-react';

interface InfographicProps {
  type: 'stats' | 'process' | 'features';
  title?: string;
}

export default function Infographic({ type, title }: InfographicProps) {
  if (type === 'stats') {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8">
        {title && (
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            {title}
          </h3>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
            <div className="text-sm text-gray-300">Growth Rate</div>
          </div>
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-sm text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-sm text-gray-300">Countries</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Uptime</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'process') {
    return (
      <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
        {title && (
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            {title}
          </h3>
        )}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <Brain className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-semibold text-white mb-2">Analyze</h4>
            <p className="text-sm text-gray-300">AI processes data patterns</p>
          </div>
          
          <div className="hidden lg:block">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded"></div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <Zap className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-semibold text-white mb-2">Process</h4>
            <p className="text-sm text-gray-300">Advanced algorithms work</p>
          </div>
          
          <div className="hidden lg:block">
            <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-purple-600 rounded"></div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <Shield className="h-10 w-10 text-purple-600" />
            </div>
            <h4 className="font-semibold text-white mb-2">Secure</h4>
            <p className="text-sm text-gray-300">Results delivered safely</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'features') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="bg-white bg-opacity-20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <Brain className="h-6 w-6" />
          </div>
          <h4 className="font-semibold mb-2">Advanced AI</h4>
          <p className="text-sm opacity-90">Cutting-edge machine learning algorithms</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="bg-white bg-opacity-20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h4 className="font-semibold mb-2">Enterprise Security</h4>
          <p className="text-sm opacity-90">Bank-level encryption and protection</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="bg-white bg-opacity-20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6" />
          </div>
          <h4 className="font-semibold mb-2">Lightning Fast</h4>
          <p className="text-sm opacity-90">Real-time processing and responses</p>
        </div>
      </div>
    );
  }

  return null;
}
