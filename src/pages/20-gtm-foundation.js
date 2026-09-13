import {
  hero, section, sectionHead, cards, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, processDiagram,
} from '../components.js'

const crumbs = [{ label: 'GTM Foundation', href: '/gtm-foundation/' }]

const faqBlock = faq([
  {
    q: 'What does the GTM Foundation cost?',
    a: `<p>It is a fixed fee, determined by the size of your service area, the number of services and verticals in scope, and the scale of the website. We quote after the first call and before any work begins. There is no hourly billing and no variation without a written change of scope.</p>`,
  },
  {
    q: 'What happens if we stop after Month 1?',
    a: `<p>You retain everything: the research, the positioning, the packaging, the demand map, the messaging framework, the campaign plan and the website — owned outright, with no licence and no platform dependency. You may execute the plan internally, engage another firm, or do neither. No clause reduces the value of the work if you leave.</p>`,
  },
  {
    q: 'How much of our time does it require?',
    a: `<p>Approximately four to six hours across the first fortnight: a kickoff session, interviews with you and one or two technical leads, access to client and financial data, and a content review. Two review checkpoints follow. We require your knowledge rather than your labour.</p>`,
  },
  {
    q: 'Can this genuinely be completed in a month?',
    a: `<p>Yes. It is a defined scope executed by people who have run it before, without committee review cycles. Where timelines extend it is generally on the client side: delayed interviews, slow content approval, or an unresolved internal disagreement about positioning. We would rather that disagreement surface than publish a site the leadership does not stand behind.</p>`,
  },
  {
    q: 'Are we obliged to proceed to Phase 2?',
    a: `<p>No, and the separation is deliberate. You receive a complete, usable deliverable without committing to an execution retainer, and we demonstrate the quality of the thinking before requesting one. Clients frequently take a month or two to decide.</p>`,
  },
  {
    q: 'What if we already have a recent website?',
    a: `<p>The build becomes a restructure rather than a rebuild: new architecture, new copy and new pages mapped to demand, applied to your existing design system. The research and positioning work is unchanged; the quote reflects the narrower build scope.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'Phase 1 · Month 1 · fixed fee',
  title: 'GTM Foundation: establish the position, build the assets',
  lede: `Before any budget is directed at demand generation, we determine what your firm should be selling, to whom, and on what grounds they should select you. Month 1 then delivers the digital foundation for that answer — including the website itself.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See every stage' },
  stats: [
    { label: 'Duration', value: '30 days' },
    { label: 'Commitment', value: 'Month 1 only' },
    { label: 'Concludes with', value: 'A live site' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Delivered in Month 1</p>
    <ul>
      <li><span>Capability and margin assessment</span> <b>&#10003;</b></li>
      <li><span>Market and competitor research</span> <b>&#10003;</b></li>
      <li><span>ICP and positioning</span> <b>&#10003;</b></li>
      <li><span>Service packaging and pricing model</span> <b>&#10003;</b></li>
      <li><span>Demand map for your service area</span> <b>&#10003;</b></li>
      <li><span>SEO-optimised website, live</span> <b>&#10003;</b></li>
      <li><span>90-day campaign plan</span> <b>&#10003;</b></li>
    </ul>
    <p class="panel__foot">Retained in full whether or not you continue.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why this precedes demand generation</h2>
      <p>The conventional sequence is inverted. A provider determines it requires more enquiries, engages an agency, and the agency directs traffic toward a website that states what every competitor states. Traffic increases. Conversations do not. Eighteen months later the conclusion is that marketing does not work in managed services.</p>
      <p>Marketing performed exactly as designed. It amplified an undifferentiated message, and an amplified undifferentiated message is a more expensive route to the same indifference.</p>
      <p>So we begin with the commercial question instead: <strong>what should this firm be selling, to whom, and why would they select it?</strong> That is not a marketing question. It is a strategic one that marketing cannot answer on your behalf — and once it is answered, every subsequent decision becomes cheaper and more accurate.</p>
      <p>The second reason concerns accountability. At the end of Month 1 you hold a thesis specific enough to be wrong, and therefore specific enough to test. "We need more leads" cannot be tested. "Dental practices in this metropolitan area will change provider for compliance-grade support at this price point" can be, and within a quarter.</p>
    </div>
    <div>
      ${callout({
        title: 'Not a strategy document',
        body: `<p>The deliverable is the strategy <em>and</em> the website built on it.</p>
        <p>A plan that is never implemented has produced nothing. Most consulting engagements conclude precisely where the execution risk begins.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What you own at the conclusion',
        body: `<ul class="tick-list">
          <li>The research and the documented plan</li>
          <li>The website, domain and analytics</li>
          <li>All copy and content</li>
          <li>The demand map and page architecture</li>
        </ul>
        <p>No proprietary platform, no licence, no dependency.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Research',
    title: 'What the month establishes',
    intro: `Half internal, half external. The internal half identifies where you already win; the external half establishes whether anyone is searching for it.`,
  })}
  ${cards(
    [
      {
        kicker: 'Internal',
        title: 'What your firm is actually strong at',
        body: `Most providers cannot articulate this, because work performed daily ceases to appear remarkable. We establish it by examining the evidence rather than requesting a summary.`,
        list: [
          'Services delivered with depth, not merely offered',
          'Highest-margin and highest-retention capabilities',
          'Existing client base and vertical concentration',
          'Margin and retention patterns by segment',
          'The genuine service area and response capability',
          'Where delivery is demonstrably superior',
        ],
      },
      {
        kicker: 'External',
        title: 'What the market is doing',
        body: `Positioning established without external reference is conjecture. We test it against demand, competitors and the language buyers in your market actually use.`,
        list: [
          'Competitor positioning and messaging across your markets',
          'What buyers search, and in what volume',
          'Where competitors currently hold position',
          'Which services carry verified search demand',
          'Which verticals are attractive and reachable',
          'What the current site and brand fail to communicate',
        ],
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Sequence',
    title: 'The five stages of Month 1',
    intro: `Select any stage for its inputs, method and deliverable.`,
  })}
  ${processDiagram()}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({ eyebrow: 'Deliverables', title: 'Everything you receive' })}
      ${checklist([
        'Capability and margin assessment',
        'Market and competitor research findings',
        'ICP definition with addressable market sizing',
        'Positioning statement and supporting rationale',
        'Service packaging and pricing framework',
        'Demand map for your service area',
        'Messaging framework for site, sales and outbound',
        'Site architecture and internal linking plan',
        'A complete, live website with all copy',
        'Analytics, conversion tracking and call tracking',
        'A documented 90-day campaign plan',
      ])}
    </div>
    <div>
      <h3>Who this is for</h3>
      ${checklist(
        [
          'MSPs at roughly $2–5M in annual revenue',
          'Growth presently dependent on referral',
          'Technical strengths that have never been marketed',
          'Capacity to service new clients on arrival',
          'Willingness to lead with a defined segment',
        ],
        { columns: 1 },
      )}
      ${callout({
        tone: 'warn',
        title: 'One MSP per metropolitan market',
        body: `<p>We do not accept two clients competing in the same market. Where yours is already held, we will say so on the first call rather than propose a compromised engagement.</p>`,
      })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Begin with one call',
  body: 'Thirty minutes covering your services, your client base and your market. You will receive a candid assessment of where your position most likely lies, before committing to anything.',
  secondaryLabel: 'Phase 2 — Growth Engine',
  secondaryHref: '/growth-engine/',
})}

${relatedLinks([
  { href: '/process/', label: 'The process', body: 'All five stages with inputs and deliverables stated.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The framework behind the research and the decisions it produces.' },
  { href: '/growth-engine/', label: 'Phase 2 — Growth Engine', body: 'The optional execution agreement that follows.' },
])}
`

export default {
  path: '/gtm-foundation/',
  title: 'GTM Foundation | Positioning and Website in 30 Days',
  description:
    'A fixed-fee Month 1 engagement for MSPs: capability audit, market research, positioning, service packaging and an SEO-optimised website you own outright.',
  breadcrumbs: crumbs,
  priority: 0.8,
  schema: [faqBlock.schema],
  body,
}
