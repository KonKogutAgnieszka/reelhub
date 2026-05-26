export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
  genreIds: number[];
}

export interface MovieDetail extends Movie {
  runtime: number | null;
  tagline: string;
  genres: Genre[];
  homepage: string | null;
  status: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Paginated<T> {
  page: number;
  results: T[];
  totalPages: number;
  totalResults: number;
}
