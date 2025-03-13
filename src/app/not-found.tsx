export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-[#FF5E84] mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-[#0E42FD] text-white rounded-lg hover:bg-blue-500 transition cursor-pointer"
      >
        Go Home
      </a>
    </div>
  );
}
