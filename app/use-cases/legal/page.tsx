import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Scale,
  AlertCircle,
  FileText,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for Legal Teams - Veriflo',
  description:
    'Verify legal documents you receive. Detect forged contracts, manipulated evidence, tampered discovery documents, and fake certifications with forensic analysis.',
};

export default function LegalPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Forged Contracts',
      description:
        'Opposing parties submit altered or fabricated contracts claiming different terms. Distinguishing genuine from forged requires forensic document analysis.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Manipulated Evidence',
      description:
        'Critical evidence in litigation may be edited, backdated, or modified. Courts require proof of authenticity, not speculation.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Tampered Discovery Documents',
      description:
        'Documents produced in discovery can be altered before exchange. Detecting metadata inconsistencies requires tools beyond manual review.',
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Fake Certifications & Credentials',
      description:
        'Expert certifications, professional licenses, and qualifications are forged. Verifying authenticity prevents reliance on fraudulent experts.',
    },
  ];

  const solutions = [
    {
      title: 'Tamper Detection',
      description:
        'Analyzes PDF structure, metadata, creation dates, and editing software traces to identify signs of manipulation or forgery.',
    },
    {
      title: 'Metadata Timeline Analysis',
      description:
        'Reveals creation dates, incremental saves, modification history, and date anomalies that prove documents were altered.',
    },
    {
      title: 'AI-Content Detection',
      description:
        'Identifies fabricated text and synthetic images before evidence is relied upon in case strategy.',
    },
    {
      title: 'Integrity Scoring & Reports',
      description:
        'Every document receives a 0-100 integrity score with detailed findings suitable for case files and expert witness testimony.',
    },
  ];

  const benefits = [
    'Detect forged contracts before relying on them in negotiations',
    'Prove evidence tampering with forensic metadata analysis',
    'Identify fabricated documents before they influence case decisions',
    'Generate court-ready reports with integrity scores and findings',
    'Protect against opposing parties submitting altered discovery documents',
    'Catch synthetic AI-generated evidence before trial',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Document Verification for Legal Teams
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify contracts, evidence, and discovery documents you receive. Detect forgeries, tampering, and fabricated evidence with forensic analysis before they affect your case.
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
                  <Scale className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Document Integrity in Litigation</h2>
          <p className="mt-4 text-xl text-gray-400">
            Proving document authenticity is critical to case success
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
            Purpose-built for legal document protection and compliance
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Legal Teams</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Catch Forgeries</div>
                    <p className="text-sm text-gray-300">
                      A law firm used Veriflo to catch a forged contract that opposing counsel submitted as authentic. The forensic findings proved the document was created days before (not years) and contained editing traces.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Expert Testimony Support</div>
                    <p className="text-sm text-gray-300">
                      Veriflo reports provide detailed forensic analysis suitable for expert witness testimony. Courts recognize metadata analysis as credible evidence of tampering.
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
          <h2 className="text-3xl font-bold text-white">Legal Document Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Receive Legal Document',
              description: 'Opposing counsel sends a contract, discovery document, or piece of evidence critical to your case.',
            },
            {
              step: '2',
              title: 'Verify Authenticity',
              description: 'Upload the document to Veriflo for forensic analysis of metadata, structure, and content.',
            },
            {
              step: '3',
              title: 'Review Forensic Findings',
              description: 'Examine creation dates, editing software traces, date anomalies, and tamper detection results with detailed explanations.',
            },
            {
              step: '4',
              title: 'Export Branded Report',
              description: 'Generate a professional report suitable for case files, expert witness testimony, and court submission.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex-shrink-0">
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
              q: 'Are forensic reports admissible in court?',
              a: 'Yes. Veriflo generates detailed forensic analysis reports with integrity scores, metadata findings, and expert-level explanations suitable for expert witness testimony and court submission.',
            },
            {
              q: 'What metadata does Veriflo analyze?',
              a: 'Veriflo examines PDF creation dates, modification history, embedded software signatures, editing software traces, incremental saves, structural integrity, and date anomalies.',
            },
            {
              q: 'Can it detect AI-generated documents?',
              a: 'Yes. Veriflo uses 7-signal text and 6-signal image analysis to identify synthetic AI-generated documents. These are flagged separately with an AI-content risk score.',
            },
            {
              q: 'How quickly can I get results?',
              a: 'Results are instant. Upload a document and receive an integrity score and forensic findings within seconds.',
            },
            {
              q: 'Can I integrate verification into discovery workflows?',
              a: 'Yes. Veriflo offers a REST API for automated verification of incoming discovery documents as part of your case management workflow.',
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
          <h2 className="text-3xl font-bold text-white">Verify legal documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first document in under 60 seconds. Get forensic analysis and integrity reports for your case.
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
