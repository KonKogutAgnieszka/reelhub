import { tmdbFetch } from './tmdb-client';
import type { Movie, Paginated } from '../types/movie';

interface TmdbMovieRaw {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
}

interface TmdbPaginatedRaw<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

function mapMovie(raw: TmdbMovieRaw): Movie {
  return {
    id: raw.id,
    title: raw.title,
    overview: raw.overview,
    posterPath: raw.poster_path,
    backdropPath: raw.backdrop_path,
    releaseDate: raw.release_date,
    voteAverage: raw.vote_average,
    voteCount: raw.vote_count,
    popularity: raw.popularity,
    genreIds: raw.genre_ids,
  };
}

export interface FetchMoviesParams {
  page?: number;
  sortBy?: string;
  withGenres?: string;
  query?: string;
}

export async function fetchMovies(params: FetchMoviesParams = {}): Promise<Paginated<Movie>> {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // testing loading page
  //throw new Error('Test error'); testing error page
  const isSearch = !!params.query;
  const path = isSearch ? '/search/movie' : '/discover/movie';

  const raw = await tmdbFetch<TmdbPaginatedRaw<TmdbMovieRaw>>(path, {
    params: {
      page: params.page ?? 1,
      sort_by: isSearch ? undefined : (params.sortBy ?? 'popularity.desc'),
      with_genres: params.withGenres,
      query: params.query,
      language: 'en-US',
    },
  });

  return {
    page: raw.page,
    results: raw.results.map(mapMovie),
    totalPages: raw.total_pages,
    totalResults: raw.total_results,
  };
}
