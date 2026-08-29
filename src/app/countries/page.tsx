import type { Metadata } from "next";
import CountryCard from "@/components/CountryCard";
import SectionHeading from "@/components/SectionHeading";
import { countries } from "@/data/countries";
import { continents } from "@/data/continents";

export const metadata: Metadata = {
  title: "All Countries",
  description: "Browse country profiles with facts on capitals, population, geography, and more.",
};

export default function CountriesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow={`${countries.length} countries`}
        title="All countries"
        description="Flags, facts, and geography overviews for countries around the world."
      />
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <CountryCard key={country.slug} country={country} />
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Or browse by region" title="Continents" />
        <div className="mt-6 flex flex-wrap gap-3">
          {continents.map((c) => (
            <a
              key={c.slug}
              href={`/continents/${c.slug}`}
              className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 hover:border-ocean/40 hover:text-ocean"
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
