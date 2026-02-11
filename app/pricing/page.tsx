import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Pricing - Veriflo | Simple, Transparent Plans',
  description: 'Choose the perfect plan for your document security needs. Free, Pro, or Enterprise options with no hidden fees.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect to get started',
      cta: 'Start Free',
      ctaHref: 'https://app.useveriflo.com/signup',
      features: [
        { name: '5 documents', included: true },
        { name: '10 distributions/mo', included: true },
        { name: 'Basic fingerprinting', included: true },
        { name: 'Email support', included: true },
        { name: 'Real-time tracking', included: false },
        { name: 'Leak verification', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Advanced analytics', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'For growing teams',
      popular: true,
      cta: 'Start Pro Trial',
      ctaHref: 'https://app.useveriflo.com/signup',
      features: [
        { name: '100 documents', included: true },
        { name: '500 distributions/mo', included: true },
        { name: 'Full fingerprinting', included: true },
        { name: 'Priority support', included: true },
        { name: 'Real-time tracking', included: true },
        { name: 'Leak verification', included: true },
        { name: 'Team collaboration (5 seats)', included: true },
        { name: 'Advanced analytics', included: true },
      ],
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For organizations',
      cta: 'Contact Sales',
      ctaHref: 'https://app.useveriflo.com/signup',
      features: [
        { name: 'Unlimited documents', included: true },
        { name: 'Unlimited distributions', included: true },
        { name: 'All fingerprinting features', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Real-time tracking & alerts', included: true },
        { name: 'Leak verification & reporting', included: true },
        { name: 'Team collaboration (25 seats)', included: true },
        { name: 'Custom branding & API', included: true },
      ],
    },
  ];

  const faqs = [
    {
      q: 'Can I change plans anytime?',
      a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate your billing.',
    },
    {
      q: 'What happens to my documents if I cancel?',
      a: 'Your documents remain secure and accessible for 30 days after cancellation. We\'ll send reminders if you want to export or download them.',
    },
    {
      q: 'Do you offer annual billing discounts?',
      a: 'Yes! Annual plans save you 20% compared to monthly billing. Contact us for custom annual pricing.',
    },
    {
      q: 'What does "distributions" mean?',
      a: 'Each unique share link sent to a recipient counts as one distribution. For example, sending the same document to 5 people uses 5 distributions.',
    },
    {
      q: 'Is there a free trial for Pro or Enterprise?',
      a: 'Pro includes a 14-day free trial. Enterprise plans include a custom trial period - contact our sales team.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards, PayPal, and ACH transfers for enterprise customers.',
    },
  ];

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Choose the plan that fits your needs. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`transform transition-all ${plan.popular ? 'scale-105 md:scale-110' : ''}`}
            >
              <Card
                className={`border-slate-800 h-full flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-500/20 to-slate-900/50 border-blue-500/50'
                    : 'bg-slate-900/50'
                }`}
              >
                <CardContent className="pt-8 flex flex-col h-full">
                  {plan.popular && (
                    <div className="mb-4 inline-block bg-blue-500/20 border border-blue-500/50 rounded-full px-3 py-1 text-xs font-semibold text-blue-300 w-fit">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-gray-400">{plan.description}</p>

                  <div className="mt-6 mb-8">
                    <div className="text-4xl font-bold text-white">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full mb-8"
                    asChild
                  >
                    <a href={plan.ctaHref}>{plan.cta}</a>
                  </Button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-slate-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Detailed Feature Comparison</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-white">Free</th>
                <th className="text-center py-4 px-4 font-semibold text-white">Pro</th>
                <th className="text-center py-4 px-4 font-semibold text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { feature: 'Documents', free: '5', pro: '100', enterprise: 'Unlimited' },
                { feature: 'Distributions/month', free: '10', pro: '500', enterprise: 'Unlimited' },
                { feature: 'Team seats', free: '1', pro: '5', enterprise: '25+' },
                { feature: 'Invisible fingerprinting', free: '✓', pro: '✓', enterprise: '✓' },
                { feature: 'Secure sharing links', free: '✓', pro: '✓', enterprise: '✓' },
                { feature: 'Real-time tracking', free: '✗', pro: '✓', enterprise: '✓' },
                { feature: 'Leak verification', free: '✗', pro: '✓', enterprise: '✓' },
                { feature: 'Access revocation', free: '✗', pro: '✓', enterprise: '✓' },
                { feature: 'Team collaboration', free: '✗', pro: '✓', enterprise: '✓' },
                { feature: 'Advanced analytics', free: '✗', pro: '✓', enterprise: '✓' },
                { feature: 'Custom branding', free: '✗', pro: '✗', enterprise: '✓' },
                { feature: 'API access', free: '✗', pro: '✗', enterprise: '✓' },
                { feature: 'SSO/SAML', free: '✗', pro: '✗', enterprise: '✓' },
                { feature: 'Dedicated support', free: '✗', pro: '✗', enterprise: '✓' },
                { feature: 'SLA guarantee', free: '✗', pro: '✗', enterprise: '✓' },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="py-4 px-4 text-gray-300 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-gray-300">{row.free}</td>
                  <td className="py-4 px-4 text-center text-gray-300">{row.pro}</td>
                  <td className="py-4 px-4 text-center text-gray-300">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
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

      {/* Enterprise CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-800 bg-slate-900/50">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a custom plan?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We offer custom pricing for large organizations with specific requirements. Our team is here to help.
            </p>
            <Button asChild size="lg" variant="primary">
              <a href="https://app.useveriflo.com/signup">Contact Sales</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 p-12">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Start with our Free plan. No credit card required.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
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
