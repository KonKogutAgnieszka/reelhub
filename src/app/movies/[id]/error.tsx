'use client';

import { useEffect } from 'react';
import { Button } from '@/src/shared/ui/button';
import { ButtonLink } from '@/src/shared/ui/button-link';

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
        <Button onClick={reset}>Try again</Button>
        <ButtonLink href="/movies" variant="secondary">
          Back to movies
        </ButtonLink>
      </div>
    </main>
  );
}
