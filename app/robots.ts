import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Environment-aware: staging deployments get a disallow-all robots.txt
 * so unfinished pages are never indexed. Production (SITE_INDEXABLE=true)
 * allows crawling and references the sitemap. Evaluated at build time.
 *
 * Note: robots.txt controls crawling, not hiding — the layout also emits
 * noindex metadata on non-production builds as the stronger signal.
 */
export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_INDEXABLE !== "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://globalnexus.tech/sitemap.xml",
  };
}
