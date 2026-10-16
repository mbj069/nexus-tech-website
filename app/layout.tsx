import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Self-hosted fonts: downloaded at build time, zero runtime
   requests to external font CDNs. */
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://globalnexus.tech";
const DEFAULT_TITLE = "Nexus-Tech Solutions | Software & Web Development Company";
const DEFAULT_DESCRIPTION =
  "Nexus-Tech Solutions builds high-performance websites, custom software, mobile apps, e-commerce platforms and AI solutions for businesses worldwide.";

/**
 * Indexing gate: the staging deployment must never be indexed.
 * Set SITE_INDEXABLE=true in Vercel env vars only for the production
 * deployment serving globalnexus.tech. Anything else gets noindex +
 * a disallow-all robots.txt. Evaluated at build time.
 */
const INDEXABLE = process.env.SITE_INDEXABLE === "true";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Nexus-Tech Solutions",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Nexus-Tech Solutions",
    locale: "en_US",
    url: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus-Tech Solutions — Software Development Company in Lahore, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

/* Structured data: Organization + WebSite.
   Describes only what actually exists — per the trust strategy,
   no invented awards, client counts, or reviews. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexus-Tech Solutions",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpg`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  sameAs: ["https://github.com/mbj069"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexus-Tech Solutions",
  url: `${SITE_URL}/`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${bodyFont.variable} ${mono.variable}`}
    >
      <head>
        {/*
          Marks JS availability before paint. The reveal animation's hidden
          state is scoped to .js — without JavaScript, content is visible
          by default instead of stuck at opacity: 0.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
