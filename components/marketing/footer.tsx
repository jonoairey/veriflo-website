import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Contact', href: '/pricing' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { name: 'Fundraising & Pitch Decks', href: '/use-cases/fundraising' },
        { name: 'Legal & Litigation', href: '/use-cases/legal' },
        { name: 'M&A Deal Rooms', href: '/use-cases/ma-deals' },
        { name: 'Board Materials', href: '/use-cases/board-materials' },
        { name: 'Invoice Verification', href: '/use-cases/invoice-verification' },
      ],
    },
    {
      title: 'Get Started',
      links: [
        { name: 'Sign Up', href: `${PLATFORM_URL}/signup`, external: true },
        { name: 'Log In', href: `${PLATFORM_URL}/login`, external: true },
        { name: 'Verify a Document', href: `${PLATFORM_URL}/verify`, external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-lg font-bold text-transparent">
                Veriflo
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Share confidential documents confidently with forensic watermarking and leak detection.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {'external' in link ? (
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Veriflo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
