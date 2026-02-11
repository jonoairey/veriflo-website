import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ShieldCheck,
  FileSearch,
  Upload,
  CheckCircle,
  ArrowRight,
  Lock,
  Eye,
  Zap,
} from 'lucide-react';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export const metadata = {
  title: 'Veriflo Seal - Document Authenticity & Certification',
  description:
    'Send certified documents that recipients can trust are authentic. Forensic integrity checking with risk scoring. Detect tampering, hidden content, and structural anomalies.',
};

export default function SealPage() {
  const keyCapabilities = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: 'Send Certified Documents',
      description:
        'Every document you send through Veriflo Seal gets an invisible forensic seal. Recipients know it\'s authentic and unmodified.',
    },
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: 'Forensic Integrity Checking',
      description:
        'Deep analysis of PDF metadata, creation dates, creators, producers, and structural anomalies to detect tampering.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Integrity Score 0-100',
      description:
        'Every document gets a risk assessment. Clean, Low, Medium, High, or Critical — instantly know how confident you can be.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Image & Media Analysis',
      description:
        'EXIF data analysis, compression quality checks, and detection of hidden content in embedded images.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Hidden Content Detection',
      description:
        'Detect embedded JavaScript, malware signatures, and potentially dangerous content hidden in documents.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Tamper Detection',
      description:
        'Identify incremental saves, structural anomalies, and modification signatures invisible to the human eye.',
    },
  ];

  const useCases = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: 'Financial Invoices',
      description:
        'Protect high-value invoices from interception and tampering. Guarantee bank details haven\'t been changed.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Legal Contracts',
      description:
        'Send contracts with proof of authenticity. Recipients verify terms haven\'t been secretly modified.',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Financial Statements',
      description:
        'Certify balance sheets, P&L statements, and financial reports for audits and regulatory compliance.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Certificates & Credentials',
      description:
        'Verify academic diplomas, professional certifications, and credential documents are genuine.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Compliance Documentation',
      description:
        'Ensure regulatory filings, audit reports, and compliance documents maintain integrity throughout distribution.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Board & Executive Materials',
      description:
        'Confidently distribute sensitive board materials knowing they\'re protected against tampering and leaks.',
    },
  ];

  return (
    <div className="bg-slate-950 space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Document Authenticity You Can Prove
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Send certified documents that recipients can trust are genuine. Every document gets an invisible forensic seal. Verify incoming documents for tampering with forensic analysis and an integrity score of 0-100.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button asChild size="lg" variant="primary">
                <a href={`${PLATFORM_URL}/signup`}>Get Started Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={`${PLATFORM_URL}/verify`} className="text-white hover:text-emerald-300">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-emerald-300">Integrity Score: 95/100</div>
                      <p className="text-xs text-gray-400 mt-1">This document is authentic and shows no signs of tampering. All metadata is consistent.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                    <Eye className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-red-300">Integrity Score: 22/100 — Critical Risk</div>
                      <p className="text-xs text-gray-400 mt-1">Multiple signs of tampering detected: modified PDF structure, hidden JavaScript, mismatched metadata timestamps.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Seal Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Seal Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three simple steps to prove document authenticity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Upload className="h-8 w-8 text-emerald-400" />,
              title: 'Send Certified',
              description:
                'Upload any document and send it through Veriflo Seal. An invisible forensic seal is embedded in the PDF structure, metadata, and pixels.',
            },
            {
              icon: <FileSearch className="h-8 w-8 text-emerald-400" />,
              title: 'Recipient Verifies',
              description:
                'Recipients upload the document to verify its authenticity. Veriflo runs forensic analysis and generates an integrity score in seconds.',
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
              title: 'Trust Established',
              description:
                'Recipients see detailed results: integrity score, risk level, and specific findings. No account needed. Verification is instant and free.',
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Key Capabilities</h2>
          <p className="mt-4 text-xl text-gray-400">
            Advanced forensic analysis to detect every type of tampering
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keyCapabilities.map((capability, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-2 text-gray-400">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrity Scoring */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Integrity Scoring System</h2>
          <p className="mt-4 text-xl text-gray-400">
            Clear risk levels for informed decision-making
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {[
            {
              score: '80-100',
              label: 'Clean',
              color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20',
              description: 'No signs of tampering detected. Document is authentic.',
            },
            {
              score: '60-79',
              label: 'Low',
              color: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
              description: 'Minor inconsistencies. Likely safe but worth review.',
            },
            {
              score: '40-59',
              label: 'Medium',
              color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20',
              description: 'Moderate risk detected. Investigate before trusting.',
            },
            {
              score: '20-39',
              label: 'High',
              color: 'bg-orange-500/20 text-orange-400 border-orange-500/20',
              description: 'Strong signs of modification. Do not trust.',
            },
            {
              score: '0-19',
              label: 'Critical',
              color: 'bg-red-500/20 text-red-400 border-red-500/20',
              description: 'Multiple tampering indicators. Reject immediately.',
            },
          ].map((level, idx) => (
            <div
              key={idx}
              className={`rounded-lg border p-6 ${level.color}`}
            >
              <div className="text-2xl font-bold mb-2">{level.score}</div>
              <div className="text-sm font-semibold mb-3">{level.label}</div>
              <p className="text-xs text-gray-300">{level.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Use Cases for Seal</h2>
          <p className="mt-4 text-xl text-gray-400">
            Protect any document that needs to prove authenticity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-2 text-gray-400">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Analysis */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">What Seal Analyzes</h2>
            <div className="space-y-6">
              <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50">
                <h3 className="font-semibold text-emerald-400 mb-2">PDF Metadata</h3>
                <p className="text-gray-400 text-sm">
                  Creation date, modification timestamps, creator and producer information, encryption methods, and version history.
                </p>
              </div>
              <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50">
                <h3 className="font-semibold text-emerald-400 mb-2">Document Structure</h3>
                <p className="text-gray-400 text-sm">
                  Checksums, incremental saves, internal links, forms, and structural anomalies that indicate tampering.
                </p>
              </div>
              <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50">
                <h3 className="font-semibold text-emerald-400 mb-2">Media & Content</h3>
                <p className="text-gray-400 text-sm">
                  Image EXIF data, compression artifacts, embedded JavaScript, and potentially harmful content signatures.
                </p>
              </div>
              <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50">
                <h3 className="font-semibold text-emerald-400 mb-2">Security Signatures</h3>
                <p className="text-gray-400 text-sm">
                  Malware signatures, exploits, hidden content, macros, and suspicious patterns that suggest document manipulation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-semibold text-white mb-6">Example: Detailed Findings</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-xs font-mono text-emerald-400 mb-1">PDF Version</div>
                    <div className="text-sm text-gray-300">1.4 (consistent with creation date)</div>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-xs font-mono text-emerald-400 mb-1">Creator/Producer Match</div>
                    <div className="text-sm text-gray-300">Both Adobe InDesign 2024</div>
                  </div>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="text-xs font-mono text-yellow-400 mb-1">Modification History</div>
                    <div className="text-sm text-gray-300">3 incremental saves detected</div>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-xs font-mono text-emerald-400 mb-1">Embedded Content</div>
                    <div className="text-sm text-gray-300">No JavaScript or suspicious macros</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Also See Shield */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-800 p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-10" />
          <div className="relative max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Also see Veriflo Shield
            </h3>
            <p className="text-gray-300 mb-6">
              Veriflo Shield is our companion product for real-time document protection. While Seal certifies documents after creation, Shield protects documents during transmission with end-to-end encryption and access controls.
            </p>
            <Button asChild variant="ghost">
              <Link href="/products/shield" className="text-emerald-400 hover:text-emerald-300">
                Learn about Shield <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 p-12">
          <h2 className="text-3xl font-bold text-white">Start Certifying Documents Today</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Send authentic documents with invisible forensic seals. Recipients verify with forensic analysis and integrity scoring. Free to get started.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href={`${PLATFORM_URL}/signup`}>Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={`${PLATFORM_URL}/verify`} className="text-white hover:text-emerald-100">
                Try Verification <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
