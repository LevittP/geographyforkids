import Link from "next/link";
import { Article } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import PlaceholderImage from "./PlaceholderImage";

const CATEGORY_ICONS: Record<string, string> = {
  Landforms: "⛰️",
  Rivers: "🌊",
  Ecosystems: "🌳",
  Oceans: "🐋",
  "Geography Concepts": "🧭",
  "Country Profiles": "📍",
};

export default function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
    >
      <PlaceholderImage
        colorKey={article.heroImageColor}
        icon={CATEGORY_ICONS[article.category] ?? "🗺️"}
        label={article.heroImageAlt}
        className={compact ? "h-28" : "h-40"}
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-ocean">
          {article.category}
        </span>
        <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-ocean">
          {article.title}
        </h3>
        {!compact && (
          <p className="line-clamp-2 text-sm text-ink/65">{article.description}</p>
        )}
        <div className="mt-auto flex items-center gap-2 pt-2 font-mono text-xs text-ink/45">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
