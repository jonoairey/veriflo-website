import React from 'react';
import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found - Veriflo',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-slate-800 p-4 border border-slate-700">
            <FileQuestion className="h-8 w-8 text-slate-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Page not found</h1>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
