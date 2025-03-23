'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold">My Privacy Path</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive('/')
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                className={`flex items-center text-sm font-medium ${
                  pathname.startsWith('/guides')
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Guides
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isGuidesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/guides/email"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      Email Privacy
                    </Link>
                    <Link
                      href="/guides/chat"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      Privacy friendly Chat
                    </Link>
                    <Link
                      href="/guides/vpn"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      VPN Guide
                    </Link>
                    <Link
                      href="/guides/cloud"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      Cloud Storage
                    </Link>
                    <Link
                      href="/guides/auth"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      Authentication
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/alternatives"
              className={`text-sm font-medium ${
                isActive('/alternatives')
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Alternatives
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium ${
                isActive('/about')
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/')
                  ? 'text-indigo-600 bg-gray-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => setIsGuidesOpen(!isGuidesOpen)}
              className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith('/guides')
                  ? 'text-indigo-600 bg-gray-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
            >
              Guides
              <ChevronDown className="h-4 w-4" />
            </button>

            {isGuidesOpen && (
              <div className="pl-4">
                <Link
                  href="/guides/email"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Email Privacy
                </Link>
                <Link
                  href="/guides/vpn"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  VPN Guide
                </Link>
                <Link
                  href="/guides/cloud"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Cloud Storage
                </Link>
                <Link
                  href="/guides/auth"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Authentication
                </Link>
              </div>
            )}

            <Link
              href="/alternatives"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/alternatives')
                  ? 'text-indigo-600 bg-gray-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Alternatives
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about')
                  ? 'text-indigo-600 bg-gray-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
