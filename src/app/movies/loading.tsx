export default function MoviesLoading() {
  return (
    <>
      <div className="flex gap-1 mb-6" aria-label="Loading">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
      <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="h-44 bg-gray-500 rounded-lg animate-pulse" />
        ))}
      </ul>
    </>
  );
}
