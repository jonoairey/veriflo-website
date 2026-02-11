import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Film,
  AlertCircle,
  Eye,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Lock,
} from 'lucide-react';

export const metadata = {
  title: 'Media & Entertainment - Veriflo | Secure Document Trust',
  description:
    'Protect scripts, screening copies, contracts, and creative assets with invisible fingerprinting and leak detection. Built for studios, agencies, and production companies.',
};

export default function MediaEntertainmentPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Script Leaks',
      description:
        'Leaked scripts and plot details can destroy marketing campaigns worth millions. A single leak can spoil a franchise and damage audience anticipation.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Screening Copy Distribution',
      description:
        'Early screening copies sent to critics, guild members, or partners get shared beyond their intended audience, risking piracy and spoilers.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Talent Contract Breaches',
      description:
        'Contract terms, deal memos, and compensation details are highly sensitive. Leaks damage negotiations and relationships with talent.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Unreleased Content Theft',
      description:
        'Music tracks, unreleased footage, and creative treatments shared for review can end up on torrent sites or leaked to media outlets.',
    },
  ];

  const solutions = [
    {
      title: 'Invisible Watermarking',
      description:
        'Every script, screener, and document shared carries an invisible fingerprint. If it leaks, you know exactly who shared it.',
    },
    {
      title: 'Screener Protection',
      description:
        'Distribute screening copies to critics and guild members with unique fingerprints. Track access and identify the source of any piracy.',
    },
    {
      title: 'Access Control',
      description:
        'Set expiration dates, restrict downloads, and revoke access to sensitive materials at any time. Full control over your content.',
    },
    {
      title: 'Leak Forensics',
      description:
        'When content appears where it shouldn\'t, upload it to Veriflo. Our forensic analysis identifies the exact fingerprinted copy that was leaked.',
    },
  ];

  const benefits = [
    'Protect scripts and plot details from spoiler leaks',
    'Track screening copy distribution and identify piracy sources',
    'Secure talent contracts and deal terms from unauthorized sharing',
    'Control access to unreleased music, footage, and creative assets',
    'Build accountability in your distribution chain',
    'Reduce piracy losses with forensic leak identification',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Protect Creative Assets
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Secure scripts, screening copies, talent contracts, and unreleased content with invisible fingerprinting. Know exactly who leaks your most valuable creative assets.
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
                  <Film className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Risks in Media & Entertainment</h2>
          <p className="mt-4 text-xl text-gray-400">
            Creative assets and intellectual property require absolute protection
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
            Purpose-built for creative asset protection and leak detection
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Media & Entertainment</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Real Example: Screener Leak</div>
                    <p className="text-sm text-gray-300">
                      A major production company sent screener copies to 200 guild members. When a copy appeared online, Veriflo identified the source within minutes, enabling swift legal action.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Proven Deterrent</div>
                    <p className="text-sm text-gray-300">
                      Studios using document fingerprinting report significantly reduced leak incidents, as the knowledge that copies are tracked creates a powerful deterrent.
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
          <h2 className="text-3xl font-bold text-white">Content Protection Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Upload Creative Assets',
              description: 'Upload scripts, screeners, contracts, or any sensitive creative material to Veriflo.',
            },
            {
              step: '2',
              title: 'Generate Fingerprinted Copies',
              description: 'Create uniquely fingerprinted versions for each recipient—critics, guild members, partners, or internal teams.',
            },
            {
              step: '3',
              title: 'Distribute Securely',
              description: 'Send personalized secure links or download protected copies. Each is tracked individually.',
            },
            {
              step: '4',
              title: 'Track Engagement',
              description: 'Monitor who opens your materials, when, and how they interact. Identify your most engaged reviewers.',
            },
            {
              step: '5',
              title: 'Detect Leaks',
              description: 'If content appears online or reaches unauthorized parties, upload it to identify the source copy instantly.',
            },
            {
              step: '6',
              title: 'Take Action',
              description: 'Armed with forensic evidence, take appropriate legal or contractual action against the source of the leak.',
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
              q: 'Can the fingerprint survive screenshots or photos of a screen?',
              a: 'Yes. Veriflo\'s fingerprinting is designed to be resilient. Even screenshots, photos, or reformatted copies retain enough signal to identify the source.',
            },
            {
              q: 'How do we distribute screeners to guild members?',
              a: 'Upload your screener and add recipients by email. Each receives a unique, fingerprinted copy through a secure link. You control access and expiration.',
            },
            {
              q: 'Does this work for music and audio content?',
              a: 'Veriflo currently supports document and image formats including PDFs, Word documents, and image files. Audio fingerprinting is not yet available.',
            },
            {
              q: 'Can we track who reads specific pages of a script?',
              a: 'Veriflo tracks document-level access including when it was opened, from where, and for how long. Page-level tracking is available for web-viewed documents.',
            },
            {
              q: 'What happens when a leak is detected?',
              a: 'Veriflo provides forensic evidence linking the leaked content to a specific fingerprinted copy and recipient. This can be used for internal action, contract enforcement, or legal proceedings.',
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
          <h2 className="text-3xl font-bold text-white">Protect your creative assets today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and secure your first document in under 60 seconds.
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
