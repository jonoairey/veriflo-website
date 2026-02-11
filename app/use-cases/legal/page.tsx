import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Scale,
  Lock,
  Eye,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  FileText,
  BarChart3,
} from 'lucide-react';

export const metadata = {
  title: 'Legal & Litigation - Veriflo | Secure Document Sharing',
  description: 'Protect legal documents, contracts, and litigation materials with secure sharing, access tracking, and leak detection.',
};

export default function LegalPage() {
  const painPoints = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Confidential Leaks',
      description:
        'Legal documents reveal privileged information, trade secrets, and sensitive negotiations. A single leak can destroy a case.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Discovery Compliance',
      description:
        'During litigation, you must track who viewed documents and when. Paper trails are difficult and e-signature verification is complex.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Uncontrolled Distribution',
      description:
        'Opposing counsel and witnesses receive documents but you don\'t know if they forwarded them elsewhere or shared with unauthorized parties.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Audit Trail Gaps',
      description:
        'You need comprehensive logs for regulatory compliance and litigation defense, but email and file sharing don\'t provide adequate documentation.',
    },
  ];

  const solutions = [
    {
      title: 'Forensic Fingerprinting',
      description:
        'Every document copy is uniquely marked. If leaked, the fingerprint identifies exactly which copy and recipient.',
    },
    {
      title: 'Complete Audit Logs',
      description:
        'Full documentation of who accessed documents, when, from where, and on what device. Perfect for discovery compliance.',
    },
    {
      title: 'Access Control',
      description:
        'Specify who can view, download, or print. Revoke access instantly if needed. Track all modifications and access attempts.',
    },
    {
      title: 'Leak Investigation',
      description:
        'If privileged information appears publicly, upload it and get instant proof of which party it came from for breach documentation.',
    },
  ];

  const benefits = [
    'Meet stricter legal and regulatory compliance requirements',
    'Maintain attorney-client privilege with audit trails',
    'Detect unauthorized distribution instantly',
    'Provide irrefutable evidence of document access for litigation',
    'Protect trade secrets and confidential business information',
    'Streamline discovery process with complete documentation',
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Protect Legal Documents
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Share contracts, litigation materials, and confidential legal documents with complete control and comprehensive audit trails.
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
                  <Scale className="h-24 w-24 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Legal & Litigation Challenges</h2>
          <p className="mt-4 text-xl text-gray-400">
            Confidentiality and compliance matter more in legal work
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
            Purpose-built for legal document protection and compliance
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
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits for Legal Teams</h2>
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
                    <div className="text-sm font-semibold text-blue-300 mb-2">Discovery Support</div>
                    <p className="text-sm text-gray-300">
                      Provide opposing counsel with comprehensive audit logs showing exactly who accessed documents and when. Streamline the discovery process.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Compliance Ready</div>
                    <p className="text-sm text-gray-300">
                      Meet regulatory requirements for document handling, access control, and audit trails. SOC 2 certified and compliance-ready.
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
          <h2 className="text-3xl font-bold text-white">Legal Document Sharing Workflow</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Organize Your Documents',
              description: 'Prepare contracts, litigation documents, and discovery materials in a secure, encrypted vault.',
            },
            {
              step: '2',
              title: 'Set Access Permissions',
              description: 'Specify who can view, download, or print. Control whether documents can be screenshot or copied.',
            },
            {
              step: '3',
              title: 'Distribute via Secure Links',
              description: 'Generate unique links for opposing counsel, parties, and witnesses. Each gets a fingerprinted copy.',
            },
            {
              step: '4',
              title: 'Monitor Access',
              description: 'Track exactly who accessed documents, when, and for how long. Get notified of unusual access patterns.',
            },
            {
              step: '5',
              title: 'Generate Audit Reports',
              description: 'Export comprehensive audit logs for discovery, compliance, and litigation defense purposes.',
            },
            {
              step: '6',
              title: 'Verify Leaks',
              description: 'If confidential information appears publicly, verify it came from authorized parties with forensic fingerprints.',
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

      {/* Use Cases Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Common Legal Use Cases</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: 'Litigation Discovery', description: 'Share documents with opposing counsel with full audit trails for discovery compliance.' },
            { title: 'Contract Management', description: 'Distribute NDAs and contracts to partners with expiration dates and access controls.' },
            { title: 'M&A Due Diligence', description: 'Manage sensitive M&A documents with comprehensive access logs and leak detection.' },
            { title: 'Confidential Settlements', description: 'Share settlement agreements with parties while preventing unauthorized distribution.' },
          ].map((useCase, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-2 text-gray-400">{useCase.description}</p>
              </CardContent>
            </Card>
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
              q: 'Does Veriflo support attorney-client privilege?',
              a: 'Yes. All documents are encrypted end-to-end. We do not access or store document content, only metadata about access and distribution.',
            },
            {
              q: 'Can I disable downloads or printing?',
              a: 'Yes. You have granular control over each recipient\'s permissions. You can allow view-only, disable downloading, printing, and screenshotting.',
            },
            {
              q: 'Are audit logs legally admissible?',
              a: 'Yes. Veriflo generates timestamped, cryptographically signed audit logs suitable for litigation and regulatory compliance purposes.',
            },
            {
              q: 'What about document retention and deletion?',
              a: 'You control the document lifecycle. Delete documents instantly or set automatic retention policies. All deletion is logged for audit purposes.',
            },
            {
              q: 'Can I export the full audit trail?',
              a: 'Yes. Export comprehensive audit reports in multiple formats suitable for discovery, regulatory submissions, and litigation purposes.',
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
          <h2 className="text-3xl font-bold text-white">Protect your legal documents today</h2>
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
