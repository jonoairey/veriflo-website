import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  EyeOff,
  ArrowRight,
  CheckCircle,
  Upload,
  Search,
  Shield,
  ShieldCheck,
  Download,
  FileText,
  Lock,
  Zap,
  AlertTriangle,
  Mail,
  CreditCard,
  Phone,
  MapPin,
  Calendar,
  Hash,
} from 'lucide-react';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export const metadata = {
  title: 'Veriflo Mask - PII Redaction & Document Privacy | Veriflo',
  description:
    'Automatically detect and redact personal information from documents. Veriflo Mask finds emails, phone numbers, SSNs, credit cards, addresses, and more — then blacks them out before you share.',
};

export default function MaskProductPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                <EyeOff className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
                Veriflo Mask
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
              Redact Sensitive Data Before You Share
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Upload any document. Veriflo Mask automatically detects personal information — emails, phone numbers, SSNs, credit cards, addresses — and blacks them out in seconds. Share with confidence.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" variant="primary">
                <a href={`${PLATFORM_URL}/dashboard/mask`}>Redact a Document</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/how-it-works" className="text-white hover:text-purple-300">
                  How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              No credit card required • Redact your first document free
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur-3xl opacity-20" />
            <div className="relative rounded-xl overflow-hidden border border-purple-500/20 bg-slate-900 p-8">
              {/* Mock redaction preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <EyeOff className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400">PII Detection Results</span>
                </div>
                {[
                  { label: 'Email', value: 'j████████@████.com', icon: <Mail className="h-4 w-4" />, count: 3 },
                  { label: 'Phone', value: '(███) ███-████', icon: <Phone className="h-4 w-4" />, count: 2 },
                  { label: 'SSN', value: '███-██-████', icon: <Hash className="h-4 w-4" />, count: 1 },
                  { label: 'Credit Card', value: '████ ████ ████ ████', icon: <CreditCard className="h-4 w-4" />, count: 1 },
                  { label: 'Address', value: '████ ████ St, ████', icon: <MapPin className="h-4 w-4" />, count: 2 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between px-4 py-3 bg-slate-800/70 rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-400">{item.icon}</div>
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <p className="text-sm text-gray-300 font-mono">{item.value}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
                      {item.count} found
                    </span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-sm text-gray-400">9 PII items detected</span>
                  <span className="text-sm font-semibold text-purple-400">Ready to redact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Sharing Documents Means Sharing Personal Data
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Every document you share could contain sensitive information. Manual redaction is slow, error-prone, and misses hidden data.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Data Breach Risk',
              description:
                'A single unredacted SSN or credit card number in a shared document can trigger a data breach. Regulatory fines for GDPR and HIPAA violations start at $100K.',
              icon: <AlertTriangle className="h-6 w-6" />,
            },
            {
              title: 'Manual Redaction Fails',
              description:
                'Highlighting text in black or drawing boxes misses phone numbers in footers, emails in metadata, and addresses buried in paragraphs. Humans miss 30% of PII on average.',
              icon: <Search className="h-6 w-6" />,
            },
            {
              title: 'Compliance Pressure',
              description:
                'GDPR, HIPAA, CCPA, SOX — every regulation demands that personal data is removed before sharing. You need a systematic solution, not a manual process.',
              icon: <Lock className="h-6 w-6" />,
            },
          ].map((item, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Veriflo Mask Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three steps to privacy-safe document sharing
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              step: '1',
              title: 'Upload Your Document',
              description:
                'Drop any PDF into Veriflo Mask. Your file is encrypted immediately and never stored permanently.',
              icon: <Upload className="h-6 w-6" />,
            },
            {
              step: '2',
              title: 'Automatic PII Detection',
              description:
                'Our engine scans every line for 8 categories of personal information: emails, phone numbers, SSNs, credit cards, bank accounts, dates of birth, passport numbers, and physical addresses.',
              icon: <Search className="h-6 w-6" />,
            },
            {
              step: '3',
              title: 'Review & Download',
              description:
                'Choose which PII categories to redact, preview the results, and download your clean document with all sensitive data permanently blacked out.',
              icon: <Download className="h-6 w-6" />,
            },
          ].map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/30 text-lg font-bold text-purple-400">
                    {step.step}
                  </span>
                  <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PII Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">8 Categories of PII Detection</h2>
          <p className="mt-4 text-xl text-gray-400">
            Veriflo Mask catches the personal data that manual review misses
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Mail className="h-6 w-6" />,
              title: 'Email Addresses',
              example: 'john@company.com',
              description: 'Personal and work emails throughout the document',
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: 'Phone Numbers',
              example: '(555) 123-4567',
              description: 'US and international formats with extensions',
            },
            {
              icon: <Hash className="h-6 w-6" />,
              title: 'Social Security Numbers',
              example: '123-45-6789',
              description: 'Full and partial SSN patterns',
            },
            {
              icon: <CreditCard className="h-6 w-6" />,
              title: 'Credit Card Numbers',
              example: '4111 1111 1111 1111',
              description: 'Visa, Mastercard, Amex, and other card formats',
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: 'Bank Account Numbers',
              example: 'Account: ••••••7890',
              description: 'Routing and account numbers',
            },
            {
              icon: <Calendar className="h-6 w-6" />,
              title: 'Dates of Birth',
              example: '03/15/1990',
              description: 'Multiple date formats and patterns',
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: 'Passport Numbers',
              example: 'AB1234567',
              description: 'US and international passport formats',
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              title: 'Physical Addresses',
              example: '123 Main St, Suite 100',
              description: 'Street addresses with city, state, and zip',
            },
          ].map((category, idx) => (
            <Card key={idx} className="border-purple-500/20 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-6 pb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 mb-3">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{category.title}</h3>
                <p className="text-xs font-mono text-purple-400/70 mb-2">{category.example}</p>
                <p className="text-sm text-gray-400">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Key Features</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Zap className="h-6 w-6" />,
              title: 'Instant Detection',
              description:
                'PII scanning completes in seconds, even for multi-page documents. No waiting around for batch processing.',
            },
            {
              icon: <EyeOff className="h-6 w-6" />,
              title: 'Permanent Redaction',
              description:
                'Black boxes are drawn directly onto the PDF. The original text is permanently removed — not just hidden behind a layer.',
            },
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: 'Category Selection',
              description:
                'Choose exactly which PII types to redact. Keep email addresses visible while blacking out SSNs, or redact everything at once.',
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: 'Redaction History',
              description:
                'Every redaction is logged with timestamps, file details, and PII categories. Full audit trail for compliance.',
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: 'Privacy First',
              description:
                'Documents are encrypted on upload and never stored permanently. Processing happens in-memory for maximum security.',
            },
            {
              icon: <Download className="h-6 w-6" />,
              title: 'Clean Download',
              description:
                'Download the redacted PDF ready to share. The file is tagged with Veriflo Mask metadata for verification.',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who Uses Mask */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Who Uses Veriflo Mask</h2>
          <p className="mt-4 text-xl text-gray-400">
            Any team that shares documents with external parties
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Legal Teams',
              description: 'Redact client PII from court filings, discovery documents, and shared case materials before exchange.',
            },
            {
              title: 'HR & Recruitment',
              description: 'Remove SSNs, addresses, and dates of birth from employee records and background check reports.',
            },
            {
              title: 'Healthcare',
              description: 'Strip patient identifiers from medical records for HIPAA-compliant data sharing and research.',
            },
            {
              title: 'Financial Services',
              description: 'Redact account numbers and credit card details from financial statements before external distribution.',
            },
            {
              title: 'Real Estate',
              description: 'Remove personal details from lease agreements, applications, and title documents before sharing with third parties.',
            },
            {
              title: 'Compliance & Audit',
              description: 'Ensure PII is removed from documents before regulatory submissions, audits, and public disclosures.',
            },
          ].map((useCase, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-2 text-gray-400">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 p-12">
          <h2 className="text-3xl font-bold text-white">
            Stop sharing personal data by accident
          </h2>
          <p className="mt-4 text-lg text-purple-100">
            Upload a document and see what PII Veriflo Mask finds. Your first redaction is free.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href={`${PLATFORM_URL}/dashboard/mask`}>Redact a Document Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/pricing" className="text-white hover:text-purple-100">
                See Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Complete Document Trust
          </p>
          <h2 className="text-3xl font-bold text-white mt-2">
            Explore the Full Veriflo Platform
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-emerald-500/20 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-white">Veriflo Check</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Verify documents you receive for fraud, tampering, and AI-generated content.
              </p>
              <Button asChild variant="ghost" className="text-emerald-400 hover:text-emerald-300 p-0">
                <Link href="/products/check">
                  Learn About Check <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <Shield className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-white">Veriflo Seal</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Prove your documents are authentic with certified verification links for recipients.
              </p>
              <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                <Link href="/products/protect">
                  Learn About Seal <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
