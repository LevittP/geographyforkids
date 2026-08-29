import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl" aria-hidden>
        🧭
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">
        You've wandered off the map
      </h1>
      <p className="mt-3 text-ink/60">
        We couldn't find the page you were looking for. It may have been moved,
        renamed, or never existed.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-light"
        >
          Back to homepage
        </Link>
        <Link
          href="/search"
          className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ocean/40 hover:text-ocean"
        >
          Search the site
        </Link>
      </div>
    </div>
  );
}
