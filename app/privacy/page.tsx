import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Privacy Policy - Veriflo',
  description: 'Veriflo Privacy Policy - how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Last updated: February 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Veriflo ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, application, and services (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Service. By accessing and using Veriflo, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
            <p className="mb-4">
              We collect personal information that you voluntarily provide, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Account information (name, email address, company name, password)</li>
              <li>Payment information (credit card, billing address)</li>
              <li>Profile information (job title, company size, industry)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              We automatically collect certain information about your device and usage:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Log data (access times, error reports)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Document Information</h3>
            <p className="mb-4">
              Regarding documents you share through our Service:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>We do NOT store or access the content of your documents</li>
              <li>We ONLY collect metadata about access (who accessed when and from where)</li>
              <li>Documents are encrypted end-to-end with your encryption keys</li>
              <li>We cannot decrypt or view document contents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected information for:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Providing and improving the Service</li>
              <li>Processing transactions and sending related information</li>
              <li>Email correspondence and customer support</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Complying with legal obligations</li>
              <li>Personalizing and improving your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information in these circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Vendors who assist us in operating our website and conducting our business</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Consent:</strong> With your explicit consent for other purposes</li>
            </ul>

            <p className="text-sm italic">
              We maintain strict confidentiality agreements with all third parties to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS/SSL encryption for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure password management policies</li>
            </ul>

            <p className="text-sm italic">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <p className="mb-4">
              To exercise these rights, please contact us at privacy@veriflo.com. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience, remember your preferences, and understand how you use our Service.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Essential:</strong> Required for basic functionality</li>
              <li><strong>Performance:</strong> Track how you use the Service</li>
              <li><strong>Functional:</strong> Remember your preferences</li>
              <li><strong>Marketing:</strong> Deliver targeted advertisements</li>
            </ul>

            <p className="mb-4">
              You can control cookie settings through your browser. Disabling cookies may affect Service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to, stored in, and processed in countries other than your country of residence, which may have different data protection laws. By using Veriflo, you consent to the transfer of your information to countries outside your country of residence.
            </p>

            <p>
              For EU residents, we implement Standard Contractual Clauses to ensure adequate protection for international data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p>
              Our Service is not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by email or prominent notice on our website.
            </p>

            <p>
              Your continued use of the Service following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 space-y-2">
              <p>
                <strong>Veriflo, Inc.</strong>
              </p>
              <p>
                Email: privacy@veriflo.com
              </p>
              <p>
                Website: www.veriflo.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. California Privacy Rights</h2>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether personal information is sold or disclosed</li>
              <li>Right to say no to the sale of personal information</li>
              <li>Right to delete personal information collected</li>
              <li>Right to be notified of changes to this policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. GDPR Compliance</h2>
            <p className="mb-4">
              If you are located in the European Union, we process your information in compliance with the General Data Protection Regulation (GDPR). You have rights including access, rectification, erasure, and data portability. For more information, contact our Data Protection Officer at dpo@veriflo.com.
            </p>
          </section>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Privacy Practices?</h2>
          <p className="text-gray-300 mb-8">
            Contact our privacy team at privacy@veriflo.com
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="primary">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/terms" className="text-white hover:text-blue-300">
                View Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
