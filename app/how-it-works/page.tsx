import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Upload,
  Users,
  LinkIcon,
  Eye,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata = {
  title: 'How It Works - Veriflo | Secure Document Sharing Process',
  description: 'Learn how Veriflo secures your documents with invisible fingerprinting, share them safely with tracking, and verify leaks instantly.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Document',
      icon: <Upload className="h-8 w-8" />,
      image: '/images/step-upload.png',
      description: 'Start by uploading your confidential document to Veriflo. We support PDF, Word, Excel, PowerPoint, images, and more.',
      details: [
        'Drag and drop or click to upload',
        'Support for documents up to 500 MB',
        'Automatic virus scanning',
        'Instant encryption at rest',
      ],
      whatHappens: 'Your document is encrypted with AES-256 and stored securely. We prepare it for fingerprinting while keeping your original intact.',
    },
    {
      number: '2',
      title: 'Add Recipients & Enable Fingerprinting',
      icon: <Users className="h-8 w-8" />,
      image: '/images/step-recipients.png',
      description: 'Select who should receive copies of your document and configure sharing preferences.',
      details: [
        'Add individual recipients by email',
        'Create distribution groups',
        'Set custom recipient names',
        'Configure access permissions',
      ],
      whatHappens: 'Veriflo creates a unique fingerprint for each recipient. These invisible markers embed recipient identifiers throughout their copy of the document.',
    },
    {
      number: '3',
      title: 'Share with Secure Links',
      icon: <LinkIcon className="h-8 w-8" />,
      image: '/images/step-share.png',
      description: 'Generate unique, tracked sharing links for each recipient. You control every aspect of access.',
      details: [
        'One unique link per recipient',
        'Set expiration dates (hours to days)',
        'Control maximum view counts',
        'Allow/disallow downloads',
      ],
      whatHappens: 'Recipients receive an email with their secure link. When they click, they get their unique fingerprinted copy. All access is logged in real-time.',
    },
    {
      number: '4',
      title: 'Monitor Access & Activity',
      icon: <Eye className="h-8 w-8" />,
      image: '/images/step-monitor.png',
      description: 'Watch in real-time as recipients view your documents. Track exactly who accessed what and when.',
      details: [
        'Real-time access notifications',
        'View counts and time spent',
        'Geographic location tracking',
        'Device and browser information',
      ],
      whatHappens: 'Get instant alerts when documents are accessed. Monitor suspicious activity patterns and unusual viewing behavior across your dashboard.',
    },
    {
      number: '5',
      title: 'Verify & Identify Leaks',
      icon: <Shield className="h-8 w-8" />,
      image: '/images/step-verify.png',
      description: 'If you suspect a leak, upload the leaked document to instantly identify which recipient it came from.',
      details: [
        'Upload suspected leaked document',
        'Instant forensic analysis',
        'Identification of source recipient',
        'Generate investigation reports',
      ],
      whatHappens: 'Our system scans the leaked document for embedded fingerprints. Within seconds, you know exactly which recipient\'s copy was leaked.',
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Simple, Secure, Traceable
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Protect your confidential documents in 5 easy steps. Get from zero to secure document sharing in under 60 seconds.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {steps.map((step, idx) => (
          <div key={idx} className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
            {idx % 2 === 0 ? (
              <>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-400">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{step.description}</p>

                  <div className="mt-8">
                    <h3 className="font-semibold text-white mb-4">You can:</h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm text-blue-300">
                      <span className="font-semibold">What Happens:</span> {step.whatHappens}
                    </p>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-10" />
                  <div className="relative rounded-xl overflow-hidden border border-blue-500/20">
                    <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative hidden lg:block order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl blur-3xl opacity-10" />
                  <div className="relative rounded-xl overflow-hidden border border-blue-500/20">
                    <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-400">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{step.description}</p>

                  <div className="mt-8">
                    <h3 className="font-semibold text-white mb-4">You can:</h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm text-blue-300">
                      <span className="font-semibold">What Happens:</span> {step.whatHappens}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Key Principles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Key Principles</h2>
          <p className="mt-4 text-xl text-gray-400">
            Veriflo is built on these core principles to keep your documents safe
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'End-to-End Security',
              description: 'Every document is encrypted with AES-256. Only you and intended recipients can access content.',
            },
            {
              title: 'Zero-Trust Tracking',
              description: 'Never trust an unsecured document. Every copy is uniquely marked so leaks are instantly traceable.',
            },
            {
              title: 'Privacy First',
              description: 'We only collect metadata necessary for security and tracking. Your document content is private.',
            },
            {
              title: 'Instant Notifications',
              description: 'Get real-time alerts when documents are accessed, shared, or suspicious patterns detected.',
            },
            {
              title: 'Full Control',
              description: 'You control access. Revoke links, set expirations, and limit downloads with complete flexibility.',
            },
            {
              title: 'Enterprise Grade',
              description: 'SOC 2 certified, HIPAA compliant, and designed for organizations with strict security requirements.',
            },
          ].map((principle, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-gray-400">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Common Questions</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              q: 'How long do documents stay encrypted?',
              a: 'Your documents remain encrypted indefinitely. Only when you explicitly share a document with someone does it become accessible via a secure link.',
            },
            {
              q: 'Can recipients share the document with others?',
              a: 'You control this setting. You can disable downloads, set view-only mode, or disable right-clicking. Regardless, the document is fingerprinted so any unauthorized sharing is traceable.',
            },
            {
              q: 'What happens if I revoke access?',
              a: 'The shared link becomes inactive immediately. Recipients who haven\'t opened the link yet won\'t be able to access it. Those who already have access retain their copy.',
            },
            {
              q: 'How accurate is leak detection?',
              a: 'Our fingerprinting technology is highly accurate. We can identify the source recipient with certainty, even if the document has been compressed, cropped, or screenshotted.',
            },
            {
              q: 'Is there a learning curve?',
              a: 'No. Most users protect their first document in under 60 seconds. The interface is intuitive and guides you through each step.',
            },
          ].map((faq, idx) => (
            <details key={idx} className="group border border-slate-800 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                <h3 className="font-semibold text-white text-lg">{faq.q}</h3>
                <span className="text-blue-400 group-open:rotate-180 transition-transform">
                  <ArrowRight className="h-5 w-5 rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-gray-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to secure your documents?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial. Upload your first document in under 60 seconds.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
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
