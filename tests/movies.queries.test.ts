import { describe, it, expect } from 'vitest';
import { mapMovie } from '@/src/features/movies/api/movies.queries';

const rawMovie = {
  id: 640146,
  title: 'Ant-Man and the Wasp: Quantumania',
  overview: 'Super-Hero partners Scott Lang and Hope van Dyne...',
  poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
  backdrop_path: '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
  release_date: '2023-02-15',
  vote_average: 6.5,
  vote_count: 1856,
  popularity: 9272.643,
  genre_ids: [28, 12, 878],
};

describe('mapMovie', () => {
  it('maps snake_case API response to camelCase domain type', () => {
    const movie = mapMovie(rawMovie);

    expect(movie.id).toBe(640146);
    expect(movie.title).toBe('Ant-Man and the Wasp: Quantumania');
    expect(movie.posterPath).toBe('/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg');
    expect(movie.backdropPath).toBe('/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg');
    expect(movie.releaseDate).toBe('2023-02-15');
    expect(movie.voteAverage).toBe(6.5);
    expect(movie.voteCount).toBe(1856);
    expect(movie.popularity).toBe(9272.643);
    expect(movie.genreIds).toEqual([28, 12, 878]);
  });

  it('handles null poster and backdrop paths', () => {
    const movie = mapMovie({ ...rawMovie, poster_path: null, backdrop_path: null });

    expect(movie.posterPath).toBeNull();
    expect(movie.backdropPath).toBeNull();
  });
});
