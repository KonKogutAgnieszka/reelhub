'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface MovieErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MovieError({ error, reset }: MovieErrorProps) {
  useEffect(() => {
    console.error('Movie page error:', error);
  }, [error]);

  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-6">We couldn&apos;t load this movie. Please try again.</p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try again
        </button>
        <Link href="/movies" className="px-4 py-2 border rounded hover:bg-gray-100">
          Back to movies
        </Link>
      </div>
    </main>
  );
}
