"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl" aria-hidden>
        🗺️
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">
        Something went off course
      </h1>
      <p className="mt-3 text-ink/60">
        An unexpected error interrupted this page. You can try again, or head
        back to safer ground.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-light"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ocean/40 hover:text-ocean"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}
