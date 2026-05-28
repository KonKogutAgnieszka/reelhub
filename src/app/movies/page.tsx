import { Suspense } from 'react';
import MoviesContent from './movies-content';

export default function MoviesPage() {
  return (
    <Suspense>
      <MoviesContent />
    </Suspense>
  );
}
