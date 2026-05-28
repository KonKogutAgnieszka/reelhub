'use client';

import { useMovieFilters } from '@/src/features/movies/hooks/use-movie-filters';
import { useMovies } from '@/src/features/movies/hooks/use-movies';
import { MovieGrid } from '@/src/features/movies/components/movie-grid';
import { Pagination } from '@/src/features/movies/components/pagination';

export default function MoviesPage() {
  const { sort, genre, year, query, page } = useMovieFilters();

  const { data, isLoading, isPlaceholderData } = useMovies({
    sortBy: sort || undefined,
    withGenres: genre || undefined,
    page,
    query: query || undefined,
    year: year ? Number(year) : undefined,
  });

  if (isLoading || !data) return null;

  return (
    <>
      <p className="text-sm text-gray-500 mb-6" aria-live="polite" aria-atomic="true">
        Showing {data.results.length} of {data.totalResults} results
      </p>
      <div className={isPlaceholderData ? 'opacity-50' : ''}>
        <MovieGrid movies={data.results} />
      </div>
      <Pagination
        key={data?.page}
        currentPage={data?.page ?? 1}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  );
}
