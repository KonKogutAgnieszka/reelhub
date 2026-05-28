import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MovieCard } from '@/src/features/movies/components/movie-card';

const mockMovie = {
  id: 640146,
  title: 'Ant-Man and the Wasp: Quantumania',
  overview: 'Super-Hero partners Scott Lang...',
  posterPath: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
  backdropPath: '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
  releaseDate: '2023-02-15',
  voteAverage: 6.5,
  voteCount: 1856,
  popularity: 9272.643,
  genreIds: [28, 12, 878],
};

describe('MovieCard', () => {
  it('renders movie title', () => {
    render(<MovieCard movie={mockMovie} />);
    expect(screen.getByText('Ant-Man and the Wasp: Quantumania')).toBeInTheDocument();
  });

  it('link to correct movie page', () => {
    render(<MovieCard movie={mockMovie} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/movies/640146');
  });

  it('renders poster image + alt text', () => {
    render(<MovieCard movie={mockMovie} />);
    const image = screen.getByAltText('Poster for Ant-Man and the Wasp: Quantumania');
    expect(image).toBeInTheDocument();
  });

  it('renders fallback fornull poster', () => {
    render(<MovieCard movie={{ ...mockMovie, posterPath: null }} />);
    expect(screen.getByText('No poster')).toBeInTheDocument();
  });
});
