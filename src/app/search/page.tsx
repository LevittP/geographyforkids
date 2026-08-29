import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import PlaceholderImage from "@/components/PlaceholderImage";
import { search } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search GeographyForKids for countries, continents, topics, and articles.",
};

const TYPE_LABELS: Record<string, string> = {
  article: "Article",
  country: "Country",
  continent: "Continent",
  topic: "Topic",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.trim() ?? "";

  // Secret shortcut
  if (query.toLowerCase() === "games") {
    redirect("https://levitt.my/secret");
  }

  const results = query ? search(query) : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-ink">Search</h1>
      <p className="mt-2 text-ink/60">
        Search across every country, continent, topic, and article.
      </p>
      <div className="mt-6">
        <SearchBar
          variant="hero"
          placeholder="Search Japan, volcanoes, Africa…"
        />
      </div>

      <div className="mt-10">
        {!query && (
          <div className="rounded-xl border border-dashed border-ink/15 p-10 text-center text-ink/55">
            Start typing above to search GeographyForKids.
          </div>
        )}

        {query && results.length === 0 && (
          <div className="rounded-xl border border-dashed border-ink/15 p-10 text-center">
            <p className="font-display text-lg font-semibold text-ink">
              No results for &ldquo;{query}&rdquo;
            </p>
            <p className="mt-1 text-sm text-ink/55">
              Try a different spelling, or browse{" "}
              <Link href="/articles" className="text-ocean underline">
                all articles
              </Link>{" "}
              instead.
            </p>
          </div>
        )}

        {query && results.length > 0 && (
          <>
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink/45">
              {results.length} result{results.length === 1 ? "" : "s"} for
              &ldquo;{query}&rdquo;
            </p>

            <ul className="space-y-3">
              {results.map((r) => (
                <li key={`${r.type}-${r.slug}`}>
                  <Link
                    href={r.href}
                    className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <PlaceholderImage
                      colorKey={r.colorKey}
                      compact
                      label={r.title}
                      className="h-14 w-14 shrink-0 rounded-lg"
                    />

                    <div className="min-w-0">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-ocean">
                        {TYPE_LABELS[r.type] ?? r.category}
                      </span>

                      <h2 className="truncate font-display text-base font-semibold text-ink">
                        {r.title}
                      </h2>

                      <p className="truncate text-sm text-ink/55">
                        {r.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
