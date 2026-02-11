import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
    default: 'Veriflo - Share Confidential Documents Confidently',
  },
  description: 'Securely share and verify confidential documents with forensic watermarking, leak detection, and audit trails.',
  keywords: ['document sharing', 'confidential', 'watermarking', 'leak detection', 'audit trails', 'secure'],
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
    title: 'Veriflo - Share Confidential Documents Confidently',
    description: 'Securely share and verify confidential documents with forensic watermarking, leak detection, and audit trails.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veriflo - Secure Document Sharing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veriflo - Share Confidential Documents Confidently',
    description: 'Securely share and verify confidential documents with forensic watermarking, leak detection, and audit trails.',
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
