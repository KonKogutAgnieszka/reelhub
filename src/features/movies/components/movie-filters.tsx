'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useMovieFilters } from '../hooks/use-movie-filters';

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
  ...Array.from({ length: 10 }, (_, i) => {
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
    <div className="flex gap-3 mb-6">
      <input
        type="search"
        placeholder="Search movies..."
        defaultValue={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded px-3 py-1.5 text-sm bg-white w-64"
      />

      <select
        value={sort}
        onChange={(e) => updateFilter('sort', e.target.value)}
        className="border rounded px-3 py-1.5 text-sm bg-white"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={genre}
        onChange={(e) => updateFilter('genre', e.target.value)}
        className="border rounded px-3 py-1.5 text-sm bg-white"
      >
        {GENRE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => updateFilter('year', e.target.value || undefined)}
        className="border rounded px-3 py-1.5 text-sm bg-white"
      >
        {YEAR_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
