import { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { countries } from "@/data/countries";
import { continents } from "@/data/continents";
import { topics } from "@/data/topics";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/articles`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/countries`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/continents`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/topics`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/search`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const countryRoutes: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${SITE_URL}/countries/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const continentRoutes: MetadataRoute.Sitemap = continents.map((c) => ({
    url: `${SITE_URL}/continents/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const topicRoutes: MetadataRoute.Sitemap = topics.map((t) => ({
    url: `${SITE_URL}/topics/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes, ...countryRoutes, ...continentRoutes, ...topicRoutes];
}
