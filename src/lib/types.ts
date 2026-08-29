export type ReadingLevel = "beginner" | "intermediate" | "advanced";

export interface Source {
  name: string;
  url?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string[]; // paragraphs
  category: string; // e.g. "Landforms", "Culture", "Climate"
  countrySlug?: string;
  continentSlug?: string;
  tags: string[];
  sources: Source[];
  author: string;
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  heroImageAlt: string;
  heroImageColor: string; // placeholder gradient key
  relatedSlugs: string[];
  readingLevel: ReadingLevel;
  readingTimeMinutes: number;
  featured?: boolean;
}

export interface Country {
  slug: string;
  name: string;
  officialName: string;
  continentSlug: string;
  capital: string;
  population: string;
  populationYear: number;
  areaKm2: string;
  languages: string[];
  currency: string;
  climate: string;
  overview: string;
  majorFeatures: string[];
  facts: string[];
  flagEmoji: string;
  mapColor: string;
  latitude: number;
  longitude: number;
  sources: Source[];
}

export interface Continent {
  slug: string;
  name: string;
  description: string;
  countryCount: string;
  areaKm2: string;
  population: string;
  highestPoint: string;
  color: string;
  sources: Source[];
}

export interface Topic {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
