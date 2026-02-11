import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  Lock,
  Eye,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
} from 'lucide-react';

export const metadata = {
  title: 'M&A Deal Rooms - Veriflo | Secure Document Sharing',
  description: 'Protect M&A due diligence documents with Veriflo. Secure sharing, real-time tracking, and leak verification for deal teams.',
};

export default function MADealsPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Deal Leaks',
      description:
        'M&A information is highly sensitive. A leak to competitors or the press can derail deals and tank valuations.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Multiple Stakeholders',
      description:
        'Buyers, sellers, advisors, and legal teams all need access. You lose visibility over who has the documents and how they\'re being used.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Uncontrolled Distribution',
      description:
        'Advisors and team members forward documents to partners and consultants. You have no control or visibility.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Valuation Impact',
      description:
        'If financial models or growth projections leak to the market, it directly impacts deal negotiations and pricing.',
    },
  ];

  const solutions = [
    {
      title: 'Watermark All Documents',
      description:
        'Every version of every document has a unique fingerprint. Identify the exact source of any leak instantly.',
    },
    {
      title: 'Real-Time Access Monitoring',
      description:
        'See which team members are actively reviewing documents. Get alerts when sensitive materials are accessed.',
    },
    {
      title: 'Granular Access Control',
      description:
        'Control who can view, download, or print documents. Set expiration dates and revoke access instantly if the deal falls through.',
    },
    {
      title: 'Complete Audit Trail',
      description:
        'Comprehensive logs of all document access for compliance, audit, and investigation purposes.',
    },
    {
      title: 'Verify Deal Documents',
      description:
        'Run integrity checks on incoming financial statements, valuations, and contracts from counterparties to detect any signs of manipulation before closing.',
    },
  ];

  const benefits = [
    'Maintain strict confidentiality throughout due diligence',
    'Know exactly who accessed documents and when',
    'Identify leaks instantly and trace the source',
    'Control document access across large deal teams',
    'Meet buyer and seller compliance requirements',
    'Protect financial models and valuation data',
    'Verify counterparty documents for tampering before making deal decisions',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Secure M&A Deal Rooms
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Manage sensitive M&A documents with complete visibility and control. Track access across your entire deal team and identify leaks instantly.
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
                  <Briefcase className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">M&A Document Challenges</h2>
          <p className="mt-4 text-xl text-gray-400">
            Due diligence demands security and visibility
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
            Purpose-built for M&A deal room security
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for M&A Deals</h2>
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
                      An acquisition team discovered their financial models were shared with a competitor. Using Veriflo, they identified exactly which advisor leaked the documents within minutes.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Negotiating Power</div>
                    <p className="text-sm text-gray-300">
                      Knowing exactly who accessed documents and when gives you leverage. You can detect if confidential information is being used against you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deal Team Types */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Perfect for Every Deal Team Member</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              role: 'Sell-Side Teams',
              description: 'Control access to financial data, proprietary information, and customer lists. Know exactly who is reviewing your company.',
            },
            {
              role: 'Buy-Side Teams',
              description: 'Secure access to multiple target company documents. Track which team members are engaged with which targets.',
            },
            {
              role: 'Investment Banks',
              description: 'Manage documents for multiple clients simultaneously with granular access controls and audit trails.',
            },
            {
              role: 'Legal & Advisors',
              description: 'Share documents securely with clients and opposing counsel while maintaining comprehensive documentation.',
            },
          ].map((team, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">{team.role}</h3>
                <p className="mt-2 text-gray-400">{team.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Typical M&A Deal Room Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Launch Deal Room',
              description: 'Create a secure deal room and organize documents by category (financials, operations, legal, etc.).',
            },
            {
              step: '2',
              title: 'Add Team Members',
              description: 'Invite buyers, sellers, and advisors to the deal room. Assign roles and permissions.',
            },
            {
              step: '3',
              title: 'Upload Documents',
              description: 'Upload all due diligence documents. Each gets a unique fingerprint for leak identification.',
            },
            {
              step: '4',
              title: 'Grant Access',
              description: 'Share documents with specific team members. Set view-only mode, disable downloads, or allow full access as needed.',
            },
            {
              step: '5',
              title: 'Monitor Activity',
              description: 'Watch in real-time as team members access documents. Get alerts on unusual access patterns.',
            },
            {
              step: '6',
              title: 'Verify Leaks',
              description: 'If information appears in the market, upload it and immediately identify which party leaked the documents.',
            },
            {
              step: '7',
              title: 'Verify Counterparty Documents',
              description: 'Run integrity checks on financial statements, valuations, and contracts received from the other side to detect any tampering or manipulation before closing.',
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
              q: 'Can we have a large deal room with many stakeholders?',
              a: 'Yes. Enterprise plans support unlimited team members and document sharing. You can have separate access levels for different stakeholders.',
            },
            {
              q: 'Can I organize documents by folder/category?',
              a: 'Yes. Organize documents however you need. You can create custom folders and categories for different deal aspects.',
            },
            {
              q: 'What if the deal falls through?',
              a: 'Revoke access to all documents instantly. Everyone loses access to the deal room and all materials.',
            },
            {
              q: 'Can I track specific teams or individuals?',
              a: 'Yes. Get detailed analytics showing access by individual team member, department, or organization.',
            },
            {
              q: 'What about document retention after the deal closes?',
              a: 'You control the timeline. Archive the deal room, keep documents indefinitely, or delete everything. All actions are logged.',
            },
            {
              q: 'Can I verify financial documents from the other side of the deal?',
              a: 'Absolutely. Upload any incoming document to the Integrity Check tool and get an instant analysis. Veriflo detects tampered dates, metadata inconsistencies, and structural manipulation — critical for due diligence on financial statements and valuations.',
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
          <h2 className="text-3xl font-bold text-white">Secure your next deal room today</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial and launch a secure deal room in under 60 seconds.
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
