'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useCases = [
    { name: 'Fundraising & Pitch Decks', href: '/use-cases/fundraising' },
    { name: 'Legal & Litigation', href: '/use-cases/legal' },
    { name: 'M&A Deal Rooms', href: '/use-cases/ma-deals' },
    { name: 'Board Materials', href: '/use-cases/board-materials' },
    { name: 'Invoice Verification', href: '/use-cases/invoice-verification' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
              Veriflo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">
              How It Works
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-blue-300 transition-colors">
                Use Cases
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-800">
                {useCases.map((useCase) => (
                  <Link
                    key={useCase.name}
                    href={useCase.href}
                    className="block px-4 py-2.5 text-sm text-white hover:bg-slate-800 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {useCase.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/pricing" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">
              Contact
            </Link>
            <a href={`${PLATFORM_URL}/verify`} className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Verify a Document
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href={`${PLATFORM_URL}/login`}>Log In</a>
            </Button>
            <Button variant="primary" asChild>
              <a href={`${PLATFORM_URL}/signup`}>Get Started</a>
            </Button>
          </div>

          <button
            className="md:hidden text-white hover:text-blue-300 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/90 backdrop-blur-md">
            <div className="space-y-1 px-4 py-4">
              <Link href="/features" className="block px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
                Features
              </Link>
              <Link href="/how-it-works" className="block px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
                How It Works
              </Link>
              <button
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className="w-full text-left px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors flex items-center justify-between"
              >
                Use Cases
                <ChevronDown className={clsx('h-4 w-4 transition-transform', useCasesOpen && 'rotate-180')} />
              </button>
              {useCasesOpen && (
                <div className="pl-4 space-y-1">
                  {useCases.map((useCase) => (
                    <Link
                      key={useCase.name}
                      href={useCase.href}
                      className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-slate-800 transition-colors"
                    >
                      {useCase.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/pricing" className="block px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
                Contact
              </Link>
              <a href={`${PLATFORM_URL}/verify`} className="block px-4 py-2 rounded-lg text-emerald-400 hover:bg-slate-800 transition-colors">
                Verify a Document
              </a>
              <div className="border-t border-slate-800 pt-4 mt-4 space-y-2">
                <Button variant="ghost" asChild className="w-full justify-center">
                  <a href={`${PLATFORM_URL}/login`}>Log In</a>
                </Button>
                <Button variant="primary" asChild className="w-full justify-center">
                  <a href={`${PLATFORM_URL}/signup`}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
