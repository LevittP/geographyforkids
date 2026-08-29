import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import SourcesList from "@/components/SourcesList";
import RelatedArticles from "@/components/RelatedArticles";
import ShareControls from "@/components/ShareControls";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { getCountryBySlug } from "@/data/countries";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const country = article.countrySlug ? getCountryBySlug(article.countrySlug) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@type": "Organization", name: article.author },
  };

  return (
    <article className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b border-ink/10 bg-sand/30">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Articles", href: "/articles" },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      <header className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-wide text-ocean">
          {article.category}
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-ink/65">{article.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-ink/10 py-4 font-mono text-xs text-ink/50">
          <span>By {article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>Published {formatDate(article.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>Updated {formatDate(article.updatedAt)}</span>
          <span aria-hidden>·</span>
          <span>{article.readingTimeMinutes} min read</span>
          <span aria-hidden>·</span>
          <span className="capitalize">{article.readingLevel} level</span>
        </div>
      </header>

      <PlaceholderImage
        colorKey={article.heroImageColor}
        icon="🗺️"
        label={article.heroImageAlt}
        className="mx-auto mt-8 h-56 max-w-3xl sm:h-72 sm:rounded-2xl"
      />

      <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6">
        <div className="prose-none space-y-5 text-[17px] leading-relaxed text-ink/85">
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {country && (
          <div className="mt-8 rounded-xl border border-ocean/20 bg-ocean/5 p-5">
            <p className="text-sm text-ink/70">
              Reading about {country.name}? See the full{" "}
              <Link href={`/countries/${country.slug}`} className="font-semibold text-ocean underline">
                {country.name} country profile
              </Link>{" "}
              for more facts and figures.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-y border-ink/10 py-4">
          <ShareControls title={article.title} />
        </div>

        <div className="mt-8">
          <SourcesList sources={article.sources} />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={related} />
        </div>
      </div>
    </article>
  );
}
