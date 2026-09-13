# MSP marketing agency website

A production-ready, SEO-optimised marketing site for an agency serving managed
service providers. Static HTML, zero runtime dependencies, zero npm install.

```bash
node build.js      # renders dist/
node check.js      # validates links, titles, descriptions, schema
npm run serve      # builds and serves on http://localhost:8080
```

`npm run verify` does build + check together. There is nothing to install —
`package.json` exists only to hold the scripts and `"type": "module"`.

---

## Before you launch — required edits

Everything below is a placeholder. The site builds and validates without
changing them, but do not launch until they are real.

| What | Where |
|---|---|
| Agency name, legal name, tagline | `src/site.js` → `name`, `legalName`, `tagline` |
| Domain (used for canonicals, OG tags, sitemap, schema) | `src/site.js` → `domain` |
| Email, phone, city/region | `src/site.js` → `email`, `phone`, `phoneDisplay`, `city`, `region` |
| LinkedIn / X profile URLs | `src/site.js` → `sameAs` |
| **Contact form endpoint** | `src/site.js` → `formEndpoint` (see below) |
| Booking link | `src/site.js` → `bookingUrl` |
| Live domain | resolved automatically on Vercel — see *Deploying to Vercel* |
| Privacy policy | `src/pages/50-privacy.js` — template only, have counsel review |
| Social card image + brand name on it | `tools/og-template.html`, then regenerate (see `tools/README.md`) |

Nothing else hardcodes the brand, so renaming is a single-file edit.

### The contact form

The site is static, so the form needs a third-party handler. Until
`formEndpoint` is set, `/contact/` deliberately renders a notice and a mailto
fallback **instead of a form that would silently discard leads**.

To enable it: create a form at [Formspree](https://formspree.io) (or any
equivalent that accepts a plain `POST`), paste the endpoint into
`formEndpoint` in `src/site.js`, and rebuild. The form already includes a
honeypot field (`_gotcha`) for spam.

---

## Deploying to Vercel

The repo is configured for Vercel's Git integration. `vercel.json` sets the
build command, output directory, trailing-slash behaviour and headers, so the
import needs no manual configuration.

1. Go to [vercel.com/new](https://vercel.com/new) and import
   `finezach-cyber/agencypage`.
2. Leave Framework Preset as **Other** — `vercel.json` supplies everything.
3. Deploy. Every subsequent push builds automatically, with a preview URL per
   branch and pull request.

There are no dependencies, so the install step is a no-op and builds take
roughly a second.

### The domain is resolved, not hardcoded

Every canonical, `og:url`, sitemap `<loc>` and JSON-LD `@id` is derived from
`site.domain`, which resolves in this order:

| Source | When it applies |
|---|---|
| `SITE_URL` | Explicit override. Always wins. |
| `VERCEL_PROJECT_PRODUCTION_URL` | Injected by Vercel — the production domain |
| `VERCEL_URL` | Injected by Vercel — this deployment (previews) |
| placeholder in `src/site.js` | Local builds |

You do not need to set anything for Vercel: it injects the middle two. A build
that declared canonicals pointing at a domain it is not served from would be
worse than having none, which is why this is resolved rather than committed.

### Staging deploys are held out of the index automatically

While the site is served from a `*.vercel.app` host, every page carries
`noindex, follow` and `sitemap.xml` is emitted empty. That stops a staging
deployment being indexed and later competing with the real site.

**It switches off by itself** as soon as you attach a custom domain — no file
to remember to edit. Force it either way with `SITE_NOINDEX=1` or
`SITE_INDEX=1` in the Vercel project's environment variables.

`robots.txt` deliberately still allows crawling. Blocking the crawl would stop
search engines reading the `noindex`, which is the usual reason a page stays
indexed despite having the tag.

### Attaching the real domain

1. Add the domain in **Vercel → Project → Settings → Domains** and point DNS at
   Vercel.
2. Redeploy. Canonicals switch to the new domain and the noindex lifts on its
   own.
3. Update `email`, `phone`, `city`/`region` and `sameAs` in `src/site.js` —
   those are still placeholders and are *not* derived from the domain.
4. Submit `sitemap.xml` in Google Search Console.

### CI

`.github/workflows/ci.yml` builds and runs `check.js` on every push and pull
request. It does not deploy — Vercel does that. Keep the check passing: it is
the gate that catches broken links, duplicate titles and malformed structured
data before they ship.

## Why it is built this way

Every byte the browser loads affects rankings, so the site ships one CSS file,
~15 lines of inline JS, system fonts, and no third-party requests at all. There
is no framework to upgrade and no build cache to invalidate — `node build.js`
on a clean checkout produces the identical site.

```
build.js              renders src/pages/*.js → dist/, writes sitemap/robots/.nojekyll
check.js              post-build validator (see below)
src/site.js           brand, nav, footer nav, base path  ← the only config file
src/layout.js         <head>, header, footer, JSON-LD graph
src/components.js     section builders every page composes from
src/data/keywords.js  the keyword dataset, shared across pages
src/pages/*.js        one module per URL
src/assets/           styles.css, favicon, logo, og image
tools/                HTML templates for regenerating the PNG assets
```

Pages are plain objects — `{ path, title, description, breadcrumbs, schema, body }`
— and the body is composed from `src/components.js` rather than raw HTML, so
markup stays consistent across all 15 pages. To add a page, drop a new module in
`src/pages/`; the build, sitemap and nav-awareness pick it up automatically
(add it to `nav` in `src/site.js` if it belongs in the menu).

### check.js

Run it before every commit. It fails the build on anything that quietly costs
rankings:

- internal links that 404 (including base-path builds)
- missing, duplicate, or over-length titles (>60) and meta descriptions (>155)
- missing canonical, zero or multiple `<h1>`, missing Open Graph tags
- JSON-LD that does not parse
- `<img>` without `alt`
- noindexed pages in the sitemap, or indexable pages missing from it
- warns on thin pages (<400 words) and orphans

---

## Keyword strategy

The site targets **2,090 searches/month** — the complete set of terms an MSP
owner types once they have decided to engage marketing help. One page per
cluster, no two pages competing for the same query.

| Page | Primary keywords | Vol/mo |
|---|---|---|
| `/` | msp marketing (720), msp marketing agency (210), msp marketing company (140), msp digital marketing (90) | **1,160** |
| `/msp-lead-generation/` | msp lead generation (170), msp leads (70), msp lead generation services (70), lead generation for msp (70), it services lead generation (20) | **400** |
| `/msp-marketing-strategy/` | msp marketing strategy (140), msp marketing plan (110) | **250** |
| `/msp-seo/` | msp seo (140), plus seo for msp / seo for msps / seo for managed service providers | **140** |
| `/msp-marketing-services/` | msp marketing services (110) | **110** |
| `/msp-pricing-models/` | msp pricing models (30) | **30** |

Supporting pages that carry the sale rather than a keyword: `/process/` (the
full engagement, stage by stage), `/gtm-foundation/` (Phase 1), `/growth-engine/`
(Phase 2), `/about/`, `/contact/`, `/privacy/`, `404.html`. **13 pages.**

The dataset lives in `src/data/keywords.js`. Before adding a page, check that its
target term is not already covered above — the whole argument of this site is
focus, and a second page chasing the same query weakens the first.

### What the site deliberately does not target

`clientDemandExample` in the keyword data holds terms like `it support near me`
and `managed it services provider`. That is what a business searches when it
wants to **hire an MSP** — our clients' demand, not ours. It appears once, inside
`/process/#research`, to illustrate the market-research stage. No page is built
against it: those searchers want a provider, not a marketing firm.

## The process diagram

`processDiagram()` in `src/components.js` renders the engagement flow: five
Month 1 stages, a decision fork, and the Phase 2 execution band. It appears on
`/`, `/msp-marketing-services/` and `/gtm-foundation/` in compact form, and in
full at the top of `/process/`.

Every node is an anchor pointing at a section on `/process/` (`#capabilities`,
`#research`, `#positioning`, `#website`, `#campaign-plan`, `#decision`,
`#execution`). It is semantic HTML rather than SVG, so it keeps focus rings, tap
targets and text scaling, and stacks to a single column on mobile.

**If you add or rename a stage**, update both the node list in `processDiagram()`
and the matching `stage({ id })` call in `src/pages/15-process.js`. `check.js`
does not currently validate fragment targets, so a mismatch would be silent.

## Content integrity

There are **no fabricated testimonials, client names, logos, case studies or
results claims** anywhere in the site. Social-proof slots are marked with HTML
comments where a real site would place them. Add real proof before launch —
specific evidence outperforms adjectives, and invented proof is a legal and
trust liability.

The keyword volumes and CPC figures are the real dataset the site was
commissioned around. Treat volumes as directional; they are rounded and move
seasonally.

---

## Post-launch checklist

- [ ] Verify the domain in Google Search Console and submit `sitemap.xml`
- [ ] Create / claim the Google Business Profile and complete every field
- [ ] Set up analytics (and add its cookie note to `/privacy/` if it sets cookies)
- [ ] Replace `sameAs` URLs with real profiles, then re-check the schema in
      Google's Rich Results Test
- [ ] Confirm the form delivers to a monitored inbox — send a live test
- [ ] Run PageSpeed Insights on `/` and one money page
- [ ] Add real proof: case studies, named clients, review counts
