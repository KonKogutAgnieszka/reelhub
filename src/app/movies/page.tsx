import { fetchMovies } from '@/src/features/movies/api/movies.queries';
import { MovieGrid } from '@/src/features/movies/components/movie-grid';
import { MovieFilters } from '@/src/features/movies/components/movie-filters';

interface MoviesPageProps {
  searchParams: Promise<{
    sort?: string;
    genre?: string;
    year?: string;
    query?: string;
    page?: string;
  }>;
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const params = await searchParams;

  const data = await fetchMovies({
    sortBy: params.sort,
    withGenres: params.genre,
    page: params.page ? Number(params.page) : 1,
    query: params.query,
    year: params.year ? Number(params.year) : undefined,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Movies</h1>
        <p className="text-sm text-gray-500 mt-1">
          Showing {data.results.length} of {data.totalResults} results
        </p>
      </header>
      <MovieFilters />
      <MovieGrid movies={data.results} />
    </main>
  );
}
