import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { HowItWorksTabs } from '@/components/marketing/how-it-works-tabs';

export const metadata = {
  title: 'How It Works - Veriflo | Verify, Seal & Redact Documents',
  description: 'Learn how Veriflo Check verifies documents, Veriflo Seal certifies what you send, and Veriflo Mask redacts sensitive data. Three products, one platform.',
};

export default function HowItWorksPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            How Veriflo Works
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Pick a product below to see how it works.
          </p>
        </div>
      </section>

      {/* Tabbed Product Sections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HowItWorksTabs />
      </section>

      {/* Why Veriflo */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Why Veriflo</h2>
          <p className="mt-4 text-xl text-gray-400">
            Built on forensic precision and simplicity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Instant Verification',
              description: 'Get your integrity score in seconds. No waiting. Just clear, actionable results.',
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
              title: 'REST API',
              description: 'Embed verification, PII detection, and redaction into your own workflows. Available on Pro and Enterprise plans.',
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
              a: 'Upload any document and Veriflo runs forensic analysis on its metadata, structure, and content. It checks for mismatched creation dates, editing software traces, incremental saves, hidden embedded content, and image manipulation. Then you get an integrity score from 0 to 100 with detailed findings.',
            },
            {
              q: 'What does the integrity score mean?',
              a: 'A score of 80-100 means the document appears clean with no significant issues. 60-79 is low risk with minor findings. 40-59 is medium risk warranting investigation. Below 40 indicates significant signs of tampering or manipulation. Each finding is explained so you can make an informed judgment.',
            },
            {
              q: 'What file formats do you support?',
              a: 'PDF, images (JPEG, PNG, TIFF), Microsoft Office documents (Word, Excel, PowerPoint), and other common document formats. Maximum file size is 500 MB.',
            },
            {
              q: 'Is my document stored on your servers?',
              a: 'Documents are encrypted immediately and analysis begins right away. We don\'t store documents permanently. Enterprise customers can request immediate deletion after analysis.',
            },
            {
              q: 'Can you detect AI-generated documents?',
              a: 'Yes. Veriflo includes AI-content detection that identifies AI-generated text using 7-signal heuristic analysis and synthetic images using 6-signal pixel-level forensics.',
            },
            {
              q: 'What is Veriflo Seal?',
              a: 'Seal lets you prove your own documents are authentic. Upload your document, run the integrity check, then generate a shareable verification link for recipients. They see the full integrity report without needing a Veriflo account.',
            },
            {
              q: 'What is Veriflo Mask?',
              a: 'Mask detects and redacts personal information from your documents before you share them. It finds emails, phone numbers, SSNs, credit cards, bank accounts, dates of birth, passport numbers, and addresses, then permanently blacks them out.',
            },
            {
              q: 'Do you have an API?',
              a: 'Yes. Our REST API lets you embed document verification, PII detection, and redaction into your own workflows. Available on Pro and Enterprise plans. Check out our API docs at useveriflo.com/docs.',
            },
            {
              q: 'Do I need an account?',
              a: 'No account is required for basic verification. Just upload your document and get your score. Create an account for team management, audit logging, API access, and saved results.',
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
            Start free. Upload and verify your first document in seconds.
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
