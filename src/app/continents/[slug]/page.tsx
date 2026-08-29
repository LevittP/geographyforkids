import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import SourcesList from "@/components/SourcesList";
import CountryCard from "@/components/CountryCard";
import ArticleCard from "@/components/ArticleCard";
import { continents, getContinentBySlug } from "@/data/continents";
import { getCountriesByContinent } from "@/data/countries";
import { getArticlesByContinent } from "@/data/articles";

export function generateStaticParams() {
  return continents.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const continent = getContinentBySlug(params.slug);
  if (!continent) return {};
  return {
    title: continent.name,
    description: continent.description,
    alternates: { canonical: `/continents/${continent.slug}` },
  };
}

export default function ContinentPage({ params }: { params: { slug: string } }) {
  const continent = getContinentBySlug(params.slug);
  if (!continent) notFound();

  const countriesHere = getCountriesByContinent(continent.slug);
  const articlesHere = getArticlesByContinent(continent.slug);

  return (
    <div className="pb-16">
      <div className="border-b border-ink/10 bg-sand/30">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Continents", href: "/continents" },
              { label: continent.name },
            ]}
          />
        </div>
      </div>

      <header className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {continent.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-ink/65">{continent.description}</p>
      </header>

      <PlaceholderImage
        colorKey={continent.color}
        icon="🌍"
        label={continent.name}
        className="mx-auto mt-8 h-48 max-w-5xl sm:h-64 sm:rounded-2xl"
      />

      <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Countries", value: continent.countryCount },
            { label: "Area", value: continent.areaKm2 },
            { label: "Population", value: continent.population },
            { label: "Highest point", value: continent.highestPoint },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-ink/10 bg-white p-4">
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/45">
                {stat.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {countriesHere.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">
              Countries in {continent.name}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {countriesHere.map((c) => (
                <CountryCard key={c.slug} country={c} />
              ))}
            </div>
          </section>
        )}

        {articlesHere.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">
              Articles about {continent.name}
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articlesHere.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <SourcesList sources={continent.sources} />
        </div>
      </div>
    </div>
  );
}
