# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static Astro 5 site (no backend, no database) for a private pediatrician in Málaga: profile, specialties, child-feeding courses, paid appointment booking, and an ad landing page. Bilingual: Spanish (default, at `/`) and English (under `/en/`). All content is **sample data** while `site.demo` is `true`. User-facing copy and code comments are in Spanish.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/ (deploy target: Cloudflare Pages / Netlify)
npm run preview
```

There are no tests or linters. Node 18.20+ (tested with 22). `npm run build` is the only verification step.

## Architecture

- **Pages are thin wrappers.** Each file in `src/pages/**` (ES) and `src/pages/en/**` (EN) just renders a view from `src/views/*View.astro` with `lang="es"` or `lang="en"`. Put page logic/markup in the view, never in the page file. Spanish and English URLs differ (`/reservar/` ↔ `/en/book/`, `/cursos/` ↔ `/en/courses/`).
- **Route map:** `routes` in `src/i18n/ui.ts` maps each `RouteKey` to its ES/EN path. Adding a page means adding both page files *and* a `routes` entry; `Base.astro` uses it for canonical/hreflang and the header language switch.
- **Content vs. UI strings:**
  - `src/data/site.ts` — all business content (doctor, contact, consultations/prices, specialties, courses, FAQ). Translatable fields are `{ es, en }` objects (type `T`); read them as `field[lang]`. Also exports `money()` for price formatting.
  - `src/i18n/ui.ts` — interface strings; access via `t(lang)`.
- **Layout:** `src/layouts/Base.astro` handles head/SEO (canonical, hreflang, JSON-LD `Physician`), header/footer, and the demo banner. `minimal` prop = ad landing mode (no full nav, `noindex`).
- **Booking (`BookingPicker.astro`):** if `site.booking.calUrl` is empty, renders a demo picker that generates fake slots client-side; if set, embeds the Cal.com calendar (one Cal event per consultation via `calSlug`). Payment is through Cal.com + Stripe.
- **Courses:** bought via Stripe Payment Links (`stripeLink` per course in `site.ts`); access is granted manually by the doctor.
- `site` in `astro.config.mjs` is the production domain (used to build canonical URLs).

## Going from demo to real (from README)

Set `booking.calUrl`, fill each course's `stripeLink`, set `demo: false`, update `site` in `astro.config.mjs`, complete legal texts in `src/views/LegalView.astro`, and add Meta pixel / Google tag plus a cookie banner in `Base.astro` when ads go live.

## Design

The UI was built with the **impeccable** skill (`.claude/skills/impeccable`). Before visual changes, read `PRODUCT.md` (audience, constraints: 300 € budget, zero monthly cost), `DESIGN.md` (color tokens, type, component rules) and `.impeccable/surfaces/site.md` (direction contract). The visual concept is a child-health growth record ("cartilla de salud infantil"): sage graph-paper ground, bottle-green bands, tomato/ochre accents, Bricolage Grotesque + Figtree (self-hosted via Fontsource). Avoid generic white/hospital-blue clinic patterns. Tokens live in `src/styles/global.css`.
