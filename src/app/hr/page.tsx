'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  FileText, 
  TrendingUp,
  Clock,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Search,
  Filter,
  Download
} from 'lucide-react';

function HRDashboardContent() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  // Mock employee data
  const employees = [
    { id: 1, name: 'Employee #001', department: 'Engineering', role: 'Senior Developer', status: 'Active', joinDate: '2023-01-15' },
    { id: 2, name: 'Employee #002', department: 'Marketing', role: 'Marketing Manager', status: 'Active', joinDate: '2023-03-20' },
    { id: 3, name: 'Employee #003', department: 'Sales', role: 'Sales Representative', status: 'Active', joinDate: '2023-06-10' },
    { id: 4, name: 'Employee #004', department: 'HR', role: 'HR Specialist', status: 'Active', joinDate: '2023-02-28' },
  ];

  const leaveRequests = [
    { id: 1, employee: 'Employee #001', type: 'Vacation', dates: 'Dec 25-26, 2024', status: 'Pending', submitted: '2024-12-01' },
    { id: 2, employee: 'Employee #002', type: 'Sick Leave', dates: 'Dec 15, 2024', status: 'Approved', submitted: '2024-12-14' },
    { id: 3, employee: 'Employee #003', type: 'Personal', dates: 'Jan 2-3, 2025', status: 'Pending', submitted: '2024-12-05' },
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Header */}
      <div className="bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-white">HR Dashboard</h1>
              <p className="text-gray-600">Human Resources Management Portal</p>
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
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Total Employees</h3>
                <p className="text-2xl font-bold text-blue-600">124</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">New Hires</h3>
                <p className="text-2xl font-bold text-green-600">8</p>
                <p className="text-sm text-gray-500">This month</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Pending Requests</h3>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Retention Rate</h3>
                <p className="text-2xl font-bold text-purple-600">94%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-900 rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('employees')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'employees'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Employees
              </button>
              <button
                onClick={() => setActiveTab('requests')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'requests'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Leave Requests
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reports'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Reports
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <UserPlus className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-white">New employee onboarded: Alex Chen</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-white">Leave request approved for Jane Smith</p>
                          <p className="text-xs text-gray-500">4 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                          <FileText className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-white">Performance review completed for Q4</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors text-left">
                        <UserPlus className="h-6 w-6 text-blue-600 mb-2" />
                        <h4 className="font-medium text-white">Add Employee</h4>
                        <p className="text-sm text-gray-600">Onboard new team member</p>
                      </button>
                      <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors text-left">
                        <Calendar className="h-6 w-6 text-green-600 mb-2" />
                        <h4 className="font-medium text-white">Schedule Review</h4>
                        <p className="text-sm text-gray-600">Performance evaluation</p>
                      </button>
                      <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors text-left">
                        <FileText className="h-6 w-6 text-purple-600 mb-2" />
                        <h4 className="font-medium text-white">Generate Report</h4>
                        <p className="text-sm text-gray-600">HR analytics and insights</p>
                      </button>
                      <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors text-left">
                        <Mail className="h-6 w-6 text-red-600 mb-2" />
                        <h4 className="font-medium text-white">Send Announcement</h4>
                        <p className="text-sm text-gray-600">Company-wide communication</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'employees' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-white">Employee Directory</h3>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search employees..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-300 bg-gray-900 hover:bg-gray-800">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Employee
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Join Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-200">
                      {employees.map((employee) => (
                        <tr key={employee.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                                <Users className="h-5 w-5 text-gray-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-white">{employee.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {employee.department}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {employee.role}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {employee.joinDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {employee.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'requests' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-white">Leave Requests</h3>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-300 bg-gray-900 hover:bg-gray-800">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dates
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Submitted
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-200">
                      {leaveRequests.map((request) => (
                        <tr key={request.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {request.employee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {request.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {request.dates}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {request.submitted}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              request.status === 'Approved' 
                                ? 'bg-green-100 text-green-800'
                                : request.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {request.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {request.status === 'Pending' && (
                              <>
                                <button className="text-green-600 hover:text-green-900 mr-3">Approve</button>
                                <button className="text-red-600 hover:text-red-900">Deny</button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-lg font-medium text-white mb-6">HR Reports & Analytics</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-white mb-2">Employee Turnover</h4>
                    <p className="text-sm text-gray-600 mb-4">Monthly turnover rates and trends</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Generate Report</button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-white mb-2">Attendance Summary</h4>
                    <p className="text-sm text-gray-600 mb-4">Employee attendance and time tracking</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Generate Report</button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-white mb-2">Performance Metrics</h4>
                    <p className="text-sm text-gray-600 mb-4">Employee performance evaluations</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Generate Report</button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-white mb-2">Compensation Analysis</h4>
                    <p className="text-sm text-gray-600 mb-4">Salary and benefits breakdown</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Generate Report</button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-white mb-2">Training Progress</h4>
                    <p className="text-sm text-gray-600 mb-4">Employee development and training</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Generate Report</button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-white mb-2">Diversity & Inclusion</h4>
                    <p className="text-sm text-gray-600 mb-4">Workforce diversity metrics</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Generate Report</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HRPage() {
  return (
    <ProtectedRoute requiredRole={['admin', 'hr']}>
      <HRDashboardContent />
    </ProtectedRoute>
  );
}
