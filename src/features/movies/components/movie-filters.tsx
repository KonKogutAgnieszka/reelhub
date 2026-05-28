'use client';

import { useState } from 'react';
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

const CURRENT_YEAR = new Date().getFullYear();

const YEAR_OPTIONS = [
  { value: '', label: 'All Years' },
  ...Array.from({ length: 50 }, (_, i) => {
    const year = CURRENT_YEAR - i;
    return { value: String(year), label: String(year) };
  }),
];

export function MovieFilters() {
  const { sort, genre, year, query, updateFilter, resetFilters } = useMovieFilters();

  const [searchValue, setSearchValue] = useState(query ?? '');
  const [prevQuery, setPrevQuery] = useState(query ?? '');

  if (query !== prevQuery) {
    setPrevQuery(query ?? '');
    setSearchValue(query ?? '');
  }

  const isSearchMode = !!searchValue.trim();

  const debouncedUpdateQuery = useDebouncedCallback((value: string) => {
    updateFilter('query', value || undefined);
  }, 300);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    debouncedUpdateQuery(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    debouncedUpdateQuery.cancel();
    updateFilter('query', undefined);
  };

  const hasFilters = (sort && sort !== 'popularity.desc') || !!genre || !!year;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <SearchInput
          value={searchValue}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
          placeholder="Search movies..."
        />
      </div>

      <div className="mt-4 mb-2 flex flex-wrap items-center gap-3">
        <p className="text-sm font-medium text-gray-300">Filters:</p>

        <Select
          value={sort}
          onChange={(value) => updateFilter('sort', value)}
          options={SORT_OPTIONS}
          ariaLabel="Sort movies"
          disabled={isSearchMode}
        />

        <MultiSelect
          values={genre ? genre.split(',') : []}
          onChange={(values) => updateFilter('genre', values.length ? values.join(',') : undefined)}
          options={GENRE_OPTIONS}
          ariaLabel="Filter by genre"
          placeholder="All Genres"
          disabled={isSearchMode}
        />

        <Select
          value={year}
          onChange={(value) => updateFilter('year', value || undefined)}
          options={YEAR_OPTIONS}
          ariaLabel="Filter by year"
        />

        <Button variant="secondary" onClick={resetFilters} disabled={!hasFilters}>
          Reset filters
        </Button>
      </div>

      {isSearchMode && (
        <p className="text-xs text-gray-400">Search mode disables sorting and genre filters.</p>
      )}
    </div>
  );
}
