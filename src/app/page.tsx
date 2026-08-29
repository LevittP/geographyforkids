import Link from "next/link";
import Hero from "@/components/Hero";
import WorldMapSection from "@/components/WorldMapSection";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import ContinentCard from "@/components/ContinentCard";
import CountryCard from "@/components/CountryCard";
import TopicPill from "@/components/TopicPill";
import { getFeaturedArticles, getRecentArticles } from "@/data/articles";
import { continents } from "@/data/continents";
import { countries } from "@/data/countries";
import { topics } from "@/data/topics";

export default function HomePage() {
  const featured = getFeaturedArticles().slice(0, 3);
  const recent = getRecentArticles(6);
  const popularCountries = countries.slice(0, 8);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Featured geography stories"
          description="Hand-picked reads to start your exploration."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <WorldMapSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Explore the world" title="Browse by continent" />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {continents.map((continent) => (
            <ContinentCard key={continent.slug} continent={continent} />
          ))}
        </div>
      </section>

      <section className="bg-sand/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Around the globe" title="Popular countries" />
            <Link
              href="/countries"
              className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 hover:border-ocean/40 hover:text-ocean"
            >
              View all countries →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popularCountries.map((country) => (
              <CountryCard key={country.slug} country={country} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Fresh off the map" title="Latest articles" />
          <Link
            href="/articles"
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 hover:border-ocean/40 hover:text-ocean"
          >
            View all articles →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Dig deeper"
            title="Geography topics"
            description="Big ideas that show up everywhere you look."
            className="[&_h2]:text-paper [&_p]:text-paper/60 [&_.text-ocean]:text-ocean-light"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <TopicPill key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-ink/10 bg-gradient-to-br from-ocean/5 to-leaf/5 p-8 sm:p-12">
          <SectionHeading
            eyebrow="For the classroom"
            title="Educational resources for teachers and parents"
            description="Every article on GeographyForKids is written for young readers and grounded in real, cited sources — making it easy to use in lesson plans, homework help, or curious weekend reading."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/articles"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-light"
            >
              Browse all articles
            </Link>
            <Link
              href="/topics"
              className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ocean/40 hover:text-ocean"
            >
              Browse by topic
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
