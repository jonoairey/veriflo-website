import React from 'react';
import Link from 'next/link';
import { Shield, ShieldCheck, Send, LinkIcon, FileCheck, CheckCircle, ArrowRight, Lock, Users, Globe, BadgeCheck, Mail, QrCode, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export const metadata = {
  title: 'Veriflo Protect - Send Verified Documents',
  description:
    'Prove your documents are authentic with Veriflo Protect. Send verified documents with shareable proof-of-integrity links. Build trust, prevent invoice fraud, and eliminate authenticity questions.',
};

export default function ProtectPage() {
  const painPoints = [
    {
      title: 'Invoice Fraud is Rampant',
      description:
        'Business email compromise and fake invoices cost companies $2.7B annually. Recipients can\'t tell your legitimate invoices from a scammer\'s forgeries.',
    },
    {
      title: 'No Way to Prove Authenticity',
      description:
        'You send a PDF and hope the recipient trusts it. There\'s no standard way to certify that a document is genuine and unmodified.',
    },
    {
      title: 'Trust Delays Everything',
      description:
        'Recipients call to verify, request re-sends, demand notarization. Manual trust verification slows down payments, approvals, and business.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Upload Your Document',
      description:
        'Upload invoices, contracts, financial statements, or any document you\'re sending to a client or partner.',
    },
    {
      number: '2',
      title: 'Automatic Verification',
      description:
        'Veriflo runs a full integrity check. If your document passes (score 60+), it\'s eligible for certification.',
    },
    {
      number: '3',
      title: 'Get a Verification Link',
      description:
        'Receive a unique shareable link (useveriflo.com/v/[code]) that proves your document is authentic. Set expiry and view limits.',
    },
    {
      number: '4',
      title: 'Recipients Verify Instantly',
      description:
        'Recipients click the link and see the full integrity report — score, findings, and your verified identity. No account needed.',
    },
  ];

  const keyFeatures = [
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: 'Shareable Verification Links',
      description:
        'Each document gets a unique URL. Recipients verify authenticity with one click.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Expiry & View Controls',
      description:
        'Set links to expire after 7, 30, or 90 days. Limit total views for sensitive documents.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Full Integrity Report',
      description:
        'Recipients see the complete forensic analysis: metadata, tamper checks, AI detection, and template matching.',
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: 'Sender Identity',
      description:
        'Your name or company is displayed on the verification page, building brand trust.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'View Analytics',
      description:
        'Track how many times your verification links have been viewed.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'API Integration',
      description:
        'Generate verification links programmatically via REST API for high-volume senders.',
    },
  ];

  const useCases = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Invoicing',
      description:
        'Send verified invoices. Tell customers: "Only accept invoices verified through Veriflo." Eliminate invoice fraud.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Professional Services',
      description:
        'Accountants, consultants, and advisors send certified financial reports and audit documents.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Legal',
      description:
        'Law firms share verified contracts and agreements. Recipients confirm authenticity before signing.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'B2B Sales',
      description:
        'Send verified proposals, quotes, and contracts. Stand out from competitors with certified documents.',
    },
  ];

  return (
    <div className="bg-slate-950 space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white">
                Prove Your Documents Are Authentic
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Veriflo Protect verifies your outgoing documents and gives recipients a shareable proof-of-integrity link. Build trust, prevent invoice fraud, and eliminate "is this real?" questions.
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Button asChild size="lg" variant="primary">
                  <a href={`${PLATFORM_URL}/signup`}>Start Sending Verified</a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href="/how-it-works" className="text-white hover:text-blue-300">
                    See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Verified Badge Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl blur-3xl opacity-20" />
            <div className="relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8 shadow-2xl">
              {/* Badge Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-300">Document Verified</div>
                  <div className="text-xs text-gray-400">by Veriflo</div>
                </div>
              </div>

              {/* Document Info */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Integrity Score</div>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-white">94</div>
                    <div className="text-lg text-gray-400">/100</div>
                  </div>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[94%]" />
                </div>
              </div>

              {/* File and Timestamp */}
              <div className="space-y-3 mb-6 pb-6 border-b border-slate-700">
                <div className="text-sm text-gray-300">
                  <span className="text-gray-400">File: </span>
                  <span className="font-mono text-blue-300">Invoice_March2025.pdf</span>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-gray-400">Verified by </span>
                  <span className="font-semibold text-white">Acme Corp</span>
                  <span className="text-gray-400"> on Mar 14, 2025</span>
                </div>
              </div>

              {/* Share Link */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400 uppercase tracking-wide">Share Link</div>
                <div className="bg-slate-800/50 border border-slate-700 rounded px-3 py-2 font-mono text-xs text-blue-300 break-all">
                  useveriflo.com/v/a8f3k2m1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Your Recipients Don't Trust Your Documents</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three critical problems that slow down business
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {painPoints.map((point, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How Veriflo Protect Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Veriflo Protect Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Four simple steps to document authenticity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
              {idx < 3 && (
                <div className="mt-6 flex justify-end">
                  <ArrowRight className="h-5 w-5 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What Recipients See */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">What Recipients See</h2>
          <p className="mt-4 text-xl text-gray-400">
            A branded verification page — no login required
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl blur-3xl opacity-15" />
          <div className="relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left: Verification Card */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg px-6 py-4">
                  <div className="flex items-center gap-2 text-blue-100">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-semibold">Verified by Veriflo</span>
                  </div>
                </div>

                {/* Score Gauge */}
                <div className="space-y-3">
                  <div className="text-sm text-gray-300">Integrity Score</div>
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-4xl font-bold text-white">94</div>
                      <div className="text-sm text-gray-400">/100</div>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[94%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Info */}
                <div className="border-t border-slate-700 pt-6 space-y-4">
                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">Document</div>
                    <div className="font-mono text-sm text-white">Invoice_March2025.pdf</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">Sender</div>
                    <div className="text-sm text-white">Acme Corp • Verified Identity</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">Verified</div>
                    <div className="text-sm text-white">March 14, 2025</div>
                  </div>
                </div>
              </div>

              {/* Right: Findings */}
              <div className="space-y-4">
                <div className="font-semibold text-white mb-6">Key Findings</div>
                {[
                  { label: 'Document Integrity', status: 'Pass', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' },
                  { label: 'Metadata Consistency', status: 'Pass', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' },
                  { label: 'Tamper Detection', status: 'Pass', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' },
                  { label: 'AI Generated Content', status: 'Pass', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' },
                ].map((finding, idx) => (
                  <div key={idx} className={`rounded-lg border p-4 ${finding.color}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{finding.label}</span>
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                ))}

                <div className="border-t border-slate-700 pt-4 mt-6">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2">
                    What does this mean? <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Recipients see a branded verification page — no login required
        </p>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Key Features</h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to send verified documents
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Use Cases</h2>
          <p className="mt-4 text-xl text-gray-400">
            Who benefits from Veriflo Protect
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* The Trust Standard Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-800 p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl blur-3xl opacity-10" />
          <div className="relative max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              The Trust Standard for Business Documents
            </h2>
            <p className="text-lg text-gray-300 text-center mb-10">
              Tell your clients and partners: "We send all documents through Veriflo. Only accept documents with a Veriflo Verified link." This simple policy eliminates invoice fraud, phishing, and document impersonation.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { stat: '100%', label: 'of fraudulent invoices caught' },
                { stat: '3x', label: 'faster payment processing' },
                { stat: '0', label: 'document disputes' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{item.stat}</div>
                  <p className="text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12">
          <h2 className="text-3xl font-bold text-white">Start Sending Verified Documents</h2>
          <p className="mt-4 text-lg text-blue-100">
            Build trust with every document you send. Get started free.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href={`${PLATFORM_URL}/signup`}>Start Sending Verified</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="/pricing" className="text-white hover:text-blue-100">
                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-sell: Veriflo Check */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-800 p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-10" />
          <div className="relative max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Also available: Veriflo Check
            </h3>
            <p className="text-gray-300 mb-6">
              Verify incoming documents for tampering, AI content, and fraud. While Protect helps you send verified documents, Check helps you receive and verify documents from others.
            </p>
            <Button asChild variant="ghost">
              <Link href="/products/check" className="text-emerald-400 hover:text-emerald-300">
                Learn about Check <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
