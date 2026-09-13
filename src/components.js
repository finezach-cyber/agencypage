import { esc } from './layout.js'
import { site } from './site.js'

/** Marks up a heading with an optional eyebrow label. */
export function sectionHead({ eyebrow, title, intro, align = 'left', level = 2 }) {
  return `<div class="section-head ${align === 'center' ? 'section-head--center' : ''}">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h${level}>${title}</h${level}>
    ${intro ? `<p class="section-head__intro">${intro}</p>` : ''}
  </div>`
}

export function section({ id, className = '', tone = '', inner, wide = false }) {
  return `<section class="section ${tone ? 'section--' + tone : ''} ${className}"${id ? ` id="${id}"` : ''}>
  <div class="container${wide ? ' container--wide' : ''}">${inner}</div>
</section>`
}

export function breadcrumbs(items) {
  const all = [{ label: 'Home', href: '/' }, ...items]
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="container"><ol>
    ${all
      .map((item, i) =>
        i === all.length - 1
          ? `<li aria-current="page">${esc(item.label)}</li>`
          : `<li><a href="${item.href}">${esc(item.label)}</a></li>`,
      )
      .join('')}
  </ol></div></nav>`
}

export function hero({ eyebrow, title, lede, primary, secondary, aside, stats }) {
  return `<section class="hero">
  <div class="hero__glow" aria-hidden="true"></div>
  <div class="container hero__inner${aside ? '' : ' hero__inner--solo'}">
    <div class="hero__copy">
      ${eyebrow ? `<p class="eyebrow eyebrow--light">${esc(eyebrow)}</p>` : ''}
      <h1>${title}</h1>
      <p class="hero__lede">${lede}</p>
      <div class="hero__actions">
        <a class="btn btn--primary btn--lg" href="${primary.href}">${esc(primary.label)}</a>
        ${secondary ? `<a class="btn btn--ghost btn--lg" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}
      </div>
      ${
        stats
          ? `<dl class="hero__stats">${stats
              .map(
                (s) =>
                  `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`,
              )
              .join('')}</dl>`
          : ''
      }
    </div>
    ${aside ? `<div class="hero__aside">${aside}</div>` : ''}
  </div>
</section>`
}

export function cards(items, { columns = 3, variant = '' } = {}) {
  return `<ul class="cards cards--${columns} ${variant ? 'cards--' + variant : ''}">
    ${items
      .map(
        (c) => `<li class="card">
      ${c.icon ? `<span class="card__icon" aria-hidden="true">${c.icon}</span>` : ''}
      ${c.kicker ? `<p class="card__kicker">${esc(c.kicker)}</p>` : ''}
      <h3 class="card__title">${c.href ? `<a href="${c.href}">${c.title}</a>` : c.title}</h3>
      <p class="card__body">${c.body}</p>
      ${c.list ? `<ul class="card__list">${c.list.map((l) => `<li>${l}</li>`).join('')}</ul>` : ''}
      ${c.href ? `<span class="card__more" aria-hidden="true">${esc(c.linkLabel || 'Learn more')} &rarr;</span>` : ''}
    </li>`,
      )
      .join('')}
  </ul>`
}

export function steps(items) {
  return `<ol class="steps">
    ${items
      .map(
        (s, i) => `<li class="step">
      <span class="step__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div class="step__body">
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        ${s.list ? `<ul class="tick-list">${s.list.map((l) => `<li>${l}</li>`).join('')}</ul>` : ''}
      </div>
    </li>`,
      )
      .join('')}
  </ol>`
}

/**
 * Keyword demand table. `rows` = [{ keyword, volume, cpc, note }].
 * Rendered as a real <table> so the data stays crawlable and accessible.
 */
export function keywordTable({ caption, rows, showCpc = true, totalLabel }) {
  const total = rows.reduce((sum, r) => sum + (typeof r.volume === 'number' ? r.volume : 0), 0)
  return `<div class="table-wrap">
  <table class="data-table">
    ${caption ? `<caption>${caption}</caption>` : ''}
    <thead>
      <tr>
        <th scope="col">Keyword</th>
        <th scope="col" class="num">Searches / month</th>
        ${showCpc ? '<th scope="col" class="num">Google Ads CPC</th>' : ''}
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (r) => `<tr>
        <th scope="row">${esc(r.keyword)}${r.note ? `<span class="data-table__note">${esc(r.note)}</span>` : ''}</th>
        <td class="num">${typeof r.volume === 'number' ? r.volume.toLocaleString('en-US') : esc(r.volume)}</td>
        ${showCpc ? `<td class="num">${r.cpc ? '$' + r.cpc.toFixed(2) : '<span class="muted">n/a</span>'}</td>` : ''}
      </tr>`,
        )
        .join('')}
    </tbody>
    ${
      totalLabel
        ? `<tfoot><tr><th scope="row">${esc(totalLabel)}</th><td class="num">${total.toLocaleString('en-US')}</td>${showCpc ? '<td class="num"></td>' : ''}</tr></tfoot>`
        : ''
    }
  </table>
</div>`
}

export function checklist(items, { columns = 2 } = {}) {
  return `<ul class="tick-list tick-list--${columns}">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`
}

export function callout({ title, body, tone = 'info' }) {
  return `<aside class="callout callout--${tone}">
    ${title ? `<h3 class="callout__title">${title}</h3>` : ''}
    <div class="callout__body">${body}</div>
  </aside>`
}

export function quote({ text, attribution }) {
  return `<figure class="pull-quote">
    <blockquote><p>${text}</p></blockquote>
    ${attribution ? `<figcaption>${esc(attribution)}</figcaption>` : ''}
  </figure>`
}

/**
 * FAQ block. Returns { html, schema } so the page can add FAQPage structured
 * data only when the FAQs are genuinely visible on the page (Google's rule).
 */
export function faq(items, { title = 'Frequently asked questions', intro } = {}) {
  const html = `<div class="faq">
    ${sectionHead({ eyebrow: 'FAQ', title, intro })}
    <div class="faq__list">
      ${items
        .map(
          (f) => `<details class="faq__item">
        <summary><span>${esc(f.q)}</span><span class="faq__icon" aria-hidden="true"></span></summary>
        <div class="faq__answer">${f.a}</div>
      </details>`,
        )
        .join('')}
    </div>
  </div>`

  const schema = {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/<[^>]+>/g, '').trim(),
      },
    })),
  }
  return { html, schema }
}

export function cta({
  title = 'Find out what your MSP should actually be selling',
  body = 'A 30-minute call. We look at your services, your market and your competitors, and tell you where the demand is. No deck, no pitch sequence.',
  primaryLabel = 'Book a GTM call',
  secondaryLabel = 'See the engagement model',
  secondaryHref = '/gtm-foundation/',
} = {}) {
  return `<section class="cta-band">
  <div class="container cta-band__inner">
    <div>
      <h2>${title}</h2>
      <p>${body}</p>
    </div>
    <div class="cta-band__actions">
      <a class="btn btn--primary btn--lg" href="${site.bookingUrl}">${esc(primaryLabel)}</a>
      ${secondaryHref ? `<a class="btn btn--ghost btn--lg" href="${secondaryHref}">${esc(secondaryLabel)}</a>` : ''}
    </div>
  </div>
</section>`
}

/** Cross-links between money pages — real internal linking, not a widget. */
export function relatedLinks(items, { title = 'Keep reading' } = {}) {
  return `<section class="section section--tight">
  <div class="container">
    <h2 class="related__title">${esc(title)}</h2>
    <ul class="related">
      ${items
        .map(
          (i) => `<li><a href="${i.href}">
        <span class="related__label">${esc(i.label)}</span>
        <span class="related__body">${esc(i.body)}</span>
      </a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`
}

/** Service schema helper for the four money pages. */
export function serviceSchema({ name, description, path, serviceType }) {
  return {
    '@type': 'Service',
    '@id': site.domain + path + '#service',
    name,
    description,
    serviceType,
    provider: { '@id': site.domain + '/#organization' },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Managed service providers doing $2–5M in annual revenue',
    },
  }
}
