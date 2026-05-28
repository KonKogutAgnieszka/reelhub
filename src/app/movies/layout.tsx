import { MovieFilters } from '@/src/features/movies/components/movie-filters';

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container max-w-7xl mx-auto px-4 py-4 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Movies</h1>
      </header>
      <div className="min-h-30">
        <MovieFilters />
      </div>
      {children}
    </main>
  );
}
