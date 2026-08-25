import type { MetadataRoute } from "next";

const SITE_URL = "https://move315.com";

const SERVICE_SLUGS = [
  "local-moving",
  "apartment-moving",
  "house-moving",
  "labor-only",
  "packing",
  "senior-moving",
  "commercial-moving",
  "furniture-delivery",
  "storage-moves",
  "same-day-moving",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/quote`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
