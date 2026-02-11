import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  AlertCircle,
  FileWarning,
  Scale,
  Lock,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Healthcare & Life Sciences - Veriflo | Secure Document Trust',
  description:
    'Protect patient data, clinical trial documents, and research IP with invisible fingerprinting and tamper detection. HIPAA-compliant document security.',
};

export default function HealthcarePage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Patient Data Breaches',
      description:
        'Patient records, test results, and medical histories are high-value targets. A single breach can result in millions in HIPAA fines and irreparable trust damage.',
    },
    {
      icon: <FileWarning className="h-6 w-6" />,
      title: 'Clinical Trial Leaks',
      description:
        'Leaked trial data, drug formulations, or research findings can destroy competitive advantage worth billions in R&D investment.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'HIPAA Violations',
      description:
        'Untracked document sharing creates compliance gaps. Every access and distribution must be logged to meet HIPAA and HITECH requirements.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Document Fraud',
      description:
        'Falsified medical records, manipulated lab results, and altered prescriptions can endanger patient safety and expose organizations to liability.',
    },
  ];

  const solutions = [
    {
      title: 'HIPAA-Ready Tracking',
      description:
        'Every document access is logged with user, timestamp, device, and location. Generate compliance reports instantly for auditors.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Verify incoming medical documents, lab results, and insurance claims for signs of manipulation before they enter your systems.',
    },
    {
      title: 'Invisible Fingerprinting',
      description:
        'Protect outgoing documents with invisible fingerprints. If patient data or research is leaked, trace the source immediately.',
    },
    {
      title: 'Secure Distribution',
      description:
        'Control who can access sensitive documents, set expiration dates, and revoke access instantly when needed.',
    },
  ];

  const benefits = [
    'Protect patient data with HIPAA-compliant document tracking',
    'Detect tampered medical records and lab results',
    'Secure clinical trial data and research IP from leaks',
    'Generate audit trails for regulatory compliance',
    'Verify authenticity of incoming insurance claims and documents',
    'Reduce fraud and protect patient safety',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Protect Healthcare Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Secure patient records, clinical trial data, and research IP with invisible fingerprinting. Verify incoming documents for tampering to prevent fraud and protect patient safety.
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
                  <Heart className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Risks in Healthcare</h2>
          <p className="mt-4 text-xl text-gray-400">
            Healthcare organizations face unique security and compliance challenges
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
            Complete protection and visibility for your healthcare documents
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Healthcare</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example</div>
                    <p className="text-sm text-gray-300">
                      A healthcare network detected manipulated insurance claims by running incoming documents through Veriflo's integrity check, preventing over $2M in fraudulent payouts.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Competitive Edge</div>
                    <p className="text-sm text-gray-300">
                      Healthcare organizations using document integrity verification demonstrate commitment to patient safety and data security, building trust with patients and partners.
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
          <h2 className="text-3xl font-bold text-white">Healthcare Document Security Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Classify & Upload',
              description:
                'Identify sensitive documents—patient records, trial data, research papers—and upload to Veriflo.',
            },
            {
              step: '2',
              title: 'Apply Protection',
              description:
                'Each document is fingerprinted with an invisible, unique identifier tied to its intended recipient.',
            },
            {
              step: '3',
              title: 'Secure Distribution',
              description:
                'Share documents with specific recipients. Each gets a uniquely tracked copy with access controls.',
            },
            {
              step: '4',
              title: 'Verify Incoming Documents',
              description:
                'Run integrity checks on incoming medical records, lab results, and claims to detect tampering.',
            },
            {
              step: '5',
              title: 'Monitor & Alert',
              description:
                'Track access patterns in real-time. Receive alerts for unusual access or potential breaches.',
            },
            {
              step: '6',
              title: 'Audit & Comply',
              description:
                'Generate comprehensive audit reports for HIPAA compliance, internal reviews, and regulatory inquiries.',
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
              q: 'Is Veriflo HIPAA compliant?',
              a: 'Veriflo provides the document tracking and audit trail capabilities needed for HIPAA compliance. All document access is logged with user attribution, timestamps, and access details.',
            },
            {
              q: 'Can it detect manipulated lab results?',
              a: 'Yes. Our integrity check analyzes PDF metadata, creation dates, and structural patterns to flag documents that show signs of manipulation, including altered dates and editing software traces.',
            },
            {
              q: 'How does this protect clinical trial data?',
              a: 'Every copy of trial documents shared with researchers, partners, or regulators carries a unique invisible fingerprint. If data is leaked, you can identify exactly which copy was compromised.',
            },
            {
              q: 'What about electronic health records (EHR)?',
              a: 'Veriflo works with exported documents from any EHR system. Upload PDFs, reports, or any document format for fingerprinting and integrity verification.',
            },
            {
              q: 'Can we use this for insurance claim verification?',
              a: 'Absolutely. Upload incoming claim documents to run an integrity check that flags potential manipulation, helping reduce fraud before claims are processed.',
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
          <h2 className="text-3xl font-bold text-white">Protect healthcare documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and upload your first document in under 60 seconds.
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
