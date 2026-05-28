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
      if (key === 'query') {
        params.delete('genre');
        params.delete('year');
      }
      if (key !== 'page') {
        params.delete('page');
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  const resetFilters = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  return {
    sort: searchParams.get('sort') ?? '',
    genre: searchParams.get('genre') ?? '',
    query: searchParams.get('query') ?? '',
    year: searchParams.get('year') ?? '',
    updateFilter,
    resetFilters,
  };
}
