import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://globalnexus.tech";

/**
 * Only canonical, indexable pages. No hash routes, no duplicates,
 * no thin pages — the sitemap mirrors the real site architecture.
 */
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/services/", priority: 0.9 },
  { path: "/services/web-development/", priority: 0.85 },
  { path: "/services/software-development/", priority: 0.85 },
  { path: "/services/mobile-app-development/", priority: 0.85 },
  { path: "/services/ecommerce-development/", priority: 0.85 },
  { path: "/services/ai-solutions/", priority: 0.85 },
  { path: "/work/", priority: 0.8 },
  { path: "/company/", priority: 0.7 },
  { path: "/contact/", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
