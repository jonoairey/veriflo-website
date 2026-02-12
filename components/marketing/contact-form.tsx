'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/hello@useveriflo.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${formData.get('firstName')} ${formData.get('lastName')}`,
          email: formData.get('email'),
          company: formData.get('company') || 'Not provided',
          message: formData.get('message'),
          _subject: 'New Veriflo Contact Form Submission',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Thanks for reaching out</h3>
        <p className="mt-3 text-gray-400">
          We&apos;ll be in touch within one business day to discuss how Veriflo can help your team.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 space-y-5"
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1.5">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
          Work email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors resize-none"
          placeholder="Tell us about your document verification needs..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? (
          'Sending...'
        ) : (
          <>
            Send Message <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {error && (
        <p className="text-sm text-red-400 text-center">{error}</p>
      )}

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll respond within one business day. No spam, ever.
      </p>
    </form>
  );
}
