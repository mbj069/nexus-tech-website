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
};

export default nextConfig;
