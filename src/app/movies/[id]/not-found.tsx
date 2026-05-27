import { ButtonLink } from '@/src/shared/ui/button-link';

export default function MovieNotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2">Movie not found</h2>
      <p className="text-gray-600 mb-6">This movie doesn&apos;t exist or has been removed.</p>
      <ButtonLink href="/movies">Back to movies</ButtonLink>
    </main>
  );
}
