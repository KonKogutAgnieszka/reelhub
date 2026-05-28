import { useQuery, keepPreviousData } from '@tanstack/react-query';
import type { Paginated, Movie } from '../types/movie';
import type { FetchMoviesParams } from '../api/movies.queries';

async function fetchMoviesClient(params: FetchMoviesParams) {
  const searchParams = new URLSearchParams();

  if (params.sortBy) searchParams.set('sort', params.sortBy);
  if (params.withGenres) searchParams.set('genre', params.withGenres);
  if (params.page) searchParams.set('page', String(params.page));
  if (params.query) searchParams.set('query', params.query);
  if (params.year) searchParams.set('year', String(params.year));

  const res = await fetch(`/api/movies?${searchParams.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch movies');
  return res.json() as Promise<Paginated<Movie>>;
}

export function useMovies(params: FetchMoviesParams) {
  return useQuery({
    queryKey: ['movies', params],
    queryFn: () => fetchMoviesClient(params),
    placeholderData: keepPreviousData,
  });
}
