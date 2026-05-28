'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export function useMovieFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateFilter = useCallback(
    (key: string, value: string | undefined) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      if (key !== 'page') {
        params.delete('page');
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  const resetFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('sort');
    params.delete('genre');
    params.delete('year');
    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
  }, [router, pathname, searchParams]);

  return {
    sort: searchParams.get('sort') ?? '',
    genre: searchParams.get('genre') ?? '',
    query: searchParams.get('query') ?? '',
    year: searchParams.get('year') ?? '',
    page: Number(searchParams.get('page')) ?? 1,
    updateFilter,
    resetFilters,
  };
}
