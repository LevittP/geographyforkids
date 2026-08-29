import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { topics, getTopicBySlug } from "@/data/topics";
import { getArticlesByTopic } from "@/data/articles";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const topic = getTopicBySlug(params.slug);
  if (!topic) return {};
  return {
    title: topic.name,
    description: topic.description,
    alternates: { canonical: `/topics/${topic.slug}` },
  };
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) notFound();

  const relatedArticles = getArticlesByTopic(topic.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-16 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Topics", href: "/topics" },
          { label: topic.name },
        ]}
      />

      <header className="mt-6 flex items-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-sand text-3xl" aria-hidden>
          {topic.icon}
        </span>
        <div>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{topic.name}</h1>
          <p className="mt-1 text-ink/60">{topic.description}</p>
        </div>
      </header>

      <div className="mt-10">
        {relatedArticles.length > 0 ? (
          <>
            <SectionHeading title={`Articles about ${topic.name.toLowerCase()}`} />
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-ink/15 p-10 text-center">
            <p className="text-ink/60">
              We don't have articles tagged with this topic yet — check back soon, or{" "}
              <a href="/articles" className="text-ocean underline">
                browse all articles
              </a>{" "}
              in the meantime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
