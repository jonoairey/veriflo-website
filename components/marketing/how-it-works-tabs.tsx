'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Upload,
  LinkIcon,
  EyeOff,
  Shield,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  FileSearch,
  Send,
  ExternalLink,
  Search,
  Download,
} from 'lucide-react';

type Product = 'check' | 'seal' | 'mask';

const tabs: { id: Product; label: string; icon: React.ReactNode; color: string; activeColor: string; borderColor: string }[] = [
  {
    id: 'check',
    label: 'Veriflo Check',
    icon: <ShieldCheck className="h-4 w-4" />,
    color: 'text-emerald-400',
    activeColor: 'bg-emerald-500/20 border-emerald-500 text-emerald-400',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'seal',
    label: 'Veriflo Seal',
    icon: <Shield className="h-4 w-4" />,
    color: 'text-blue-400',
    activeColor: 'bg-blue-500/20 border-blue-500 text-blue-400',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'mask',
    label: 'Veriflo Mask',
    icon: <EyeOff className="h-4 w-4" />,
    color: 'text-purple-400',
    activeColor: 'bg-purple-500/20 border-purple-500 text-purple-400',
    borderColor: 'border-purple-500/30',
  },
];

export function HowItWorksTabs() {
  const [active, setActive] = useState<Product>('check');

  return (
    <div className="space-y-16">
      {/* Tab Toggles */}
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border transition-all ${
              active === tab.id
                ? tab.activeColor
                : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Check Content */}
      {active === 'check' && <CheckContent />}

      {/* Seal Content */}
      {active === 'seal' && <SealContent />}

      {/* Mask Content */}
      {active === 'mask' && <MaskContent />}
    </div>
  );
}

function CheckContent() {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Document',
      icon: <Upload className="h-8 w-8" />,
      description: 'Drop any document into Veriflo. We support PDF, images, and Office files up to 500 MB.',
      details: [
        'PDF, JPEG, PNG, Word, Excel, PowerPoint',
        'Drag and drop or click to upload',
        'Encrypted on upload',
        'No account needed for basic verification',
      ],
    },
    {
      number: '2',
      title: 'Forensic Analysis Runs',
      icon: <FileSearch className="h-8 w-8" />,
      description: 'Our engine scans metadata, structure, dates, and content for anything suspicious. Takes seconds.',
      details: [
        'Creation date and editing software analysis',
        'Creator/producer mismatch detection',
        'Incremental save and structural checks',
        'Hidden JavaScript and embedded file scanning',
        'Image EXIF data and AI generation detection',
        'Compression and encoding analysis',
      ],
    },
    {
      number: '3',
      title: 'Get Your Integrity Score',
      icon: <ShieldCheck className="h-8 w-8" />,
      description: 'A 0-100 score with risk level and detailed findings. Clear enough to act on immediately.',
      details: [
        'Visual score gauge from 0-100',
        'Risk levels: Clean, Low, Medium, High, Critical',
        'Expandable findings with severity ratings',
        'Technical details for deeper investigation',
        'Downloadable branded PDF report',
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Veriflo Check</h2>
        </div>
        <p className="text-lg text-gray-400">Verify any document you receive in three steps</p>
      </div>

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="border border-slate-800 rounded-xl bg-slate-900/50 p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-xl font-bold text-emerald-400">
                {step.number}
              </span>
              <div className="text-emerald-400">{step.icon}</div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">{step.description}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" variant="primary" className="bg-emerald-500 hover:bg-emerald-600">
          <a href="https://app.useveriflo.com/signup">
            Try Veriflo Check Free <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

function SealContent() {
  const steps = [
    {
      number: '1',
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload Your Document',
      description: 'Upload the document you want to certify. Could be an invoice, contract, report, or anything you\'re sending to someone.',
    },
    {
      number: '2',
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Integrity Analysis',
      description: 'Veriflo runs the same forensic checks and generates an integrity score confirming your document is clean.',
    },
    {
      number: '3',
      icon: <Send className="h-6 w-6" />,
      title: 'Generate a Proof Link',
      description: 'Get a certified verification link you can share with anyone. Set expiry dates and view limits for extra security.',
    },
    {
      number: '4',
      icon: <ExternalLink className="h-6 w-6" />,
      title: 'Recipient Views the Report',
      description: 'They click your link and see the full integrity report with your score, findings, and verification timestamp. No account needed on their end.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
            <Shield className="h-5 w-5 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Veriflo Seal</h2>
        </div>
        <p className="text-lg text-gray-400">Prove the documents you send are authentic in four steps</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <Card key={step.number} className="border-blue-500/20 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-lg font-bold text-blue-400">
                  {step.number}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="border border-blue-500/20 rounded-xl bg-slate-900/50 p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-3">Why Seal matters</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Instead of waiting for recipients to question your document, you proactively prove it's real. They see the verification before they even open the file. That builds trust from the first interaction.
        </p>
      </div>

      <div className="text-center">
        <Button asChild size="lg" variant="ghost" className="text-blue-400 hover:text-blue-300 border-blue-500/30">
          <Link href="/products/protect">
            Learn More About Seal <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function MaskContent() {
  const steps = [
    {
      number: '1',
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload Your Document',
      description: 'Drop any PDF into Veriflo Mask. Your file is encrypted immediately and processed in-memory.',
    },
    {
      number: '2',
      icon: <Search className="h-6 w-6" />,
      title: 'PII Gets Detected',
      description: 'Our engine scans for 8 categories of personal data: emails, phone numbers, SSNs, credit cards, bank accounts, dates of birth, passport numbers, and addresses.',
    },
    {
      number: '3',
      icon: <Download className="h-6 w-6" />,
      title: 'Redact and Download',
      description: 'Choose which categories to redact, then download your clean PDF. Sensitive data is permanently blacked out, not just hidden behind a layer.',
    },
  ];

  const categories = [
    'Email addresses',
    'Phone numbers',
    'Social Security numbers',
    'Credit card numbers',
    'Bank account numbers',
    'Dates of birth',
    'Passport numbers',
    'Physical addresses',
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
            <EyeOff className="h-5 w-5 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Veriflo Mask</h2>
        </div>
        <p className="text-lg text-gray-400">Redact sensitive data before sharing in three steps</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} className="border-purple-500/20 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-lg font-bold text-purple-400">
                  {step.number}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="border border-purple-500/20 rounded-xl bg-slate-900/50 p-8">
        <h3 className="text-xl font-bold text-white mb-4 text-center">8 Categories of PII Detection</h3>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button asChild size="lg" variant="ghost" className="text-purple-400 hover:text-purple-300 border-purple-500/30">
          <Link href="/products/mask">
            Learn More About Mask <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
