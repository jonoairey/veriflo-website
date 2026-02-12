import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  BarChart3,
  Users,
  Lock,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  FileSearch,
  Image,
  Zap,
  LayoutTemplate,
} from 'lucide-react';

export const metadata = {
  title: 'Features - Veriflo | Document Verification Platform',
  description: 'Verify document integrity instantly. Detect tampering, analyze metadata, extract EXIF data, and get AI-powered content analysis. Enterprise-grade document verification with forensic precision.',
};

export default function FeaturesPage() {
  const features = [
    {
      id: 'integrity-check',
      icon: <ShieldCheck className="h-8 w-8" />,
      image: '/images/feature-integrity.png',
      title: 'Document Integrity Check',
      shortDesc: 'Upload any incoming document and get an instant integrity score from 0-100 with risk level.',
      fullDesc: 'Upload any document — contracts, financial statements, invoices, certificates — and get an instant integrity score. Veriflo runs forensic analysis on metadata, creation dates, software signatures, and structural patterns to flag documents that may have been manipulated.',
      benefits: [
        'Instant integrity scoring from 0-100',
        'Risk level classification (clean, low, medium, high, critical)',
        'PDF metadata and structure analysis',
        'Creation/modification date gap detection',
        'Editing software and tool detection',
        'Suspicious pattern identification',
      ],
    },
    {
      id: 'metadata-forensics',
      icon: <FileSearch className="h-8 w-8" />,
      image: '/images/feature-metadata.png',
      title: 'Metadata Forensics',
      shortDesc: 'Analyze creation dates, modification dates, producer software, and incremental saves.',
      fullDesc: 'Deep forensic analysis of document metadata reveals the complete history of your document. Examine creation timestamps, track all modifications, identify the software that created or edited the document, and detect incremental saves that indicate post-creation manipulation.',
      benefits: [
        'Creation date and modification date analysis',
        'Producer/creator software identification',
        'Incremental save detection (multiple EOF markers)',
        'Software version and build information',
        'Editing timeline reconstruction',
        'Metadata completeness scoring',
      ],
    },
    {
      id: 'tamper-detection',
      icon: <Shield className="h-8 w-8" />,
      image: '/images/feature-tamper-detection.png',
      title: 'Tamper Detection',
      shortDesc: 'Detect altered dates, metadata inconsistencies, stripped metadata, and hidden JavaScript.',
      fullDesc: 'Our forensic engine detects the signs of document fraud. It identifies mismatches between document creator and producer software, flags JavaScript or embedded files hidden inside PDFs, and spots metadata that has been stripped or altered — all indicating potential manipulation.',
      benefits: [
        'Creator/producer software mismatch detection',
        'Hidden JavaScript and embedded file detection',
        'Stripped or altered metadata identification',
        'Date inconsistency flagging',
        'Structural anomaly detection',
        'Suspicious pattern identification',
      ],
    },
    {
      id: 'image-analysis',
      icon: <Image className="h-8 w-8" />,
      image: '/images/feature-image-analysis.png',
      title: 'Image Analysis',
      shortDesc: 'Extract EXIF metadata, detect editing software, and analyze compression quality.',
      fullDesc: 'Comprehensive image forensics for pictures, scans, and embedded images. Extract EXIF metadata to see capture device, location, and timestamp information. Identify which software was used to edit images and analyze compression patterns to detect modifications.',
      benefits: [
        'EXIF metadata extraction and analysis',
        'Capture device and camera information',
        'GPS location data extraction',
        'Image editing software detection',
        'Compression quality analysis',
        'Pixel-level anomaly detection',
      ],
    },
    {
      id: 'ai-content-detection',
      icon: <Zap className="h-8 w-8" />,
      image: '/images/feature-ai-detection.png',
      title: 'AI-Content Detection',
      shortDesc: 'Detect AI-generated text, images, and synthetic documents automatically.',
      fullDesc: 'Advanced AI detection identifies synthetic and machine-generated content. Detect AI-generated text through statistical analysis of vocabulary patterns, sentence uniformity, and linguistic markers. Identify AI-created images using pixel-level forensics including frequency analysis, edge coherence, and color distribution patterns — essential for verifying authenticity in an age of synthetic media.',
      benefits: [
        'AI-generated text detection with 7-signal analysis',
        'AI-generated image detection with pixel-level forensics',
        'Vocabulary richness and sentence uniformity scoring',
        'Color histogram and frequency domain analysis',
        'Confidence scoring for all detections',
        'Integrated into every integrity check automatically',
      ],
    },
    {
      id: 'template-matching',
      icon: <LayoutTemplate className="h-8 w-8" />,
      image: '/images/feature-template-matching.png',
      title: 'Document Template Matching',
      shortDesc: 'Compare documents against known formats from major issuers to flag structural deviations.',
      fullDesc: 'Verify that a document matches the expected format from its claimed issuer. Upload a pay stub, bank statement, or tax form and Veriflo compares its structure, field positions, and formatting against a library of verified templates from major issuers. Documents that deviate from the expected format are flagged with specific structural findings.',
      benefits: [
        'Compare against known document templates',
        'Pay stub format verification (ADP, Gusto, Paychex)',
        'Bank statement structure validation',
        'Tax form layout matching (W-2, 1099, P60)',
        'Structural deviation scoring',
        'Custom template support for enterprise',
      ],
    },
    {
      id: 'security',
      icon: <Lock className="h-8 w-8" />,
      image: '/images/feature-security.png',
      title: 'Enterprise Security',
      shortDesc: 'AES-256 encryption, audit logging, team management, and role-based access.',
      fullDesc: 'Enterprise-grade security features ensure your sensitive documents are protected with industry-leading standards. Manage teams securely with role-based access controls, maintain comprehensive audit logs, and encrypt all data in transit and at rest.',
      benefits: [
        'AES-256 encryption in transit and at rest',
        'Comprehensive audit logging',
        'Role-based access controls',
        'Team member management',
        'IP whitelisting and SSO/SAML',
        'HIPAA and GDPR compliance support',
      ],
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Verify Every Document Before You Trust It
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Upload any document and get instant verification. Forensic analysis reveals metadata anomalies, tampering signs, and manipulation attempts — so you can make informed decisions with confidence.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Start Free Trial</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/" className="text-white hover:text-emerald-300">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Details */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {features.map((feature, idx) => (
          <div key={feature.id} className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
            {idx % 2 === 0 ? (
              <>
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{feature.fullDesc}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
                  <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative hidden lg:block order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl blur-3xl opacity-20" />
                  <div className="relative rounded-xl overflow-hidden border border-emerald-500/20">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                  <p className="mt-4 text-lg text-gray-300">{feature.fullDesc}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* What Veriflo Checks */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">What Veriflo Checks</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive verification across multiple forensic dimensions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Metadata Analysis', items: ['Creation dates', 'Modification dates', 'Software signatures'] },
            { title: 'Document Structure', items: ['PDF anomalies', 'Incremental saves', 'Embedded content'] },
            { title: 'Tampering Indicators', items: ['Date inconsistencies', 'Software mismatches', 'Hidden files'] },
            { title: 'AI Detection', items: ['AI-generated text', 'AI-generated images', 'Synthetic document detection'] },
            { title: 'Image Forensics', items: ['EXIF metadata', 'Camera information', 'Pixel-level analysis'] },
            { title: 'Template Matching', items: ['Format verification', 'Structural comparison', 'Issuer validation'] },
          ].map((check, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">{check.title}</h3>
                <ul className="space-y-2">
                  {check.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to verify your documents?</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Start your free trial today. No credit card required.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Get Started Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/how-it-works" className="text-white hover:text-emerald-100">
                How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
