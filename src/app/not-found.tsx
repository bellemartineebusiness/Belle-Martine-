import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center">
            Go Home
          </Link>
          <Link href="/shop" className="btn-secondary inline-flex items-center justify-center">
            Shop Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
