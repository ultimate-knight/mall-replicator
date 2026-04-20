export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-2 border-[#c9a26b] border-t-transparent animate-spin" />
        <p className="text-[#c9a26b] text-lg tracking-[0.2em] uppercase">Loading experience</p>
      </div>
    </div>
  );
}
