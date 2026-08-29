import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import SourcesList from "@/components/SourcesList";
import ArticleCard from "@/components/ArticleCard";
import { countries, getCountryBySlug } from "@/data/countries";
import { getContinentBySlug } from "@/data/continents";
import { getArticlesByCountry } from "@/data/articles";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const country = getCountryBySlug(params.slug);
  if (!country) return {};
  return {
    title: `${country.name} — Geography, Facts & Map`,
    description: country.overview,
    alternates: { canonical: `/countries/${country.slug}` },
  };
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink/8 py-3 last:border-none">
      <dt className="text-sm text-ink/55">{label}</dt>
      <dd className="text-right text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = getCountryBySlug(params.slug);
  if (!country) notFound();

  const continent = getContinentBySlug(country.continentSlug);
  const relatedArticles = getArticlesByCountry(country.slug);

  return (
    <div className="pb-16">
      <div className="border-b border-ink/10 bg-sand/30">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Countries", href: "/countries" },
              { label: country.name },
            ]}
          />
        </div>
      </div>

      <header className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <div className="flex items-center gap-4">
          <span className="text-5xl leading-none" aria-hidden>
            {country.flagEmoji}
          </span>
          <div>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {country.name}
            </h1>
            {continent && (
              <p className="mt-1 text-sm text-ink/55">
                {country.officialName} · {continent.name}
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto mt-8 grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div>
          <PlaceholderImage
            colorKey={country.mapColor}
            icon="🗺️"
            label={`Map of ${country.name}`}
            className="h-56 rounded-2xl sm:h-72"
          />

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink">Overview</h2>
            <p className="mt-3 leading-relaxed text-ink/80">{country.overview}</p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink">
              Major geographic features
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {country.majorFeatures.map((f) => (
                <li
                  key={f}
                  className="rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink/80"
                >
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink">Interesting facts</h2>
            <ul className="mt-3 space-y-3">
              {country.facts.map((fact, i) => (
                <li key={i} className="flex gap-3 text-ink/80">
                  <span className="mt-1 text-ocean" aria-hidden>
                    ✺
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8">
            <SourcesList sources={country.sources} />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/45">
              Quick facts
            </h2>
            <dl className="mt-2">
              <StatRow label="Capital" value={country.capital} />
              <StatRow label="Population" value={`${country.population} (${country.populationYear})`} />
              <StatRow label="Area" value={country.areaKm2} />
              <StatRow label="Languages" value={country.languages.join(", ")} />
              <StatRow label="Currency" value={country.currency} />
              <StatRow label="Climate" value={country.climate} />
              <StatRow
                label="Coordinates"
                value={`${country.latitude.toFixed(2)}°, ${country.longitude.toFixed(2)}°`}
              />
            </dl>
          </div>
        </aside>
      </div>

      {relatedArticles.length > 0 && (
        <div className="mx-auto mt-4 max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            Articles about {country.name}
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
