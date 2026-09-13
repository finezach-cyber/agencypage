import {
  hero, section, sectionHead, cards, steps, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks,
} from '../components.js'

const faqBlock = faq([
  {
    q: 'Why a three-month minimum?',
    a: `<p>Because nothing in this stack gives an honest read in less time. Outbound needs domain warmup and a few sequence iterations before reply rates mean anything. New pages take weeks to index and months to place. Review velocity is a trend, not an event. A one-month engagement would let us look busy and tell you nothing. Three months is the shortest period where the data is real.</p>`,
  },
  {
    q: 'Do we have to do the GTM Foundation first?',
    a: `<p>Yes. The Growth Engine executes a strategy — it does not invent one. Running outbound and SEO without positioning is the exact failure mode we built the model to avoid. If you have done equivalent work recently with someone else, show us and we will tell you honestly whether it is enough to build on.</p>`,
  },
  {
    q: 'Is this a replacement for hiring a marketing person?',
    a: `<p>For most MSPs at this size, yes — and usually a better one. A single marketing hire at $2–5M is typically a generalist doing social posts and event logistics, because no one person is a strong SEO, copywriter, outbound operator, designer and analyst. You are buying a team's worth of specialisation for less than a loaded salary. Once you are past roughly $10M, an internal hire starts to make sense and we hand over to them.</p>`,
  },
  {
    q: 'What do you report on?',
    a: `<p>Leading indicators monthly — indexed pages, rankings by geo-grid, map pack visibility, review velocity, reply rates by segment, conversion rate by page. And the lagging ones that actually decide it: booked calls, opportunities created, and closed revenue by source. If a metric cannot be connected to pipeline, we do not lead with it.</p>`,
  },
  {
    q: 'Who does the work?',
    a: `<p>We do. There is no offshore content mill behind this and no junior account manager forwarding your emails. That is also why we cap how many MSPs we take on and why we hold to one client per metro.</p>`,
  },
  {
    q: 'What happens after three months?',
    a: `<p>It continues month to month, or it stops. Most of the compounding value in SEO, reviews and content shows up after month three, so stopping at the minimum usually means paying for the setup and leaving before the return. But that is your call, not a contractual trap.</p>`,
  },
])

const body = `
${breadcrumbs([{ label: 'Growth Engine', href: '/growth-engine/' }])}

${hero({
  eyebrow: 'Phase 2 · Three-month minimum',
  title: 'Growth Engine: your outsourced growth team',
  lede: `The foundation gave you a position. This turns it into pipeline. Inbound, outbound, reputation, content and the infrastructure to measure all of it — run as one system, against one strategy.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/gtm-foundation/', label: 'Start with the foundation' },
  stats: [
    { label: 'Minimum', value: '3 months' },
    { label: 'Channels', value: '5 workstreams' },
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
      <h2>Not "three blogs a month"</h2>
      <p>The standard MSP marketing retainer is a content subscription with a reporting deck attached. Some blogs, some social posts, a newsletter, a monthly call where somebody reads impressions out loud. It is easy to sell and easy to deliver, and it almost never changes the shape of the business.</p>
      <p>This is a different thing. We are operationalising a specific go-to-market strategy — the one built in the <a href="/gtm-foundation/">GTM Foundation</a> — across every channel where your buyers can be reached, and holding the whole thing to pipeline rather than activity.</p>
      <p>The reason it works as a system is that the channels reinforce each other. Reviews lift map pack rankings, which feeds inbound. Inbound content gives outbound something credible to point at. Outbound conversations tell you which messages land, which improves the pages. The website makes all of it convert. Run any one of these alone and you get a channel report; run them together and the curve moves.</p>
    </div>
    <div>
      ${callout({
        title: 'The shift in what you are buying',
        body: `<p><strong>From:</strong> "We have an MSP and a bunch of capabilities."</p>
        <p><strong>To:</strong> "We know exactly who we sell to, what we sell them, how we position it, where we find them — and we have a machine putting that in front of them continuously."</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Scope',
    title: 'What we run every month',
  })}
  ${cards([
    {
      kicker: 'Inbound',
      title: 'Organic search growth',
      href: '/msp-seo/',
      linkLabel: 'More on MSP SEO',
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
      linkLabel: 'More on lead generation',
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
    title: 'An honest word on timelines',
    body: `<p>If someone tells you a managed services provider can build a predictable inbound pipeline in 30 days, they are selling you something. Outbound moves in weeks. Search moves in months. We run both so the fast channel funds your patience for the slow one — and we would rather tell you that now than in month three.</p>`,
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
        body: `<p>Every engagement teaches us which services have demand, which verticals convert, which offers work, which site structures produce calls and which outbound messages get replies.</p>
        <p>That accumulated pattern is why the second MSP we work with in a given segment gets to a result faster than the first — and it is what you are buying alongside the hours.</p>`,
      })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Ready to operationalise the strategy?',
  body: 'The Growth Engine follows the GTM Foundation. If you have not done that yet, start there — a single call tells us whether the fit is real.',
  secondaryLabel: 'See the GTM Foundation',
  secondaryHref: '/gtm-foundation/',
})}

${relatedLinks([
  { href: '/gtm-foundation/', label: 'GTM Foundation', body: 'The month-one engagement that has to come first.' },
  { href: '/msp-lead-generation/', label: 'MSP lead generation', body: 'The inbound and outbound workstreams in detail.' },
  { href: '/msp-seo/', label: 'SEO for MSPs', body: 'How the organic search side of the engine is run.' },
])}
`

export default {
  path: '/growth-engine/',
  title: 'MSP Growth Engine | Outsourced Marketing Team for MSPs',
  description:
    'A three-month growth engagement for MSPs: SEO, local search, reviews, email and LinkedIn outbound, content and CRM setup — measured on pipeline.',
  breadcrumbs: [{ label: 'Growth Engine', href: '/growth-engine/' }],
  priority: 0.9,
  schema: [faqBlock.schema],
  body,
}
