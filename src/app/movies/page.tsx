import { fetchMovies } from '@/src/features/movies/api/movies.queries';
import { MovieGrid } from '@/src/features/movies/components/movie-grid';

export default async function MoviesPage() {
  const data = await fetchMovies();

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Movies</h1>
        <p className="text-sm text-gray-500 mt-1">
          Showing {data.results.length} of {data.totalResults} results
        </p>
      </header>
      <MovieGrid movies={data.results} />
    </main>
  );
}
