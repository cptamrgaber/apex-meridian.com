'use client';

import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function EmployeeLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/assets/logo_blue.png"
                alt="A  p  e  x  M  e  r  i  d  i  a  n Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Website
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Employee Portal Access
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to the A  p  e  x  M  e  r  i  d  i  a  n employee portal. Please sign in with your company credentials 
              to access your dashboard, HR resources, and company information.
            </p>
          </div>

          <LoginForm />

          {/* Additional Information */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Portal Features
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Dashboard</h3>
                  <p className="text-gray-600 text-sm">
                    Access your personal information, time tracking, and leave balances
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Company Resources</h3>
                  <p className="text-gray-600 text-sm">
                    Employee handbook, policies, benefits information, and training materials
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Company announcements, team updates, and direct communication tools
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need help accessing your account?
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Contact IT Support: <a href="mailto:support@apex-meridian.com" className="text-blue-600 hover:text-blue-800">support@apex-meridian.com</a>
              </p>
              <p className="text-sm text-gray-500">
                HR Department: <a href="mailto:hr@apex-meridian.com" className="text-blue-600 hover:text-blue-800">hr@apex-meridian.com</a>
              </p>
              <p className="text-sm text-gray-500">
                Phone: +201200929092
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
