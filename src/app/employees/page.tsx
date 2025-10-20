'use client';

import React from 'react';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { 
  User, 
  Calendar, 
  FileText, 
  Settings, 
  Bell, 
  Clock,
  Mail,
  Phone,
  MapPin,
  LogOut
} from 'lucide-react';

function EmployeeDashboardContent() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Header */}
      <div className="bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Employee Portal</h1>
              <p className="text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-300 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg shadow p-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-white">{user?.name}</h2>
                <p className="text-gray-600">{user?.department}</p>
                <p className="text-sm text-gray-500 mt-1">{user?.role}</p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  {user?.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  +201200929092
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                  New Cairo, Egypt
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-lg shadow p-6 mt-6">
              <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-800 flex items-center">
                  <Settings className="h-4 w-4 mr-3 text-gray-400" />
                  Update Profile
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-800 flex items-center">
                  <Bell className="h-4 w-4 mr-3 text-gray-400" />
                  Notification Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-800 flex items-center">
                  <FileText className="h-4 w-4 mr-3 text-gray-400" />
                  Download Documents
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dashboard Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Time Tracking</h3>
                    <p className="text-gray-600">40 hours this week</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Leave Balance</h3>
                    <p className="text-gray-600">15 days remaining</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900 rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-white">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-white">Submitted expense report for Q4 2024</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-white">Approved leave request for Dec 25-26</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                      <Bell className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-white">Completed mandatory security training</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Resources */}
            <div className="bg-gray-900 rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-white">Company Resources</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors">
                    <h4 className="font-medium text-white">Employee Handbook</h4>
                    <p className="text-sm text-gray-600 mt-1">Company policies and procedures</p>
                  </a>
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors">
                    <h4 className="font-medium text-white">Benefits Portal</h4>
                    <p className="text-sm text-gray-600 mt-1">Health insurance and benefits</p>
                  </a>
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors">
                    <h4 className="font-medium text-white">Training Materials</h4>
                    <p className="text-sm text-gray-600 mt-1">Professional development resources</p>
                  </a>
                  <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors">
                    <h4 className="font-medium text-white">IT Support</h4>
                    <p className="text-sm text-gray-600 mt-1">Technical assistance and tickets</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmployeePage() {
  return (
    <ProtectedRoute requiredRole={['admin', 'hr', 'employee']}>
      <EmployeeDashboardContent />
    </ProtectedRoute>
  );
}
