import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/Apex-Meridianlogofull.png"
                alt="Apex-Meridian Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Leading the future of artificial intelligence with cutting-edge solutions across aviation, 
              cybersecurity, education, and AGI development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">info@apex-meridian.net</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">+201200929092</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">New Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/overview" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/technology/platform" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/aviation" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Aviation AI
                </Link>
              </li>
              <li>
                <Link href="/solutions/cybersecurity" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/solutions/education" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/solutions/agi" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  AGI Development
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Apex-Meridian. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
