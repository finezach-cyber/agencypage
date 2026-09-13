import {
  hero, section, sectionHead, cards, steps, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks,
} from '../components.js'

const faqBlock = faq([
  {
    q: 'How long before the data becomes meaningful?',
    a: `<p>No channel in this scope produces a reliable read immediately. Outbound requires domain warm-up and several sequence iterations before reply rates carry meaning. New pages take weeks to index and months to place. Review velocity is a trend rather than an event. We set that expectation at the outset and report leading indicators in the interim, so progress is visible before the lagging measures settle.</p>`,
  },
  {
    q: 'Is the GTM Foundation a prerequisite?',
    a: `<p>Yes. The Growth Engine executes a strategy; it does not produce one. Running outbound and search without an established position is the failure this model exists to prevent. Where equivalent work has been completed recently, send it and we will assess whether it is sufficient to build on.</p>`,
  },
  {
    q: 'Does this replace an internal marketing hire?',
    a: `<p>At this revenue band it generally does. A single hire is typically a generalist managing social posts and event logistics, because no individual is simultaneously a strong search practitioner, copywriter, outbound operator, designer and analyst. You acquire a team's specialisation for less than one loaded salary. Beyond roughly $10M an internal appointment becomes appropriate, and we hand over to them.</p>`,
  },
  {
    q: 'What is reported?',
    a: `<p>Leading indicators monthly — indexed pages, positions by geographic grid, local visibility, review velocity, reply rates by segment, conversion rate by page — alongside the lagging measures that settle the question: booked meetings, opportunities created and revenue closed by source. A metric that cannot be connected to pipeline does not lead the report.</p>`,
  },
  {
    q: 'Who performs the work?',
    a: `<p>We do. There is no subcontracted content operation and no account-management layer forwarding correspondence, which is also why the number of concurrent engagements is capped.</p>`,
  },
  {
    q: 'How does the engagement end?',
    a: `<p>It continues month to month, or it concludes — your decision, with no automatic renewal. Worth noting that most of the compounding return in search, reputation and content accrues later rather than earlier, so concluding early generally means having funded the establishment without collecting the return.</p>`,
  },
])

const body = `
${breadcrumbs([{ label: 'Growth Engine', href: '/growth-engine/' }])}

${hero({
  eyebrow: 'Phase 2 · Optional · decided after Month 1',
  title: 'Growth Engine: execution against the plan',
  lede: `For MSPs and IT services companies. Month 1 identified the opportunities and produced the website. Phase 2 works them — inbound, outbound, reputation, content and the infrastructure that connects all of it to pipeline, run as one system.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
  stats: [
    { label: 'Begins', value: 'After Month 1' },
    { label: 'Workstreams', value: 'Five' },
    { label: 'Reported on', value: 'Pipeline' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">The five workstreams</p>
    <ul>
      <li><span>Inbound</span> <b>SEO &amp; site</b></li>
      <li><span>Reputation</span> <b>Reviews &amp; GBP</b></li>
      <li><span>Outbound</span> <b>Email &amp; LinkedIn</b></li>
      <li><span>Content</span> <b>Authority &amp; sales</b></li>
      <li><span>Infrastructure</span> <b>CRM &amp; tracking</b></li>
    </ul>
    <p class="panel__foot">Run together. Each one makes the others work harder.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Not a content subscription</h2>
      <p>The standard retainer sold to MSPs and IT services firms is a publishing schedule with a reporting deck attached: several articles, some social posts, a newsletter, and a monthly call at which impressions are read aloud. It is straightforward to sell and straightforward to deliver, and it rarely alters the shape of the business.</p>
      <p>This is a different instrument. We work the specific opportunities identified during the <a href="/gtm-foundation/">GTM Foundation</a> across every channel where those buyers can be reached, and hold the whole of it to pipeline rather than activity — measured against the projections set out in the Impact Report.</p>
      <p>It functions as a system because the channels reinforce one another. Reviews improve local ranking, which feeds inbound. Published material gives outbound something credible to reference. Outbound replies indicate which messages land, which improves the pages. The website converts all of it. Operated individually, each produces a channel report; operated together, the trajectory changes.</p>
    </div>
    <div>
      ${callout({
        title: 'The shift in what is being bought',
        body: `<p><strong>From:</strong> a managed service provider with a broad set of capabilities.</p>
        <p><strong>To:</strong> a firm that knows precisely who it sells to, what it sells them, how that offer is positioned, where those buyers are found — and operates a system that places the message in front of them continuously.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Scope',
    title: 'The five workstreams',
    intro: `Operated concurrently, against the opportunities identified in Month 1.`,
  })}
  ${cards([
    {
      kicker: 'Inbound',
      title: 'Organic search growth',
      href: '/msp-seo/',
      linkLabel: 'MSP SEO in detail',
      body: `Capturing the buyers already looking for a provider in your service area.`,
      list: [
        'SEO execution and technical maintenance',
        'Local SEO and map pack work',
        'Service, location and industry landing pages',
        'Conversion rate optimisation',
        'Ongoing website iteration',
      ],
    },
    {
      kicker: 'Reputation',
      title: 'Reviews and visibility',
      body: `For a local service business, reputation is both a ranking factor and the thing that closes the deal.`,
      list: [
        'Review generation built into your service workflow',
        'Review management and response',
        'Google Business Profile optimisation',
        'Reputation monitoring across platforms',
        'Testimonial and case study development',
      ],
    },
    {
      kicker: 'Outbound',
      title: 'Targeted account outreach',
      href: '/msp-lead-generation/',
      linkLabel: 'Lead generation in detail',
      body: `Reaching the accounts you want before they start shopping.`,
      list: [
        'ICP and account targeting',
        'Prospect list building and enrichment',
        'Messaging by segment and trigger',
        'Email outbound and deliverability management',
        'LinkedIn outreach and follow-up',
        'Appointment generation and handoff',
      ],
    },
    {
      kicker: 'Content',
      title: 'Content that supports the sale',
      body: `Written to shorten deals and build credibility, not to hit a publishing quota.`,
      list: [
        'Thought leadership in your positioning',
        'Service-specific and industry content',
        'Case studies and proof assets',
        'Sales collateral and one-pagers',
        'Social and email content',
      ],
    },
    {
      kicker: 'Infrastructure',
      title: 'Growth infrastructure',
      body: `The plumbing that decides whether any of the above turns into revenue you can see.`,
      list: [
        'CRM cleanup and configuration',
        'Lead routing and notification rules',
        'Forms and conversion paths',
        'Analytics, attribution and call tracking',
        'Reporting against pipeline',
        'Sales process and follow-up cadence',
      ],
    },
    {
      kicker: 'Operating rhythm',
      title: 'How we actually work',
      body: `A monthly cycle rather than a quarterly reveal.`,
      list: [
        'Weekly execution, async updates',
        'Monthly review against pipeline metrics',
        'Quarterly strategy revisit',
        'Direct access — no account-manager layer',
      ],
    },
  ])}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Sequencing',
    title: 'What happens in what order',
    intro: `Channels are sequenced by how fast they produce and how long they compound, so you are not waiting on a single slow bet.`,
  })}
  ${steps([
    {
      title: 'Month 1 — Infrastructure and fast channels',
      body: `CRM and tracking configured so nothing is unmeasured from here on. Google Business Profile optimised and review generation started — the fastest visible win available to a local MSP. Outbound list built, domains warmed, first sequences drafted.`,
    },
    {
      title: 'Month 2 — Outbound live, inbound building',
      body: `Sequences running and producing the first replies. New service and location pages published and indexing. Conversion work on the pages that already receive traffic. First real read on which segments respond.`,
    },
    {
      title: 'Month 3 — Read the data, double down',
      body: `Reply rates by segment, early ranking movement, review velocity, conversion by page. By now the data says which parts of the thesis were right, and the plan adjusts to match rather than to the original assumption.`,
    },
    {
      title: 'Month 4 and beyond — Compounding',
      body: `This is where inbound starts contributing meaningfully, content earns authority, review counts separate you in the map pack, and outbound messaging is tuned rather than guessed. The engine is running; the work becomes optimisation.`,
    },
  ])}
  ${callout({
    tone: 'warn',
    title: 'On timelines',
    body: `<p>Any firm describing a predictable inbound pipeline for a managed service provider within 30 days is describing something other than search. Outbound moves in weeks; search moves in months. We operate both so that near-term activity proceeds while search positions accumulate — and we state this at the outset rather than in month three.</p>`,
  })}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'Measurement',
        title: 'What we report, and what we ignore',
      })}
      <h3>What we report</h3>
      ${checklist(
        [
          'Booked calls and opportunities created',
          'Closed revenue attributed by source',
          'Reply and positive-reply rate by segment',
          'Map pack visibility across your service area',
          'Rankings by geo-grid on money terms',
          'Conversion rate by landing page',
          'Review count and velocity',
        ],
        { columns: 1 },
      )}
      <h3>What we do not lead with</h3>
      ${checklist(
        ['Impressions', 'Social followers', 'Blog post count', 'Domain authority as an end in itself', 'Anything that cannot be tied to pipeline'],
        { columns: 1 },
      )}
    </div>
    <div>
      ${callout({
        title: 'The bigger play',
        body: `<p>Every engagement adds evidence: which services carry demand, which verticals convert, which offers hold up, which site structures produce enquiries and which outbound messages earn replies.</p>
        <p>That accumulated pattern is why the second provider we work with in a given segment reaches a result faster than the first, and it forms part of what the engagement provides alongside the hours.</p>`,
      })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Execution begins once the foundation exists',
  body: 'Phase 2 follows Month 1. If that work has not been completed, begin there — a single call establishes whether the engagement is a fit.',
  secondaryLabel: 'Phase 1 — GTM Foundation',
  secondaryHref: '/gtm-foundation/',
})}

${relatedLinks([
  { href: '/process/', label: 'The process', body: 'Both phases, with inputs and deliverables at every stage.' },
  { href: '/msp-lead-generation/', label: 'MSP lead generation', body: 'The inbound and outbound workstreams in detail.' },
  { href: '/msp-seo/', label: 'MSP SEO', body: 'How the search workstream is executed.' },
])}
`

export default {
  path: '/growth-engine/',
  title: 'Growth Engine | MSP & IT Services Marketing Execution',
  description:
    'Optional execution for MSPs after Month 1: SEO, local search, reviews, email and LinkedIn outbound, content and reporting — measured on booked meetings.',
  breadcrumbs: [{ label: 'Growth Engine', href: '/growth-engine/' }],
  priority: 0.8,
  schema: [faqBlock.schema],
  body,
}
