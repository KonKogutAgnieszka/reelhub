'use client';

import { useDebouncedCallback } from 'use-debounce';

import { useMovieFilters } from '../hooks/use-movie-filters';
import { Select } from '@/src/shared/ui/select';
import { SearchInput } from '@/src/shared/ui/search-input';

const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Most Popular' },
  { value: 'vote_average.desc', label: 'Top Rated' },
  { value: 'release_date.desc', label: 'Newest' },
  { value: 'release_date.asc', label: 'Oldest' },
];

const GENRE_OPTIONS = [
  { value: '', label: 'All Genres' },
  { value: '28', label: 'Action' },
  { value: '35', label: 'Comedy' },
  { value: '18', label: 'Drama' },
  { value: '27', label: 'Horror' },
  { value: '10749', label: 'Romance' },
  { value: '878', label: 'Sci-Fi' },
  { value: '16', label: 'Animation' },
];

const YEAR_OPTIONS = [
  { value: '', label: 'All Years' },
  ...Array.from({ length: 50 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: String(year), label: String(year) };
  }),
];

export function MovieFilters() {
  const { sort, genre, year, query, updateFilter } = useMovieFilters();

  const handleSearch = useDebouncedCallback((value: string) => {
    updateFilter('query', value || undefined);
  }, 300);

  return (
    <div className="mb-6 max-w-xl">
      <SearchInput defaultValue={query} onChange={handleSearch} placeholder="Search movies..." />
      <div className="flex flex-wrap gap-3 mt-4 mb-6">
        <p>Add filters: </p>
        <Select
          value={sort}
          onChange={(value) => updateFilter('sort', value)}
          options={SORT_OPTIONS}
          ariaLabel="Sort movies"
        />
        <Select
          value={genre}
          onChange={(value) => updateFilter('genre', value || undefined)}
          options={GENRE_OPTIONS}
          ariaLabel="Filter by genre"
        />
        <Select
          value={year}
          onChange={(value) => updateFilter('year', value || undefined)}
          options={YEAR_OPTIONS}
          ariaLabel="Filter by year"
        />
      </div>
    </div>
  );
}
