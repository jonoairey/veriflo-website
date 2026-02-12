import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  BarChart3,
  AlertCircle,
  ShieldAlert,
  Scale,
  CheckCircle,
  ArrowRight,
  Zap,
  FileCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for Financial Services - Veriflo',
  description:
    'Verify financial documents received by your institution. Detect fraudulent bank statements, manipulated pay stubs, and fake income documents with AI and forensic analysis.',
};

export default function FinancialServicesPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Fraudulent Bank Statements',
      description:
        'Applicants submit fake or manipulated bank statements to secure loans, credit, or housing. Current vetting processes catch only obvious forgeries.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Manipulated Pay Stubs',
      description:
        'Pay stubs are edited to show higher income than reality. These documents directly influence lending decisions and can cost institutions millions.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Fake Income Documentation',
      description:
        'W-2s, 1099s, and tax returns are fabricated or altered. Detecting synthetic documents requires forensic analysis that manual review cannot provide.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Compliance & Risk Gaps',
      description:
        'No systematic verification means undetected fraud propagates. Lenders and banks struggle to demonstrate due diligence to regulators.',
    },
  ];

  const solutions = [
    {
      title: 'Integrity Scoring',
      description:
        'Every document gets a 0-100 integrity score with risk levels. Clean (80+), Low (60+), Medium (40+), High (20+), or Critical risk.',
    },
    {
      title: 'Template Matching',
      description:
        'Recognizes 15+ document templates including Chase, BofA, Wells Fargo bank statements, ADP/Gusto/Paychex pay stubs, W-2, 1099, and more.',
    },
    {
      title: 'Metadata Forensics',
      description:
        'Reveals creation dates, editing software traces, incremental saves, and date anomalies that indicate tampering.',
    },
    {
      title: 'AI-Content Detection',
      description:
        'Identifies synthetic text and AI-generated images using 7-signal text + 6-signal image analysis with zero external API dependencies.',
    },
  ];

  const benefits = [
    'Catch fraudulent or manipulated documents before they affect decisions',
    'Reduce lending losses and loan defaults from false income claims',
    'Verify template matches for well-known institutions automatically',
    'Detect AI-generated synthetic documents in seconds',
    'Export branded PDF reports for audit trails and compliance',
    'Integrate via REST API for automated document verification workflows',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Document Verification for Financial Services
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify financial documents as you receive them. Detect fraudulent bank statements, manipulated pay stubs, and fake income documents instantly with forensic analysis and AI-powered detection.
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
                  <BarChart3 className="h-24 w-24 text-emerald-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Document Fraud Problem</h2>
          <p className="mt-4 text-xl text-gray-400">
            Financial institutions receive thousands of documents daily. Without verification, fraudulent documents slip through.
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
            Enterprise-grade security for every financial document
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Financial Services</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Fraud Prevention</div>
                    <p className="text-sm text-gray-300">
                      A mortgage lender caught 3 fraudulent pay stubs per week using Veriflo's AI and metadata forensics. Each prevented loan would have resulted in significant loss.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Due Diligence</div>
                    <p className="text-sm text-gray-300">
                      Veriflo generates audit-ready reports proving document verification was performed, satisfying regulatory requirements and demonstrating operational diligence.
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
          <h2 className="text-3xl font-bold text-white">Document Verification Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Receive Financial Document',
              description: 'Applicant submits bank statement, pay stub, W-2, 1099, or income verification document.',
            },
            {
              step: '2',
              title: 'Upload to Veriflo',
              description: 'Upload the document to Veriflo via web interface, REST API, or automated workflow.',
            },
            {
              step: '3',
              title: 'Get Integrity Score',
              description: 'Receive a 0-100 integrity score with risk level assessment (Clean, Low, Medium, High, Critical).',
            },
            {
              step: '4',
              title: 'Review Forensic Findings',
              description: 'Examine metadata forensics, template matches, AI-content signals, and tamper detection results.',
            },
            {
              step: '5',
              title: 'Export Branded Report',
              description: 'Generate a professional PDF report for your compliance files and audit trail.',
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
              q: 'What does an integrity score of 80+ mean?',
              a: 'A score of 80+ (Clean risk level) indicates the document shows minimal signs of tampering or anomalies. It is likely authentic. Scores between 60-79 (Low risk) suggest minor metadata inconsistencies worth reviewing. Below 60 indicates Medium or High risk that requires investigation.',
            },
            {
              q: 'Can Veriflo detect AI-generated pay stubs?',
              a: 'Yes. Veriflo uses 7-signal text and 6-signal image analysis to detect synthetic AI-generated documents. These are flagged separately from traditional tampering with an AI-content risk score.',
            },
            {
              q: 'Does the API work with our underwriting system?',
              a: 'Yes. Veriflo offers a REST API (POST /api/v1/verify) with Bearer token authentication. You can integrate automated verification into your document intake workflows.',
            },
            {
              q: 'What templates does Veriflo recognize?',
              a: 'Veriflo includes 15+ built-in templates: Chase, BofA, Wells Fargo bank statements; ADP, Gusto, Paychex pay stubs; W-2, 1099, P60, invoices, and utility bills.',
            },
            {
              q: 'How are metadata forensics useful?',
              a: 'Metadata forensics reveal creation dates, editing software traces, incremental saves, and date anomalies. A pay stub created yesterday but dated 6 months ago is a red flag that metadata forensics will catch.',
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
          <h2 className="text-3xl font-bold text-white">Verify financial documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first document in under 60 seconds. Reduce fraud losses instantly.
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
