import { env } from '@/src/shared/lib/env';

export class TmdbApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message: string,
  ) {
    super(message);
    this.name = 'TmdbApiError';
  }
}

interface TmdbFetchOptions {
  params?: Record<string, string | number | undefined>;
  signal?: AbortSignal;
  revalidate?: number | false;
}

export async function tmdbFetch<T>(path: string, options: TmdbFetchOptions = {}): Promise<T> {
  const { params, signal, revalidate = 3600 } = options;
  const url = new URL(`${env.TMDB_API_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
      Accept: 'application/json',
    },
    signal,
    next: {
      revalidate,
    },
  });
  if (!response.ok) {
    const errorBody = await response.json();
    throw new TmdbApiError(
      response.status,
      response.statusText,
      `TMDB API request failed: ${errorBody}`,
    );
  }

  return response.json() as Promise<T>;
}
