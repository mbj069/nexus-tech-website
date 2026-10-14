# Nexus-Tech Solutions — Website

Production website for **Nexus-Tech Solutions**, a software development
company based in Lahore, Pakistan, serving clients worldwide.

Live: https://globalnexus.tech (staging: `nexus-tech-website-three.vercel.app`)

## Stack

- **Next.js 15** (App Router), **React 19**, **TypeScript** — server-rendered
  on Vercel. Every page is prerendered to static HTML at build time for
  SEO and speed; `/api/*` routes run as serverless functions.
- **No CSS framework, no animation libraries.** One hand-written design
  system (`app/globals.css`) driven by CSS custom properties.
- **Self-hosted fonts** via `next/font` — zero runtime requests to font CDNs.
- **Resend** for contact-form email delivery (free tier).

## Commands

```bash
npm install
npm run dev     # local development
npm run build   # production build (prerendered pages + functions)
```

## Architecture

```
app/
  layout.tsx          # fonts, metadata, Organization + WebSite JSON-LD,
                      # indexing gate (SITE_INDEXABLE), JS-detection script
  page.tsx            # home
  globals.css         # design tokens + base + components
  sitemap.ts          # canonical, indexable routes only
  robots.ts           # env-aware: disallow-all unless SITE_INDEXABLE=true
  not-found.tsx       # 404 (noindex)
  api/contact/        # serverless contact endpoint → Resend
                      # (validation, honeypot, rate limiting, size guard)
  services/           # /services/ + 5 full service pages
                      # (problem, offerings, capabilities, process,
                      #  related work, FAQ + FAQPage schema)
  work/               # 5 verified case studies
  company/            # about
  contact/            # project brief form (budget field, honest fallback
                      # to WhatsApp when email isn't configured)
components/
  Header.tsx          # sticky nav + mobile panel (sibling of header —
                      # never a child; backdrop-filter would collapse it)
  Footer.tsx
  Reveal.tsx          # IntersectionObserver reveal; no-JS safe
                      # (hidden state scoped to .js)
  ServicePage.tsx     # shared service-page template
  ContactForm.tsx     # brief form wired to /api/contact
  CtaBand.tsx         # shared conversion band
```

## URL structure

Trailing slashes everywhere: `/work/`, `/services/web-development/`, …
(`trailingSlash: true` in `next.config.ts`.)

## Environment variables (Vercel)

| Variable           | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `SITE_INDEXABLE`   | Set `true` **only** on production. Anything else → noindex + disallow-all robots. |
| `RESEND_API_KEY`   | Resend API key for contact-form delivery             |
| `CONTACT_TO_EMAIL` | Inbox where project briefs land                      |
| `RESEND_FROM`      | Verified sender address (defaults to Resend test sender) |

Until the Resend variables are set, the contact form honestly directs
visitors to WhatsApp instead of silently dropping submissions.

## Deployment

Designed for **Vercel**. Connect the repo and deploy; attach the
`globalnexus.tech` domain to this project at go-live, then set
`SITE_INDEXABLE=true` and redeploy so indexing turns on.

## Status

- [x] Foundation: architecture, routing, tokens, typography, header/nav, footer, SEO infra
- [x] Homepage — full section build
- [x] Service pages — problem, capabilities, process, related work, FAQ + schema
- [x] Work — 5 verified case studies (screenshots pending)
- [x] Company page
- [x] Contact — working serverless submission via Resend
- [x] QA — SEO + performance validation passed
- [ ] Go-live: domain move + `SITE_INDEXABLE=true` + Search Console sitemap submission
