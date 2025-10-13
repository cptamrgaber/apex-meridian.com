'use client';

import React, { useState } from 'react';
import { FileText, Download, Lock, Users, Shield, Calendar, Search, Filter, Eye, Upload, FolderOpen, File, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

interface Document {
  id: string;
  title: string;
  category: string;
  type: string;
  size: string;
  lastModified: string;
  accessLevel: 'public' | 'employee' | 'hr' | 'admin';
  description: string;
  downloadCount: number;
  status: 'active' | 'archived' | 'draft';
}

const DocumentsPage: React.FC = () => {
  const { user } = useAuth();
  const { t, isRTL } = useLanguage();
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAccessLevel, setSelectedAccessLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  // Sample documents data
  const documents: Document[] = [
    {
      id: '1',
      title: 'Company Overview & Mission Statement',
      category: 'Corporate',
      type: 'PDF',
      size: '2.4 MB',
      lastModified: '2024-01-15',
      accessLevel: 'public',
      description: 'Comprehensive overview of Apex-Meridian\'s mission, vision, and core values.',
      downloadCount: 1247,
      status: 'active'
    },
    {
      id: '2',
      title: 'Employee Handbook 2024',
      category: 'HR',
      type: 'PDF',
      size: '5.8 MB',
      lastModified: '2024-01-10',
      accessLevel: 'employee',
      description: 'Complete guide to company policies, procedures, and employee benefits.',
      downloadCount: 892,
      status: 'active'
    },
    {
      id: '3',
      title: 'AeroMind Technical Specifications',
      category: 'Technical',
      type: 'PDF',
      size: '12.3 MB',
      lastModified: '2024-01-08',
      accessLevel: 'employee',
      description: 'Detailed technical documentation for the AeroMind aviation AI platform.',
      downloadCount: 456,
      status: 'active'
    },
    {
      id: '4',
      title: 'Financial Reports Q4 2023',
      category: 'Financial',
      type: 'XLSX',
      size: '3.2 MB',
      lastModified: '2024-01-05',
      accessLevel: 'admin',
      description: 'Quarterly financial statements and performance metrics.',
      downloadCount: 123,
      status: 'active'
    },
    {
      id: '5',
      title: 'CyberGuard Security Protocols',
      category: 'Security',
      type: 'PDF',
      size: '8.7 MB',
      lastModified: '2024-01-03',
      accessLevel: 'hr',
      description: 'Security implementation guidelines and best practices.',
      downloadCount: 234,
      status: 'active'
    },
    {
      id: '6',
      title: 'AI Ethics Framework',
      category: 'Policy',
      type: 'PDF',
      size: '4.1 MB',
      lastModified: '2023-12-28',
      accessLevel: 'public',
      description: 'Comprehensive framework for ethical AI development and deployment.',
      downloadCount: 678,
      status: 'active'
    },
    {
      id: '7',
      title: 'EduGenius Implementation Guide',
      category: 'Technical',
      type: 'PDF',
      size: '9.5 MB',
      lastModified: '2023-12-25',
      accessLevel: 'employee',
      description: 'Step-by-step guide for implementing EduGenius in educational institutions.',
      downloadCount: 345,
      status: 'active'
    },
    {
      id: '8',
      title: 'Board Meeting Minutes - December 2023',
      category: 'Governance',
      type: 'PDF',
      size: '1.8 MB',
      lastModified: '2023-12-20',
      accessLevel: 'admin',
      description: 'Official minutes from the December board meeting.',
      downloadCount: 67,
      status: 'active'
    },
    {
      id: '9',
      title: 'MeridianAGI Research Papers',
      category: 'Research',
      type: 'PDF',
      size: '15.2 MB',
      lastModified: '2023-12-15',
      accessLevel: 'employee',
      description: 'Collection of research papers on AGI development and implementation.',
      downloadCount: 289,
      status: 'active'
    },
    {
      id: '10',
      title: 'Compliance & Regulatory Guidelines',
      category: 'Legal',
      type: 'PDF',
      size: '6.7 MB',
      lastModified: '2023-12-10',
      accessLevel: 'hr',
      description: 'Legal compliance requirements and regulatory guidelines.',
      downloadCount: 156,
      status: 'active'
    }
  ];

  const categories = ['all', 'Corporate', 'HR', 'Technical', 'Financial', 'Security', 'Policy', 'Governance', 'Research', 'Legal'];
  const accessLevels = ['all', 'public', 'employee', 'hr', 'admin'];

  // Filter documents based on user access level
  const getAccessibleDocuments = () => {
    return documents.filter(doc => {
      if (!user) return doc.accessLevel === 'public';
      
      switch (user.role.toLowerCase()) {
        case 'admin':
          return true; // Admin can access all documents
        case 'hr':
          return ['public', 'employee', 'hr'].includes(doc.accessLevel);
        case 'employee':
          return ['public', 'employee'].includes(doc.accessLevel);
        default:
          return doc.accessLevel === 'public';
      }
    });
  };

  // Apply filters
  const filteredDocuments = getAccessibleDocuments().filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesAccessLevel = selectedAccessLevel === 'all' || doc.accessLevel === selectedAccessLevel;
    
    return matchesSearch && matchesCategory && matchesAccessLevel;
  });

  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'public': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'employee': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'hr': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'xlsx': case 'xls': return <FileText className="w-5 h-5 text-green-500" />;
      case 'docx': case 'doc': return <FileText className="w-5 h-5 text-blue-500" />;
      default: return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleDownload = (doc: Document) => {
    // Simulate download
    console.log(`Downloading ${doc.title}`);
    // In a real application, this would trigger the actual download
  };

  return (
    <ProtectedRoute requiredRole="Employee">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Document Management Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Secure access to company documents, policies, and resources with role-based permissions and advanced search capabilities.
            </p>
          </div>

          {/* User Access Info */}
          {user && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-blue-800 dark:text-blue-200">
                  Logged in as <strong>{user.role}</strong> - You have access to {getAccessibleDocuments().length} documents
                </span>
              </div>
            </div>
          )}

          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Access Level Filter */}
              <select
                value={selectedAccessLevel}
                onChange={(e) => setSelectedAccessLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {accessLevels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Access Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-4 py-2 text-sm font-medium ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-4 py-2 text-sm font-medium ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredDocuments.length} of {getAccessibleDocuments().length} documents
            </p>
          </div>

          {/* Documents Display */}
          {viewMode === 'list' ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredDocuments.map((doc) => (
                  <div key={doc.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0">
                          {getFileIcon(doc.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {doc.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                            {doc.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <span>{doc.category}</span>
                            
                            <span>{doc.size}</span>
                            
                            <span>Modified {doc.lastModified}</span>
                            
                            <span>{doc.downloadCount} downloads</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAccessLevelColor(doc.accessLevel)}`}>
                          {doc.accessLevel}
                        </span>
                        <button
                          onClick={() => handleDownload(doc)}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => (
                <div key={doc.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    {getFileIcon(doc.type)}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAccessLevelColor(doc.accessLevel)}`}>
                      {doc.accessLevel}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{doc.size}</span>
                    <span>{doc.downloadCount} downloads</span>
                  </div>
                  <button
                    onClick={() => handleDownload(doc)}
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No documents found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}

          {/* Upload Section for Admins */}
          {user?.role.toLowerCase() === 'admin' && (
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Document Management
              </h2>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Upload New Document
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Drag and drop files here, or click to browse
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Choose Files
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DocumentsPage;
