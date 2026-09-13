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
  title = 'Establish what your MSP should be selling',
  body = 'A 30-minute call. We review your services, your market and your competitors, and tell you where the demand sits. No presentation, no sequence.',
  primaryLabel = 'Book a strategy call',
  secondaryLabel = 'See the process',
  secondaryHref = '/process/',
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

/**
 * The engagement diagram. Rendered on the home page as the overview and again
 * at the top of /process/.
 *
 * Deliberately semantic HTML rather than SVG: every node is a real anchor, so
 * focus rings, tap targets, text scaling and mobile stacking all work without
 * fighting a viewBox. `compact` drops the per-node detail line for the
 * home-page overview.
 *
 * The `out` field marks the three stages that produce a named deliverable —
 * two reports and the website. Those are what the client walks away with.
 */
export function processDiagram({ compact = false, base = '/process/' } = {}) {
  const phaseOne = [
    {
      id: 'intake',
      label: 'Capability intake',
      detail: 'Your services, site and market, and whether local search applies.',
    },
    {
      id: 'opportunities',
      label: 'Opportunity analysis',
      detail: 'The three offers with the most demand and the least competition.',
      out: 'Report 1',
    },
    {
      id: 'website',
      label: 'Website build',
      detail: 'An SEO-optimised site on your branding, one page per opportunity.',
      out: 'Website',
    },
    {
      id: 'impact',
      label: 'Impact modelling',
      detail: 'Projected rankings, and the revenue those rankings imply.',
      out: 'Report 2',
    },
  ]

  const node = (step, index) => `<li class="pnode">
      <a href="${base}#${step.id}">
        <span class="pnode__top">
          <span class="pnode__num">${String(index + 1).padStart(2, '0')}</span>
          ${step.out ? `<span class="pnode__out">${step.out}</span>` : ''}
        </span>
        <span class="pnode__label">${step.label}</span>
        ${compact ? '' : `<span class="pnode__detail">${step.detail}</span>`}
      </a>
    </li>`

  return `<div class="pmap">
  <section class="pband pband--one" aria-labelledby="pband-one">
    <header class="pband__head">
      <p class="pband__tag">Phase 1</p>
      <h3 class="pband__title" id="pband-one"><a href="/gtm-foundation/">GTM Foundation</a></h3>
      <p class="pband__meta">Month 1 &middot; one-time &middot; fixed fee</p>
    </header>
    <ol class="pband__nodes">${phaseOne.map(node).join('')}</ol>
    <p class="pband__out">You receive <strong>two reports</strong> and an <strong>SEO-optimised website ready to deploy</strong>.</p>
  </section>

  <div class="pfork">
    <a class="pfork__hub" href="${base}#decision">
      <span class="pfork__mark" aria-hidden="true">&#9670;</span>
      <span class="pfork__label">Your decision</span>
      <span class="pfork__sub">At the end of Month 1, with the work in hand</span>
    </a>
    <ul class="pfork__paths">
      <li class="ppath ppath--stop">
        <span class="ppath__head">If you stop here</span>
        <span class="ppath__body">Both reports and the website are yours to deploy. No further cost, no licence, no claw-back.</span>
      </li>
      <li class="ppath ppath--go">
        <span class="ppath__head">If you continue</span>
        <span class="ppath__body">We execute against the opportunities the research identified.</span>
      </li>
    </ul>
  </div>

  <section class="pband pband--two" aria-labelledby="pband-two">
    <header class="pband__head">
      <p class="pband__tag">Phase 2</p>
      <h3 class="pband__title" id="pband-two"><a href="/growth-engine/">Growth Engine</a></h3>
      <p class="pband__meta">Optional &middot; decided after delivery</p>
    </header>
    <ol class="pband__nodes pband__nodes--wide">
      <li class="pnode pnode--wide">
        <a href="${base}#execution">
          <span class="pnode__top"><span class="pnode__num">05</span></span>
          <span class="pnode__label">Execution</span>
          ${compact ? '' : '<span class="pnode__detail">SEO, content, outbound and reputation run against the opportunities, measured on booked meetings.</span>'}
        </a>
      </li>
    </ol>
  </section>
</div>`
}

/**
 * Renders a sample deliverable as a document mock — a styled HTML sheet rather
 * than a screenshot, so it stays crawlable, responsive and legible at any text
 * size.
 *
 * Every instance is explicitly stamped as a sample. The figures are
 * illustrative and belong to a fictional firm; nothing here represents a real
 * client or a real result.
 */
export function reportMock({ kicker, company, meta, sections, caption }) {
  return `<figure class="doc">
  <div class="doc__sheet">
    <header class="doc__head">
      <div>
        <p class="doc__kicker">${esc(kicker)}</p>
        <h3 class="doc__title">${esc(company)}</h3>
        ${meta ? `<p class="doc__meta">${meta}</p>` : ''}
      </div>
      <span class="doc__stamp" aria-hidden="true">Sample</span>
    </header>
    <div class="doc__body">
      ${sections
        .map(
          (sec) => `<section class="doc__section">
        <h4 class="doc__h">${esc(sec.title)}</h4>
        ${sec.body}
      </section>`,
        )
        .join('')}
    </div>
  </div>
  ${caption ? `<figcaption class="doc__cap">${caption}</figcaption>` : ''}
</figure>`
}

/** Simple table used inside report mocks. */
export function docTable({ head, rows, foot }) {
  return `<div class="table-wrap table-wrap--flush">
  <table class="data-table data-table--doc">
    <thead><tr>${head.map((h, i) => `<th scope="col"${i ? ' class="num"' : ''}>${esc(h)}</th>`).join('')}</tr></thead>
    <tbody>
      ${rows
        .map(
          (r) => `<tr>${r
            .map((cell, i) =>
              i === 0
                ? `<th scope="row">${cell}</th>`
                : `<td class="num">${cell}</td>`,
            )
            .join('')}</tr>`,
        )
        .join('')}
    </tbody>
    ${foot ? `<tfoot><tr>${foot.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td class="num">${c}</td>`)).join('')}</tr></tfoot>` : ''}
  </table>
</div>`
}

/** The conversion chain in the Impact Report, as a readable step list. */
export function funnelSteps(steps) {
  return `<ol class="funnel">
    ${steps
      .map(
        (s) => `<li class="funnel__step">
      <span class="funnel__label">${esc(s.label)}</span>
      <span class="funnel__value">${esc(s.value)}</span>
      <span class="funnel__rate">${esc(s.rate)}</span>
    </li>`,
      )
      .join('')}
  </ol>`
}

/**
 * The firm types we serve, as a compact strip.
 *
 * SEO note: this exists to build entity coverage for "IT services company" and
 * its neighbours WITHOUT competing for any targeted keyword. It carries no
 * links and no page of its own — the audience is broad, the keyword targeting
 * stays narrow. Never turn these into separate landing pages: that would split
 * one intent across several URLs, which is the actual cause of dilution.
 */
export function audienceStrip({ title = 'Who we work with', intro, tone = '' } = {}) {
  const types = [
    { label: 'Managed service providers', note: 'Full-stack managed IT' },
    { label: 'IT services companies', note: 'Project and professional services' },
    { label: 'IT support firms', note: 'Helpdesk-led providers' },
    { label: 'Co-managed IT providers', note: 'Supporting internal IT teams' },
    { label: 'MSSPs and security firms', note: 'Security-led offerings' },
  ]
  return `<div class="audience ${tone ? 'audience--' + tone : ''}">
    <h2 class="audience__title">${esc(title)}</h2>
    ${intro ? `<p class="audience__intro">${intro}</p>` : ''}
    <ul class="audience__list">
      ${types
        .map(
          (t) => `<li><span class="audience__label">${esc(t.label)}</span><span class="audience__note">${esc(t.note)}</span></li>`,
        )
        .join('')}
    </ul>
  </div>`
}

/** Service schema helper for the ranking pages. */
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
      name: 'Managed service providers and IT services companies doing $2–5M in annual revenue',
    },
  }
}
