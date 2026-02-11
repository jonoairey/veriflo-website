import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Fingerprint,
  LinkIcon,
  Shield,
  BarChart3,
  Users,
  Lock,
  Eye,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  FileSearch,
} from 'lucide-react';

export const metadata = {
  title: 'Features - Veriflo | Two-Way Document Trust Platform',
  description: 'Protect outgoing documents with invisible fingerprinting and verify incoming documents for tampering. Complete document security with leak detection, integrity scoring, and real-time tracking.',
};

export default function FeaturesPage() {
  const features = [
    {
      id: 'fingerprinting',
      icon: <Fingerprint className="h-8 w-8" />,
      image: '/images/feature-fingerprinting.png',
      title: 'Invisible Fingerprinting',
      shortDesc: 'Multi-layer forensic fingerprints that survive screenshots, compression, and cropping.',
      fullDesc: 'Our advanced fingerprinting technology embeds unique identifiers within your documents that persist through various transformations. These forensic markers are imperceptible to the human eye but allow us to identify the exact copy and recipient of any leaked document.',
      benefits: [
        'Survives screenshots and screen captures',
        'Resistant to compression and format conversion',
        'Withstands cropping and modifications',
        'Embedded across all pages automatically',
        'Imperceptible to document viewers',
      ],
    },
    {
      id: 'secure-sharing',
      icon: <LinkIcon className="h-8 w-8" />,
      image: '/images/feature-sharing.png',
      title: 'Secure Document Sharing',
      shortDesc: 'Time-limited, revocable links with access tracking and view counts.',
      fullDesc: 'Share your confidential documents through unique, tracked links that you control completely. Set expiration dates, revoke access instantly, and view detailed analytics about who accessed your documents and when.',
      benefits: [
        'Customizable expiration dates',
        'One-click access revocation',
        'Unique tracking links per recipient',
        'View count and access duration monitoring',
        'Device and location information logging',
      ],
    },
    {
      id: 'leak-detection',
      icon: <Shield className="h-8 w-8" />,
      image: '/images/feature-leak-detection.png',
      title: 'Leak Verification',
      shortDesc: 'Upload suspected leaks and instantly identify which recipient\'s copy.',
      fullDesc: 'When you suspect a document has been leaked, simply upload the leaked version. Our system scans for the unique fingerprints within it and tells you exactly which recipient the document came from, enabling you to take swift action.',
      benefits: [
        'Instant leak source identification',
        'Supports multiple file formats',
        'Detailed leak analysis reports',
        'Time-stamped leak detection logs',
        'Integration with your security workflows',
      ],
    },
    {
      id: 'integrity-check',
      icon: <ShieldCheck className="h-8 w-8" />,
      image: '/images/feature-integrity.png',
      title: 'Document Integrity Check',
      shortDesc: 'Verify incoming documents for signs of tampering before making critical decisions.',
      fullDesc: 'Upload any incoming document — contracts, financial statements, invoices, certificates — and get an instant integrity score. Veriflo runs forensic analysis on PDF metadata, creation dates, software signatures, and structural patterns to flag documents that may have been manipulated.',
      benefits: [
        'Instant integrity scoring from 0-100',
        'Risk level classification (clean, low, medium, high, critical)',
        'PDF metadata and structure analysis',
        'Creation/modification date gap detection',
        'Editing software and tool detection',
        'Suspicious pattern identification',
      ],
    },
    {
      id: 'tamper-detection',
      icon: <FileSearch className="h-8 w-8" />,
      image: '/images/feature-tamper-detection.png',
      title: 'Forensic Tamper Detection',
      shortDesc: 'Deep analysis detects altered dates, metadata inconsistencies, and document manipulation.',
      fullDesc: 'Our forensic engine goes beyond surface-level checks. It detects incremental saves that indicate post-creation editing, identifies mismatches between document creator and producer software, flags JavaScript or embedded files hidden inside PDFs, and spots metadata that has been stripped or altered — all signs of potential document fraud.',
      benefits: [
        'Incremental save detection (multiple %%EOF markers)',
        'Creator/producer software mismatch analysis',
        'Hidden JavaScript and embedded file detection',
        'Image EXIF metadata and compression analysis',
        'Hash comparison against known originals',
        'Veriflo fingerprint verification on incoming docs',
      ],
    },
    {
      id: 'tracking',
      icon: <BarChart3 className="h-8 w-8" />,
      image: '/images/feature-tracking.png',
      title: 'Real-Time Access Tracking',
      shortDesc: 'See exactly who opened your documents, when, from where, and on what device.',
      fullDesc: 'Get comprehensive visibility into every interaction with your shared documents. Track who opened documents, how long they viewed them, what devices they used, and where they were located when accessing the documents.',
      benefits: [
        'Real-time access notifications',
        'Geographic tracking by IP address',
        'Device type and OS information',
        'Time spent viewing documents',
        'Customizable alerting thresholds',
        'Exportable analytics reports',
      ],
    },
    {
      id: 'collaboration',
      icon: <Users className="h-8 w-8" />,
      image: '/images/feature-collaboration.png',
      title: 'Team Collaboration',
      shortDesc: 'Share documents across your organization with role-based access controls.',
      fullDesc: 'Manage document sharing and access across your entire team with granular permission controls. Assign roles, manage team members, and maintain security while enabling seamless collaboration.',
      benefits: [
        'Role-based access controls',
        'Multiple team management',
        'Delegated distribution permissions',
        'Team member activity logs',
        'Collaborative document sharing',
        'Audit trails for team actions',
      ],
    },
    {
      id: 'security',
      icon: <Lock className="h-8 w-8" />,
      image: '/images/feature-security.png',
      title: 'Enterprise Security & Compliance',
      shortDesc: 'SOC 2 ready, AES-256 encryption, and comprehensive audit logging.',
      fullDesc: 'Enterprise-grade security features ensure your sensitive documents are protected with industry-leading standards. Full audit trails, encryption, and compliance certifications give you peace of mind.',
      benefits: [
        'AES-256 encryption in transit and at rest',
        'SOC 2 Type II compliance ready',
        'Comprehensive audit logging',
        'HIPAA and GDPR compliance support',
        'IP whitelisting and SSO/SAML',
        'Dedicated security contact',
      ],
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Two-Way Document Trust
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Protect what goes out with invisible fingerprinting and leak detection. Verify what comes in with tamper detection and integrity scoring. Complete document security in both directions.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Start Free Trial</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/" className="text-white hover:text-blue-300">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Details */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {features.map((feature, idx) => (
          <div key={feature.id} className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
            {idx % 2 === 0 ? (
              <>
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{feature.fullDesc}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
                  <div className="relative rounded-xl overflow-hidden border border-blue-500/20">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative hidden lg:block order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
                  <div className="relative rounded-xl overflow-hidden border border-blue-500/20">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{feature.fullDesc}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Comparison Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Why Choose Veriflo?</h2>
          <p className="mt-4 text-xl text-gray-400">
            See how we compare to traditional document sharing
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-white">Veriflo</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-400">Email</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-400">Cloud Storage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { feature: 'Invisible Fingerprinting', veriflo: true, email: false, cloud: false },
                { feature: 'Leak Detection', veriflo: true, email: false, cloud: false },
                { feature: 'Document Integrity Check', veriflo: true, email: false, cloud: false },
                { feature: 'Tamper Detection', veriflo: true, email: false, cloud: false },
                { feature: 'Real-Time Tracking', veriflo: true, email: false, cloud: false },
                { feature: 'Access Revocation', veriflo: true, email: false, cloud: false },
                { feature: 'Expiring Links', veriflo: true, email: false, cloud: true },
                { feature: 'Audit Logs', veriflo: true, email: false, cloud: true },
                { feature: 'Team Management', veriflo: true, email: false, cloud: true },
                { feature: 'Enterprise Security', veriflo: true, email: false, cloud: false },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.veriflo ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
                    ) : (
                      <div className="h-5 w-5 mx-auto border-2 border-slate-600 rounded" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.email ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
                    ) : (
                      <div className="h-5 w-5 mx-auto border-2 border-slate-600 rounded" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.cloud ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
                    ) : (
                      <div className="h-5 w-5 mx-auto border-2 border-slate-600 rounded" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to protect your documents?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial today. No credit card required.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/how-it-works" className="text-white hover:text-blue-100">
                How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
