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
  ShieldCheck,
  FileSearch,
  Send,
  Mail,
  ExternalLink,
} from 'lucide-react';

export const metadata = {
  title: 'How It Works - Veriflo | Verify & Certify Documents',
  description: 'Learn how Veriflo Check verifies incoming documents and how Veriflo Protect certifies documents you send. Two flows, one platform for complete document trust.',
};

export default function HowItWorksPage() {
  const verificationSteps = [
    {
      number: '1',
      title: 'Upload',
      icon: <Upload className="h-8 w-8" />,
      image: '/images/step-verify-upload.png',
      description: 'Drop any document into Veriflo. We support PDF, images, and Office files.',
      details: [
        'Supports PDF, images (JPEG, PNG), Word, Excel, PowerPoint',
        'Drag and drop or click to upload',
        'Documents up to 500 MB',
        'No account needed for basic verification',
      ],
      whatHappens: 'Your document is scanned and encrypted immediately. Forensic analysis begins right away.',
    },
    {
      number: '2',
      title: 'Forensic Analysis',
      icon: <FileSearch className="h-8 w-8" />,
      image: '/images/step-verify-analysis.png',
      description: 'Our engine scans metadata, structure, dates, and content for anomalies in seconds.',
      details: [
        'PDF metadata and creation date analysis',
        'Creator/producer software detection',
        'Incremental save and structural analysis',
        'Image EXIF data extraction',
        'Hidden JavaScript and embedded file detection',
        'Compression and encoding analysis',
      ],
      whatHappens: 'Multiple forensic checks run in parallel. Each finding is classified by severity and feeds into your overall score.',
    },
    {
      number: '3',
      title: 'Integrity Score',
      icon: <ShieldCheck className="h-8 w-8" />,
      image: '/images/step-verify-score.png',
      description: 'Get a 0-100 score with risk level and detailed findings so you can act with confidence.',
      details: [
        'Score from 0-100 with visual gauge',
        'Risk levels: Clean, Low, Medium, High, Critical',
        'Expandable findings with severity ratings',
        'Technical details for investigation',
        'Downloadable branded PDF report',
        'Exportable results for your records',
      ],
      whatHappens: 'You get a clear, actionable assessment of document authenticity and integrity — so you can make informed decisions before trusting the document.',
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            How Veriflo Works
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Two flows for complete document trust. Verify documents you receive with <strong className="text-emerald-400">Veriflo Check</strong>, or certify documents you send with <strong className="text-blue-400">Veriflo Protect</strong>.
          </p>
        </div>
      </section>

      {/* Check Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Veriflo Check</h2>
        </div>
        <p className="text-lg text-gray-400">Verify documents you receive — in three steps</p>
      </section>

      {/* Verification Steps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {verificationSteps.map((step, idx) => (
          <div key={idx} className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
            {idx % 2 === 0 ? (
              <>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-2xl font-bold text-emerald-400">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{step.description}</p>

                  <div className="mt-8">
                    <h3 className="font-semibold text-white mb-4">Supported:</h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <p className="text-sm text-emerald-300">
                      <span className="font-semibold">What Happens:</span> {step.whatHappens}
                    </p>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
                  <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
                    <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative hidden lg:block order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
                  <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
                    <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-2xl font-bold text-emerald-400">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{step.description}</p>

                  <div className="mt-8">
                    <h3 className="font-semibold text-white mb-4">Analysis Includes:</h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <p className="text-sm text-emerald-300">
                      <span className="font-semibold">What Happens:</span> {step.whatHappens}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Protect Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
            <Shield className="h-5 w-5 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Veriflo Protect</h2>
        </div>
        <p className="text-lg text-gray-400 mb-12">Prove documents you send are authentic — in four steps</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: '1',
              icon: <Upload className="h-6 w-6" />,
              title: 'Upload Your Document',
              description: 'Upload the document you want to certify — an invoice, contract, report, or any file you\'re sending to someone.',
            },
            {
              number: '2',
              icon: <ShieldCheck className="h-6 w-6" />,
              title: 'Integrity Analysis',
              description: 'Veriflo runs the same forensic analysis on your document and generates an integrity score confirming it\'s clean.',
            },
            {
              number: '3',
              icon: <Send className="h-6 w-6" />,
              title: 'Generate Proof Link',
              description: 'Get a certified verification link you can share. Set expiry dates and view limits for security. Email it directly to recipients.',
            },
            {
              number: '4',
              icon: <ExternalLink className="h-6 w-6" />,
              title: 'Recipient Views Report',
              description: 'Recipients click your link to see the full integrity report — score, findings, and verification timestamp — without needing a Veriflo account.',
            },
          ].map((step, idx) => (
            <Card key={idx} className="border-blue-500/20 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/30 text-lg font-bold text-blue-400">
                    {step.number}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="ghost">
            <Link href="/products/protect" className="text-blue-400 hover:text-blue-300">
              Learn More About Protect <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Key Principles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Why Veriflo</h2>
          <p className="mt-4 text-xl text-gray-400">
            Built on forensic precision and user-centric design
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Instant Verification',
              description: 'Get your integrity score in seconds. No waiting, no confusion — just clear, actionable results.',
            },
            {
              title: 'Forensic Precision',
              description: 'Deep analysis across metadata, structure, images, and content. Detects manipulation that other tools miss.',
            },
            {
              title: 'No Technical Expertise Needed',
              description: 'Drag and drop your document. Veriflo handles the complex forensics and explains the findings clearly.',
            },
            {
              title: 'Privacy First',
              description: 'Your documents are encrypted with AES-256. We never store them permanently or access your content.',
            },
            {
              title: 'Enterprise Ready',
              description: 'SOC 2 certified, HIPAA compliant, with audit logging and team management for organizations.',
            },
            {
              title: 'Comprehensive Checks',
              description: 'Metadata, structure, dates, images, compression, encoding — we check everything that matters.',
            },
          ].map((principle, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-emerald-400">{principle.title}</h3>
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
              q: 'How does the integrity check work?',
              a: 'Upload any document and Veriflo runs comprehensive forensic analysis on its metadata, structure, and content. It checks for mismatched creation dates, editing software traces, incremental saves, hidden embedded content, image manipulation, and more — then gives you an integrity score from 0 to 100 with detailed findings.',
            },
            {
              q: 'What does the integrity score mean?',
              a: 'A score of 80-100 means the document appears clean with no significant issues. 60-79 is low risk with minor findings. 40-59 is medium risk warranting investigation. Below 40 indicates significant signs of tampering or manipulation. Each finding is explained so you can make an informed judgment.',
            },
            {
              q: 'What file formats do you support?',
              a: 'We support PDF, images (JPEG, PNG, TIFF), Microsoft Office documents (Word, Excel, PowerPoint), and other common document formats. Maximum file size is 500 MB.',
            },
            {
              q: 'Is my document stored on your servers?',
              a: 'Documents are encrypted immediately and analysis begins right away. We don\'t store documents permanently. Enterprise customers can request immediate deletion after analysis.',
            },
            {
              q: 'How accurate is the verification?',
              a: 'Our forensic engine uses industry-standard techniques to detect tampering. It identifies metadata mismatches, structural anomalies, and editing traces with high accuracy. However, no tool is 100% perfect — our score should inform your judgment, not replace it.',
            },
            {
              q: 'Can you detect AI-generated documents?',
              a: 'Yes. Veriflo includes AI-content detection that identifies AI-generated text using 7-signal heuristic analysis and synthetic images using 6-signal pixel-level forensics — all without external APIs.',
            },
            {
              q: 'How long does verification take?',
              a: 'Most documents are analyzed in seconds. You get your integrity score and detailed findings immediately.',
            },
            {
              q: 'What is Veriflo Protect?',
              a: 'Veriflo Protect lets you prove your own documents are authentic. Upload your document, run the integrity check, then generate a shareable verification link for recipients. They see the full integrity report without needing a Veriflo account — building trust before they even open the document.',
            },
            {
              q: 'Can I verify standalone images?',
              a: 'Yes. Veriflo supports dedicated image verification for JPEG, PNG, GIF, and WebP files. Upload any image to check for AI generation, editing manipulation, and authenticity — including EXIF metadata analysis and 6-signal AI detection forensics.',
            },
            {
              q: 'What is Cross-Document Intelligence?',
              a: 'Every verification contributes to an anonymized intelligence layer. Veriflo tracks document patterns — creation tools, template matches, AI detection rates, risk levels — across all your verifications to surface trends and anomalies. No personal data is stored.',
            },
            {
              q: 'Do I need an account?',
              a: 'No account is required for basic verification. Just upload your document and get your score. Enterprise customers can create accounts for team management, audit logging, and saved results.',
            },
          ].map((faq, idx) => (
            <details key={idx} className="group border border-slate-800 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                <h3 className="font-semibold text-white text-lg">{faq.q}</h3>
                <span className="text-emerald-400 group-open:rotate-180 transition-transform">
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
        <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to verify your documents?</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Start your free trial. Upload and verify your first document in seconds.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/features" className="text-white hover:text-emerald-100">
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
