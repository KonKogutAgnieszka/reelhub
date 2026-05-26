'use client';

import { useEffect } from 'react';

interface MoviesErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MoviesError({ error, reset }: MoviesErrorProps) {
  useEffect(() => {
    console.error('Movies page error:', error);
  }, [error]);

  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-6">We couldn&apos;t load the movies. Please try again.</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}
