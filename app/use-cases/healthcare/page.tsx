import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  AlertCircle,
  FileWarning,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Document Verification for Healthcare - Veriflo',
  description:
    'Verify insurance claims, medical records, and healthcare documents you receive. Detect fraudulent claims, manipulated records, fake prescriptions, and forged credentials.',
};

export default function HealthcarePage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Fraudulent Insurance Claims',
      description:
        'Patients submit fake or manipulated insurance claims. Detecting forged claim forms and falsified supporting documents requires forensic analysis.',
    },
    {
      icon: <FileWarning className="h-6 w-6" />,
      title: 'Manipulated Medical Records',
      description:
        'Medical records are altered to support false claims or change treatment history. These tampering patterns are detectable through metadata analysis.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Fake Prescriptions & Credentials',
      description:
        'Forged prescriptions and fabricated provider credentials put patient safety at risk. Verifying document authenticity prevents dangerous fraud.',
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Compliance & Audit Gaps',
      description:
        'Healthcare organizations struggle to demonstrate due diligence in document verification. Systematic checks create audit trails and regulatory credibility.',
    },
  ];

  const solutions = [
    {
      title: 'Integrity Scoring',
      description:
        'Every document gets a 0-100 integrity score with risk levels. Quickly flag suspicious insurance forms, medical records, and claims.',
    },
    {
      title: 'Template Matching',
      description:
        'Recognizes standard insurance claim forms and common medical document templates. Detects structural deviations that indicate forgery.',
    },
    {
      title: 'Metadata Forensics',
      description:
        'Reveals creation dates, editing software traces, and modification patterns that expose fraudulent or tampered documents.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Identifies altered dates, modified values, stripped metadata, and other signs of manipulation in incoming documents.',
    },
  ];

  const benefits = [
    'Catch fraudulent insurance claims before processing',
    'Detect manipulated medical records and false claims',
    'Verify authenticity of provider credentials and qualifications',
    'Identify AI-generated fake prescriptions and documents',
    'Generate audit trails proving document verification was performed',
    'Reduce fraud losses and protect patient safety',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Document Verification for Healthcare
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify insurance claims, medical records, and healthcare documents you receive. Detect fraud, manipulation, and forgeries before they affect patient care or your bottom line.
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
          <h2 className="text-4xl font-bold text-white">Healthcare Document Fraud</h2>
          <p className="mt-4 text-xl text-gray-400">
            Fraudulent claims and falsified documents threaten healthcare organizations and patient safety
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Fraud Prevention</div>
                    <p className="text-sm text-gray-300">
                      A healthcare provider caught 12 fraudulent insurance claims monthly using Veriflo. Each verified document prevents false payments and protects against liability.</p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Patient Safety</div>
                    <p className="text-sm text-gray-300">
                      Detecting forged prescriptions and fake provider credentials protects patients from dangerous fraud while maintaining compliance and operational integrity.
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
              title: 'Receive Claim or Document',
              description:
                'Insurance claim, medical record, prescription, or provider credential arrives for verification.',
            },
            {
              step: '2',
              title: 'Verify Authenticity',
              description:
                'Upload the document to Veriflo for forensic analysis of metadata, structure, and content.',
            },
            {
              step: '3',
              title: 'Score Risk',
              description:
                'Receive a 0-100 integrity score with risk level assessment (Clean, Low, Medium, High, Critical).',
            },
            {
              step: '4',
              title: 'Flag & Investigate',
              description:
                'Documents with Medium+ risk are flagged for human review. Detailed findings explain what triggered the risk.',
            },
            {
              step: '5',
              title: 'Generate Audit Report',
              description:
                'Export a branded PDF report documenting the verification process and findings for your compliance files.',
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
              q: 'What does an integrity score mean for healthcare documents?',
              a: 'A score of 80+ (Clean) indicates minimal signs of tampering. Scores of 60-79 (Low) suggest minor anomalies. Below 60 (Medium/High) indicates potential fraud. Each score includes detailed findings explaining the risk factors.',
            },
            {
              q: 'Can Veriflo detect AI-generated medical documents?',
              a: 'Yes. Veriflo uses 7-signal text and 6-signal image analysis to identify synthetic AI-generated documents. These are flagged separately with an AI-content risk score.',
            },
            {
              q: 'Does this work with insurance claim forms?',
              a: 'Yes. Veriflo recognizes standard insurance claim templates and medical document formats. It detects structural deviations and content manipulation in incoming claims.',
            },
            {
              q: 'Can we integrate with our claims processing system?',
              a: 'Yes. Veriflo offers a REST API for automated verification of incoming claims and documents as part of your claims intake workflow.',
            },
            {
              q: 'What metadata forensics help with healthcare documents?',
              a: 'Veriflo reveals creation dates, editing software traces, and modification patterns. A prescription created today but dated months ago is flagged automatically.',
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
          <h2 className="text-3xl font-bold text-white">Verify healthcare documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and verify your first document in under 60 seconds. Reduce fraud and protect patient safety.
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
