export default function MovieLoading() {
  return (
    <>
      <div className="flex gap-8 mb-12">
        <div className="w-62.5 h-93.75 bg-gray-600 rounded-lg animate-pulse shrink-0" />
        <div className="flex-1">
          <div className="h-10 w-3/4 bg-gray-600 rounded animate-pulse mb-4" />
          <div className="h-4 w-1/2 bg-gray-600 rounded animate-pulse mb-8" />
          <div className="h-32 bg-gray-600 rounded animate-pulse" />
        </div>
      </div>
    </>
  );
}
