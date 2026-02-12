import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  FileCheck,
  ShieldAlert,
  TrendingDown,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for M&A Transactions - Veriflo',
  description:
    'Verify M&A due diligence documents for tampering and fraud. Detect manipulated financial statements, fake compliance certifications, and forged audit reports.',
};

export default function MADealsPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Manipulated Financial Statements',
      description:
        'Financial statements in data rooms may be altered to hide liabilities or inflate revenue. Subtle changes are easy to miss in complex documents.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Tampered Contracts',
      description:
        'Deal contracts and agreements may be modified after signing or submitted with unauthorized changes to key terms and conditions.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Forged Compliance Certifications',
      description:
        'Fake regulatory certifications, ISO certifications, and compliance documents are submitted to satisfy buyer due diligence requirements.',
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: 'Fraudulent Audit Reports',
      description:
        'Audit reports may be fabricated or modified to overstate financial health or hide material issues discovered during actual audits.',
    },
  ];

  const solutions = [
    {
      title: 'Integrity Scoring',
      description:
        'Score all data room documents on a 0-100 scale. Instantly categorize files as Clean, Low Risk, Medium Risk, High Risk, or Critical.',
    },
    {
      title: 'Metadata Forensics',
      description:
        'Analyze creation dates, revision histories, and software traces. Detect documents created recently but claiming to be months or years old.',
    },
    {
      title: 'Template Matching',
      description:
        'Verify financial statements, tax forms, and bank statements match authentic templates from real institutions. Detect structural anomalies.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Identify signs of document manipulation—altered terms, embedded edits, metadata inconsistencies, and structural anomalies that indicate tampering.',
    },
  ];

  const benefits = [
    'Verify financial statements in data rooms before review',
    'Detect tampered contracts and modified agreements',
    'Identify forged compliance certifications and audit reports',
    'Flag high-risk documents before diligence team review',
    'Score documents to prioritize investigation and legal review',
    'Export verification reports for due diligence files',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Verify M&A Due Diligence Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify financial statements, contracts, and compliance documents in data rooms. Detect tampering and forged documents before closing.
            </p>
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
                  <Briefcase className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Document Integrity Risks in M&A</h2>
          <p className="mt-4 text-xl text-gray-400">
            Due diligence is only as strong as the authenticity of documents reviewed
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
            Comprehensive verification for M&A due diligence documents
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for M&A Deals</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example: Manipulated Financials</div>
                    <p className="text-sm text-gray-300">
                      An M&A team discovered financial statements in a data room that had been edited to remove liabilities. Veriflo's structural analysis and metadata forensics revealed edits made after the purported audit date. Deal was restructured based on these findings.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Due Diligence Efficiency</div>
                    <p className="text-sm text-gray-300">
                      Veriflo scores all documents in a data room, allowing diligence teams to prioritize investigation on high-risk files and move through review faster.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Data Room Documents You Can Verify</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              type: 'Financial Statements',
              description: 'Verify quarterly and annual financial statements for tampering, altered numbers, and metadata inconsistencies.',
            },
            {
              type: 'Tax Returns',
              description: 'Verify 1099s, W-2s, and tax documents match authentic IRS templates and detect forged or manipulated returns.',
            },
            {
              type: 'Bank Statements',
              description: 'Verify bank statements from major institutions match authentic formats and detect fabricated statements.',
            },
            {
              type: 'Contracts & Agreements',
              description: 'Verify deal contracts, employment agreements, and customer contracts haven\'t been tampered with or modified.',
            },
            {
              type: 'Audit Reports',
              description: 'Verify audit reports are authentic and detect whether documents have been altered or forged after original audit.',
            },
            {
              type: 'Compliance Certifications',
              description: 'Verify ISO certifications, regulatory approvals, and compliance documents are authentic and not fabricated.',
            },
          ].map((doc, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">{doc.type}</h3>
                <p className="mt-2 text-gray-400">{doc.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Case Flow */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">M&A Due Diligence Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Access Data Room Documents',
              description: 'Receive access to the target company\'s data room with financial statements, contracts, and due diligence materials.',
            },
            {
              step: '2',
              title: 'Batch Verify Via API',
              description: 'Use Veriflo\'s REST API to verify documents programmatically or upload critical files directly for analysis.',
            },
            {
              step: '3',
              title: 'Review Integrity Scores',
              description: 'Get 0-100 integrity scores for each document. Score high-risk items first for diligence team prioritization.',
            },
            {
              step: '4',
              title: 'Flag High-Risk Documents',
              description: 'Documents scoring in the High Risk or Critical range are flagged for immediate investigation and legal review.',
            },
            {
              step: '5',
              title: 'Generate Due Diligence Report',
              description: 'Export comprehensive verification reports documenting all findings for the deal team and legal counsel.',
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
              q: 'Can I verify financial statements in bulk?',
              a: 'Yes. Upload multiple documents or use Veriflo\'s REST API to verify documents programmatically. All are scored instantly.',
            },
            {
              q: 'How does Veriflo detect manipulated financial statements?',
              a: 'Veriflo uses template matching to verify statements match authentic formats from real companies and banks. Structural analysis detects altered numbers, inserted rows, and edited sections.',
            },
            {
              q: 'Can I verify contracts that have been signed?',
              a: 'Yes. Upload signed contracts to analyze them for evidence of tampering after signing. Metadata shows when edits were made relative to signature dates.',
            },
            {
              q: 'What if financial statements have legitimate revisions?',
              a: 'Veriflo shows the complete revision timeline. You can see when restatements were issued and verify that revisions align with announced financial updates.',
            },
            {
              q: 'Can I integrate Veriflo with our due diligence process?',
              a: 'Yes. Veriflo offers a REST API for programmatic verification and a web interface for manual uploads. Integration takes minutes.',
            },
            {
              q: 'Are Veriflo reports suitable for closing documents?',
              a: 'Yes. Veriflo generates detailed forensic reports with timestamped findings suitable for M&A closing files and deal documentation.',
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
          <h2 className="text-3xl font-bold text-white">Verify your next deal today</h2>
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
