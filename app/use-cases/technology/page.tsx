import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  AlertCircle,
  ShieldAlert,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for Technology Companies - Veriflo',
  description:
    'Verify vendor invoices, SOC 2 reports, and compliance certifications you receive. Detect fake documents and manipulated compliance certifications.',
};

export default function TechnologyPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Fake Vendor Invoices',
      description:
        'Criminals impersonate vendors and send fraudulent invoices with altered bank details. Companies pay fake invoices before discovering the fraud.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Manipulated SOC 2 Reports',
      description:
        'Vendors submit fake or outdated SOC 2 compliance reports. Tech companies need to verify that security certifications are current and authentic.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Forged Compliance Certifications',
      description:
        'ISO certifications, compliance badges, and third-party audit reports are fabricated or altered. Detecting these forgeries requires forensic analysis.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'AI-Generated Fake Documents',
      description:
        'Vendors use AI to generate convincing but entirely synthetic compliance documents. Distinguishing real from AI-generated requires advanced analysis.',
    },
  ];

  const solutions = [
    {
      title: 'AI-Content Detection',
      description:
        'Identifies synthetic AI-generated documents using 7-signal text and 6-signal image analysis. No external API dependencies.',
    },
    {
      title: 'Template Matching',
      description:
        'Recognizes standard invoice templates and compliance document formats. Detects structural deviations that indicate forgery.',
    },
    {
      title: 'Metadata Forensics',
      description:
        'Reveals creation dates, editing software traces, and document modification patterns that expose fake certifications.',
    },
    {
      title: 'REST API Integration',
      description:
        'Automate verification of incoming vendor documents as part of your procurement workflow. POST /api/v1/verify with Bearer token auth.',
    },
  ];

  const benefits = [
    'Detect fake vendor invoices before payments are made',
    'Verify SOC 2 and compliance certifications are authentic',
    'Identify AI-generated fake documents from vendors',
    'Catch forged compliance badges and audit reports',
    'Automate document verification in procurement workflows',
    'Get integrity scores on all incoming vendor documentation',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Document Verification for Technology Companies
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify vendor documents, compliance certifications, and SOC 2 reports you receive. Detect fake invoices, forged certifications, and AI-generated documents instantly.
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
                  <Code className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Vendor & Compliance Document Fraud</h2>
          <p className="mt-4 text-xl text-gray-400">
            Tech companies receive thousands of vendor documents. Detecting fraud requires systematic verification.
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
            Purpose-built for tech companies protecting strategic documents
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Tech Teams</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Invoice Fraud Prevention</div>
                    <p className="text-sm text-gray-300">
                      A tech company caught 5 fraudulent vendor invoices monthly. Each invoice was fake but looked authentic. Veriflo's metadata forensics exposed the forgeries before payment.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Compliance Due Diligence</div>
                    <p className="text-sm text-gray-300">
                      Companies using Veriflo to verify vendor SOC 2 reports ensure they're relying on authentic certifications, reducing security risks and demonstrating operational rigor.
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
          <h2 className="text-3xl font-bold text-white">Vendor Document Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Receive Vendor Document',
              description: 'Invoice, SOC 2 report, compliance certification, or other vendor documentation arrives.',
            },
            {
              step: '2',
              title: 'API Auto-Verify (or Manual Upload)',
              description: 'Automatically verify via API integration in your procurement workflow, or upload manually to web dashboard.',
            },
            {
              step: '3',
              title: 'Score Integrity',
              description: 'Receive a 0-100 integrity score with risk level assessment. Detect AI-generated documents and metadata anomalies.',
            },
            {
              step: '4',
              title: 'Flag Anomalies',
              description: 'Documents with Medium+ risk are highlighted. Detailed forensic findings explain what triggered the alert.',
            },
            {
              step: '5',
              title: 'Dashboard Review',
              description: 'View all verified documents in your dashboard with historical records and audit trails.',
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
              q: 'Can Veriflo detect AI-generated SOC 2 reports?',
              a: 'Yes. Veriflo uses 7-signal text and 6-signal image analysis to identify synthetic AI-generated documents. Fake compliance reports are flagged with an AI-content risk score.',
            },
            {
              q: 'How does it detect fake vendor invoices?',
              a: 'Veriflo analyzes PDF metadata, creation dates, structural integrity, and editing software traces. Invoices created recently but dated months ago are automatically flagged.',
            },
            {
              q: 'What does an integrity score mean?',
              a: 'A score of 80+ (Clean) indicates minimal tampering risk. Scores of 60-79 (Low) suggest minor anomalies. Below 60 (Medium/High) indicates potential fraud or AI-generation.',
            },
            {
              q: 'Can we integrate Veriflo into our procurement system?',
              a: 'Yes. Veriflo offers a REST API (POST /api/v1/verify) with Bearer token authentication for automated verification of incoming vendor documents.',
            },
            {
              q: 'Does Veriflo recognize invoice templates?',
              a: 'Yes. Veriflo includes 15+ templates including major invoice formats, ADP/Gusto/Paychex, and standard compliance document templates.',
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
          <h2 className="text-3xl font-bold text-white">Verify vendor documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first vendor document in under 60 seconds. Protect your company from invoice fraud and fake certifications.
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
