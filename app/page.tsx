import React from 'react';
import Link from 'next/link';
import { Lock, Eye, CheckCircle, ArrowRight, BarChart3, Users, Database, Zap, FileCheck, AlertTriangle } from 'lucide-react';
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
              Trust Every Document You Receive
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Verify contracts, invoices, pay stubs, and financial statements for tampering. Get forensic integrity scoring in seconds — not hours.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" variant="primary">
                <a href="https://app.useveriflo.com/signup">Verify Your First Document Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/how-it-works" className="text-white hover:text-emerald-300">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Trusted by 100+ companies • No credit card required
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
                'Detect AI-generated text and synthetic images using 7-signal heuristic analysis. Flags fraudulent content automatically.',
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
