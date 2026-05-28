import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchMovieDetail, fetchRelatedMovies } from '@/src/features/movies/api/movies.queries';
import { TmdbApiError } from '@/src/features/movies/api/tmdb-client';
import { MovieGrid } from '@/src/features/movies/components/movie-grid';
import type { MovieDetail, Movie } from '@/src/features/movies/types/movie';

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

async function getMovieData(id: number): Promise<{ movie: MovieDetail; related: Movie[] }> {
  try {
    const [movie, related] = await Promise.all([fetchMovieDetail(id), fetchRelatedMovies(id)]);
    return { movie, related };
  } catch (error) {
    if (error instanceof TmdbApiError && error.status === 404) {
      notFound();
    }
    throw error;
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const { movie, related } = await getMovieData(Number(id));

  const posterUrl = movie.posterPath ? `https://image.tmdb.org/t/p/w500${movie.posterPath}` : null;

  return (
    <>
      <div className="flex gap-8 mb-12">
        <div className="shrink-0">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={`Poster for ${movie.title}`}
              width={250}
              height={375}
              className="rounded-lg"
            />
          ) : (
            <div className="w-62.5 h-93.75 bg-gray-400 rounded-lg flex items-center justify-center text-gray-400">
              No poster
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

          {movie.tagline && <p className="text-gray-400 italic mb-4">{movie.tagline}</p>}

          <div className="flex gap-4 text-sm text-gray-400 mb-4">
            <span>⭐ {movie.voteAverage.toFixed(1)}</span>
            <span>{new Date(movie.releaseDate).getFullYear()}</span>
            {movie.runtime && <span>{movie.runtime} min</span>}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed max-w-2xl">{movie.overview}</p>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
          <MovieGrid movies={related} />
        </section>
      )}
    </>
  );
}
