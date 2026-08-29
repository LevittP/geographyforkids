"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

const NAV_LINKS = [
  { href: "/continents", label: "Continents" },
  { href: "/countries", label: "Countries" },
  { href: "/topics", label: "Topics" },
  { href: "/articles", label: "Articles" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-base font-bold text-paper">
            G
          </span>
          <span className="font-display text-lg font-bold text-ink">
            GeographyFor<span className="text-ocean">Kids</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/75 transition hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden w-64 lg:block">
          <SearchBar />
        </div>

        <button
          type="button"
          className="ml-auto grid h-10 w-10 place-items-center rounded-md text-ink hover:bg-ink/5 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-4 pb-4 pt-3 md:hidden">
          <div className="mb-3">
            <SearchBar />
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
