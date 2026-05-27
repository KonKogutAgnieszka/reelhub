'use client';

import { useMovieFilters } from '@/src/features/movies/hooks/use-movie-filters';
import { Button } from '@/src/shared/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const { updateFilter } = useMovieFilters();

  const maxPage = Math.min(totalPages, 500);
  if (maxPage <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="secondary"
        onClick={() => updateFilter('page', String(currentPage - 1))}
        disabled={currentPage <= 1}
      >
        Previous
      </Button>

      <span className="text-sm text-gray-600">
        Page {currentPage} of {maxPage}
      </span>

      <Button
        variant="secondary"
        onClick={() => updateFilter('page', String(currentPage + 1))}
        disabled={currentPage >= maxPage}
      >
        Next
      </Button>
    </nav>
  );
}
