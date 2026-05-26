'use client';

import { useMovieFilters } from '@/src/features/movies/hooks/use-movie-filters';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const { updateFilter } = useMovieFilters();

  const maxPage = Math.min(totalPages, 500);
  if (maxPage <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => updateFilter('page', String(currentPage - 1))}
        disabled={currentPage <= 1}
        className="px-4 py-2 text-sm border rounded disabled:opacity-40 hover:bg-gray-100"
      >
        Previous
      </button>

      <span className="text-sm text-gray-600">
        Page {currentPage} of {maxPage}
      </span>

      <button
        onClick={() => updateFilter('page', String(currentPage + 1))}
        disabled={currentPage >= maxPage}
        className="px-4 py-2 text-sm border rounded disabled:opacity-40 hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}
