import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  Lock,
  Eye,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
} from 'lucide-react';

export const metadata = {
  title: 'Fundraising & Pitch Decks - Veriflo | Secure Document Sharing',
  description: 'Protect your pitch decks, financial forecasts, and investor materials with Veriflo\'s secure document sharing and leak detection.',
};

export default function FundraisingPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Pitch Deck Leaks',
      description:
        'Sensitive pitch decks and valuations get shared with multiple investors. One leak exposes your strategy to competitors.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Unknown Access',
      description:
        'You send documents to investors but don\'t know who actually viewed them, when, or how long they spent reviewing.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Uncontrolled Sharing',
      description:
        'Investors forward your materials to partners, advisors, or even competitors. You have no visibility or control.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Competitive Intelligence',
      description:
        'Financial forecasts, market analysis, and growth plans are valuable intelligence that could damage your negotiating position.',
    },
  ];

  const solutions = [
    {
      title: 'Watermark Every Copy',
      description:
        'Every version of your pitch deck sent to investors has an invisible fingerprint. If leaked, you instantly know the source.',
    },
    {
      title: 'Track Access & Engagement',
      description:
        'See exactly who opened your pitch deck, when, and for how long. Identify seriously interested investors vs. casual browsers.',
    },
    {
      title: 'Control Distribution',
      description:
        'Set expiration dates on your materials. Revoke access instantly if negotiations fall through or an investor passes.',
    },
    {
      title: 'Verify Leaks',
      description:
        'If your pitch deck appears online or reaches competitors, upload it to Veriflo and identify which investor\'s copy was leaked.',
    },
    {
      title: 'Verify Incoming Documents',
      description:
        'Run integrity checks on term sheets, investor agreements, and other incoming documents to detect tampering before you sign.',
    },
  ];

  const benefits = [
    'Protect confidential financial data and growth projections',
    'Identify which investors are most engaged with your materials',
    'Control who can access your documents and when',
    'Detect leaks instantly and trace the source',
    'Maintain negotiating power by protecting strategy',
    'Meet investor data security requirements',
    'Verify incoming term sheets and agreements for signs of manipulation',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Protect Your Pitch Deck
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Share pitch decks, financial forecasts, and investor materials with confidence. Know who has access and who leaked your information.
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
                  <TrendingUp className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">The Risks of Fundraising</h2>
          <p className="mt-4 text-xl text-gray-400">
            Pitch decks contain your most sensitive information
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
            Complete protection and visibility for your fundraising materials
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Fundraising</h2>
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
                      A Series A company shared their pitch deck with 15 potential investors. One investor leaked it to a competitor. Using Veriflo, they instantly identified which investor leaked it and took legal action.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Competitive Edge</div>
                    <p className="text-sm text-gray-300">
                      Investors appreciate that you take data security seriously. Veriflo demonstrates a mature security posture that builds trust.
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
          <h2 className="text-3xl font-bold text-white">A Typical Fundraising Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Prepare Your Materials',
              description: 'Create your pitch deck, financial model, and supporting materials.',
            },
            {
              step: '2',
              title: 'Upload to Veriflo',
              description: 'Upload your pitch deck. It\'s encrypted and ready to share.',
            },
            {
              step: '3',
              title: 'Add Investors',
              description: 'Enter the email addresses of investors you want to share with. Each gets a unique fingerprinted copy.',
            },
            {
              step: '4',
              title: 'Send Secure Links',
              description: 'Veriflo generates a unique secure link for each investor. They receive an email with their personalized link.',
            },
            {
              step: '5',
              title: 'Monitor Engagement',
              description: 'Watch in real-time as investors open your deck. See who\'s most engaged and for how long.',
            },
            {
              step: '6',
              title: 'Control Access',
              description: 'If negotiations don\'t pan out, revoke access instantly. If a leak occurs, identify the source immediately.',
            },
            {
              step: '7',
              title: 'Verify Incoming Documents',
              description: 'When you receive term sheets or investor agreements, run an integrity check to verify they haven\'t been tampered with before signing.',
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
              q: 'Can investors tell their copy is fingerprinted?',
              a: 'No. The fingerprinting is invisible and imperceptible. The document looks and functions exactly the same.',
            },
            {
              q: 'What if an investor wants to share with their team?',
              a: 'You control this. You can set documents as view-only, disable downloads, or allow sharing depending on your preference.',
            },
            {
              q: 'Can I see which investors opened my deck?',
              a: 'Yes. You see exactly who opened it, when, what device they used, and how long they spent reviewing it.',
            },
            {
              q: 'What if my pitch deck gets screenshotted?',
              a: 'The fingerprint survives screenshots. If the deck is leaked in any format, we can identify the source investor.',
            },
            {
              q: 'Is there a cost for using Veriflo during fundraising?',
              a: 'You can start for free with up to 5 documents and 10 distributions/month. That\'s plenty for most seed and Series A rounds.',
            },
            {
              q: 'Can I verify documents I receive from investors?',
              a: 'Yes. Veriflo\'s Integrity Check lets you upload any incoming document — term sheets, investor agreements, side letters — and get an instant integrity score that flags any signs of tampering or manipulation.',
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
          <h2 className="text-3xl font-bold text-white">Protect your pitch deck today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and upload your first document in under 60 seconds.
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
