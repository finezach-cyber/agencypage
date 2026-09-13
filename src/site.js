/**
 * Global site configuration.
 *
 * RENAMING THE AGENCY: change `name`, `legalName`, `domain`, `email`, `phone`
 * and `city`/`region` below. Nothing else in the codebase hardcodes them.
 */
export const site = {
  name: 'MSP Growth Partners',
  legalName: 'MSP Growth Partners LLC',
  tagline: 'We help MSPs build the path from $2M to $10M.',
  domain: 'https://www.mspgrowthpartners.com',
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
}

/**
 * Primary navigation. `children` renders as a dropdown on desktop and an
 * indented group in the mobile menu.
 */
export const nav = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'MSP Lead Generation', href: '/msp-lead-generation/' },
      { label: 'SEO for MSPs', href: '/msp-seo/' },
      { label: 'MSP Website Design', href: '/msp-website-design/' },
      { label: 'MSP Marketing Strategy', href: '/msp-marketing-strategy/' },
    ],
  },
  {
    label: 'How It Works',
    href: '/gtm-foundation/',
    children: [
      { label: 'Phase 1 — GTM Foundation', href: '/gtm-foundation/' },
      { label: 'Phase 2 — Growth Engine', href: '/growth-engine/' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'MSP Keyword Research', href: '/resources/msp-keyword-research/' },
      { label: 'MSP Pricing Models', href: '/resources/msp-pricing-models/' },
    ],
  },
  { label: 'About', href: '/about/' },
]

export const footerNav = [
  {
    title: 'Services',
    links: [
      { label: 'MSP Lead Generation', href: '/msp-lead-generation/' },
      { label: 'SEO for MSPs', href: '/msp-seo/' },
      { label: 'MSP Website Design', href: '/msp-website-design/' },
      { label: 'MSP Marketing Strategy', href: '/msp-marketing-strategy/' },
      { label: 'All services', href: '/services/' },
    ],
  },
  {
    title: 'The Model',
    links: [
      { label: 'Phase 1 — GTM Foundation', href: '/gtm-foundation/' },
      { label: 'Phase 2 — Growth Engine', href: '/growth-engine/' },
      { label: 'About us', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'MSP keyword research', href: '/resources/msp-keyword-research/' },
      { label: 'MSP pricing models', href: '/resources/msp-pricing-models/' },
      { label: 'Resource library', href: '/resources/' },
    ],
  },
]
