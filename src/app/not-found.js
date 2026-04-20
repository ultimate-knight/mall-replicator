import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="text-center flex flex-col gap-4">
        <p className="text-[#c9a26b] text-sm uppercase tracking-[0.2em]">404</p>
        <h1 className="text-5xl font-semibold">Page not found</h1>
        <p className="text-gray-400">This route does not exist in the experience.</p>
        <div>
          <Link href="/" className="bg-[#c9a26b] text-black px-6 py-3 rounded-lg uppercase">
            Back to overview
          </Link>
        </div>
      </div>
    </div>
  );
}
