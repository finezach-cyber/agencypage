/**
 * Global site configuration.
 *
 * RENAMING THE AGENCY: change `name`, `legalName`, `domain`, `email`, `phone`
 * and `city`/`region` below. Nothing else in the codebase hardcodes them.
 */
/**
 * Where the site is being served from.
 *
 * Resolved rather than hardcoded, because every canonical, og:url, sitemap
 * <loc> and JSON-LD @id is derived from it. A build that declares canonicals
 * pointing at a domain it is not served from is worse than no canonical at all.
 *
 * Priority:
 *   1. SITE_URL                        explicit override, always wins
 *   2. VERCEL_PROJECT_PRODUCTION_URL   the project's stable production domain
 *   3. VERCEL_URL                      this deployment's URL (preview builds)
 *   4. PLACEHOLDER_DOMAIN              local builds
 *
 * Vercel injects 2 and 3 automatically — neither needs configuring — and both
 * arrive without a scheme.
 */
const PLACEHOLDER_DOMAIN = 'https://www.mspgrowthpartners.com'

function resolveDomain() {
  const withScheme = (v) => (/^https?:\/\//.test(v) ? v : `https://${v}`)
  const candidate =
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL
  if (!candidate) return PLACEHOLDER_DOMAIN
  return withScheme(candidate.trim()).replace(/\/$/, '')
}

/**
 * Whether to hold the whole site out of the search index.
 *
 * True by default on a *.vercel.app host, so a staging deployment cannot get
 * indexed and compete with the real site later. It switches off by itself the
 * moment a custom domain is attached — nobody has to remember to remove it.
 *
 * Override either way with SITE_NOINDEX=1 or SITE_INDEX=1.
 *
 * Note: robots.txt deliberately still allows crawling. Blocking the crawl would
 * stop search engines reading the noindex, which is the usual way a page stays
 * indexed despite the tag.
 */
function resolveNoindex(domain) {
  if (process.env.SITE_INDEX === '1') return false
  if (process.env.SITE_NOINDEX === '1') return true
  return /\.vercel\.app$/.test(new URL(domain).hostname)
}

export const site = {
  name: 'MSP Growth Partners',
  legalName: 'MSP Growth Partners LLC',
  tagline: 'We help MSPs and IT services companies build the path from $2M to $10M.',
  domain: resolveDomain(),
  email: 'hello@mspgrowthpartners.com',
  phone: '+1-555-010-4400',
  phoneDisplay: '(555) 010-4400',
  city: 'Austin',
  region: 'TX',
  country: 'US',
  founded: '2021',
  // Social / sameAs profiles used in Organization schema. Replace with real URLs.
  sameAs: [
    'https://www.linkedin.com/company/msp-growth-partners',
    'https://x.com/mspgrowthco',
  ],
  // Booking link used by every primary CTA. Point this at Calendly/Cal.com/
  // HubSpot once you have one; until then it goes to the contact form.
  bookingUrl: '/contact/',

  /**
   * Contact form endpoint. The site is hosted on GitHub Pages, which has no
   * backend, so the form posts to a third-party handler.
   *
   * TODO(setup): create a form at https://formspree.io and paste its endpoint
   * here. Until this is replaced the form is disabled and shows a mailto
   * fallback instead of silently dropping leads.
   */
  formEndpoint: '',

  /**
   * Custom domain for GitHub Pages. When set, build.js writes a CNAME file.
   * Leave empty if you are serving from <user>.github.io/<repo>/.
   */
  customDomain: '',

  /**
   * Sub-path the site is served from. Empty for a root domain (the normal
   * case). For a GitHub Pages *project* site without a custom domain the site
   * lives at /<repo>/, so build with: BASE_PATH=/agencypage npm run build
   */
  basePath: (process.env.BASE_PATH || '').replace(/\/$/, ''),

  // Used as the default <lastmod> in sitemap.xml.
  buildDate: new Date().toISOString().slice(0, 10),

  /**
   * Set by build.js to a short content hash of styles.css, so the stylesheet
   * can be cached immutably and still update when it changes.
   */
  assetVersion: '',
}

// Depends on the resolved domain, so it is assigned after the object literal.
site.noindex = resolveNoindex(site.domain)

/**
 * Primary navigation. `children` renders as a dropdown on desktop and an
 * indented group in the mobile menu.
 */
export const nav = [
  { label: 'Process', href: '/process/' },
  {
    label: 'Services',
    href: '/msp-marketing-services/',
    children: [
      { label: 'MSP Lead Generation', href: '/msp-lead-generation/' },
      { label: 'MSP Marketing Strategy', href: '/msp-marketing-strategy/' },
      { label: 'MSP SEO', href: '/msp-seo/' },
      { label: 'All marketing services', href: '/msp-marketing-services/' },
    ],
  },
  {
    label: 'Engagements',
    href: '/gtm-foundation/',
    children: [
      { label: 'Phase 1 — GTM Foundation', href: '/gtm-foundation/' },
      { label: 'Phase 2 — Growth Engine', href: '/growth-engine/' },
    ],
  },
  { label: 'About', href: '/about/' },
]

export const footerNav = [
  {
    title: 'Services',
    links: [
      { label: 'MSP lead generation', href: '/msp-lead-generation/' },
      { label: 'MSP marketing strategy', href: '/msp-marketing-strategy/' },
      { label: 'MSP SEO', href: '/msp-seo/' },
      { label: 'MSP marketing services', href: '/msp-marketing-services/' },
    ],
  },
  {
    title: 'Engagement',
    links: [
      { label: 'The process', href: '/process/' },
      { label: 'Phase 1 — GTM Foundation', href: '/gtm-foundation/' },
      { label: 'Phase 2 — Growth Engine', href: '/growth-engine/' },
      { label: 'MSP pricing models', href: '/msp-pricing-models/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy', href: '/privacy/' },
    ],
  },
]
