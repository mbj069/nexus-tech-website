import type { NextConfig } from "next";

/**
 * Server-rendered Next.js on Vercel (no static export): every page is
 * still prerendered to static HTML at build time for SEO and speed,
 * while /api/* routes run as serverless functions (contact form).
 * Images use Next.js optimization (Vercel-native) — required for the
 * project screenshots landing on the Work page.
 */
const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  /**
   * The old staging host must not serve the site as a duplicate:
   * 301 it to the canonical apex domain.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexus-tech-website-three.vercel.app" }],
        destination: "https://globalnexus.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
