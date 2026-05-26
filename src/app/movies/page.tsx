import { fetchMovies } from '@/src/features/movies/api/movies.queries';

export default async function MoviesPage() {
  const data = await fetchMovies();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <p className="text-sm text-gray-500 mb-4">
        Showing {data.results.length} of {data.totalResults} results
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((movie) => (
          <li key={movie.id} className="border rounded p-3">
            <h2 className="font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{movie.releaseDate}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
