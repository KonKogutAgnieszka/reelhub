import { type NextRequest, NextResponse } from 'next/server';
import { fetchMovies } from '@/src/features/movies/api/movies.queries';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const page = Number(searchParams.get('page') ?? '1');
  const year = searchParams.get('year') ? Number(searchParams.get('year')) : undefined;

  if (!Number.isInteger(page) || page < 1 || page > 500) {
    return NextResponse.json({ error: 'Invalid page parameter' }, { status: 400 });
  }

  if (year !== undefined && (year < 1000 || year > 9999)) {
    return NextResponse.json({ error: 'Invalid year parameter' }, { status: 400 });
  }

  try {
    const data = await fetchMovies({
      sortBy: searchParams.get('sort') ?? undefined,
      withGenres: searchParams.get('genre') ?? undefined,
      page,
      query: searchParams.get('query') ?? undefined,
      year,
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}
