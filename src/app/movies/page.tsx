import { fetchMovies } from '@/src/features/movies/api/movies.queries';
import { MovieGrid } from '@/src/features/movies/components/movie-grid';
import { MovieFilters } from '@/src/features/movies/components/movie-filters';
import { Pagination } from '@/src/features/movies/components/pagination';

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
    <>
      <p className="text-sm text-gray-500 mb-6" aria-live="polite" aria-atomic="true">
        Showing {data.results.length} of {data.totalResults} results
      </p>
      <MovieGrid movies={data.results} />
      <Pagination key={data.page} currentPage={data.page} totalPages={data.totalPages} />
    </>
  );
}
