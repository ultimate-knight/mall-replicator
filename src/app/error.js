"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="text-center max-w-xl flex flex-col gap-4">
        <p className="text-[#c9a26b] text-sm uppercase tracking-[0.2em]">Something went wrong</p>
        <h2 className="text-4xl font-semibold">The experience hit an unexpected edge case.</h2>
        <p className="text-gray-400">
          Refresh the page or try again. The fallback is in place so the experience still fails gracefully.
        </p>
        <div>
          <button
            onClick={() => reset()}
            className="bg-[#c9a26b] text-black px-6 py-3 rounded-lg uppercase"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
