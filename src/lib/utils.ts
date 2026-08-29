export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

export const SITE_NAME = "GeographyForKids";
export const SITE_DESCRIPTION =
  "A free educational geography resource for kids, students, and teachers — covering countries, continents, landforms, and more, with every fact sourced from trusted references.";
export const SITE_URL = "https://geographyforkids.example.com";
