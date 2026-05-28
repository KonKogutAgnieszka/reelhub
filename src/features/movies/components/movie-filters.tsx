'use client';

import { useDebouncedCallback } from 'use-debounce';

import { useMovieFilters } from '../hooks/use-movie-filters';
import { Select } from '@/src/shared/ui/select';
import { MultiSelect } from '@/src/shared/ui/multi-select';
import { SearchInput } from '@/src/shared/ui/search-input';
import { Button } from '@/src/shared/ui/button';

const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Most Popular' },
  { value: 'vote_average.desc', label: 'Top Rated' },
  { value: 'release_date.desc', label: 'Newest' },
  { value: 'release_date.asc', label: 'Oldest' },
];

const GENRE_OPTIONS = [
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
  const { sort, genre, year, query, updateFilter, resetFilters } = useMovieFilters();

  const handleSearch = useDebouncedCallback((value: string) => {
    updateFilter('query', value || undefined);
  }, 300);

  const hasFilters = !!(sort !== 'popularity.desc' && sort) || !!genre || !!year || !!query;

  return (
    <div className="mb-6">
      <SearchInput defaultValue={query} onChange={handleSearch} placeholder="Search movies..." />
      <div className="flex flex-wrap gap-3 mt-4 mb-6">
        <p>Add filters: </p>
        <Select
          value={sort}
          onChange={(value) => updateFilter('sort', value)}
          options={SORT_OPTIONS}
          ariaLabel="Sort movies"
        />
        <MultiSelect
          values={genre ? genre.split(',') : []}
          onChange={(values) => updateFilter('genre', values.length ? values.join(',') : undefined)}
          options={GENRE_OPTIONS}
          ariaLabel="Filter by genre"
          placeholder="All Genres"
        />
        <Select
          value={year}
          onChange={(value) => updateFilter('year', value || undefined)}
          options={YEAR_OPTIONS}
          ariaLabel="Filter by year"
        />
        {hasFilters && (
          <Button variant="secondary" onClick={resetFilters}>
            Reset filters
          </Button>
        )}
      </div>
    </div>
  );
}
