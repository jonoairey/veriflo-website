import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, FileCheck, Shield, Zap, Lock } from 'lucide-react';
import { ContactForm } from '@/components/marketing/contact-form';

export const metadata = {
  title: 'Pricing - Veriflo | Transparent Document Verification',
  description: 'Simple, transparent pricing for document verification. Free plan with 10 checks/month. Pro and Enterprise plans with advanced features.',
};

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '10 document checks/month',
        '1 team seat',
        'Basic integrity scoring',
        'Metadata forensics',
        'Email support',
      ],
      cta: 'Get Started',
      ctaUrl: 'https://app.useveriflo.com/signup',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'For teams and organizations',
      features: [
        'Everything in Free',
        '100 document checks/month',
        '5 team seats',
        'AI-content detection',
        'Template matching (15+ templates)',
        'PDF report export',
        'REST API access',
        'Priority support',
      ],
      cta: 'Start Pro Trial',
      ctaUrl: 'https://app.useveriflo.com/signup?plan=pro',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large-scale verification',
      features: [
        'Everything in Pro',
        'Unlimited document checks',
        '25 team seats',
        'Custom templates',
        'Dedicated account manager',
        'SSO/SAML authentication',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      ctaUrl: '#contact',
      highlighted: false,
    },
  ];

  const coreFeatures = [
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Integrity Scoring',
      description: 'Document integrity score from 0-100 with risk classification (Clean, Low, Medium, High, Critical).',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Metadata Forensics',
      description: 'Extract and analyze creation dates, software traces, and incremental save history.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Tamper Detection',
      description: 'Identify metadata mismatches, stripped data, and suspicious anomalies.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Branded PDF Reports',
      description: 'Generate downloadable verification reports with your branding.',
    },
  ];

  const capabilities = [
    'Document integrity scoring 0-100',
    'Risk level classification (Clean/Low/Medium/High/Critical)',
    'Metadata forensics and extraction',
    'Creator/producer mismatch detection',
    'AI-generated text detection (7-signal analysis)',
    'Synthetic image detection (6-signal forensics)',
    'Template matching (15+ templates)',
    'REST API access (POST /api/v1/verify)',
    'Branded PDF report export',
    'Team seats & role-based access',
    'Comprehensive audit logging',
    'AES-256 encryption at rest',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white">
            Transparent Pricing, No Surprises
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Simple, straightforward plans built for document verification at any scale. Pay only for what you use.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <Card
              key={idx}
              className={`relative flex flex-col transition-all ${
                tier.highlighted
                  ? 'border-emerald-500 bg-slate-900/50 shadow-xl shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-900/50 hover:bg-slate-900/70'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="pt-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="mt-2 text-slate-400 text-sm">{tier.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  size="lg"
                  variant={tier.highlighted ? 'primary' : 'ghost'}
                  className={`w-full mt-8 ${
                    tier.highlighted
                      ? 'bg-emerald-500 hover:bg-emerald-600'
                      : 'text-slate-300 hover:text-white border-slate-700'
                  }`}
                >
                  <Link href={tier.ctaUrl}>{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Every Plan Includes</h2>
          <p className="mt-4 text-slate-400">Core verification capabilities across all pricing tiers</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Capabilities */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Full Capabilities</h2>
          <p className="mt-4 text-slate-400">Complete verification suite available across all plans</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((capability, idx) => (
            <div key={idx} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-slate-900/30 border border-slate-800">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-300">{capability}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white">Let&apos;s Talk</h2>
            <p className="mt-4 text-xl text-slate-300">
              Tell us about your verification needs and we&apos;ll recommend the perfect plan for your team.
            </p>

            <div className="mt-10 space-y-6">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <h3 className="text-sm font-semibold text-emerald-300 mb-1">Free to Start</h3>
                <p className="text-sm text-slate-400">
                  No credit card required. Get 10 verification checks on the Free plan immediately.
                </p>
              </div>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <h3 className="text-sm font-semibold text-emerald-300 mb-1">Scale as You Grow</h3>
                <p className="text-sm text-slate-400">
                  Upgrade anytime. Flexible plans designed to grow with your organization.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 border border-emerald-500/30 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to verify your documents?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Start with the Free plan and upgrade when you need more.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary" className="bg-emerald-500 hover:bg-emerald-600">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-slate-300 hover:text-white border-slate-700">
              <Link href="/features">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
