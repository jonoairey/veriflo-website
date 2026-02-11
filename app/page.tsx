import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Zap, CheckCircle, ArrowRight, Fingerprint, LinkIcon, BarChart3, Users, Shield as ShieldCheck, Database, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/marketing/contact-form';

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
            <div className="relative bg-gradient-to-br from-blue-900/30 to-emerald-900/30 border border-blue-500/20 rounded-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
                <Fingerprint className="h-24 w-24 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three simple steps to secure document sharing
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Upload',
              description: 'Upload your confidential document. We handle PDF, images, and Office files.',
            },
            {
              step: '2',
              title: 'Share',
              description: 'Send fingerprinted copies to each recipient. Every copy is uniquely marked.',
            },
            {
              step: '3',
              title: 'Track & Verify',
              description: 'Monitor who views your documents. If a leak occurs, identify the source instantly.',
            },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-400 mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid - 6 Cards */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to protect and track confidential documents
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Fingerprint className="h-6 w-6" />,
              title: 'Invisible Fingerprinting',
              description:
                'Multi-layer forensic fingerprints survive screenshots, compression, and cropping.',
            },
            {
              icon: <LinkIcon className="h-6 w-6" />,
              title: 'Secure Sharing Links',
              description:
                'Time-limited, revocable links with access tracking and view counts.',
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: 'Leak Verification',
              description:
                'Upload a suspected leak and instantly identify which recipient\'s copy it came from.',
            },
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: 'Real-Time Tracking',
              description:
                'See exactly who opened your documents, when, from where, and on what device.',
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: 'Team Collaboration',
              description:
                'Share documents across your organization with role-based access controls.',
            },
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              title: 'Enterprise Ready',
              description:
                'SOC 2 ready, AES-256 encryption, and comprehensive audit logging.',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: 'Fundraising & Pitch Decks',
              href: '/use-cases/fundraising',
            },
            {
              title: 'Legal & Litigation',
              href: '/use-cases/legal',
            },
            {
              title: 'M&A Deal Rooms',
              href: '/use-cases/ma-deals',
            },
            {
              title: 'Board Materials',
              href: '/use-cases/board-materials',
            },
            {
              title: 'Invoice Verification',
              href: '/use-cases/invoice-verification',
            },
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
