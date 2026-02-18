import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Film,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  FileCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for Media & Entertainment - Veriflo',
  description:
    'Verify contracts, deal documents, and creative agreements received from studios, distributors, and talent. Detect tampering and AI-generated forgeries.',
};

export default function MediaEntertainmentPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Forged Contracts',
      description:
        'Fake studio contracts and deal memos are circulated to scam talent and production companies. It\'s hard to spot the fakes.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Manipulated Deal Terms',
      description:
        'Critical contract terms—payment schedules, rights grants, distribution rights—are altered after initial agreements. You discover changes too late.',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'AI-Generated Documents',
      description:
        'Deep fakes and synthetic documents claiming to be from legitimate studios or networks are getting harder to spot. They look completely authentic.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Rights Agreement Confusion',
      description:
        'Documents received for licensing, distribution, or rights grants may be tampered with or fabricated, creating liability exposure.',
    },
  ];

  const solutions = [
    {
      title: 'Tamper Detection',
      description:
        'Analyze contracts and deal documents for signs of manipulation—altered terms, metadata inconsistencies, and structural changes that indicate tampering.',
    },
    {
      title: 'Metadata Forensics',
      description:
        'Uncover creation dates, software traces, and incremental edits. Identify recently-created documents claiming to be old contracts.',
    },
    {
      title: 'AI-Content Detection',
      description:
        'Detect AI-generated text in contracts and synthetic media. Score documents on the likelihood of AI fabrication with proprietary signal analysis.',
    },
    {
      title: 'Integrity Scoring',
      description:
        'Get a 0-100 integrity score with risk levels. Instantly see if a contract is Clean, Low Risk, Medium Risk, High Risk, or Critical.',
    },
  ];

  const benefits = [
    'Verify contracts received from studios, networks, and distributors',
    'Detect forged talent agreements and scam documents',
    'Identify AI-generated fabrications masquerading as legitimate deals',
    'Catch tampered contract terms before signing',
    'Understand the full editing history and creation timeline of documents',
    'Score documents for risk before legal review',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Verify Media & Entertainment Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify contracts, deal documents, and creative agreements before signing. Detect forgeries, tampering, and AI-generated fabrications.
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
                  <Film className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Document Risks in Media & Entertainment</h2>
          <p className="mt-4 text-xl text-gray-400">
            Forged contracts and manipulated deal documents are a growing threat
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
            Comprehensive verification for documents you receive
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Media & Entertainment</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example: Forged Contract</div>
                    <p className="text-sm text-gray-300">
                      A production company received what appeared to be a studio distribution agreement. Veriflo's AI detection flagged it as synthetically generated and the structural analysis revealed it was created hours before being sent, preventing a costly mistake.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Catch Tampering Early</div>
                    <p className="text-sm text-gray-300">
                      Before signing a rights agreement, Veriflo's metadata analysis revealed it had been edited 8 times in the last week—key terms had been altered from the original version sent for review.
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
          <h2 className="text-3xl font-bold text-white">Contract Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Receive Deal Document',
              description: 'You receive a contract, deal memo, or rights agreement from a studio, distributor, or talent representative.',
            },
            {
              step: '2',
              title: 'Upload to Veriflo',
              description: 'Upload the document to Veriflo. Takes seconds to complete.',
            },
            {
              step: '3',
              title: 'Review Integrity Score',
              description: 'Get an immediate 0-100 integrity score with risk classification: Clean, Low, Medium, High, or Critical.',
            },
            {
              step: '4',
              title: 'Analyze Forensic Findings',
              description: 'Review metadata timelines, creation dates, software traces, and any detected tampering or anomalies.',
            },
            {
              step: '5',
              title: 'Check AI Detection',
              description: 'See if the document contains AI-generated text or synthetic content that doesn\'t match legitimate documents from that source.',
            },
            {
              step: '6',
              title: 'Archive with Report',
              description: 'Export a branded PDF report documenting all findings. Archive with your legal records for liability protection.',
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
              q: 'How accurate is the AI-content detection?',
              a: 'Veriflo uses 7-signal text analysis to detect synthetic text patterns. Combined with other forensic signals, it provides high-confidence detection of AI-generated fabrications in documents.',
            },
            {
              q: 'Can I verify PDFs and Word documents?',
              a: 'Yes. Veriflo works with PDFs, Word documents (.docx), and other common formats. Upload any contract or deal document you receive.',
            },
            {
              q: 'What if a contract has been slightly edited?',
              a: 'Veriflo shows the full editing timeline and metadata history. You\'ll see when each change was made, what software was used, and can compare to earlier versions to catch important modifications.',
            },
            {
              q: 'Can I use verification reports in legal proceedings?',
              a: 'Yes. Veriflo generates detailed branded PDF reports with forensic evidence that can be used to support legal claims of tampering or forgery.',
            },
            {
              q: 'How do I know if a contract is actually from the studio?',
              a: 'Veriflo can\'t verify identity, but it can detect if a document is forged, AI-generated, or structurally inconsistent. Combined with direct communication with the studio, this provides strong confidence in authenticity.',
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
          <h2 className="text-3xl font-bold text-white">Verify your next contract today</h2>
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
