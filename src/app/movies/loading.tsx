export default function MoviesLoading() {
  return (
    <>
      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-6" />
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="h-44 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </ul>
    </>
  );
}