import {
  hero, section, sectionHead, cards, steps, keywordTable, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, serviceSchema,
} from '../components.js'
import { buyerDemand, verticalDemand } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/services/' },
  { label: 'SEO for MSPs', href: '/msp-seo/' },
]

const faqBlock = faq([
  {
    q: 'How long does MSP SEO take to work?',
    a: `<p>Google Business Profile and review work can move map pack visibility within weeks. Service and location pages generally take three to six months to reach stable positions, and competitive metros take longer. The honest framing is that SEO is the channel you start now so that month six looks different — which is exactly why we pair it with outbound, so you are not waiting on it alone.</p>`,
  },
  {
    q: 'Is local SEO or organic SEO more important for an MSP?',
    a: `<p>Local, by a wide margin. Look at the demand: <em>it support near me</em>, <em>managed it services near me</em>, <em>it services near me</em> and <em>managed service provider near me</em> account for roughly 27,700 of the 40,970 monthly searches in this space. Those queries return the map pack first. If your Google Business Profile is thin and you have twelve reviews, national-level content strategy will not save you.</p>`,
  },
  {
    q: 'Do we need location pages for every city we serve?',
    a: `<p>Only for the ones you genuinely serve and can prove it. A page for every town within 90 minutes, each a find-and-replace of the last, is the fastest way to get the whole set treated as thin content. We build location pages where there is real demand, real proximity and something specific to say — local clients, local partners, response times, the industries concentrated there.</p>`,
  },
  {
    q: 'Should we target industry keywords like healthcare IT services?',
    a: `<p>Only if you actually serve that vertical and can speak to its compliance requirements. <em>healthcare it services</em> gets 480 searches a month and <em>it support for dental practices</em> carries a $97.83 cost per click, so the demand is worth having. But a HIPAA page written by someone who has never handled a covered entity converts nobody and ranks worse than the specialists. Vertical pages work when the vertical is real.</p>`,
  },
  {
    q: 'What about blog content — how much do we need?',
    a: `<p>Less than most agencies sell you. A buyer searching <em>it support company</em> is not looking for a listicle, they are looking for a provider. Money pages — services, locations, verticals, comparisons and pricing — come first because they are what the commercial queries return. Content earns its place once those exist, mostly to answer the questions that come up mid-deal.</p>`,
  },
  {
    q: 'Do you build links?',
    a: `<p>We earn the ones that matter for a local service business: chamber and association listings, vendor and partner directories, local sponsorships, accurate citations, and the occasional genuinely useful resource. We do not buy link packages. For a local MSP, consistent citations and review velocity outperform a pile of purchased guest posts.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'SEO for MSPs',
  title: 'MSP SEO that targets what IT buyers actually type',
  lede: `There are 40,970 monthly searches from businesses looking to hire a managed service provider, and most of them are local. We build the pages, the profile and the reviews that put you in front of them — then keep earning positions month after month.`,
  primary: { href: '/contact/', label: 'Get an SEO assessment' },
  secondary: { href: '/resources/msp-keyword-research/', label: 'See the keyword data' },
  stats: [
    { label: 'Buyer searches / mo', value: '40,970' },
    { label: 'Top-term CPC', value: '$98.09' },
    { label: 'Local intent', value: '~68%' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Where MSP SEO is won</p>
    <ul>
      <li><span>Google Business Profile &amp; map pack</span> <b>1</b></li>
      <li><span>Service pages that match commercial intent</span> <b>2</b></li>
      <li><span>Location pages for real service areas</span> <b>3</b></li>
      <li><span>Review volume and velocity</span> <b>4</b></li>
      <li><span>Vertical pages where you have a right to win</span> <b>5</b></li>
    </ul>
    <p class="panel__foot">In roughly that order of impact for a $2–5M MSP.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why SEO for managed service providers is its own discipline</h2>
      <p>Most SEO advice is written for ecommerce or SaaS. Neither model matches how a business buys IT support. An MSP sells a high-consideration, relationship-heavy service inside a defined geography, usually to someone who cannot evaluate the technical substance of what they are buying. That changes what actually ranks and what actually converts.</p>
      <p>Three things follow from that.</p>
      <h3>1. The demand is local, not national</h3>
      <p>Of the 40,970 monthly searches from MSP buyers, roughly 27,700 carry explicit local intent — <em>near me</em> and city-modified variants. Google answers those with the map pack above the organic results. Which means your Google Business Profile, your review count, your proximity and your citation consistency are not a side project. They are the channel.</p>
      <h3>2. The queries are commercial, not informational</h3>
      <p>Somebody searching <em>outsourced it support</em> is not researching a concept. They have a problem — an outage, a compliance deadline, a bad incumbent, an IT person who just resigned — and they are shopping. That is why clicks cost $28 to $98. It is also why a content calendar full of "What Is Managed IT?" articles produces traffic that never turns into a call.</p>
      <h3>3. Everyone's pages say the same thing</h3>
      <p>Google has to choose between a dozen local MSPs whose service pages are functionally identical. When the content is undifferentiated, it falls back harder on the signals it can trust: proximity, reviews, profile completeness, site authority and engagement. Differentiated pages — a real vertical, a real service specialty, real proof — give it a reason to pick you.</p>
      <p>This is the point where SEO stops being a marketing task and becomes a positioning task. It is also why we do the <a href="/gtm-foundation/">GTM Foundation</a> before the SEO work: you cannot write a page that outranks eleven identical competitors until you have decided how you are different.</p>
    </div>
    <div>
      ${callout({
        title: 'The trap most MSPs fall into',
        body: `<p>Publishing 40 near-identical location pages for every town in the county, each one a find-and-replace of the last.</p>
        <p>It used to work. Now it is the clearest thin-content signal there is, and it can suppress the pages that would have ranked on their own.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What works instead',
        body: `<p>Fewer pages, each one genuinely specific: the clients you serve there, the response time you can commit to, the industries concentrated in that market, and a reason you are in that city at all.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The demand map',
    title: 'What your buyers search, and what those clicks cost',
    intro: `This is the demand we build toward. Every number is US monthly search volume with the average Google Ads cost per click beside it — the price your competitors pay to rent the position you could own.`,
  })}
  ${keywordTable({
    rows: buyerDemand,
    totalLabel: 'Total core buyer demand',
    caption: 'Core MSP buyer demand — what a business types when it wants to hire a provider.',
  })}
  <p class="lede" style="margin-top:2.5rem">And when you serve a specific vertical, a second layer opens up:</p>
  ${keywordTable({
    rows: verticalDemand,
    totalLabel: 'Vertical demand',
    caption: 'Industry-specific demand. Worth targeting only when you genuinely serve the vertical.',
  })}
  ${callout({
    title: 'Read the CPC column, not just the volume',
    body: `<p><em>it support for dental practices</em> gets 40 searches a month — and a click costs $97.83. Low volume does not mean low value. It means the few people searching are worth a lot, and a page that ranks for it costs you nothing per click forever.</p>`,
  })}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Scope',
    title: 'What our MSP SEO services cover',
    intro: `SEO execution is part of the <a href="/growth-engine/">Growth Engine</a>. Here is what that actually means month to month.`,
  })}
  ${cards([
    {
      title: 'Technical foundation',
      body: `Crawlability, indexation, site speed and Core Web Vitals, internal linking, schema markup for your organization, services and locations, and the structural fixes that stop your own site from competing with itself.`,
    },
    {
      title: 'Local SEO &amp; Google Business Profile',
      body: `Profile optimisation, categories, services, service areas, photos, posts, Q&amp;A, citation cleanup across the directories that matter, and map pack tracking by grid location rather than a single vanity rank.`,
      list: ['NAP consistency audit', 'Category and service configuration', 'Geo-grid rank tracking'],
    },
    {
      title: 'Service pages',
      body: `One page per service you actually want to sell, written to match commercial intent — managed IT, co-managed IT, cybersecurity, cloud, compliance, vCIO — each with its own proof, pricing framing and conversion path.`,
    },
    {
      title: 'Location pages',
      body: `Built only for markets you genuinely serve, with specifics rather than swapped city names: local clients, response commitments, the industries concentrated there, and directions that make sense.`,
    },
    {
      title: 'Vertical pages',
      body: `Healthcare, dental, legal, accounting, manufacturing — wherever you already have concentration. These convert far better than generic pages because they speak to compliance and workflow the buyer already worries about.`,
    },
    {
      title: 'Content that supports the sale',
      body: `The questions that come up mid-deal: what onboarding looks like, how pricing works, what happens when you leave your current provider, what a co-managed arrangement covers. Content that shortens deals, not content that fills a calendar.`,
    },
    {
      title: 'Reviews and reputation',
      body: `Review generation is an SEO channel for local businesses, not just a trust signal. We build the request process into your service workflow so review velocity is consistent instead of a once-a-year scramble.`,
    },
    {
      title: 'Measurement',
      body: `Rankings by location grid, organic sessions to money pages, conversion rate by page, calls and forms attributed to source, and the only number that matters — booked conversations.`,
    },
  ])}`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'How we run it',
    title: 'The first 90 days of an MSP SEO engagement',
  })}
  ${steps([
    {
      title: 'Audit and baseline',
      body: `Technical crawl, current rankings by geo-grid, profile and citation audit, competitor gap analysis, and a conversion review of the pages that already get traffic. We establish what you rank for today so there is an honest baseline to measure against.`,
    },
    {
      title: 'Fix the foundation',
      body: `Indexation problems, speed, schema, internal linking, cannibalising pages, and Google Business Profile configuration. This is unglamorous and usually produces the first movement, because most MSP sites have something structurally broken.`,
    },
    {
      title: 'Build the money pages',
      body: `Service pages, priority location pages and any vertical pages your positioning supports — written against the keyword map, not against a word count.`,
      list: [
        'Mapped one page per commercial intent, no overlap',
        'Internally linked so authority reaches the pages that convert',
        'Each with a conversion path, not just a contact link in the footer',
      ],
    },
    {
      title: 'Compound it',
      body: `Review velocity, supporting content, additional locations and verticals as they earn their place, and continuous conversion work on the pages already ranking. Month four onward is where the curve usually turns.`,
    },
  ])}`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>SEO alone is not a growth plan</h2>
      <p>We will say this plainly because most agencies selling SEO to MSPs will not: search is a patient channel. If you need conversations this quarter, SEO is the wrong single bet. It is the right bet to start now and the wrong bet to rely on alone.</p>
      <p>That is why SEO sits inside the <a href="/growth-engine/">Growth Engine</a> rather than being sold on its own. <a href="/msp-lead-generation/">Outbound</a> creates conversations while search compounds. Reviews improve both. The website makes all of it convert. Run one in isolation and you will get a channel report; run them together and you get pipeline.</p>
    </div>
    <div>
      <h3>What you can expect to see, and roughly when</h3>
      ${checklist(
        [
          '<strong>Weeks 1–4:</strong> technical fixes, profile optimisation, baseline established',
          '<strong>Weeks 4–8:</strong> map pack movement from profile and review work',
          '<strong>Months 2–3:</strong> new money pages indexed and starting to place',
          '<strong>Months 3–6:</strong> meaningful positions on service and location terms',
          '<strong>Months 6+:</strong> compounding — vertical pages, authority, steady organic conversations',
        ],
        { columns: 1 },
      )}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Want to know what you could rank for?',
  body: 'We will map the search demand in your service area, show you where your competitors are winning, and tell you honestly whether SEO is worth your money right now.',
  primaryLabel: 'Get an SEO assessment',
  secondaryLabel: 'See the keyword research',
  secondaryHref: '/resources/msp-keyword-research/',
})}

${relatedLinks([
  { href: '/msp-website-design/', label: 'MSP website design', body: 'Rankings are worthless if the page does not convert. How we build MSP sites.' },
  { href: '/msp-lead-generation/', label: 'MSP lead generation', body: 'The outbound side that creates conversations while search compounds.' },
  { href: '/growth-engine/', label: 'The Growth Engine', body: 'SEO is one channel inside the three-month execution engagement.' },
])}
`

export default {
  path: '/msp-seo/',
  title: 'MSP SEO Services | SEO for Managed Service Providers',
  description:
    'MSP SEO built around the 40,970 monthly searches from businesses hiring an IT provider. Local SEO, service pages, location pages and reviews that rank.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [
    faqBlock.schema,
    serviceSchema({
      name: 'SEO for MSPs',
      description:
        'Search engine optimisation for managed service providers: local SEO, Google Business Profile, service pages, location pages, vertical pages and review generation.',
      path: '/msp-seo/',
      serviceType: 'Search Engine Optimization',
    }),
  ],
  body,
}
