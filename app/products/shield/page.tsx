import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Fingerprint,
  LinkIcon,
  Eye,
  Lock,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Veriflo Shield - Secure Document Sharing & Leak Detection',
  description: 'Share documents with invisible fingerprinting, track access in real-time, and instantly identify leaked copies. Protect your confidential documents with forensic accuracy.',
};

export default function ShieldPage() {
  const capabilities = [
    {
      icon: <Fingerprint className="h-8 w-8" />,
      title: 'Invisible Forensic Fingerprinting',
      description: 'Multi-layer fingerprinting that survives screenshots, compression, and cropping. Every recipient gets a uniquely marked copy.',
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: 'Secure Sharing Links',
      description: 'Generate controlled sharing links with expiration dates, view limits, and download restrictions. Full access control in your hands.',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Real-Time Access Tracking',
      description: 'Monitor who views your documents, when they access them, where they are located, and what device they use.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Leak Verification',
      description: 'Upload a suspected leak and instantly identify which recipient\'s copy was compromised. Forensic accuracy you can trust.',
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Revocable Access',
      description: 'Instantly kill sharing links at any time. Recipients who haven\'t opened the link lose access immediately.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Collaboration',
      description: 'Role-based access control with comprehensive audit logging. Perfect for teams and enterprises.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Upload Your Document',
      description: 'Start by uploading your confidential document to Veriflo Shield.',
    },
    {
      number: '2',
      title: 'Fingerprint & Share',
      description: 'Select recipients and generate unique fingerprinted copies for each.',
    },
    {
      number: '3',
      title: 'Track Access',
      description: 'Monitor real-time viewing activity, locations, and device information.',
    },
    {
      number: '4',
      title: 'Detect Leaks',
      description: 'If a leak occurs, our forensic analysis identifies the source instantly.',
    },
    {
      number: '5',
      title: 'Identify Source',
      description: 'Know exactly which recipient\'s copy was leaked, with forensic certainty.',
    },
  ];

  const useCases = [
    {
      title: 'Fundraising & Pitch Decks',
      description: 'Share confidential investor decks and financial projections with complete tracking and leak identification capabilities.',
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: 'Legal Documents',
      description: 'Protect contracts, NDAs, and legal agreements with invisible fingerprinting that survives any form of copying.',
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: 'M&A Deal Rooms',
      description: 'Share due diligence documents with confidence. Track who views what and identify any unauthorized sharing instantly.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Board Materials',
      description: 'Distribute sensitive board reports and strategic plans with full visibility and immediate leak detection.',
      icon: <Eye className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-20 py-20 bg-slate-950">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Share With Confidence
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Secure document sharing with invisible fingerprinting, real-time access tracking, and instant leak detection. Know exactly who leaked your documents.
          </p>
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#how-it-works" className="text-white">
                See How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How Shield Works Section */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">How Shield Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Five simple steps to protect your documents and identify leaks
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-400 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-8 h-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Key Capabilities</h2>
          <p className="mt-4 text-xl text-gray-400">
            Enterprise-grade features designed to protect your most sensitive documents
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {capabilities.map((capability, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-gray-300">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Use Cases for Shield</h2>
          <p className="mt-4 text-xl text-gray-400">
            Perfect for industries where document security and leak tracking are critical
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-3 text-gray-300">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Security Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Built on Strong Security</h2>
          <p className="mt-4 text-xl text-gray-400">
            Enterprise-grade protection for your most sensitive information
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'AES-256 Encryption',
              description: 'Military-grade encryption at rest and in transit. Your documents are always protected.',
            },
            {
              title: 'Forensic Fingerprinting',
              description: 'Multi-layer invisible markers that survive compression, cropping, and screenshots.',
            },
            {
              title: 'Comprehensive Audit Logs',
              description: 'Every access, every share, every action is logged for complete transparency.',
            },
            {
              title: 'Real-Time Monitoring',
              description: 'Instant notifications when documents are accessed from suspicious locations or devices.',
            },
            {
              title: 'Instant Leak Identification',
              description: 'Upload a leaked copy and identify the source recipient in seconds with forensic certainty.',
            },
            {
              title: 'Revocable Access',
              description: 'Kill any sharing link instantly. Unaccessed links become invalid immediately.',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Product Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-800 pt-16">
          <h2 className="text-2xl font-bold text-white mb-4">Also see Veriflo Seal</h2>
          <p className="text-gray-400 mb-6">
            While Shield protects the documents you share, Seal verifies the documents you receive. Together, they provide two-way document trust.
          </p>
          <Button asChild variant="ghost">
            <Link href="/products/seal" className="text-blue-400 hover:text-blue-300">
              Learn about Veriflo Seal <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to protect your documents?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start your free trial today. Share your first document in under 60 seconds.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#how-it-works" className="text-white hover:text-blue-100">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
