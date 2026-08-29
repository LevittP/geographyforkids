import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "All Articles",
  description: "Browse every geography article on GeographyForKids, from volcanoes to world oceans.",
};

export default function ArticlesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow={`${articles.length} articles`}
        title="All geography articles"
        description="Every article is written for young readers and sourced from trusted references."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
