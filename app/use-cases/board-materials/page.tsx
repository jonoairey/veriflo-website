import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Crown,
  Lock,
  Eye,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Users,
  FileText,
} from 'lucide-react';

export const metadata = {
  title: 'Board Materials - Veriflo | Secure Document Sharing',
  description: 'Protect board materials, minutes, and strategic documents with secure sharing and access tracking for governance.',
};

export default function BoardMaterialsPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Sensitive Strategy',
      description:
        'Board materials contain your most sensitive strategic information, future plans, and competitive advantages.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Board Member Security',
      description:
        'Board members often forward materials to advisors, consultants, or family offices. You lose control over who has access.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Governance Compliance',
      description:
        'You need documentation proving board members received and reviewed materials for governance and liability purposes.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Changing Board Composition',
      description:
        'As board members join and leave, managing document access becomes complex. You need a clean audit trail.',
    },
  ];

  const solutions = [
    {
      title: 'Secure Material Distribution',
      description:
        'Share board materials, minutes, and materials with encrypted links. Control who can access and when.',
    },
    {
      title: 'Proof of Receipt & Review',
      description:
        'Know exactly when each board member accessed materials and for how long. Perfect for governance documentation.',
    },
    {
      title: 'Leak Detection',
      description:
        'If board materials appear publicly, identify exactly which board member\'s copy was leaked.',
    },
    {
      title: 'Access Management',
      description:
        'Revoke access instantly when board members leave. Archive materials securely after board terms end.',
    },
    {
      title: 'Verify Document Authenticity',
      description:
        'Run integrity checks on documents submitted to the board — financial reports, audit findings, and third-party assessments — to ensure they haven\'t been tampered with.',
    },
  ];

  const benefits = [
    'Protect strategic plans and sensitive financial information',
    'Maintain proof of proper document distribution for governance',
    'Ensure board members reviewed materials before meetings',
    'Track which board members are most engaged',
    'Identify leaks of confidential board information',
    'Meet SEC and governance compliance requirements',
    'Verify the integrity of documents submitted to the board before review',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Secure Board Materials
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Distribute board minutes, strategic plans, and confidential materials with complete visibility and governance compliance.
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
                  <Crown className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Board Material Challenges</h2>
          <p className="mt-4 text-xl text-gray-400">
            Governance requires both security and visibility
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
            Purpose-built for board material management
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Boards</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Governance Documentation</div>
                    <p className="text-sm text-gray-300">
                      Maintain complete documentation of board material distribution, delivery, and review for audit and governance purposes.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Board Engagement</div>
                    <p className="text-sm text-gray-300">
                      See which board members are actively reviewing materials before meetings, enabling more informed discussions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Types */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">For All Types of Boards</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              type: 'Public Company Boards',
              description: 'Meet SEC requirements for material disclosure. Maintain proof of timely and proper distribution.',
            },
            {
              type: 'Private Company Boards',
              description: 'Protect sensitive strategic and financial information shared with investors and advisors.',
            },
            {
              type: 'Non-Profit Boards',
              description: 'Ensure board members reviewed materials and maintain proper governance documentation.',
            },
            {
              type: 'Advisory Boards',
              description: 'Securely share strategic insights with advisors while preventing unauthorized distribution.',
            },
          ].map((board, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">{board.type}</h3>
                <p className="mt-2 text-gray-400">{board.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Material Types */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Types of Board Materials</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              title: 'Board Minutes & Approvals',
              description: 'Securely distribute and track board minutes with proof of delivery and review before subsequent meetings.',
            },
            {
              title: 'Strategic Plans & Forecasts',
              description: 'Share confidential growth plans and financial projections with board members while preventing leaks.',
            },
            {
              title: 'Financial Statements',
              description: 'Distribute quarterly and annual financial statements with audit trails and access controls.',
            },
            {
              title: 'Executive Compensation',
              description: 'Manage sensitive compensation details and board-approved compensation packages securely.',
            },
            {
              title: 'Capital Allocation Decisions',
              description: 'Share sensitive information about investments, acquisitions, and strategic bets with board members.',
            },
            {
              title: 'Governance Documents',
              description: 'Distribute bylaws, charter amendments, and governance policies with proper documentation.',
            },
            {
              title: 'Verify Submitted Documents',
              description: 'Run integrity checks on financial reports, audit findings, and other documents submitted for board review to ensure they haven\'t been altered.',
            },
          ].map((material, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold flex-shrink-0">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{material.title}</h3>
                <p className="mt-2 text-gray-400">{material.description}</p>
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
              q: 'Can we set expiration dates on board materials?',
              a: 'Yes. Set expiration dates so materials become inaccessible after the meeting or a specified date. Perfect for materials that should not persist.',
            },
            {
              q: 'What happens when board members leave?',
              a: 'Instantly revoke their access to all materials. Former board members lose immediate access, and you maintain documentation of all actions.',
            },
            {
              q: 'Can we track board member engagement before meetings?',
              a: 'Yes. See who has accessed materials, when they reviewed them, and for how long. Use this to ensure adequate preparation.',
            },
            {
              q: 'Does this comply with SEC requirements?',
              a: 'Yes. Veriflo provides timestamped audit logs suitable for SEC compliance, disclosure, and regulatory requirements.',
            },
            {
              q: 'Can we archive old board materials?',
              a: 'Yes. Archive materials indefinitely or set automatic retention policies. All archival actions are logged for audit purposes.',
            },
            {
              q: 'Can we verify documents submitted to the board for tampering?',
              a: 'Yes. Veriflo\'s Integrity Check analyzes any document for signs of manipulation — altered dates, metadata inconsistencies, and structural anomalies. This adds an extra layer of assurance that board materials are authentic and unaltered.',
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
          <h2 className="text-3xl font-bold text-white">Secure your board materials today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and protect your first board materials in under 60 seconds.
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
