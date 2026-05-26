'use client';

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

export function MovieFilters() {
  const { sort, genre, updateFilter } = useMovieFilters();

  return (
    <div className="flex gap-3 mb-6">
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
    </div>
  );
}
