import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Intentionally simple. robots.txt controls crawling, not hiding —
 * anything that must not appear in search gets noindex or access
 * control instead (per Google's own guidance).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://globalnexus.tech/sitemap.xml",
  };
}
