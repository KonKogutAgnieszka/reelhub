import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useMovieFilters } from '@/src/features/movies/hooks/use-movie-filters';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => '/movies',
  useSearchParams: () => new URLSearchParams('sort=popularity.desc&genre=28&page=2'),
}));

describe('useMovieFilters', () => {
  it('reads sort from URL', () => {
    const { result } = renderHook(() => useMovieFilters());
    expect(result.current.sort).toBe('popularity.desc');
  });

  it('reads genre from URL params', () => {
    const { result } = renderHook(() => useMovieFilters());
    expect(result.current.genre).toBe('28');
  });

  it('returns empty string for missing params', () => {
    const { result } = renderHook(() => useMovieFilters());
    expect(result.current.query).toBe('');
    expect(result.current.year).toBe('');
  });
});
