import { site, nav, footerNav } from './site.js'

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Absolute URL for canonicals, OG tags and schema @id values. */
export const abs = (path) => site.domain + site.basePath + path

/** Organization + WebSite schema, emitted once per page (site-wide entity). */
function organizationSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': abs('/#organization'),
    name: site.name,
    legalName: site.legalName,
    url: abs('/'),
    logo: {
      '@type': 'ImageObject',
      url: abs('/assets/logo.svg'),
      width: 512,
      height: 512,
    },
    image: abs('/assets/og-default.png'),
    description:
      'Marketing agency for managed service providers and IT services companies. We identify the offers with the most demand and least competition, build an SEO-optimised website against them, and project the revenue impact.',
    email: site.email,
    telephone: site.phone,
    foundingDate: site.founded,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$$',
    knowsAbout: [
      'MSP marketing',
      'MSP lead generation',
      'SEO for managed service providers',
      'IT services marketing',
      'IT services lead generation',
      'MSP website design',
      'Managed services go-to-market strategy',
    ],
    sameAs: site.sameAs,
  }
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: abs('/'),
    name: site.name,
    publisher: { '@id': abs('/#organization') },
    inLanguage: 'en-US',
  }
}

function breadcrumbSchema(page) {
  if (!page.breadcrumbs || page.breadcrumbs.length === 0) return null
  const items = [{ label: 'Home', href: '/' }, ...page.breadcrumbs]
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(page.path) + '#breadcrumbs',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: abs(item.href),
    })),
  }
}

function webPageSchema(page) {
  return {
    '@type': page.schemaType || 'WebPage',
    '@id': abs(page.path) + '#webpage',
    url: abs(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': abs('/#website') },
    about: { '@id': abs('/#organization') },
    inLanguage: 'en-US',
    datePublished: page.datePublished || '2026-01-15',
    dateModified: page.dateModified || '2026-09-13',
  }
}

/** Renders the <head> of every page. */
function head(page) {
  const canonical = abs(page.path)
  const ogImage = abs(page.ogImage || '/assets/og-default.png')
  const graph = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema(page),
    breadcrumbSchema(page),
    ...(page.schema || []),
  ].filter(Boolean)

  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#0b1220">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="stylesheet" href="/assets/styles.css">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`
}

function navItem(item, currentPath) {
  const active = currentPath === item.href || (item.children || []).some((c) => c.href === currentPath)
  if (!item.children) {
    return `<li><a class="nav__link${active ? ' is-active' : ''}" href="${item.href}">${esc(item.label)}</a></li>`
  }
  const children = item.children
    .map(
      (c) =>
        `<li><a class="nav__sublink${currentPath === c.href ? ' is-active' : ''}" href="${c.href}">${esc(c.label)}</a></li>`,
    )
    .join('')
  return `<li class="nav__group">
  <button class="nav__link nav__toggle${active ? ' is-active' : ''}" type="button" aria-expanded="false" aria-controls="menu-${item.label.replace(/\s+/g, '-').toLowerCase()}">
    ${esc(item.label)}<svg class="nav__chev" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
  </button>
  <ul class="nav__menu" id="menu-${item.label.replace(/\s+/g, '-').toLowerCase()}">${children}</ul>
</li>`
}

function header(currentPath) {
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="brand" href="/" aria-label="${esc(site.name)} home">
      <svg class="brand__mark" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="url(#bg)"/>
        <path d="M8 22V10l8 7 8-7v12" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
        <defs><linearGradient id="bg" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>
      </svg>
      <span class="brand__name">${esc(site.name)}</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">${nav.map((i) => navItem(i, currentPath)).join('')}</ul>
    </nav>
    <div class="site-header__actions">
      <a class="link-quiet" href="tel:${site.phone}">${esc(site.phoneDisplay)}</a>
      <a class="btn btn--primary btn--sm" href="${site.bookingUrl}">Book a strategy call</a>
    </div>
    <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu" data-menu-toggle>
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
    <ul class="mobile-nav__list">
      ${nav
        .map((item) =>
          item.children
            ? `<li><span class="mobile-nav__title">${esc(item.label)}</span><ul>${item.children
                .map((c) => `<li><a href="${c.href}">${esc(c.label)}</a></li>`)
                .join('')}</ul></li>`
            : `<li><a class="mobile-nav__title-link" href="${item.href}">${esc(item.label)}</a></li>`,
        )
        .join('')}
      <li><a class="mobile-nav__title-link" href="/contact/">Contact</a></li>
    </ul>
    <a class="btn btn--primary btn--block" href="${site.bookingUrl}">Book a strategy call</a>
  </div>
</header>`
}

function footer() {
  const year = new Date().getFullYear()
  return `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <a class="brand brand--footer" href="/">
          <svg class="brand__mark" width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#2563eb"/>
            <path d="M8 22V10l8 7 8-7v12" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
          </svg>
          <span class="brand__name">${esc(site.name)}</span>
        </a>
        <p class="site-footer__pitch">${esc(site.tagline)} Opportunity research, websites, SEO and outbound built for MSPs and IT services companies doing $2–5M.</p>
        <p class="site-footer__contact">
          <a href="mailto:${site.email}">${esc(site.email)}</a><br>
          <a href="tel:${site.phone}">${esc(site.phoneDisplay)}</a>
        </p>
      </div>
      ${footerNav
        .map(
          (col) => `<nav class="site-footer__col" aria-label="${esc(col.title)}">
        <h2 class="site-footer__heading">${esc(col.title)}</h2>
        <ul>${col.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>
      </nav>`,
        )
        .join('')}
    </div>
    <div class="site-footer__bar">
      <p>&copy; ${year} ${esc(site.legalName)}. All rights reserved.</p>
      <ul class="site-footer__legal">
        <li><a href="/privacy/">Privacy</a></li>
        <li><a href="/sitemap.xml">Sitemap</a></li>
      </ul>
    </div>
  </div>
</footer>`
}

/** Small progressive-enhancement script: mobile menu + dropdown a11y. */
const inlineScript = `
(function(){
  var t=document.querySelector('[data-menu-toggle]'),m=document.getElementById('mobile-nav');
  if(t&&m){t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));m.hidden=o;document.body.classList.toggle('has-menu',!o);});}
  document.querySelectorAll('.nav__toggle').forEach(function(b){
    b.addEventListener('click',function(e){
      e.stopPropagation();
      var open=b.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.nav__toggle').forEach(function(o){o.setAttribute('aria-expanded','false');});
      b.setAttribute('aria-expanded',String(!open));
    });
  });
  document.addEventListener('click',function(){document.querySelectorAll('.nav__toggle').forEach(function(o){o.setAttribute('aria-expanded','false');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.querySelectorAll('.nav__toggle').forEach(function(o){o.setAttribute('aria-expanded','false');});}});
  var h=document.querySelector('[data-header]');
  if(h){var s=function(){h.classList.toggle('is-stuck',window.scrollY>8);};s();window.addEventListener('scroll',s,{passive:true});}
})();
`

export function renderPage(page) {
  return `<!doctype html>
<html lang="en">
<head>
${head(page)}
</head>
<body class="${page.bodyClass || ''}">
${header(page.path)}
<main id="main">
${page.body}
</main>
${footer()}
<script>${inlineScript}</script>
</body>
</html>
`
}

export { esc }
