export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">

      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-purple-300 border-t-purple-600 animate-spin"></div>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-xl font-semibold text-gray-700">
        Loading your books...
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        Please wait a moment
      </p>

      {/* Skeleton Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl px-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-32 rounded-xl bg-white shadow-md animate-pulse"
          >
            <div className="h-4 bg-gray-200 rounded w-3/4 mt-6 ml-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mt-4 ml-4"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 mt-4 ml-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}