import { articles } from "@/data/articles";
import { countries } from "@/data/countries";
import { continents } from "@/data/continents";
import { topics } from "@/data/topics";

export interface SearchResult {
  type: "article" | "country" | "continent" | "topic";
  slug: string;
  title: string;
  description: string;
  category: string;
  href: string;
  colorKey: string;
}

function scoreMatch(haystack: string, query: string): number {
  const h = haystack.toLowerCase();
  const q = query.toLowerCase();
  if (!q) return 0;
  if (h === q) return 100;
  if (h.startsWith(q)) return 60;
  if (h.includes(q)) return 30;
  return 0;
}

export function search(query: string): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const results: { result: SearchResult; score: number }[] = [];

  for (const a of articles) {
    const score = Math.max(
      scoreMatch(a.title, trimmed),
      scoreMatch(a.description, trimmed) * 0.6,
      ...a.tags.map((t) => scoreMatch(t, trimmed) * 0.8),
      scoreMatch(a.category, trimmed) * 0.5
    );
    if (score > 0) {
      results.push({
        score,
        result: {
          type: "article",
          slug: a.slug,
          title: a.title,
          description: a.description,
          category: a.category,
          href: `/articles/${a.slug}`,
          colorKey: a.heroImageColor,
        },
      });
    }
  }

  for (const c of countries) {
    const score = Math.max(
      scoreMatch(c.name, trimmed),
      scoreMatch(c.officialName, trimmed) * 0.8,
      scoreMatch(c.capital, trimmed) * 0.6
    );
    if (score > 0) {
      results.push({
        score,
        result: {
          type: "country",
          slug: c.slug,
          title: c.name,
          description: `Capital: ${c.capital} · Population: ${c.population}`,
          category: "Country",
          href: `/countries/${c.slug}`,
          colorKey: c.mapColor,
        },
      });
    }
  }

  for (const c of continents) {
    const score = scoreMatch(c.name, trimmed);
    if (score > 0) {
      results.push({
        score,
        result: {
          type: "continent",
          slug: c.slug,
          title: c.name,
          description: c.description,
          category: "Continent",
          href: `/continents/${c.slug}`,
          colorKey: c.color,
        },
      });
    }
  }

  for (const t of topics) {
    const score = Math.max(scoreMatch(t.name, trimmed), scoreMatch(t.description, trimmed) * 0.5);
    if (score > 0) {
      results.push({
        score,
        result: {
          type: "topic",
          slug: t.slug,
          title: t.name,
          description: t.description,
          category: "Topic",
          href: `/topics/${t.slug}`,
          colorKey: t.color,
        },
      });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .map((r) => r.result)
    .slice(0, 30);
}
