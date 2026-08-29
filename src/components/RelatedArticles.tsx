import { Article } from "@/lib/types";
import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-4">
      <h2 id="related-heading" className="font-display text-xl font-semibold text-ink">
        Explore more
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} compact />
        ))}
      </div>
    </section>
  );
}
