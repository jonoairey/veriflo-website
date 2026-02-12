import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Zap,
  ShieldAlert,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for Fundraising & Due Diligence - Veriflo',
  description:
    'Verify term sheets, cap tables, and due diligence documents received from investors. Detect inflated financials and manipulated cap tables.',
};

export default function FundraisingPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Inflated Financial Documents',
      description:
        'Revenue documents and financial claims received from investors or counterparties may be doctored to misrepresent performance or cash position.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Manipulated Cap Tables',
      description:
        'Cap tables and ownership documents may be altered after initial issuance, creating disputes over actual ownership and dilution.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Forged Investor Documents',
      description:
        'Fake term sheets, LOIs, and commitment letters are created to scam founders. Hard to distinguish from legitimate investor documents.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Recently-Created "Historical" Docs',
      description:
        'Documents claiming to be bank statements, financial records, or historical documents are actually created moments before being sent.',
    },
  ];

  const solutions = [
    {
      title: 'Integrity Scoring',
      description:
        'Score due diligence documents on a 0-100 scale. Identify clean documents vs. those with medium, high, or critical risk flags.',
    },
    {
      title: 'Metadata Forensics',
      description:
        'Detect recently-created documents claiming old dates. Uncover creation timestamps, software traces, and incremental save histories.',
    },
    {
      title: 'AI-Content Detection',
      description:
        'Identify AI-generated text in financial documents and synthetically created cap tables. Score for likelihood of fabrication.',
    },
    {
      title: 'Template Matching',
      description:
        'Verify bank statements, tax forms, and financial statements match authentic templates. Detect structural anomalies in common formats.',
    },
  ];

  const benefits = [
    'Verify term sheets and investment agreements before signing',
    'Detect forged cap tables and ownership documents',
    'Identify inflated financial documents from investors',
    'Catch recently-created documents falsely dated as historical',
    'Score documents to flag high-risk due diligence materials',
    'Export verification reports for investor or legal review',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Verify Fundraising & Due Diligence Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify term sheets, cap tables, and financial documents received from investors. Detect forgeries and manipulated documents before closing.</p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" variant="primary">
                <a href="https://app.useveriflo.com/signup">Get Started Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/how-it-works" className="text-white hover:text-blue-300">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Document Risks in Fundraising</h2>
          <p className="mt-4 text-xl text-gray-400">
            Forged and manipulated documents are a growing threat in capital raising
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

      {/* How Veriflo Solves It */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Veriflo Helps</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive verification for documents you receive during fundraising
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Fundraising</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example: Forged Term Sheet</div>
                    <p className="text-sm text-gray-300">
                      A Series A company received what appeared to be a term sheet from a well-known VC. Veriflo's AI detection and structural analysis flagged it as fabricated and created hours before being sent. The company avoided a scam.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Catch Tampering Before Signing</div>
                    <p className="text-sm text-gray-300">
                      Metadata forensics revealed that a cap table received from an investor had been modified multiple times in the last 24 hours, with key ownership percentages altered. This prevented signing a document with concealed changes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Case Flow */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Due Diligence Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Receive Due Diligence Documents',
              description: 'You receive term sheets, cap tables, financial documents, and other materials from investors or counterparties.',
            },
            {
              step: '2',
              title: 'Batch Upload',
              description: 'Upload multiple documents at once to Veriflo. They\'re processed and scored instantly.',
            },
            {
              step: '3',
              title: 'Score Each Document',
              description: 'Get 0-100 integrity scores for each document. Identify Clean, Low Risk, Medium Risk, High Risk, and Critical items.',
            },
            {
              step: '4',
              title: 'Flag Anomalies',
              description: 'Review detailed forensic findings—creation dates, recent edits, software traces, and AI-generated content.',
            },
            {
              step: '5',
              title: 'Export Verification Reports',
              description: 'Generate branded PDF reports documenting all findings. Share with legal counsel or investors as needed.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold flex-shrink-0">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </div>
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
              q: 'Can I verify term sheets and LOIs?',
              a: 'Yes. Upload any term sheet, letter of intent, or commitment letter. Veriflo will analyze it for signs of forgery, tampering, or AI generation.',
            },
            {
              q: 'How does Veriflo detect fake bank statements?',
              a: 'Veriflo uses template matching to compare bank statements against authentic formats from major banks. It detects structural anomalies, font mismatches, and format inconsistencies that indicate forgery.',
            },
            {
              q: 'Can I verify cap tables?',
              a: 'Yes. Upload cap tables to detect if they\'ve been tampered with or recently created. Metadata forensics reveal editing history and date anomalies.',
            },
            {
              q: 'What if a cap table has legitimate updates?',
              a: 'Veriflo shows the complete editing timeline. You can see when each change was made and verify that updates align with announced funding rounds or stock events.',
            },
            {
              q: 'Are verification reports something I can share with counsel?',
              a: 'Yes. Veriflo generates detailed forensic reports with timestamped findings that attorneys can use to assess document authenticity and integrity.',
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
          <h2 className="text-3xl font-bold text-white">Verify your due diligence documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first document in under 60 seconds.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
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
