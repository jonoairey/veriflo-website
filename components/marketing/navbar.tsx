'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

const USE_CASES = [
  { name: 'Financial Services', href: '/use-cases/financial-services' },
  { name: 'Healthcare', href: '/use-cases/healthcare' },
  { name: 'Technology', href: '/use-cases/technology' },
  { name: 'Media & Entertainment', href: '/use-cases/media-entertainment' },
  { name: 'Legal', href: '/use-cases/legal' },
  { name: 'Fundraising', href: '/use-cases/fundraising' },
  { name: 'M&A Deals', href: '/use-cases/ma-deals' },
  { name: 'Board Materials', href: '/use-cases/board-materials' },
  { name: 'Invoice Verification', href: '/use-cases/invoice-verification' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUseCasesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            <Shield className="h-6 w-6 text-emerald-500" />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-xl font-bold text-transparent">
              Veriflo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => { setProductsOpen(!productsOpen); setUseCasesOpen(false); }}
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-300 transition-colors"
              >
                Products
                <ChevronDown className={clsx('h-4 w-4 transition-transform', productsOpen && 'rotate-180')} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-3 z-50">
                  <Link
                    href="/products/check"
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-3 hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Veriflo Check</p>
                        <p className="text-xs text-gray-400">Verify incoming documents</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/products/protect"
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-3 hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Veriflo Protect</p>
                        <p className="text-xs text-gray-400">Prove outgoing documents are real</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/features" className="text-sm font-medium text-white hover:text-emerald-300 transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-white hover:text-emerald-300 transition-colors">
              How It Works
            </Link>

            {/* Use Cases Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-300 transition-colors"
              >
                Use Cases
                <ChevronDown className={clsx('h-4 w-4 transition-transform', useCasesOpen && 'rotate-180')} />
              </button>

              {useCasesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-2 z-50">
                  {USE_CASES.map((uc) => (
                    <Link
                      key={uc.href}
                      href={uc.href}
                      onClick={() => setUseCasesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      {uc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-sm font-medium text-white hover:text-emerald-300 transition-colors">
              Pricing
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
            className="md:hidden text-white hover:text-emerald-300 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/90 backdrop-blur-md">
            <div className="space-y-1 px-4 py-4">
              {/* Mobile Products */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Products</p>
                <div className="space-y-1 pl-2">
                  <Link
                    href="/products/check"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Veriflo Check
                  </Link>
                  <Link
                    href="/products/protect"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Veriflo Protect
                  </Link>
                </div>
              </div>

              <Link href="/features" className="block px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
                Features
              </Link>
              <Link href="/how-it-works" className="block px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
                How It Works
              </Link>

              {/* Mobile Use Cases */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Use Cases</p>
                <div className="space-y-1 pl-2">
                  {USE_CASES.map((uc) => (
                    <Link
                      key={uc.href}
                      href={uc.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {uc.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/pricing" className="block px-4 py-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
                Pricing
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
