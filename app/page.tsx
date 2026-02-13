import React from 'react';
import Link from 'next/link';
import { Lock, Eye, CheckCircle, ArrowRight, BarChart3, Users, Database, Zap, FileCheck, AlertTriangle, ShieldCheck, Send, Shield, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/marketing/contact-form';
import { StatsCounter } from '@/components/marketing/stats-counter';

export default function HomePage() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Document Trust, Both Sides
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify documents you receive for fraud. Prove documents you send are authentic. One platform for complete document trust.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" variant="primary">
                <a href="https://app.useveriflo.com/signup">Start Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/how-it-works" className="text-white hover:text-emerald-300">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              No credit card required • Verify your first document free
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
            <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
              <img src="/images/hero-dashboard.png" alt="Veriflo - Document verification and integrity scoring platform" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Two Products Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400 mb-4">
            Two Products, One Platform
          </p>
          <h2 className="text-4xl font-bold text-white">Complete Document Trust</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you&apos;re receiving documents or sending them, Veriflo gives you the tools to verify authenticity and prove integrity.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Veriflo Check Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-slate-700 bg-slate-900/70 rounded-2xl p-8 hover:border-emerald-500/40 transition-colors h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Veriflo Check</h3>
              </div>
              <p className="text-sm font-medium text-emerald-400 mb-4">For document receivers</p>
              <p className="text-gray-300 mb-6 flex-1">
                Upload any document you&apos;ve received — contracts, invoices, pay stubs, financial statements — and get an instant forensic integrity score. Catch tampering, AI-generated content, and manipulation before you act on it.
              </p>
              <div className="space-y-3 mb-8">
                {['Forensic integrity scoring (0-100)', 'AI-content detection', 'Metadata analysis & tamper detection', 'Template matching for known formats'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="primary" className="w-full">
                <Link href="/products/check">
                  Learn About Check <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Veriflo Protect Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-slate-700 bg-slate-900/70 rounded-2xl p-8 hover:border-blue-500/40 transition-colors h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Veriflo Protect</h3>
              </div>
              <p className="text-sm font-medium text-blue-400 mb-4">For document senders</p>
              <p className="text-gray-300 mb-6 flex-1">
                Verify your document, then share a certified proof link with the recipient. They see your verification report and know the document is authentic — building trust before they even open it.
              </p>
              <div className="space-y-3 mb-8">
                {['Certified verification links', 'Shareable proof of authenticity', 'Expiry & access controls', 'Branded trust experience'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="secondary" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                <Link href="/products/protect">
                  Learn About Protect <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Verify by Email Callout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-slate-900/60">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/20">
              <Mail className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Verify From Your Inbox</h3>
              <p className="mt-2 text-gray-300">
                Forward any document to <span className="font-mono text-emerald-400">check@useveriflo.com</span> and get a verification report back in minutes. No login required — works with any email client.
              </p>
            </div>
            <Button asChild variant="primary" size="lg" className="shrink-0">
              <a href="mailto:check@useveriflo.com">
                Try Email Verification <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* How It Works - Verification Flow */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Verify document authenticity and integrity in three simple steps
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              step: '1',
              title: 'Upload Document',
              description: 'Drop any incoming document — contracts, invoices, pay stubs, financial statements. We accept PDF, images, and Office files.',
              icon: <FileCheck className="h-6 w-6" />
            },
            {
              step: '2',
              title: 'Forensic Analysis',
              description: 'Veriflo scans metadata, creation dates, file structure, font inconsistencies, and content markers for signs of tampering in seconds.',
              icon: <BarChart3 className="h-6 w-6" />
            },
            {
              step: '3',
              title: 'Integrity Score',
              description: 'Get a 0-100 authenticity score with risk level and detailed findings. Know if the document is genuine before you sign or act on it.',
              icon: <CheckCircle className="h-6 w-6" />
            },
          ].map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/30 text-lg font-bold text-emerald-400">
                    {step.step}
                  </span>
                  <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="ghost">
            <Link href="/how-it-works" className="text-white hover:text-emerald-300">
              See Full Walkthrough <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid - 6 Verification Cards */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Verification Features</h2>
          <p className="mt-4 text-xl text-gray-400">
            Enterprise-grade document forensics to catch tampering before it costs you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: 'Integrity Scoring',
              description:
                'Get a 0-100 authenticity score with risk categorization. Know exactly which aspects of the document passed or failed verification.',
            },
            {
              icon: <Database className="h-6 w-6" />,
              title: 'Metadata Forensics',
              description:
                'Analyze file creation dates, modification history, document properties, and embedded markers for inconsistencies.',
            },
            {
              icon: <AlertTriangle className="h-6 w-6" />,
              title: 'Tamper Detection',
              description:
                'Identify altered dates, font inconsistencies, structural anomalies, and signs of copy-paste manipulation.',
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: 'AI-Content Detection',
              description:
                'Detect AI-generated text and synthetic images using 8-signal analysis including Error Level Analysis and copy-move detection. Flags fraudulent content automatically.',
            },
            {
              icon: <Eye className="h-6 w-6" />,
              title: 'Image Analysis',
              description:
                'Verify embedded images, signatures, and visual elements for authenticity and digital manipulation.',
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: 'Enterprise Security',
              description:
                'SOC 2 ready, AES-256 encryption, audit logging, and role-based access controls for your organization.',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Built for Your Industry</h2>
          <p className="mt-4 text-xl text-gray-400">
            Verification is critical across every sector. Choose your use case.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Financial Services',
              description: 'Verify loan documents, wire instructions, account statements, and financial contracts before processing.',
              icon: <BarChart3 className="h-6 w-6" />,
            },
            {
              title: 'Insurance',
              description: 'Validate claims, policy documents, medical records, and proof of loss for authenticity before settlement.',
              icon: <CheckCircle className="h-6 w-6" />,
            },
            {
              title: 'Property & Rental',
              description: 'Verify leases, title documents, inspections, and proof of funds from sellers and tenants.',
              icon: <Lock className="h-6 w-6" />,
            },
            {
              title: 'Legal',
              description: 'Authenticate contracts, agreements, signatures, and evidence documents during litigation and negotiation.',
              icon: <Eye className="h-6 w-6" />,
            },
            {
              title: 'HR & Recruitment',
              description: 'Verify employment histories, educational credentials, background checks, and reference documents.',
              icon: <Users className="h-6 w-6" />,
            },
            {
              title: 'Healthcare',
              description: 'Validate medical records, prescriptions, insurance forms, and patient documentation for compliance.',
              icon: <AlertTriangle className="h-6 w-6" />,
            },
          ].map((item, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="primary">
            <a href="https://app.useveriflo.com/signup">Verify Your First Document Free</a>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400 mb-4">
            Trusted by teams worldwide
          </p>
          <h2 className="text-4xl font-bold text-white">
            Why Companies Choose Veriflo for Document Verification
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote: 'We receive dozens of financial documents daily. Veriflo\'s integrity scores help us quickly identify which contracts warrant deeper review before we sign — saving us from potential fraud.',
              author: 'Finance Director',
              company: 'Mid-Market Financial Services',
            },
            {
              quote: 'Loan applications and supporting documents are constantly faked. Veriflo detects the tampering we\'d miss in a manual review, protecting us from bad loans and compliance violations.',
              author: 'Chief Compliance Officer',
              company: 'Regional Bank',
            },
            {
              quote: 'Document verification is now part of our onboarding process. The integrity scoring and detailed forensic findings give us confidence we\'re hiring who they claim to be.',
              author: 'VP of Talent',
              company: 'Fortune 500 Tech Company',
            },
          ].map((testimonial, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8 pb-8">
                <p className="text-gray-300 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white">Ready to Verify Your Documents?</h2>
            <p className="mt-4 text-xl text-gray-400">
              Tell us about your document verification needs and we&apos;ll help you build trust in every document you receive.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: <CheckCircle className="h-6 w-6" />,
                  title: 'Custom Plans',
                  description: 'We tailor pricing and verification workflows to your specific requirements — from startups to enterprises.',
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Dedicated Onboarding',
                  description: 'Our team will help you set up, integrate, and verify your first documents with confidence.',
                },
                {
                  icon: <Eye className="h-6 w-6" />,
                  title: 'Free Verification',
                  description: 'Verify your first document free to see exactly how Veriflo catches tampering. No credit card required.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
