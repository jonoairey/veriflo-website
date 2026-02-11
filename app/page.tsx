import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Zap, CheckCircle, ArrowRight, Fingerprint, LinkIcon, BarChart3, Users, Shield as ShieldCheck, Database, Send, ShieldCheck as ShieldVerify } from 'lucide-react';
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
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Share Confidential Documents Confidently
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Invisible fingerprinting meets secure sharing. Know exactly who has access to your sensitive documents — and who leaked them.
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
            <p className="mt-6 text-sm text-gray-400">
              Trusted by 100+ companies • No credit card required
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
            <div className="relative rounded-xl overflow-hidden border border-blue-500/20">
              <img src="/images/hero-dashboard.png" alt="Veriflo Dashboard - Secure document sharing platform" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* How It Works - Two Flows */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Two workflows, one platform — protect what goes out and verify what comes in
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Outgoing Flow */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Protect Outgoing</h3>
            </div>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Upload', description: 'Upload your confidential document. We handle PDF, images, and Office files.' },
                { step: '2', title: 'Share', description: 'Send fingerprinted copies to each recipient. Every copy is uniquely marked.' },
                { step: '3', title: 'Track & Verify', description: 'Monitor who views your documents. If a leak occurs, identify the source instantly.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-lg font-bold text-blue-400 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Incoming Flow */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <ShieldVerify className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Verify Incoming</h3>
            </div>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Upload to Verify', description: 'Drop any incoming document into the Integrity Check tool — contracts, invoices, statements.' },
                { step: '2', title: 'Forensic Analysis', description: 'Veriflo scans metadata, dates, structure, and content for signs of tampering in seconds.' },
                { step: '3', title: 'Integrity Score', description: 'Get a 0-100 score with risk level and detailed findings. Know if it\'s genuine before you act.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-lg font-bold text-emerald-400 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="ghost">
            <Link href="/how-it-works" className="text-white hover:text-blue-300">
              See Full Walkthrough <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid - 8 Cards */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to protect outgoing documents and verify incoming ones
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Fingerprint className="h-6 w-6" />,
              title: 'Invisible Fingerprinting',
              description:
                'Multi-layer forensic fingerprints survive screenshots, compression, and cropping.',
              color: 'blue',
            },
            {
              icon: <LinkIcon className="h-6 w-6" />,
              title: 'Secure Sharing Links',
              description:
                'Time-limited, revocable links with access tracking and view counts.',
              color: 'blue',
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: 'Leak Verification',
              description:
                'Upload a suspected leak and instantly identify which recipient\'s copy it came from.',
              color: 'blue',
            },
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: 'Real-Time Tracking',
              description:
                'See exactly who opened your documents, when, from where, and on what device.',
              color: 'blue',
            },
            {
              icon: <ShieldVerify className="h-6 w-6" />,
              title: 'Integrity Check',
              description:
                'Upload any incoming document and get an instant integrity score with detailed findings.',
              color: 'emerald',
            },
            {
              icon: <Eye className="h-6 w-6" />,
              title: 'Tamper Detection',
              description:
                'Detect altered dates, metadata inconsistencies, and signs of document manipulation.',
              color: 'emerald',
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: 'Team Collaboration',
              description:
                'Share documents across your organization with role-based access controls.',
              color: 'blue',
            },
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              title: 'Enterprise Ready',
              description:
                'SOC 2 ready, AES-256 encryption, and comprehensive audit logging.',
              color: 'blue',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${feature.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Two-Way Trust Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Protect Outgoing. Verify Incoming.</h2>
          <p className="mt-4 text-xl text-gray-400">
            The only platform that secures documents in both directions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
            <CardContent className="pt-8 pb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 mb-6">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Send with Confidence</h3>
              <p className="text-gray-400 mb-6">
                Every outgoing document carries an invisible forensic fingerprint. Track access, monitor engagement, and instantly identify the source of any leak.
              </p>
              <ul className="space-y-3">
                {['Invisible fingerprinting', 'Access tracking & analytics', 'Leak source identification'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
            <CardContent className="pt-8 pb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 mb-6">
                <ShieldVerify className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Receive with Trust</h3>
              <p className="text-gray-400 mb-6">
                Verify incoming documents for signs of tampering. Detect altered dates, metadata inconsistencies, and manipulation before making critical decisions.
              </p>
              <ul className="space-y-3">
                {['Tamper detection & integrity scoring', 'PDF forensic analysis', 'Metadata verification'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="primary">
            <a href="https://app.useveriflo.com/signup">Get Started Free</a>
          </Button>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Built for Your Industry</h2>
          <p className="mt-4 text-xl text-gray-400">
            Trusted by companies across multiple sectors
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {[
            { title: 'Fundraising & Pitch Decks', href: '/use-cases/fundraising' },
            { title: 'Legal & Litigation', href: '/use-cases/legal' },
            { title: 'M&A Deal Rooms', href: '/use-cases/ma-deals' },
            { title: 'Board Materials', href: '/use-cases/board-materials' },
            { title: 'Invoice Verification', href: '/use-cases/invoice-verification' },
            { title: 'Financial Services', href: '/use-cases/financial-services' },
            { title: 'Healthcare & Life Sciences', href: '/use-cases/healthcare' },
            { title: 'Media & Entertainment', href: '/use-cases/media-entertainment' },
            { title: 'Technology & SaaS', href: '/use-cases/technology' },
          ].map((useCase, idx) => (
            <Link key={idx} href={useCase.href}>
              <Card className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors h-full cursor-pointer">
                <CardContent className="pt-8">
                  <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                  <div className="mt-4 text-blue-400 font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Customer Proof Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400 mb-4">
            Trusted by teams worldwide
          </p>
          <h2 className="text-4xl font-bold text-white">
            Companies Protecting Their Most Sensitive Documents
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote: 'Veriflo gave us complete visibility into who accessed our pitch deck during our Series B. We identified a leak within hours and resolved it before it became a problem.',
              author: 'Head of Finance',
              company: 'Series B SaaS Company',
            },
            {
              quote: 'The integrity check feature is a game-changer. We now verify every incoming contract and financial document before processing, catching discrepancies we would have missed.',
              author: 'General Counsel',
              company: 'Mid-Market Financial Services',
            },
            {
              quote: 'We distribute board materials to 12 directors quarterly. Veriflo fingerprints each copy so we always know exactly who has access and can revoke it instantly.',
              author: 'Corporate Secretary',
              company: 'Public Company',
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
            <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-400">
              Tell us about your document security needs and we&apos;ll find the right solution for your team.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: 'Custom Plans',
                  description: 'We tailor pricing and features to your specific requirements — from startups to enterprises.',
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Dedicated Onboarding',
                  description: 'Our team will help you set up, integrate, and get your first documents protected.',
                },
                {
                  icon: <Fingerprint className="h-6 w-6" />,
                  title: 'Free Pilot',
                  description: 'Try Veriflo with your own documents before committing. No credit card required.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
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
