import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/marketing/navbar';
import { Footer } from '@/components/marketing/footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.useveriflo.com'),
  title: {
    template: '%s | Veriflo',
    default: 'Veriflo - Document Verification Platform',
  },
  description: 'Verify incoming documents for tampering, fraud, and AI-generated content. Instant integrity scoring with forensic analysis.',
  keywords: ['document verification', 'tamper detection', 'integrity scoring', 'AI content detection', 'metadata forensics', 'document fraud'],
  authors: [{ name: 'Veriflo' }],
  creator: 'Veriflo',
  publisher: 'Veriflo',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.useveriflo.com',
    siteName: 'Veriflo',
    title: 'Veriflo - Document Verification Platform',
    description: 'Verify incoming documents for tampering, fraud, and AI-generated content. Instant integrity scoring with forensic analysis.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veriflo - Document Verification Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veriflo - Document Verification Platform',
    description: 'Verify incoming documents for tampering, fraud, and AI-generated content. Instant integrity scoring with forensic analysis.',
    images: ['/og-image.png'],
  },
  applicationName: 'Veriflo',
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PH055LY3B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6PH055LY3B');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-slate-950 text-white">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
