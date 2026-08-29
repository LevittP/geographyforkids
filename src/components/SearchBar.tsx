"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function SearchBar({
  variant = "default",
  placeholder = "Search countries, continents, topics…",
}: {
  variant?: "default" | "hero";
  placeholder?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} role="search" className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        Search GeographyForKids
      </label>
      <span
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
        aria-hidden
      >
        🔍
      </span>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={
          isHero
            ? "w-full rounded-full border-2 border-ink/10 bg-white py-4 pl-12 pr-28 text-base text-ink shadow-lg shadow-ink/5 outline-none placeholder:text-ink/40 focus:border-ocean"
            : "w-full rounded-full border border-ink/15 bg-white py-2 pl-10 pr-4 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-ocean"
        }
      />
      {isHero && (
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ocean-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Search
        </button>
      )}
    </form>
  );
}
