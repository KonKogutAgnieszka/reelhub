import { tmdbFetch } from './tmdb-client';
import type { Movie, MovieDetail, Paginated } from '../types/movie';

interface TmdbMovieResponse {
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

interface TmdbMovieDetailResponse extends TmdbMovieResponse {
  runtime: number | null;
  tagline: string;
  genres: { id: number; name: string }[];
  homepage: string | null;
  status: string;
}

interface TmdbPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export function mapMovie(raw: TmdbMovieResponse): Movie {
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
  year?: number;
}

export async function fetchMovies(params: FetchMoviesParams = {}): Promise<Paginated<Movie>> {
  const isSearch = !!params.query;
  const path = isSearch ? '/search/movie' : '/discover/movie';

  const raw = await tmdbFetch<TmdbPaginatedResponse<TmdbMovieResponse>>(path, {
    params: {
      page: params.page ?? 1,
      sort_by: isSearch ? undefined : (params.sortBy ?? 'popularity.desc'),
      with_genres: params.withGenres,
      primary_release_year: isSearch ? undefined : params.year,
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

function mapMovieDetail(raw: TmdbMovieDetailResponse): MovieDetail {
  return {
    ...mapMovie(raw),
    runtime: raw.runtime,
    tagline: raw.tagline,
    genres: raw.genres,
    homepage: raw.homepage,
    status: raw.status,
  };
}

export async function fetchMovieDetail(id: number): Promise<MovieDetail> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const raw = await tmdbFetch<TmdbMovieDetailResponse>(`/movie/${id}`, {
    params: { language: 'en-US' },
  });
  return mapMovieDetail(raw);
}

export async function fetchRelatedMovies(id: number): Promise<Movie[]> {
  const raw = await tmdbFetch<TmdbPaginatedResponse<TmdbMovieResponse>>(
    `/movie/${id}/recommendations`,
    {
      params: { language: 'en-US' },
    },
  );
  return raw.results.slice(0, 10).map(mapMovie);
}
