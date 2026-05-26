export default function MoviesLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="h-9 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mt-2" />
      </div>
      <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="h-[240px] bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </ul>
    </main>
  );
}
