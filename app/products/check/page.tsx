import React from 'react';
import Link from 'next/link';
import { Shield, ShieldCheck, Search, FileSearch, BarChart3, AlertTriangle, Zap, Eye, CheckCircle, ArrowRight, Lock, Database, FileText, Brain, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://app.useveriflo.com';

export const metadata = {
  title: 'Veriflo Check - Document Verification & Fraud Detection',
  description: 'Banks, insurers, landlords, and legal teams use Veriflo Check to verify documents, detect forgeries, identify AI-generated content, and catch tampering before making critical decisions.',
};

export default function CheckPage() {
  const verificationEngines = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Integrity Scoring',
      description: 'Get a 0-100 score with clear risk categorization: Clean, Low, Medium, High, or Critical. Instant risk assessment for every document.',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Metadata Forensics',
      description: 'Analyze creation dates, modification history, software signatures, and document lineage. Spot fake metadata and suspicious modification patterns.',
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Tamper Detection',
      description: 'Detect font swaps, structural anomalies, content manipulation, and incremental saves. Catch sophisticated forgeries that fool the human eye.',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Content Detection',
      description: '8-signal image analysis with Error Level Analysis (ELA) and copy-move detection, plus AI text detection via GPTZero. Catch ChatGPT, Claude, Midjourney, and DALL-E generated content.',
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Template Matching',
      description: 'Match against 15+ known templates: Chase Bank statements, ADP pay stubs, and more. Instant identification of forged financial documents.',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Image Forensics',
      description: 'Error Level Analysis (ELA), JPEG artifacts, noise patterns, and GAN detection. Identify altered, spliced, or AI-generated images.',
    },
  ];

  const useCases = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Mortgage Lenders',
      description: 'Verify pay stubs, bank statements, and tax returns before approving loans. Catch forged financial documents that cost hundreds of thousands.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Property Managers',
      description: 'Check income letters, employment verification, and rental history documents. Prevent fraudulent tenants from accessing properties.',
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Insurance Underwriters',
      description: 'Validate claims documentation, medical records, and proof of loss. Stop insurance fraud before paying false claims.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Legal Teams',
      description: 'Authenticate contracts, evidence documents, and discovery materials. Ensure case materials haven\'t been secretly modified.',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'HR Departments',
      description: 'Verify employment histories, educational credentials, and background checks. Catch falsified resumes and diploma fraud.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Compliance Officers',
      description: 'Ensure regulatory documents, audit reports, and certifications are genuine. Meet audit requirements with forensic verification.',
    },
  ];

  return (
    <div className="space-y-20 py-20 bg-slate-950">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Verify Every Document You Receive
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Banks, insurers, landlords, and legal teams use Veriflo Check to detect forged documents, AI-generated content, and hidden tampering before making critical decisions.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button asChild size="lg" variant="primary">
                <a href={`/pricing#contact`}>Start Verifying Free</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="/how-it-works" className="text-white hover:text-emerald-300">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Card with Integrity Score */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Sample Verification Report</h3>
                  <p className="text-sm text-gray-400">Chase Bank Statement. Uploaded 2 minutes ago</p>
                </div>

                <div className="mb-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <div className="flex items-baseline gap-3 mb-2">
                    <div className="text-5xl font-bold text-emerald-400">87</div>
                    <div className="text-lg font-semibold text-emerald-300">/ 100</div>
                  </div>
                  <p className="text-sm text-emerald-200 font-medium">Integrity Score: Low Risk</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Metadata Authentic</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Structure Valid</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">No AI Content Detected</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Image Analysis Clean</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Template Match: Chase</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Document Fraud is a $42 Billion Problem</h2>
          <p className="mt-4 text-xl text-gray-400">
            Fraudsters are getting smarter. Your team needs better tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/50">
            <CardContent className="pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Manual Review Fails</h3>
              <p className="mt-3 text-gray-300">
                Your team eyeballs documents and misses sophisticated forgeries. Fake pay stubs, altered bank statements, and AI-generated content look identical to the real thing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/50">
            <CardContent className="pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 mb-6">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Fraud is Getting Smarter</h3>
              <p className="mt-3 text-gray-300">
                AI tools can generate realistic financial documents in seconds. Traditional checks can't keep up with synthetic content that passes human inspection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/50">
            <CardContent className="pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 mb-6">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">The Cost of a Bad Decision</h3>
              <p className="mt-3 text-gray-300">
                One fraudulent document leads to bad loans, wrongful approvals, legal exposure, and compliance violations that cost 10-100x the document's face value.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Check Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How Veriflo Check Works</h2>
          <p className="mt-4 text-xl text-gray-400">
            Three simple steps to verify any document
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <FileSearch className="h-8 w-8 text-emerald-400" />,
              title: 'Upload Any Document',
              description: 'Drop PDFs, images, or Office files. Veriflo accepts all common document formats.',
            },
            {
              icon: <Zap className="h-8 w-8 text-emerald-400" />,
              title: 'Automated Forensic Analysis',
              description: 'Six verification engines run simultaneously: metadata forensics, tamper detection, AI-content detection, image forensics, template matching, and structural analysis.',
            },
            {
              icon: <ShieldCheck className="h-8 w-8 text-emerald-400" />,
              title: 'Integrity Score & Report',
              description: 'Get a 0-100 score with risk level, detailed findings, and a downloadable PDF report you can attach to your records.',
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Six Verification Engines */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Six Verification Engines</h2>
          <p className="mt-4 text-xl text-gray-400">
            Advanced forensic analysis to catch every type of fraud
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {verificationEngines.map((engine, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-6">
                  {engine.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{engine.title}</h3>
                <p className="mt-3 text-gray-300">{engine.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Verify by Email */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-900">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">New</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Verify Without Leaving Email</h3>
              <p className="text-gray-300 mb-6">
                Forward any document to <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">check@useveriflo.com</span> and receive a full verification report in minutes. No login, no app, no signup required.
              </p>
              <div className="space-y-3 mb-8">
                {['Works with any email client: Gmail, Outlook, Apple Mail', 'Instant forensic analysis and integrity scoring', 'PDF verification report delivered to your inbox', 'Supports all document types: PDF, images, Office files'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" variant="primary">
                <a href="mailto:check@useveriflo.com">
                  Try Email Verification <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="text-xs text-gray-500 ml-2">Email</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-gray-500 shrink-0">To:</span>
                    <span className="text-emerald-400 font-mono">check@useveriflo.com</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-500 shrink-0">Subject:</span>
                    <span className="text-gray-300">Please verify this invoice</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3 text-gray-400">
                    Hi, can you verify the attached document?
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-700/50 p-3">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300 text-xs">invoice-march-2026.pdf</span>
                    <span className="text-gray-500 text-xs ml-auto">2.4 MB</span>
                  </div>
                </div>
                <div className="mt-4 border-t border-emerald-500/20 pt-4">
                  <div className="text-xs text-emerald-400 font-semibold mb-2">VERIFLO REPLY</div>
                  <div className="text-xs text-gray-400">
                    Your verification report is ready. Score: <span className="text-emerald-400 font-bold">84/100</span> (Low Risk). Full PDF report attached.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity Scoring System */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Risk Assessment at a Glance</h2>
          <p className="mt-4 text-xl text-gray-400">
            Clear scoring so you know exactly what to do with each document
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            {
              score: '80-100',
              label: 'Clean',
              color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20',
              description: 'No tampering detected. Safe to approve.',
            },
            {
              score: '60-79',
              label: 'Low Risk',
              color: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
              description: 'Minor inconsistencies. Worth a quick review.',
            },
            {
              score: '40-59',
              label: 'Medium Risk',
              color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20',
              description: 'Investigate before proceeding.',
            },
            {
              score: '20-39',
              label: 'High Risk',
              color: 'bg-orange-500/20 text-orange-400 border-orange-500/20',
              description: 'Strong signs of fraud. Do not trust.',
            },
            {
              score: '0-19',
              label: 'Critical',
              color: 'bg-red-500/20 text-red-400 border-red-500/20',
              description: 'Clear evidence of tampering. Reject.',
            },
          ].map((level, idx) => (
            <div key={idx} className={`rounded-lg border p-6 ${level.color}`}>
              <div className="text-2xl font-bold mb-2">{level.score}</div>
              <div className="text-sm font-semibold mb-3">{level.label}</div>
              <p className="text-xs text-gray-300">{level.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Uses Check */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Who Uses Veriflo Check</h2>
          <p className="mt-4 text-xl text-gray-400">
            Trusted by institutions that can't afford to make mistakes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/50">
              <CardContent className="pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-3 text-gray-300">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* API Access Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">API Access for Enterprise</h2>
            <p className="text-gray-300 mb-6">
              Integrate document verification directly into your workflow. Our REST API makes it simple to add forensic verification to any application.
            </p>
            <p className="text-gray-400 mb-8">
              100+ document checks per month on the Pro plan. Unlimited on Enterprise. Same verification engines, same accuracy, now programmatic.
            </p>
            <Button asChild size="lg" variant="ghost">
              <a href="/pricing" className="text-emerald-400 hover:text-emerald-300">
                View API Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-20" />
            <Card className="border-slate-800 bg-slate-900/50 relative">
              <CardContent className="pt-8 pb-8">
                <div className="text-sm font-mono text-gray-400 space-y-4 overflow-x-auto">
                  <div className="text-emerald-400">$ curl -X POST https://api.useveriflo.com/v1/verify</div>
                  <div className="text-gray-400">-H "Authorization: Bearer vf_your_api_key"</div>
                  <div className="text-gray-400">-F "file=@document.pdf"</div>
                  <div className="mt-6 border-t border-slate-700 pt-6">
                    <div className="text-emerald-400 text-xs mb-2">RESPONSE</div>
                    <div className="text-gray-300 space-y-1 text-xs">
                      <div>{"{"}</div>
                      <div className="ml-4">"integrity_score": 87,</div>
                      <div className="ml-4">"risk_level": "low",</div>
                      <div className="ml-4">"findings": {"{"}</div>
                      <div className="ml-8">"metadata": "authentic",</div>
                      <div className="ml-8">"ai_content": false,</div>
                      <div className="ml-8">"tampering": false</div>
                      <div className="ml-4">{"}"}</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 p-12">
          <h2 className="text-3xl font-bold text-white">Stop Trusting Documents Blindly</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Try Veriflo Check free. Verify your first document in under 30 seconds. No credit card required.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="primary">
              <a href={`/pricing#contact`}>Start Verifying Free</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="/pricing" className="text-white hover:text-emerald-100">
                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-sell Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-800 p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-3xl opacity-10" />
          <div className="relative max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Also available: Veriflo Seal
            </h3>
            <p className="text-gray-300 mb-6">
              While Check verifies the documents you receive, Protect proves the documents you send are authentic. Give recipients confidence with shareable verification links and forensic proof.
            </p>
            <Button asChild variant="ghost">
              <Link href="/products/protect" className="text-emerald-400 hover:text-emerald-300">
                Learn about Veriflo Seal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
