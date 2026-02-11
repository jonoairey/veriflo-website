import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  AlertCircle,
  Eye,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  Lock,
} from 'lucide-react';

export const metadata = {
  title: 'Technology & SaaS - Veriflo | Secure Document Trust',
  description: 'Protect product roadmaps, investor decks, pricing documents, and API documentation with invisible fingerprinting and leak detection.',
};

export default function TechnologyPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Roadmap Leaks',
      description:
        'Product roadmaps shared with investors, partners, or board members can reach competitors, eroding your first-mover advantage on key features.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Investor Deck Forwarding',
      description:
        'Pitch decks sent during fundraising get forwarded beyond intended recipients. Your financials, metrics, and strategy become widely known.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Pricing Exposure',
      description:
        'Enterprise pricing documents, rate cards, and discount structures leaked to competitors or published online undermine your sales team\'s negotiating power.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'API & Technical Doc Theft',
      description:
        'Technical documentation, architecture diagrams, and API specs contain proprietary implementation details that competitors can exploit.',
    },
  ];

  const solutions = [
    {
      title: 'Fingerprint Everything',
      description:
        'Every document—roadmaps, decks, pricing sheets—gets a unique invisible fingerprint tied to its recipient. Full accountability on every copy.',
    },
    {
      title: 'Investor Deck Protection',
      description:
        'Share pitch decks with VCs knowing exactly who has access. Track engagement to identify your most interested investors.',
    },
    {
      title: 'Verify Document Integrity',
      description:
        'Run integrity checks on incoming contracts, term sheets, and technical documents to detect tampering before signing or processing.',
    },
    {
      title: 'Instant Leak Detection',
      description:
        'When a document surfaces where it shouldn\'t, upload it to Veriflo and identify the exact recipient whose copy was leaked.',
    },
  ];

  const benefits = [
    'Protect product roadmaps from reaching competitors',
    'Track investor deck access and engagement in real-time',
    'Secure enterprise pricing from unauthorized exposure',
    'Verify incoming contracts and term sheets for tampering',
    'Maintain competitive advantage on unannounced features',
    'Build trust with investors through professional document security',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Protect Tech Company Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Secure product roadmaps, investor decks, pricing strategies, and technical documentation with invisible fingerprinting. Detect leaks and verify document integrity.
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
                  <Code className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Risks in Technology</h2>
          <p className="mt-4 text-xl text-gray-400">
            Tech companies face unique risks around proprietary documents and strategic information
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
            Purpose-built for tech companies protecting strategic documents
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Tech Teams</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">SaaS Pricing Protection</div>
                    <p className="text-sm text-gray-300">
                      A SaaS company's pricing sheet appeared on a competitor's sales deck. Veriflo traced it to a partner who had been shared an early version, enabling them to address the breach and renegotiate the partnership terms.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Investor Confidence</div>
                    <p className="text-sm text-gray-300">
                      Tech companies using Veriflo for investor materials report increased investor confidence, as document security signals operational maturity and strong governance.
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
          <h2 className="text-3xl font-bold text-white">Tech Document Protection Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Identify Sensitive Materials',
              description: 'Flag documents that need protection: roadmaps, pitch decks, pricing, technical specs, and partner agreements.',
            },
            {
              step: '2',
              title: 'Upload & Fingerprint',
              description: 'Upload documents to Veriflo. Each is fingerprinted and ready for secure distribution.',
            },
            {
              step: '3',
              title: 'Share with Recipients',
              description: 'Send uniquely fingerprinted copies to investors, partners, board members, or internal teams.',
            },
            {
              step: '4',
              title: 'Monitor Access',
              description: 'Track who opens your documents, engagement levels, and access patterns in real-time.',
            },
            {
              step: '5',
              title: 'Verify Incoming Documents',
              description: 'Run integrity checks on incoming term sheets, contracts, and vendor documents to detect any manipulation.',
            },
            {
              step: '6',
              title: 'Detect & Respond to Leaks',
              description: 'If your documents appear where they shouldn\'t, identify the source instantly and take appropriate action.',
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
              q: 'Can we protect API documentation shared with partners?',
              a: 'Yes. Upload your API docs as PDFs or documents, and each partner receives a uniquely fingerprinted copy. If documentation is shared beyond the partner, you\'ll know exactly who leaked it.',
            },
            {
              q: 'How does this help during fundraising?',
              a: 'Each VC firm gets a fingerprinted copy of your pitch deck. You can see who opened it, track engagement, and if your deck gets forwarded to someone you didn\'t send it to, identify the source.',
            },
            {
              q: 'Can we verify contracts from vendors or acquirers?',
              a: 'Absolutely. Upload any incoming document to run an integrity check. Veriflo analyzes metadata, dates, and structure to flag potential manipulation.',
            },
            {
              q: 'Does fingerprinting affect the document quality?',
              a: 'No. The fingerprint is completely invisible and doesn\'t affect how the document looks, prints, or functions. Recipients cannot detect it.',
            },
            {
              q: 'Can we use the API to automate fingerprinting?',
              a: 'Yes. Pro and Enterprise plans include API access for automated document fingerprinting and integrity checking as part of your existing workflows.',
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
          <h2 className="text-3xl font-bold text-white">Protect your tech company's documents today</h2>
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
