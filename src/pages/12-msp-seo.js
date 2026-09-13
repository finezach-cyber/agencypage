import {
  hero, section, sectionHead, cards, steps, keywordTable, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, serviceSchema,
} from '../components.js'
import { seoCluster } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/msp-marketing-services/' },
  { label: 'MSP SEO', href: '/msp-seo/' },
]

const faqBlock = faq([
  {
    q: 'How long does MSP SEO take to produce results?',
    a: `<p>Google Business Profile and review work can improve local visibility within weeks. Service and location pages generally require three to six months to reach stable positions, and competitive metropolitan markets take longer. Search is the channel begun now so that month six differs materially from today, which is why we sequence outbound alongside it rather than asking you to wait.</p>`,
  },
  {
    q: 'Is local SEO or organic SEO more important for an MSP?',
    a: `<p>Local, substantially. The majority of demand in this category carries explicit local intent — <em>near me</em> and city-qualified variants — and those queries return the map results above the organic listings. Where a Google Business Profile is incomplete and the review count is low, no amount of content strategy will compensate.</p>`,
  },
  {
    q: 'Do we need a page for every city we serve?',
    a: `<p>Only for markets you genuinely serve and can evidence. A page for every town within ninety minutes, each a substitution of the last, is the clearest thin-content signal available and can suppress pages that would otherwise have ranked. We build location pages where there is real demand, real proximity and something specific to state: local clients, response commitments, the industries concentrated there.</p>`,
  },
  {
    q: 'Should we target industry terms such as healthcare IT services?',
    a: `<p>Only where you serve the vertical and can address its regulatory requirements credibly. The demand is valuable — <em>it support for dental practices</em> carries a $97.83 cost per click — but a compliance page written by a firm that has never handled a covered entity converts poorly and ranks below the specialists. Vertical pages perform when the vertical is real, which is established during <a href="/process/#capabilities">the capability audit</a>.</p>`,
  },
  {
    q: 'How much blog content is required?',
    a: `<p>Less than is commonly sold. A buyer searching <em>it support company</em> is seeking a provider, not an explanatory article. Commercial pages — services, locations, verticals, comparisons and pricing — come first, because those are what commercial queries return. Content earns its place afterwards, principally to answer the questions that arise mid-evaluation.</p>`,
  },
  {
    q: 'Do you build links?',
    a: `<p>We earn the links that matter for a local service business: chamber and association listings, vendor and partner directories, local sponsorships, accurate citations and genuinely useful resources. We do not purchase link packages. For a local MSP, citation consistency and review velocity outperform acquired guest posts.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP SEO',
  title: 'MSP SEO that targets the terms your buyers actually use',
  lede: `Search visibility for managed service providers is won locally, on commercial queries, by firms whose pages are not interchangeable with everyone else's. We establish the position first, then build the pages, profile and reputation signals that rank.`,
  primary: { href: '/contact/', label: 'Request an SEO assessment' },
  secondary: { href: '/process/#research', label: 'How we map demand' },
  stats: [
    { label: 'Won through', value: 'Local search' },
    { label: 'Top-term CPC', value: '$98.09' },
    { label: 'Horizon', value: '3–6 months' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Where MSP SEO is decided</p>
    <ul>
      <li><span>Google Business Profile and local results</span> <b>01</b></li>
      <li><span>Service pages matching commercial intent</span> <b>02</b></li>
      <li><span>Location pages for genuine service areas</span> <b>03</b></li>
      <li><span>Review volume and velocity</span> <b>04</b></li>
      <li><span>Vertical pages where you have standing</span> <b>05</b></li>
    </ul>
    <p class="panel__foot">In approximate order of impact for a $2–5M provider.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why SEO for managed service providers is a distinct discipline</h2>
      <p>Most search guidance is written for ecommerce or software. Neither model reflects how an organisation purchases IT support. An MSP sells a high-consideration, relationship-led service within a defined geography, generally to a buyer who cannot assess the technical substance of what they are acquiring. That changes both what ranks and what converts.</p>

      <h3>Demand is local rather than national</h3>
      <p>The majority of searches from MSP buyers carry explicit local intent, and Google answers those queries with the map results positioned above the organic listings. Your Google Business Profile, review volume, proximity and citation consistency therefore determine whether you appear at all. For most providers this is the highest-leverage channel available and the one most frequently neglected.</p>

      <h3>The queries are commercial, not informational</h3>
      <p>A buyer searching <em>outsourced it support</em> is not researching a concept. They have an immediate problem — an outage, an insurance requirement, an underperforming incumbent, a departing IT manager — and they are selecting a supplier. That is why clicks in this category cost between $28 and $98, and why a content programme built around explanatory articles produces traffic that does not convert.</p>

      <h3>Undifferentiated pages give the algorithm nothing to choose between</h3>
      <p>Where a dozen local providers publish functionally identical service pages, ranking falls back on the signals that can be trusted: proximity, reviews, profile completeness, site authority and engagement. Differentiated pages — a genuine vertical, a genuine service depth, specific proof — provide a reason to select you.</p>
      <p>At that point search ceases to be a marketing exercise and becomes a positioning one. It is why <a href="/process/#positioning">positioning is established in Month 1</a>, before any page is written.</p>
    </div>
    <div>
      ${callout({
        tone: 'warn',
        title: 'The most common error',
        body: `<p>Publishing forty near-identical location pages covering every town in the county, each one a substitution of the last.</p>
        <p>The tactic previously worked. It is now a reliable thin-content signal and frequently suppresses the pages that would have ranked on their own merits.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'The alternative',
        body: `<p>Fewer pages, each genuinely specific: the clients you serve in that market, the response time you can commit to, the industries concentrated there, and a substantive reason for your presence in the city.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Targets',
    title: 'How the search targets are chosen',
    intro: `Not by volume. By the ratio of demand to competitive difficulty across the services you can credibly deliver.`,
  })}
  <div class="split">
    <div class="prose">
      <p>The instinct is to pursue the highest-volume term in the category. It is usually the wrong target: the highest-volume terms are held by national firms and aggregators with authority no local provider will displace within a year.</p>
      <p>The useful target is the one where genuine demand meets weak incumbents — a service you deliver well, described the way buyers describe it, in a market where the pages currently ranking are thin. That assessment is <a href="/process/#opportunities">stage 02 of the engagement</a>, and it produces the three opportunities the site is then built against.</p>
      <p>Two considerations govern the selection throughout. Whether local search applies to your model at all, which is established during <a href="/process/#intake">intake</a> and is not true of every provider. And what a click in that category costs in paid search, which indicates what the position is worth holding organically.</p>
    </div>
    <div>
      ${callout({
        title: 'Volume is the wrong first filter',
        body: `<p>A low-volume term with high commercial intent and a weak field is frequently worth more than a high-volume term you will never rank for. Few searchers, each with a specific and expensive problem, and a small set of providers who understand their environment.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What the analysis produces',
        body: `<p>Three opportunities, each sized, keyword-mapped and priced — documented in the Opportunities Report, then built as individually optimised pages on the new site.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Scope',
    title: 'What MSP SEO covers',
    intro: `Search execution runs within <a href="/growth-engine/">Phase 2</a>, against the architecture established in Month 1.`,
  })}
  ${cards([
    {
      title: 'Technical foundation',
      body: `Crawlability, indexation, load performance and Core Web Vitals, internal linking, structured data for your organisation, services and locations, and the structural corrections that stop a site competing against itself.`,
    },
    {
      title: 'Local search and Google Business Profile',
      body: `Profile optimisation, categories, services and service areas, imagery, posts and Q&amp;A, citation correction across the directories that carry weight, and rank tracking by geographic grid rather than a single position.`,
      list: ['NAP consistency audit', 'Category and service configuration', 'Geo-grid rank tracking'],
    },
    {
      title: 'Service pages',
      body: `One page for each service you intend to sell — managed IT, co-managed IT, cybersecurity, cloud, compliance, vCIO — written to commercial intent, each with its own proof, pricing context and conversion path.`,
    },
    {
      title: 'Location pages',
      body: `Built only for markets you genuinely serve, containing specifics rather than substituted place names: local clients, response commitments and the industries concentrated in that market.`,
    },
    {
      title: 'Vertical pages',
      body: `Healthcare, dental, legal, accounting, manufacturing — wherever concentration already exists. These convert considerably better than general pages because they address regulatory and workflow concerns the buyer already holds.`,
    },
    {
      title: 'Content that supports the sale',
      body: `The questions that arise during evaluation: onboarding, pricing structure, transitioning from an incumbent provider, the boundaries of a co-managed arrangement. Material that shortens deals rather than fills a schedule.`,
    },
    {
      title: 'Reputation',
      body: `For a local service business review generation is a ranking input, not solely a trust signal. We build the request into your service workflow so velocity is consistent rather than periodic.`,
    },
    {
      title: 'Measurement',
      body: `Rankings by geographic grid, organic sessions to commercial pages, conversion rate by page, enquiries attributed to source, and booked meetings.`,
    },
  ])}`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({ eyebrow: 'Sequence', title: 'The first ninety days of search execution' })}
  ${steps([
    {
      title: 'Audit and baseline',
      body: `Technical crawl, current positions by geographic grid, profile and citation audit, competitor gap analysis, and a conversion review of pages already receiving traffic. An honest baseline is established before any work begins.`,
    },
    {
      title: 'Correct the foundation',
      body: `Indexation faults, load performance, structured data, internal linking, competing pages and Google Business Profile configuration. Unglamorous, and generally the source of the first measurable movement.`,
    },
    {
      title: 'Publish the commercial pages',
      body: `Service pages, priority location pages and any vertical pages the positioning supports — written against the demand map rather than to a word count.`,
      list: [
        'One commercial intent per page, with no overlap',
        'Internally linked so authority reaches the pages that convert',
        'Each with its own conversion path, not a footer contact link',
      ],
    },
    {
      title: 'Compound',
      body: `Review velocity, supporting content, additional locations and verticals as they earn inclusion, and continuous conversion work on pages already ranking. Month four onward is typically where the trajectory changes.`,
    },
  ])}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({ eyebrow: 'Expectations', title: 'What to expect, and approximately when' })}
      ${checklist(
        [
          '<strong>Weeks 1–4:</strong> technical correction, profile optimisation, baseline established',
          '<strong>Weeks 4–8:</strong> local visibility movement from profile and review work',
          '<strong>Months 2–3:</strong> commercial pages indexed and beginning to place',
          '<strong>Months 3–6:</strong> meaningful positions on service and location terms',
          '<strong>Months 6+:</strong> compounding through verticals, authority and steady organic enquiries',
        ],
        { columns: 1 },
      )}
      <p>Search alone is not a growth plan. If conversations are required this quarter, it is the wrong single channel — which is why it runs alongside <a href="/msp-lead-generation/">outbound</a> rather than in isolation.</p>
    </div>
    <div>
      ${keywordTable({
        rows: seoCluster,
        caption: 'The term this page targets, and its common variants.',
      })}
      <p style="margin-top:1.5rem">A click on <em>msp seo</em> costs $89.43 in paid search. We would rather demonstrate the discipline than purchase the visit — which is also the argument we make for your market.</p>
    </div>
  </div>`,
})}

${section({ inner: faqBlock.html })}

${cta({
  title: 'Find out what your firm could rank for',
  body: 'We will map the search demand across your service area, identify where competitors currently hold position, and give you a candid assessment of what is winnable within twelve months.',
  primaryLabel: 'Request an SEO assessment',
  secondaryLabel: 'See the process',
  secondaryHref: '/process/',
})}

${relatedLinks([
  { href: '/msp-lead-generation/', label: 'MSP lead generation', body: 'The outbound channel that produces conversations while search compounds.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The positioning that determines which pages can rank at all.' },
  { href: '/process/#website', label: 'The website build', body: 'How the site architecture is derived from the demand map.' },
])}
`

export default {
  path: '/msp-seo/',
  title: 'MSP SEO | SEO for Managed Service Providers',
  description:
    'MSP SEO built on positioning: local search, Google Business Profile, service and location pages, and the reputation signals that determine local ranking.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [
    faqBlock.schema,
    serviceSchema({
      name: 'MSP SEO',
      description:
        'Search engine optimisation for managed service providers: local SEO, Google Business Profile, service pages, location pages, vertical pages and review generation.',
      path: '/msp-seo/',
      serviceType: 'Search Engine Optimization',
    }),
  ],
  body,
}
