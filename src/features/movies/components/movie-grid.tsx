import type { Movie } from '../types/movie';
import { MovieCard } from './movie-card';

interface MovieGridProps {
  movies: Movie[];
}

export function MovieGrid({ movies }: MovieGridProps) {
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">
        No movies found. Try adjusting your filters.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
