import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Terms of Service - Veriflo',
  description: 'Veriflo Terms of Service - the terms and conditions governing your use of our platform.',
};

export default function TermsPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Terms of Service
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Veriflo ("Service," "Platform," or "Application"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you may not use our Service. We reserve the right to modify these terms at any time, and your continued use of the Service constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license to use the Service for lawful purposes. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to the Service or its systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Remove or obscure any proprietary notices or labels</li>
              <li>Use the Service to transmit malware, viruses, or harmful code</li>
              <li>Reverse engineer, decompile, or attempt to derive the source code</li>
              <li>Use automated tools to scrape or collect data without permission</li>
              <li>Resell, redistribute, or provide unauthorized access to the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Account Registration</h3>
            <p className="mb-4">
              To use certain features, you must create an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your password and for all activities under your account.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Account Responsibilities</h3>
            <p className="mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Notify us immediately of unauthorized access to your account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Maintain accurate account information</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service, including all content, features, and functionality, is owned by Veriflo, its licensors, or other providers and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
            <p className="mb-4">
              By uploading documents to our Service, you retain all rights to your content. However, you grant Veriflo a limited license to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Store and encrypt your documents during analysis</li>
              <li>Perform forensic analysis including metadata extraction and tamper detection</li>
              <li>Generate integrity scores and verification reports</li>
              <li>Collect usage metadata for service improvement</li>
              <li>Provide the Service to you</li>
            </ul>

            <p className="text-sm italic">
              We do NOT use your documents for any purpose other than providing the Service. We do NOT access, view, or use your document content for training AI models or any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Content</h2>
            <p className="mb-4">
              You agree not to upload or share:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Illegal content or content that violates any laws</li>
              <li>Content that infringes on others' intellectual property rights</li>
              <li>Malware, viruses, or harmful code</li>
              <li>Threatening, harassing, or abusive content</li>
              <li>Content depicting illegal activities</li>
              <li>Child sexual abuse material (CSAM)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Pricing and Payment</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Fees</h3>
            <p className="mb-4">
              We offer various pricing plans. All fees are exclusive of applicable taxes unless stated otherwise. Prices are subject to change with 30 days' notice.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Payment Terms</h3>
            <p className="mb-4">
              By providing payment information, you authorize us to charge your account for the Service. Payments are non-refundable except as required by law.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Billing</h3>
            <p className="mb-4">
              We bill you at the beginning of each billing cycle. If your payment fails, we may retry or suspend your account until payment is received.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cancellation and Termination</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Cancellation</h3>
            <p className="mb-4">
              You may cancel your account at any time through your account settings. Cancellation takes effect at the end of your billing cycle.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Termination by Veriflo</h3>
            <p className="mb-4">
              We may terminate or suspend your account if you violate these Terms or engage in illegal activity. Upon termination, your access to the Service will be revoked.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Effect of Termination</h3>
            <p className="mb-4">
              Upon termination, you lose access to your account. We may retain your data as required by law or for legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VERIFLO SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from unauthorized access to your account</li>
              <li>Third-party conduct or content</li>
            </ul>

            <p className="mb-4">
              Our total liability for any claim shall not exceed the amount you paid in the 12 months preceding the claim, or $100, whichever is greater.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Guaranteed verification accuracy or forensic completeness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold Veriflo harmless from any claims, damages, or costs (including attorney fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Content you upload or share</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these sites. Your use of third-party sites is governed by their terms and policies, not ours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Security and Data Protection</h2>
            <p className="mb-4">
              We implement reasonable security measures to protect your information. However, no security system is impenetrable. You acknowledge the inherent risks of internet-based systems and agree that we are not liable for unauthorized access beyond our reasonable control.
            </p>

            <p className="mb-4">
              We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Data loss due to events beyond our control</li>
              <li>Your failure to maintain password security</li>
              <li>Interception of data in transit</li>
              <li>Unauthorized access due to your negligence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Veriflo is located, without regard to its conflict of law provisions.
            </p>

            <p>
              You agree to submit to the exclusive jurisdiction of the courts in that jurisdiction for any disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Dispute Resolution</h2>
            <p className="mb-4">
              Before initiating legal proceedings, we encourage you to contact us to resolve disputes amicably. If a dispute cannot be resolved, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Attempt binding arbitration</li>
              <li>Accept arbitration as the exclusive remedy</li>
              <li>Waive the right to jury trial or class action</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Modifications to Service</h2>
            <p className="mb-4">
              We reserve the right to modify, suspend, or discontinue the Service at any time. We will provide notice of material changes when feasible, but we are not liable for any disruption or discontinuation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
            <p>
              These Terms and our Privacy Policy constitute the entire agreement between you and Veriflo. Any previous agreements, understandings, or negotiations are superseded by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it valid, and the remaining provisions will continue in full force.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">18. Waiver</h2>
            <p>
              Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision. Any waiver must be in writing and signed by Veriflo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">19. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms, please contact us:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 space-y-2">
              <p>
                <strong>Veriflo, Inc.</strong>
              </p>
              <p>
                Email: legal@veriflo.com
              </p>
              <p>
                Website: www.veriflo.com
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h2>
          <p className="text-gray-300 mb-8">
            Contact our legal team at legal@veriflo.com
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="primary">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/privacy" className="text-white hover:text-blue-300">
                View Privacy Policy
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
