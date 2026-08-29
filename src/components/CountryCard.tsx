import Link from "next/link";
import { Country } from "@/lib/types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/countries/${country.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
    >
      <span className="text-3xl leading-none" aria-hidden>
        {country.flagEmoji}
      </span>
      <div className="min-w-0">
        <h3 className="truncate font-display text-base font-semibold text-ink group-hover:text-ocean">
          {country.name}
        </h3>
        <p className="truncate text-xs text-ink/55">{country.capital}</p>
      </div>
    </Link>
  );
}
