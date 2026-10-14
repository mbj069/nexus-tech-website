# Nexus-Tech Solutions — Website

Production website for **Nexus-Tech Solutions**, a software development
company based in Lahore, Pakistan, serving clients worldwide.

## Stack

- **Next.js 15** (App Router) with **static export** — every route is real
  HTML at build time. No client-rendered shell, no hash routing.
- **No CSS framework, no animation libraries.** One hand-written design
  system (`app/globals.css`) driven by CSS custom properties.
- **Self-hosted fonts** via `next/font` — zero runtime requests to font CDNs.
- **TypeScript**, strict.

## Commands

```bash
npm install
npm run dev     # local development
npm run build   # static export → ./out
```

## Architecture

```
app/
  layout.tsx          # fonts, metadata, Organization + WebSite JSON-LD
  page.tsx            # home (foundation shell — full sections next phase)
  globals.css         # design tokens + base + components
  sitemap.ts          # canonical, indexable routes only
  robots.ts           # crawl rules + sitemap reference
  not-found.tsx       # 404 (noindex)
  services/           # /services/ + 5 service detail pages
  work/               # portfolio index (case studies next phase)
  company/            # about
  contact/            # brief form (wired to serverless function next phase)
components/
  Header.tsx          # sticky nav + mobile panel (CSS transitions only)
  Footer.tsx
  Reveal.tsx          # IntersectionObserver reveal primitive
  ServicePage.tsx     # shared service-page template
  ContactForm.tsx     # accessible form shell
  CtaBand.tsx         # shared conversion band
```

## URL structure

Trailing slashes everywhere: `/work/`, `/services/web-development/`, …
(`trailingSlash: true` in `next.config.ts`.)

## Deployment

Designed for **Vercel**. Connect the repo; `npm run build` produces a
fully static `out/` directory. The contact form's serverless function
(`/api/contact` + email service) is added in the contact phase — until
then the form is explicit that online submissions open at launch.

## Build phases

- [x] **BUILD 01 — Foundation** (this): architecture, routing, design
      tokens, typography, header, mobile nav, footer, SEO infrastructure,
      responsive grid, buttons, animation primitives.
- [ ] Homepage — full section build on this foundation.
- [ ] Service pages — process, capabilities, FAQ, related work.
- [ ] Work — verified case studies with real visuals.
- [ ] Contact — working serverless submission + email.
- [ ] QA — Core Web Vitals + SEO validation, then staging → go-live.
