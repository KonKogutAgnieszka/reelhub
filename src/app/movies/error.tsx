'use client';

import { useEffect } from 'react';
import { Button } from '@/src/shared/ui/button';

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
    <Button onClick={reset}>Try again</Button>
  </main>
);
}
