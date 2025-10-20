'use client';

import React from 'react';
import BrandName from '@/components/BrandName';
import { useAuth } from '@/lib/auth-context';
import { User } from '@/lib/auth';
import LoginForm from './LoginForm';
import { Shield, AlertCircle } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({ 
  children, 
  requiredRole, 
  fallback 
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return fallback || (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Employee Access Required
            </h1>
            <p className="text-gray-600">
              Please sign in with your <BrandName asLink={false} className="inline" /> employee credentials to access this area.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  if (requiredRole && !hasRequiredRole(user, requiredRole)) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Access Denied
            </h1>
            <p className="text-gray-600 mb-6">
              You do not have the required permissions to access this area.
            </p>
            <p className="text-sm text-gray-500">
              Current role: {user.role} | Required: {Array.isArray(requiredRole) ? requiredRole.join(', ') : requiredRole}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

function hasRequiredRole(user: User, requiredRole: string | string[]): boolean {
  const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
  return roles.includes(user.role);
}
