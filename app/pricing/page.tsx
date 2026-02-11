import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Shield, Users, Fingerprint, Zap } from 'lucide-react';
import { ContactForm } from '@/components/marketing/contact-form';

export const metadata = {
  title: 'Pricing - Veriflo | Custom Plans for Your Team',
  description: 'Get a custom plan tailored to your document security needs. Contact our team for pricing, a free pilot, and dedicated onboarding.',
};

export default function PricingPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Plans That Fit Your Needs
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Every business is different. We&apos;ll work with you to find the right plan — whether you&apos;re protecting 10 documents or 10,000.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Every Plan Includes</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Fingerprint className="h-6 w-6" />,
              title: 'Forensic Fingerprinting',
              description: 'Invisible, multi-layer fingerprints that survive screenshots and compression.',
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: 'Leak Detection',
              description: 'Upload a suspected leak and instantly trace it back to the source.',
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: 'Team Collaboration',
              description: 'Role-based access controls with comprehensive audit logging.',
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: 'Dedicated Support',
              description: 'Our team helps you get set up and running quickly.',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="hover:bg-slate-900/70 transition-colors">
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

      {/* Capabilities Table */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Full Capabilities</h2>
          <p className="mt-4 text-gray-400">Everything available across our platform</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Invisible document fingerprinting',
            'Secure sharing links with expiry',
            'Real-time access tracking',
            'Leak verification & source identification',
            'PDF tamper detection',
            'Public verification page for recipients',
            'Team seats & role-based access',
            'Comprehensive audit logging',
            'AES-256 encryption at rest',
            'Custom branding options',
            'API access for integration',
            'Dedicated account manager',
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 py-2">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white">Let&apos;s Talk</h2>
            <p className="mt-4 text-xl text-gray-400">
              Tell us about your team and we&apos;ll put together a plan that works for you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-300 mb-1">Free Pilot</h3>
                <p className="text-sm text-gray-400">
                  Try Veriflo with your own documents before committing. No credit card required.
                </p>
              </div>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <h3 className="text-sm font-semibold text-emerald-300 mb-1">Quick Setup</h3>
                <p className="text-sm text-gray-400">
                  Most teams are up and running within an hour. We handle onboarding.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start with a free pilot. No credit card required.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Try It Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/features" className="text-white hover:text-blue-100">
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
