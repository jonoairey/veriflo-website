import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  AlertTriangle,
  Shield,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  DollarSign,
  Building2,
} from 'lucide-react';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export const metadata = {
  title: 'Invoice Verification & Fraud Detection - Veriflo',
  description:
    'Verify invoices you receive. Detect fake invoices, tampered payment details, and manipulated amounts with forensic document analysis.',
};

export default function InvoiceVerificationPage() {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Invoice Fraud is Exploding',
      description:
        'Invoice fraud costs businesses over $26 billion every year. Criminals intercept invoices, change bank details, and redirect payments to their own accounts.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Tampered PDFs Look Identical',
      description:
        'Modern PDF editing tools make it trivially easy to alter bank details, amounts, and payment instructions. Tampered invoices are visually indistinguishable from the original.',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Payments Can\'t Be Reversed',
      description:
        'Once a wire transfer lands in a fraudster\'s account, the money is gone. Most businesses discover the fraud weeks later when the real vendor chases payment.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'No Way to Verify Incoming Invoices',
      description:
        'You receive invoices from vendors but have no way to verify they\'re genuine. Manual verification is slow. Fraudsters rely on speed and volume to bypass detection.',
    },
  ];

  const solutions = [
    {
      title: 'Metadata Forensics',
      description:
        'Analyzes PDF creation dates, editing software traces, incremental saves, and modification patterns to detect tampering.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Multi-layer verification checks PDF metadata, structural integrity, and content consistency. Flags any modification with confidence scoring.',
    },
    {
      title: 'Template Matching',
      description:
        'Recognizes standard invoice templates from major providers. Detects structural deviations that indicate forgery or manipulation.',
    },
    {
      title: 'Integrity Scoring',
      description:
        'Every invoice receives a 0-100 score (Clean 80+, Low 60+, Medium 40+, High 20+, Critical <20). Quickly identify suspicious invoices.',
    },
  ];

  const benefits = [
    'Detect fake invoices before payments are made',
    'Identify tampered bank details and payment instructions',
    'Get instant integrity scores on all incoming vendor invoices',
    'Catch AI-generated fake invoices with content analysis',
    'Template matching for invoices from major providers',
    'Export verification reports for audit trails and compliance',
    'Integrate via API for automated invoice verification workflows',
  ];

  const whoItsFor = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'B2B Companies',
      description: 'Verify invoices from vendors before processing high-value payments.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Accounting Firms',
      description: 'Verify vendor invoices and tax documents to protect your clients.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Corporate Finance',
      description: 'Automated invoice verification for large-scale procurement workflows.',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'CFOs & Controllers',
      description: 'Reduce invoice fraud and unauthorized payments with systematic verification.',
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm text-red-400 mb-6">
              <AlertTriangle className="h-4 w-4" />
              $26B+ lost to invoice fraud annually
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Invoice Verification & Fraud Detection
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify invoices you receive. Detect fake invoices, tampered payment details, and manipulated amounts with forensic analysis before you pay.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button asChild size="lg" variant="primary">
                <a href={`/pricing#contact`}>Get Started Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/how-it-works" className="text-white hover:text-emerald-300">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-emerald-300">Clean. Score: 85</div>
                      <p className="text-xs text-gray-400 mt-1">This invoice shows minimal tampering risk. Metadata is consistent. Safe to process payment.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-red-300">High Risk. Score: 25</div>
                      <p className="text-xs text-gray-400 mt-1">This invoice shows signs of tampering. Bank details may have been altered. Do NOT pay. Investigate further.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Invoice Fraud Problem</h2>
          <p className="mt-4 text-xl text-gray-400">
            Invoice interception is one of the fastest-growing financial crimes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {painPoints.map((point, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-gray-400">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Invoice Verification Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three simple steps to verify incoming invoices
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: '1',
              icon: <FileText className="h-8 w-8 text-blue-400" />,
              title: 'Receive Invoice',
              description:
                'An invoice arrives from a vendor. Before processing payment, upload it to Veriflo for verification.',
            },
            {
              step: '2',
              icon: <Shield className="h-8 w-8 text-blue-400" />,
              title: 'Run Forensic Analysis',
              description:
                'Veriflo analyzes metadata, creation dates, editing software traces, and structural integrity. Get an instant integrity score.',
            },
            {
              step: '3',
              icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
              title: 'Verify & Approve',
              description:
                'Review the integrity score and findings. Approve payment if Clean (80+), or investigate if flagged as suspicious.',
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Veriflo Solves It */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Multi-Layer Protection</h2>
          <p className="mt-4 text-xl text-gray-400">
            Multiple independent verification checks catch any tampering
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                <p className="mt-2 text-gray-400">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Why Businesses Choose Veriflo</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-blue-300 mb-2">Cost of Invoice Fraud</div>
                    <p className="text-sm text-gray-300">
                      The average invoice fraud incident costs $130,000. One intercepted wire transfer can devastate a business. Veriflo verification costs pennies compared to the potential loss.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Operational Efficiency</div>
                    <p className="text-sm text-gray-300">
                      Automated invoice verification integrates into procurement workflows via API. Reduce manual review time and catch fraud at scale without slowing operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Who It&apos;s For</h2>
          <p className="mt-4 text-xl text-gray-400">
            Any business that sends invoices can benefit from Veriflo
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whoItsFor.map((item, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Common Questions</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              q: 'What does an integrity score of 80+ mean?',
              a: 'A score of 80+ (Clean) indicates the invoice shows minimal signs of tampering or anomalies and is likely safe to pay. Scores of 60-79 (Low risk) suggest minor metadata inconsistencies worth reviewing. Below 60 indicates Medium or High risk requiring investigation.',
            },
            {
              q: 'How does Veriflo detect tampered invoices?',
              a: 'Veriflo analyzes PDF metadata, creation dates, editing software traces, structural integrity, and content consistency. It detects date inconsistencies, modified values, editing software traces, and structural manipulation.',
            },
            {
              q: 'Can Veriflo recognize invoices from my vendors?',
              a: 'Yes. Veriflo includes 15+ built-in templates for common invoice formats and providers. Template matching helps detect structural deviations that indicate forgery.',
            },
            {
              q: 'Can we integrate with our accounting software?',
              a: 'Yes. Veriflo offers a REST API (POST /api/v1/verify) for automated invoice verification as part of your accounting workflow.',
            },
            {
              q: 'How quickly do we get results?',
              a: 'Results are instant. Upload an invoice and receive an integrity score and detailed forensic findings within seconds.',
            },
            {
              q: 'What about AI-generated fake invoices?',
              a: 'Veriflo uses 7-signal text and 6-signal image analysis to identify synthetic AI-generated invoices. These are flagged separately with an AI-content risk score.',
            },
          ].map((faq, idx) => (
            <details key={idx} className="group border border-slate-800 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <span className="text-blue-400 group-open:rotate-180 transition-transform">
                  <ArrowRight className="h-5 w-5 rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-gray-300 border-t border-slate-800">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 p-12">
          <h2 className="text-3xl font-bold text-white">Verify invoices today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first invoice in under 60 seconds. Detect fraud and protect your business.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href={`/pricing#contact`}>Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/" className="text-white hover:text-blue-100">
                Back to Home <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
