import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  BarChart3,
  AlertCircle,
  ShieldAlert,
  Scale,
  UserX,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Financial Services & Banking - Veriflo | Secure Document Trust',
  description:
    'Protect sensitive financial documents with invisible fingerprinting and verify incoming documents for tampering. Built for banks, insurers, and financial institutions.',
};

export default function FinancialServicesPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Statement Leaks',
      description:
        'Client statements, portfolio summaries, and internal reports can be forwarded or leaked, exposing sensitive financial data to unauthorized parties.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: 'Document Fraud',
      description:
        'Fraudulent bank statements, manipulated pay stubs, and altered financial documents cost the industry billions annually in losses.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Compliance Violations',
      description:
        'Failing to track document access and distribution can violate regulatory requirements like SOX, GDPR, and industry-specific mandates.',
    },
    {
      icon: <UserX className="h-6 w-6" />,
      title: 'Insider Threats',
      description:
        'Employees with access to sensitive documents can leak proprietary research, client lists, or trading strategies to competitors.',
    },
  ];

  const solutions = [
    {
      title: 'Invisible Fingerprinting',
      description:
        'Every document shared internally or externally carries a unique, invisible fingerprint. If leaked, trace the source instantly.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Verify incoming documents for signs of manipulation. Detect altered dates, modified values, and suspicious metadata before making decisions.',
    },
    {
      title: 'Audit Trail',
      description:
        'Complete, tamper-proof record of who accessed what document, when, and from where. Meet regulatory requirements effortlessly.',
    },
    {
      title: 'Leak Identification',
      description:
        'If sensitive financial data appears where it shouldn\'t, upload the leaked document and identify exactly which copy was compromised.',
    },
  ];

  const benefits = [
    'Protect client financial data and proprietary research',
    'Detect fraudulent or tampered documents before processing',
    'Maintain complete audit trails for regulatory compliance',
    'Trace document leaks to the exact source instantly',
    'Reduce fraud losses with incoming document verification',
    'Meet SOX, GDPR, and industry compliance requirements',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Secure Financial Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Protect sensitive statements, analyst reports, and client communications with invisible fingerprinting. Verify incoming documents for tampering before they reach your systems.
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
                  <BarChart3 className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Risks in Financial Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Financial institutions face unprecedented threats to document security
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example</div>
                    <p className="text-sm text-gray-300">
                      A financial advisory firm detected that client portfolio summaries were being forwarded outside the organization. Using Veriflo, they identified the source within minutes and closed the breach.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Compliance Edge</div>
                    <p className="text-sm text-gray-300">
                      Financial institutions using Veriflo generate audit-ready reports that satisfy SOX and GDPR requirements, reducing compliance preparation time significantly.
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
          <h2 className="text-3xl font-bold text-white">Financial Document Security Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Upload Sensitive Documents',
              description: 'Upload statements, reports, or client materials to Veriflo for protection.',
            },
            {
              step: '2',
              title: 'Fingerprint & Distribute',
              description: 'Each recipient gets a uniquely fingerprinted copy. Distribution is tracked automatically.',
            },
            {
              step: '3',
              title: 'Monitor Access',
              description: 'See who opens documents, when, and from what location. Get alerts on unusual access patterns.',
            },
            {
              step: '4',
              title: 'Verify Incoming Docs',
              description: 'Run integrity checks on incoming documents to detect tampering, metadata inconsistencies, and fraud signals.',
            },
            {
              step: '5',
              title: 'Detect & Respond',
              description: 'If a leak occurs, identify the source. If fraud is detected, flag it before it enters your workflow.',
            },
            {
              step: '6',
              title: 'Compliance Reporting',
              description: 'Generate audit reports showing complete document lifecycle for regulators and internal compliance teams.',
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
              q: 'How does tamper detection work for financial documents?',
              a: 'Veriflo analyzes PDF metadata, creation dates, software signatures, and structural patterns to identify signs of manipulation. It flags inconsistencies like mismatched dates, editing software traces, and suspicious modifications.',
            },
            {
              q: 'Can Veriflo integrate with our existing document management system?',
              a: 'Yes. Veriflo works alongside your existing DMS. Upload documents directly or connect via our API for automated fingerprinting and verification.',
            },
            {
              q: 'Does this meet regulatory compliance requirements?',
              a: 'Veriflo provides complete audit trails that support SOX, GDPR, and financial industry compliance requirements. Every document action is logged with timestamps and user attribution.',
            },
            {
              q: 'What types of financial documents can be protected?',
              a: 'Any document format including PDFs, Excel spreadsheets, Word documents, and images. Common use cases include statements, reports, contracts, and client communications.',
            },
            {
              q: 'How quickly can we identify a leaked document?',
              a: 'Instantly. Upload the leaked document to Veriflo and it identifies which fingerprinted copy was compromised, giving you the source within seconds.',
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
          <h2 className="text-3xl font-bold text-white">Secure your financial documents today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and protect your most sensitive financial documents in under 60 seconds.
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
