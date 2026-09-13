import {
  hero, section, sectionHead, cards, steps, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, quote,
} from '../components.js'

const crumbs = [
  { label: 'How It Works', href: '/gtm-foundation/' },
  { label: 'GTM Foundation', href: '/gtm-foundation/' },
]

const faqBlock = faq([
  {
    q: 'What does the GTM Foundation cost?',
    a: `<p>It is a fixed-fee, one-time engagement, priced on the size of your service area, the number of services and verticals in scope, and the size of the website. We quote it after the first call, before any work starts — no hourly billing and no scope creep.</p>`,
  },
  {
    q: 'What happens if we stop after month one?',
    a: `<p>You keep everything: the research, the positioning, the packaging, the keyword map, the messaging and the website, with full ownership and no platform lock-in. You can execute the plan in-house, hand it to another agency, or do nothing with it. There is no clause that makes the foundation less useful if you walk away.</p>`,
  },
  {
    q: 'How much of our time does it take?',
    a: `<p>Roughly four to six hours in the first two weeks — a kickoff session, interviews with you and one or two technical people, access to your client and financial data, and a content review. After that it is a couple of review checkpoints. We do the work; we need your knowledge, not your labour.</p>`,
  },
  {
    q: 'Can you really do all of this in a month?',
    a: `<p>Yes, because it is a defined scope run by people who have done it before, and because we do not wait on committees. What extends it is usually on the client side: delayed interviews, slow content review, or an internal debate about positioning that needs to happen anyway. We would rather that debate happen than ship a site nobody believes in.</p>`,
  },
  {
    q: 'Do we have to sign up for the Growth Engine afterward?',
    a: `<p>No. Separating the two is the point. You get a complete, useful deliverable without committing to a long retainer, and we get to prove the thinking before asking for one. Plenty of clients take a month or two to decide.</p>`,
  },
  {
    q: 'What if we already have a recent website?',
    a: `<p>Then we may be restructuring rather than rebuilding — new architecture, new copy, new pages against the keyword map, on the existing design system. The research and positioning work is identical; only the build scope changes, and the quote reflects that.</p>`,
  },
])

const body = `
${breadcrumbs([{ label: 'GTM Foundation', href: '/gtm-foundation/' }])}

${hero({
  eyebrow: 'Phase 1 · Month one · one-time',
  title: 'GTM Foundation: find your market, build your position, ship the site',
  lede: `Before we spend a dollar generating leads, we determine exactly what you should be selling, to whom, and why they should choose you. Then we build the digital foundation for that answer — including the website itself.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/growth-engine/', label: 'See what comes next' },
  stats: [
    { label: 'Duration', value: '30 days' },
    { label: 'Commitment', value: 'One-time' },
    { label: 'Ends with', value: 'A live site' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Month one produces</p>
    <ul>
      <li><span>Market &amp; competitor research</span> <b>&#10003;</b></li>
      <li><span>ICP definition</span> <b>&#10003;</b></li>
      <li><span>Positioning thesis</span> <b>&#10003;</b></li>
      <li><span>Service packaging</span> <b>&#10003;</b></li>
      <li><span>Keyword &amp; demand map</span> <b>&#10003;</b></li>
      <li><span>Messaging framework</span> <b>&#10003;</b></li>
      <li><span>A rebuilt website</span> <b>&#10003;</b></li>
    </ul>
    <p class="panel__foot">Yours to keep whether or not you continue.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why this comes before lead generation</h2>
      <p>The usual sequence is backwards. An MSP decides it needs more leads, hires an agency, and the agency starts generating traffic toward a website that says the same thing as every competitor. Traffic goes up. Conversations do not. Eighteen months later the conclusion is "marketing does not work for us."</p>
      <p>Marketing worked exactly as designed. It amplified an undifferentiated message, and an amplified undifferentiated message is just a more expensive way to be ignored.</p>
      <p>So we start with the commercial question instead: <strong>what should this company be selling, to whom, and why would they choose it?</strong> That is not a marketing question. It is a strategy question that marketing cannot answer for you — and once it is answered, every downstream decision gets easier and cheaper.</p>
      ${quote({
        text: `You shouldn't market yourself as another MSP. Your wedge is X, for Y companies, because Z.`,
      })}
      <p>The second reason this comes first is that it makes the work falsifiable. At the end of month one you have a thesis specific enough to be wrong — and therefore specific enough to test. "We should get more leads" cannot be tested. "Dental practices in this metro will switch providers for compliance-grade support at this price point" can.</p>
    </div>
    <div>
      ${callout({
        title: 'Not a strategy deck',
        body: `<p>The deliverable is the strategy <em>and</em> the website built on it.</p>
        <p>A deck that never gets implemented has produced nothing. Most consulting engagements end exactly where the risk starts.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What you own at the end',
        body: `<ul class="tick-list">
          <li>The research and the plan</li>
          <li>The website, domain and analytics</li>
          <li>All copy and content</li>
          <li>The keyword map and page architecture</li>
        </ul>
        <p>No proprietary platform, no lock-in.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'What we learn',
    title: 'The research behind the thesis',
    intro: `Half internal, half external. The internal half tells us where you already win; the external half tells us whether anyone is looking for it.`,
  })}
  ${cards(
    [
      {
        kicker: 'Internal',
        title: 'What you are actually good at',
        body: `Most MSPs cannot articulate this, because everything they do feels routine to them. We find it by looking at the work rather than asking for a summary.`,
        list: [
          'Services you genuinely excel at, not just offer',
          'Highest-margin and highest-value capabilities',
          'Existing client base and vertical concentrations',
          'Retention and margin patterns by segment',
          'Real geography and service area',
          'Where your delivery is unusually strong',
        ],
      },
      {
        kicker: 'External',
        title: 'What the market is doing',
        body: `Positioning made in a vacuum is guessing. We check it against demand, competitors and what buyers in your market are actually searching.`,
        list: [
          'Competitive positioning and messaging in your market',
          'What buyers are searching for, and how much',
          'Where competitors are winning and why',
          'Which services have real search demand',
          'Which verticals are attractive and reachable',
          'What your brand and site are failing to communicate',
        ],
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'The month',
    title: 'Research becomes a path to market',
    intro: `Market research &rarr; ICP &rarr; positioning &rarr; service packaging &rarr; SEO strategy &rarr; messaging &rarr; website.`,
  })}
  ${steps([
    {
      title: 'Week 1 — Discovery and data',
      body: `Kickoff, interviews with you and your technical leads, access to client and financial data, analytics and CRM review, and a full audit of the current site and search footprint.`,
      list: ['Client base analysis for hidden concentration', 'Margin and retention by segment', 'Technical and content audit of the current site'],
    },
    {
      title: 'Week 1–2 — Market and competitor research',
      body: `Competitor positioning, messaging and site structures. Search demand mapped across services, locations and verticals in your service area. Gap analysis: where demand exists that nobody in your market is answering well.`,
    },
    {
      title: 'Week 2 — ICP, positioning and packaging',
      body: `The decisions. Who you lead with, what the thesis is, how services are packaged and priced, and what stops being marketed. This is where the uncomfortable conversation happens, and it is the most valuable part of the month.`,
    },
    {
      title: 'Week 2–3 — Architecture, messaging and copy',
      body: `Keyword map to page architecture with one commercial intent per page. Messaging framework — the language for the site, outbound, sales conversations and collateral. Then the copy itself, written and reviewed.`,
    },
    {
      title: 'Week 3–4 — Design and build',
      body: `The website: fast, accessible, structured for search, with real conversion paths. Schema markup, analytics, tracking, forms, and a migration plan that preserves whatever the old site had earned.`,
    },
    {
      title: 'Week 4 — Launch and handover',
      body: `Site live, redirects verified, tracking confirmed, post-launch crawl. Then a working session walking your team through the positioning and the plan, so it survives contact with your sales conversations.`,
    },
  ])}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'Deliverables',
        title: 'Everything you walk away with',
      })}
      ${checklist([
        'Market and competitor research findings',
        'ICP definition with addressable market sizing',
        'Positioning thesis and rationale',
        'Service packaging and pricing framework',
        'Keyword and demand map for your service area',
        'Messaging framework for site, sales and outbound',
        'Site architecture and internal linking plan',
        'A complete, live website with all copy',
        'Analytics, conversion tracking and call tracking',
        'A 90-day channel plan with sequencing',
      ])}
    </div>
    <div>
      <h3>Who this is for</h3>
      ${checklist(
        [
          'MSPs doing roughly $2–5M in annual revenue',
          'Growth currently dependent on referrals',
          'Real technical strengths that have never been marketed',
          'Capacity to service new clients when they arrive',
          'Willingness to narrow the message to win a segment',
        ],
        { columns: 1 },
      )}
      ${callout({
        tone: 'warn',
        title: 'One MSP per metro',
        body: `<p>We do not take two clients competing in the same market. If your metro is taken we will tell you on the first call rather than sell you something compromised.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Then what',
    title: 'Diagnose &rarr; Build &rarr; Activate &rarr; Optimize',
    intro: `The Foundation covers Diagnose and Build. If you want the rest, the <a href="/growth-engine/">Growth Engine</a> picks up where it ends.`,
  })}
  ${cards(
    [
      {
        kicker: 'You are here',
        title: 'GTM Foundation',
        body: `One month, one-time. Find the market, build the position, ship the site. You own everything at the end and owe nothing further.`,
      },
      {
        kicker: 'Optional next',
        title: 'Growth Engine',
        href: '/growth-engine/',
        linkLabel: 'See the execution scope',
        body: `Three-month minimum. We become your outsourced growth team — inbound, outbound, reputation, content and the infrastructure that measures it.`,
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({ inner: faqBlock.html })}

${cta({
  title: 'Start with one call',
  body: 'Thirty minutes. We will look at your services, your client base and your market, and give you an honest read on where your wedge probably is — before you commit to anything.',
  secondaryLabel: 'See the Growth Engine',
  secondaryHref: '/growth-engine/',
})}

${relatedLinks([
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The framework behind the research and the decisions it produces.' },
  { href: '/msp-website-design/', label: 'MSP website design', body: 'How the site that ships at the end of month one is built.' },
  { href: '/growth-engine/', label: 'Growth Engine', body: 'The three-month execution engagement that turns the foundation into pipeline.' },
])}
`

export default {
  path: '/gtm-foundation/',
  title: 'GTM Foundation for MSPs | Positioning + Website in 30 Days',
  description:
    'A one-month go-to-market engagement for MSPs: market research, ICP, positioning, service packaging, SEO strategy and a rebuilt website you own outright.',
  breadcrumbs: [{ label: 'GTM Foundation', href: '/gtm-foundation/' }],
  priority: 0.9,
  schema: [faqBlock.schema],
  body,
}
