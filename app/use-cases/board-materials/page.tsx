import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Crown,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Zap,
  TrendingDown,
} from 'lucide-react';

export const metadata = {
  title: 'Board Material Verification - Veriflo | Verify Governance Documents',
  description:
    'Verify board minutes, financial reports, and governance documents for tampering. Detect manipulated resolutions and forged audit findings.',
};

export default function BoardMaterialsPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Tampered Board Resolutions',
      description:
        'Board resolutions received from other entities or advisors may be altered after original approval. Critical decisions could be unauthorized.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Manipulated Financial Reports',
      description:
        'Financial statements and audit summaries submitted for board review may be modified to hide liabilities or inflate performance.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Forged Meeting Minutes',
      description:
        'Meeting minutes may be fabricated or modified after the fact to create false documentation of board decisions.',
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: 'Altered Governance Documents',
      description:
        'Bylaws, charter amendments, and compliance certifications may be manipulated to misrepresent board authority or governance.',
    },
  ];

  const solutions = [
    {
      title: 'Integrity Scoring',
      description:
        'Score governance documents on a 0-100 scale. Instantly categorize sensitive board materials as Clean, Low Risk, Medium Risk, High Risk, or Critical.',
    },
    {
      title: 'Metadata Timeline Analysis',
      description:
        'Analyze creation dates, revision history, and software traces. Detect documents claiming to be from board meetings months ago but actually created recently.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Identify structural anomalies and signs of manipulation. Catch altered terms, inserted language, or modified signatures in board resolutions.',
    },
    {
      title: 'PDF Forensics',
      description:
        'Deep analysis of document structure reveals tampering, embedded edits, and inconsistencies that indicate the document has been modified.',
    },
  ];

  const benefits = [
    'Verify financial reports submitted to the board before review',
    'Detect tampered board resolutions and governance documents',
    'Catch forged audit findings and compliance certifications',
    'Ensure governance documents haven\'t been altered post-approval',
    'Maintain trustworthy records for SEC and regulatory compliance',
    'Score documents for risk before board approval',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Verify Board Materials
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify board resolutions, financial reports, and governance documents for tampering. Ensure board materials are authentic and unaltered.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" variant="primary">
                <a href="/pricing#contact">Get Started Free</a>
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
                  <Crown className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Document Integrity Risks for Boards</h2>
          <p className="mt-4 text-xl text-gray-400">
            Governance requires trustworthy, unaltered documentation
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
            Comprehensive verification for board documents you receive
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Boards</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example: Tampered Resolution</div>
                    <p className="text-sm text-gray-300">
                      A board received a resolution authorizing a major acquisition. Veriflo's metadata analysis revealed the document was created 3 days after the purported board meeting and had been edited 5 times to modify key terms.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Compliance Confidence</div>
                    <p className="text-sm text-gray-300">
                      Verified documents with Veriflo reports provide auditable evidence that governance materials were authentic and unaltered at the time of review.
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
          <h2 className="text-3xl font-bold text-white">Documents You Can Verify</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              type: 'Board Resolutions',
              description: 'Verify resolutions received from other boards or advisors haven\'t been altered since original approval.',
            },
            {
              type: 'Financial Statements',
              description: 'Confirm quarterly and annual financials are authentic and unmodified before board presentation.',
            },
            {
              type: 'Meeting Minutes',
              description: 'Verify meeting minutes are authentic and detect any post-hoc modifications to create false documentation.',
            },
            {
              type: 'Audit Findings',
              description: 'Verify audit reports and findings from external auditors haven\'t been tampered with or forged.',
            },
            {
              type: 'Governance Documents',
              description: 'Verify bylaws, charter amendments, and compliance certifications are authentic and unaltered.',
            },
            {
              type: 'Committee Reports',
              description: 'Verify reports from audit, compensation, and governance committees are original and unmodified.',
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
          <h2 className="text-3xl font-bold text-white">Board Material Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Receive Board Documents',
              description: 'You receive financial reports, resolutions, audit findings, or other governance materials for board review or action.',
            },
            {
              step: '2',
              title: 'Upload for Verification',
              description: 'Upload each document to Veriflo. Takes seconds per document.',
            },
            {
              step: '3',
              title: 'Review Integrity Scores',
              description: 'Get immediate 0-100 integrity scores for each document. See risk classifications across your materials.',
            },
            {
              step: '4',
              title: 'Analyze Forensic Findings',
              description: 'Review metadata timelines, creation dates, editing history, and any detected tampering or structural anomalies.',
            },
            {
              step: '5',
              title: 'Generate Compliance Report',
              description: 'Export branded verification reports documenting all findings for audit and compliance purposes.',
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
              q: 'Can I verify multiple board documents at once?',
              a: 'Yes. Batch upload multiple documents and get integrity scores for all of them. Useful for verifying entire board packages before meetings.',
            },
            {
              q: 'How does Veriflo detect tampered resolutions?',
              a: 'Veriflo analyzes PDF structure, metadata history, editing timeline, and date anomalies. If a resolution was created after the board meeting or has been edited, it will be flagged.',
            },
            {
              q: 'Can I verify financial statements from external auditors?',
              a: 'Yes. Upload audit reports and financial statements. Veriflo will analyze them for signs of tampering or forgery and provide detailed findings.',
            },
            {
              q: 'Are Veriflo reports suitable for SEC compliance?',
              a: 'Yes. Veriflo generates detailed forensic reports that can support compliance documentation and governance records. All findings are timestamped and auditable.',
            },
            {
              q: 'What if a document has legitimate edits?',
              a: 'Veriflo shows the complete editing timeline. You can see exactly when edits were made, what changed, and by what software. This helps distinguish legitimate revisions from suspicious tampering.',
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
          <h2 className="text-3xl font-bold text-white">Verify your board materials today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first document in under 60 seconds.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href="/pricing#contact">Get Started Free</a>
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
