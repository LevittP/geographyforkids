import SearchBar from "./SearchBar";
import { articles } from "@/data/articles";
import { countries } from "@/data/countries";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
      <div className="absolute inset-0 bg-graticule bg-[length:40px_40px] opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ocean/25 bg-ocean/5 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-ocean-dark">
            🧭 {articles.length}+ sourced articles and growing
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Discover the world,{" "}
            <span className="text-ocean">one fact at a time.</span>
          </h1>
          <p className="mt-4 text-lg text-ink/65">
            Countries, continents, oceans, and landforms — explained clearly and
            sourced from trusted references like Britannica, NASA, and the
            United Nations.
          </p>
          <div className="mt-8">
            <SearchBar variant="hero" placeholder="Try “volcanoes”, “Japan”, or “Amazon River”" />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-ink/45">
            <span>Popular:</span>
            {["volcanoes", "Japan", "Amazon River", "climate", "Africa"].map((term) => (
              <a
                key={term}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="rounded-full border border-ink/10 px-2.5 py-1 hover:border-ocean/40 hover:text-ocean"
              >
                {term}
              </a>
            ))}
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "Articles", value: `${articles.length}+` },
            { label: "Countries", value: `${countries.length}+` },
            { label: "Continents", value: "7" },
            { label: "Trusted sources", value: "8+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/45">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
