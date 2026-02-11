import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  AlertTriangle,
  Shield,
  CheckCircle,
  ArrowRight,
  Fingerprint,
  Eye,
  Lock,
  DollarSign,
  Building2,
} from 'lucide-react';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export const metadata = {
  title: 'Invoice Verification - Veriflo | Stop Invoice Fraud',
  description:
    'Protect your business from invoice fraud with Veriflo. Recipients can instantly verify that invoices are genuine and bank details haven\'t been tampered with.',
};

export default function InvoiceVerificationPage() {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Invoice Fraud is Exploding',
      description:
        'Invoice fraud costs businesses over $26 billion every year. Criminals intercept invoices, change bank details, and redirect payments to their own accounts.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Tampered PDFs Look Identical',
      description:
        'Modern PDF editing tools make it trivially easy to alter bank details, amounts, and payment instructions. Tampered invoices are visually indistinguishable from the original.',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Payments Can\'t Be Reversed',
      description:
        'Once a wire transfer lands in a fraudster\'s account, the money is gone. Most businesses discover the fraud weeks later when the real vendor chases payment.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'No Way to Verify Authenticity',
      description:
        'Email alone gives recipients no way to confirm an invoice is genuine. "Can you confirm your bank details?" calls are exactly what fraudsters anticipate.',
    },
  ];

  const solutions = [
    {
      title: 'Forensic Fingerprinting',
      description:
        'Every invoice you send through Veriflo gets an invisible forensic fingerprint embedded in the PDF metadata, pixels, and structure. Any modification breaks the fingerprint.',
    },
    {
      title: 'Instant Verification',
      description:
        'Recipients upload the invoice to your public verification page and get an immediate result: genuine and untampered, or flagged as modified.',
    },
    {
      title: 'Tamper Detection',
      description:
        'Our multi-layer verification checks PDF metadata checksums, structural integrity, and pixel-level fingerprints. If anything has been altered, we flag it.',
    },
    {
      title: 'Zero-Friction for Recipients',
      description:
        'No account needed. No login. Recipients simply drag and drop the invoice onto the verification page and get a result in seconds.',
    },
  ];

  const benefits = [
    'Eliminate invoice fraud risk for your business and your clients',
    'Give customers confidence that payment details are genuine',
    'Detect tampered invoices before payments are made',
    'No software or accounts required for recipients to verify',
    'Build trust with clients through provable document integrity',
    'Complete audit trail of every invoice sent and verified',
  ];

  const whoItsFor = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Accounting Firms',
      description: 'Send client invoices and tax documents with built-in verification.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'B2B Companies',
      description: 'Protect high-value invoices sent to enterprise clients.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Law Firms',
      description: 'Ensure legal fee invoices and trust account details are tamper-proof.',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Freelancers & Contractors',
      description: 'Protect your payment details when invoicing new clients.',
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm text-red-400 mb-6">
              <AlertTriangle className="h-4 w-4" />
              $26B+ lost to invoice fraud annually
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Stop Invoice Fraud Before It Starts
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Fingerprint every invoice you send. Recipients verify authenticity instantly — no account needed. If bank details have been tampered with, they&apos;ll know before they pay.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button asChild size="lg" variant="primary">
                <a href={`${PLATFORM_URL}/signup`}>Get Started Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={`${PLATFORM_URL}/verify`} className="text-white hover:text-emerald-300">
                  Try Verification Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-emerald-300">Verified — Authentic</div>
                      <p className="text-xs text-gray-400 mt-1">This invoice was sent by Acme Corp and has not been modified. Bank details are genuine.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-red-300">Warning — Tampered</div>
                      <p className="text-xs text-gray-400 mt-1">This invoice has been modified since it was sent. Do NOT trust the bank details. Contact the sender directly.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Invoice Fraud Problem</h2>
          <p className="mt-4 text-xl text-gray-400">
            Invoice interception is one of the fastest-growing financial crimes
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

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Invoice Verification Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three steps to fraud-proof invoicing
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: '1',
              icon: <Fingerprint className="h-8 w-8 text-blue-400" />,
              title: 'Send Through Veriflo',
              description:
                'Upload your invoice and distribute it through Veriflo. Each copy gets a unique forensic fingerprint embedded invisibly in the PDF.',
            },
            {
              step: '2',
              icon: <FileText className="h-8 w-8 text-blue-400" />,
              title: 'Client Receives Invoice',
              description:
                'Your client receives the invoice as normal. It looks and functions exactly like any other PDF invoice — the fingerprint is invisible.',
            },
            {
              step: '3',
              icon: <Shield className="h-8 w-8 text-emerald-400" />,
              title: 'Verify Before Paying',
              description:
                'Before paying, the client uploads the invoice to your verification page. They get instant confirmation that it\'s genuine and unmodified.',
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Veriflo Solves It */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Multi-Layer Protection</h2>
          <p className="mt-4 text-xl text-gray-400">
            Multiple independent verification checks catch any tampering
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Businesses Choose Veriflo</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">The Cost of One Fraudulent Invoice</div>
                    <p className="text-sm text-gray-300">
                      The average invoice fraud costs businesses $130,000 per incident. A single intercepted wire transfer can devastate a small business. Prevention costs a fraction of the potential loss.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Build Client Trust</div>
                    <p className="text-sm text-gray-300">
                      Clients appreciate vendors who take payment security seriously. Adding invoice verification to your workflow demonstrates professionalism and builds lasting trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Who It&apos;s For</h2>
          <p className="mt-4 text-xl text-gray-400">
            Any business that sends invoices can benefit from Veriflo
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whoItsFor.map((item, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
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
              q: 'Does the recipient need a Veriflo account to verify an invoice?',
              a: 'No. Verification is completely free and requires no account. Recipients simply upload the invoice to the public verification page and get an instant result.',
            },
            {
              q: 'How does it detect tampered invoices?',
              a: 'Veriflo embeds multi-layer forensic fingerprints in the PDF metadata, structure, and pixel data. Any modification — even changing a single character — breaks these checksums and gets flagged as tampered.',
            },
            {
              q: 'Can the fingerprint be seen on the invoice?',
              a: 'No. The fingerprinting is completely invisible. Your invoices look and function exactly the same as before. Recipients won\'t notice any difference.',
            },
            {
              q: 'What if someone intercepts and modifies the invoice?',
              a: 'That\'s exactly what this prevents. If a man-in-the-middle modifies bank details, the verification check will fail and show a tamper warning, telling the recipient not to trust the payment details.',
            },
            {
              q: 'How much does it cost?',
              a: 'You can start for free with up to 5 documents and 10 distributions per month. Pro plans start at $49/mo for businesses that send more invoices.',
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
          <h2 className="text-3xl font-bold text-white">Protect your invoices today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start sending fraud-proof invoices in under 60 seconds. Free to get started.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href={`${PLATFORM_URL}/signup`}>Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={`${PLATFORM_URL}/verify`} className="text-white hover:text-blue-100">
                Try Verification <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
