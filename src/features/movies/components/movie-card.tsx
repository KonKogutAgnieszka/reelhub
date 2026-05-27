import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.posterPath ? `https://image.tmdb.org/t/p/w342${movie.posterPath}` : null;

  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group flex flex-col rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow h-[240px]"
    >
      <div className="relative flex-1 bg-gray-200">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={`Poster for ${movie.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No poster
          </div>
        )}
      </div>
      <div className="p-2 bg-white">
        <h3 className="font-semibold text-xs line-clamp-1 text-gray-900 group-hover:text-red-600">
          {movie.title}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          {movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : '—'}
          {' · '}⭐ {movie.voteAverage.toFixed(1)}
        </p>
      </div>
    </Link>
  );
}
