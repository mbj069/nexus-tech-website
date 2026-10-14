import type { NextConfig } from "next";

/**
 * Static export: every route becomes real HTML at build time.
 * This is the foundation of the SEO strategy — crawlers receive
 * content, not an empty JavaScript shell.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // Required for static export; images are optimized at build
    // and served as responsive static files instead.
    unoptimized: true,
  },
};

export default nextConfig;
