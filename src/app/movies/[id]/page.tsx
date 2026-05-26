import Image from 'next/image';
import Link from 'next/link';
import { fetchMovieDetail, fetchRelatedMovies } from '@/src/features/movies/api/movies.queries';
import { MovieGrid } from '@/src/features/movies/components/movie-grid';

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  const [movie, related] = await Promise.all([
    fetchMovieDetail(Number(id)),
    fetchRelatedMovies(Number(id)),
  ]);

  const posterUrl = movie.posterPath ? `https://image.tmdb.org/t/p/w500${movie.posterPath}` : null;

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/movies" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to movies
      </Link>

      <div className="flex gap-8 mb-12">
        <div className="shrink-0">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={`Poster for ${movie.title}`}
              width={300}
              height={450}
              className="rounded-lg"
            />
          ) : (
            <div className="w-[300px] h-[450px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              No poster
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

          {movie.tagline && <p className="text-gray-500 italic mb-4">{movie.tagline}</p>}

          <div className="flex gap-4 text-sm text-gray-600 mb-4">
            <span>⭐ {movie.voteAverage.toFixed(1)}</span>
            <span>{new Date(movie.releaseDate).getFullYear()}</span>
            {movie.runtime && <span>{movie.runtime} min</span>}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed max-w-2xl">{movie.overview}</p>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
          <MovieGrid movies={related} />
        </section>
      )}
    </main>
  );
}
