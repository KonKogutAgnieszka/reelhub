import Link from 'next/link';

export default function MovieNotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2">Movie not found</h2>
      <p className="text-gray-600 mb-6">This movie doesn&apos;t exist or has been removed.</p>
      <Link href="/movies" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Back to movies
      </Link>
    </main>
  );
}
