import { type NextRequest, NextResponse } from 'next/server';
import { fetchMovies } from '@/src/features/movies/api/movies.queries';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  try {
    const data = await fetchMovies({
      sortBy: searchParams.get('sort') ?? undefined,
      withGenres: searchParams.get('genre') ?? undefined,
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      query: searchParams.get('query') ?? undefined,
      year: searchParams.get('year') ? Number(searchParams.get('year')) : undefined,
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}
