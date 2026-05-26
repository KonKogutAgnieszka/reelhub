export default function MovieLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="flex gap-8 mb-12">
        <div className="w-[300px] h-[450px] bg-gray-200 rounded-lg animate-pulse shrink-0" />
        <div className="flex-1">
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-8" />
          <div className="h-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </main>
  );
}
