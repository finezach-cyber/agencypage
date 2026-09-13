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

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds, runs the checks, and deploys `dist/` on
every push to `main`. Pull requests build and check but do not deploy.

Two setup steps in the repository settings:

1. **Settings → Pages → Source: GitHub Actions.**
2. **If you are *not* using a custom domain**, the site is served from
   `https://<user>.github.io/<repo>/`, so root-relative URLs need a prefix.
   Add a repository variable **`BASE_PATH`** = `/<repo>` (Settings → Secrets and
   variables → Actions → Variables). The workflow passes it to the build.

   With a custom domain, leave `BASE_PATH` unset and instead set
   `customDomain` in `src/site.js` — the build then writes a `CNAME` file.

---

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

The site targets **2,890 searches/month** — the entire MSP-marketing buying
market. One page per cluster, no two pages competing for the same query.

| Page | Primary keywords | Vol/mo |
|---|---|---|
| `/` | msp marketing (720), msp marketing agency (210), msp marketing company (140), msp marketing services (110), msp digital marketing (90), msp marketing firm (40), msp marketing consultant (30) | **1,340** |
| `/msp-seo/` | msp seo (140), seo for it companies (140), msp seo agency (110), msp seo services (90), it services seo (90), local seo for msp (20), msp local seo (10) | **600** |
| `/msp-website-design/` | msp website (320), msp website design (110), it company website design (50), it services website design (10) | **490** |
| `/msp-lead-generation/` | msp lead generation (170), msp leads (70), msp lead generation services (70), lead generation for msp (70), msp sales leads (40), managed services lead generation (20), it services lead generation (20) | **460** |
| `/msp-marketing-strategy/` | msp marketing strategy (140), msp marketing plan (110) | **250** |
| `/resources/msp-pricing-models/` | msp pricing models (30) | **30** |

Supporting pages: `/services/` and `/resources/` (hubs), `/gtm-foundation/` and
`/growth-engine/` (the two offers), `/resources/msp-keyword-research/` (the
linkable research asset), `/about/`, `/contact/`, `/privacy/`, `404.html`.

### What the site deliberately does *not* target

There are no pages for `it support near me`, `managed it services provider`,
`healthcare it services` and the rest of the 40,970/mo buyer-demand list. Those
are what a business searches when it wants to **hire an MSP** — they would bring
traffic from people looking for a provider, not for marketing help.

That data instead lives on `/resources/msp-keyword-research/` as evidence of
what we build *for* clients. Keeping the two keyword markets separate is the
core strategic decision in the whole site; see `src/data/keywords.js`.

---

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
