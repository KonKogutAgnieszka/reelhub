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

  if (isLoading || !data)
    return (
      <>
        <div className="flex gap-1 mb-6">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
        <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <li key={i} className="h-44 bg-gray-600 rounded-lg animate-pulse" />
          ))}
        </ul>
      </>
    );

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
