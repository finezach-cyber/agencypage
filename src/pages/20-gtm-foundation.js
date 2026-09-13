import {
  hero, section, sectionHead, cards, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, processDiagram,
} from '../components.js'

const crumbs = [{ label: 'GTM Foundation', href: '/gtm-foundation/' }]

const faqBlock = faq([
  {
    q: 'What does the GTM Foundation cost?',
    a: `<p>A fixed fee, determined by the number of services in scope and the scale of the website. We quote after the first call and before any work begins. There is no hourly billing and no variation without a written change of scope.</p>`,
  },
  {
    q: 'Do we own the reports and the website?',
    a: `<p>Entirely. Both reports and the complete website — copy, build, structure and analytics — are yours at the end of the month, with no licence, no proprietary platform and no claw-back. You are free to deploy the site yourself, hand it to your own developer, or act on the reports with another firm.</p>`,
  },
  {
    q: 'How are the three opportunities selected?',
    a: `<p>By ratio, not by volume. Every service you offer is assessed for search demand against the competitive difficulty of ranking for it. The three that combine the strongest demand with the weakest incumbents become the opportunities. Each is then shaped as a land-and-expand offer and the pricing is validated against what the market currently pays, so the figure in the report is defensible rather than aspirational.</p>`,
  },
  {
    q: 'Why are the offers priced between $5,000 and $10,000?',
    a: `<p>That range is where a land-and-expand offer functions. It is substantial enough to constitute a genuine engagement rather than a trial, and small enough for a prospective client to approve without a procurement process. It establishes the relationship on which larger managed services agreements are subsequently built — which is why the Impact Report models initial revenue through to longer-term engagement rather than stopping at the first sale.</p>`,
  },
  {
    q: 'How much of our time does it require?',
    a: `<p>Approximately four to six hours across the first fortnight: a kickoff session, interviews with you and one or two technical leads, access to client and financial data, and a review of the draft copy. Two further review checkpoints follow. We require your knowledge rather than your labour.</p>`,
  },
  {
    q: 'Is local search always part of the analysis?',
    a: `<p>No, and assuming it is would be an error. Some providers sell into a defined geography where local visibility decides everything; others sell a specialised service nationally, where local optimisation is effort spent in the wrong place. Whether local search is relevant to your model is established during intake and stated explicitly in the Opportunities Report.</p>`,
  },
  {
    q: 'Are we obliged to continue afterwards?',
    a: `<p>No. Continuing into execution is a separate decision, made once the work has been delivered and reviewed. The separation is deliberate: you assess the quality of the analysis against finished deliverables rather than against a proposal describing them.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'Phase 1 · Month 1 · fixed fee',
  title: 'GTM Foundation: two reports and a website, in 30 days',
  lede: `We identify which of your services carry the most demand against the least competition, build an SEO-optimised website against those opportunities, and project what deploying it is worth in meetings and revenue.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See every stage' },
  stats: [
    { label: 'Duration', value: '30 days' },
    { label: 'Deliverables', value: 'Three' },
    { label: 'Commitment', value: 'Month 1 only' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">What you receive</p>
    <ul>
      <li><span>Opportunities Report</span> <b>01</b></li>
      <li><span>SEO-optimised website, ready to deploy</span> <b>02</b></li>
      <li><span>GTM Foundations Impact Report</span> <b>03</b></li>
    </ul>
    <p class="panel__foot">All three owned outright, whatever you decide next.</p>
  </div>`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'The deliverables',
    title: 'Three things, delivered inside one month',
    intro: `Not a strategy document and a set of recommendations. Two pieces of analysis and a finished asset you can put live.`,
  })}
  ${cards(
    [
      {
        kicker: 'Deliverable 1',
        title: 'The Opportunities Report',
        body: `Of everything your firm could sell, which offers carry the most demand against the least competition. We assess every service you deliver, then document the three strongest as land-and-expand offers.`,
        list: [
          'The three highest-opportunity offers, ranked',
          'The size of each opportunity, described in plain terms',
          'The keywords that reach each one, and who currently ranks',
          'A validated price point per offer, in the $5,000–$10,000 range',
          'An explicit finding on whether local search applies to your model',
        ],
      },
      {
        kicker: 'Deliverable 2',
        title: 'The website',
        body: `Built against those opportunities and carrying your existing branding — not a template and not a wireframe. Delivered complete and ready for you to deploy.`,
        list: [
          'An SEO-optimised home page positioned on the strongest opportunity',
          'A dedicated, individually optimised page for each of the three opportunities',
          'All copy written from the research and reviewed by you',
          'Technical SEO throughout: structure, speed, metadata, structured data',
          'Analytics, conversion tracking and enquiry routing configured',
        ],
      },
      {
        kicker: 'Deliverable 3',
        title: 'The GTM Foundations Impact Report',
        body: `What the work is projected to be worth, expressed in meetings and revenue rather than in rankings — so the investment can be assessed on expected return.`,
        list: [
          'Where your current website ranks today',
          'Where it is projected to rank once the new site is deployed',
          'The further ceiling available with best practice applied',
          'Cited industry conversion benchmarks applied at every step',
          'Search to visit, visit to meeting, meeting to revenue, revenue to long-term engagement',
        ],
      },
    ],
    { columns: 3 },
  )}`,
})}

${section({
  tone: 'muted',
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why the analysis precedes the build</h2>
      <p>The conventional sequence is inverted. A provider decides it requires more enquiries, commissions a website, and the site is built around the services the firm happens to list — which are the same services every competitor lists. Traffic may increase. Enquiries do not, because the pages are competing for terms the firm cannot win on, describing offers indistinguishable from the alternatives.</p>
      <p>Determining which offers carry real demand against weak competition is therefore not preparatory work. It decides what the website is for. A site built against three validated opportunities is a different asset from a site built against a service list, even where the two look similar.</p>
      <p><strong>We do not take generic copy and generic offers to market.</strong> That is what the first two stages exist to prevent.</p>

      <h2>Why the projection is stated in revenue</h2>
      <p>Ranking positions are not a business outcome. A report promising first-page visibility says nothing about whether the engagement was worth commissioning.</p>
      <p>So the Impact Report carries the projection through to the figure that matters. Cited industry averages are applied at each conversion step — search impressions to website visits, visits to booked meetings, meetings to closed revenue, and initial revenue to longer-term engagement — so the projected outcome is stated in the same terms you would use to assess any other investment. The benchmarks are cited rather than asserted, so you can check them.</p>
    </div>
    <div>
      ${callout({
        title: 'The three questions Month 1 answers',
        body: `<ol>
          <li>Which of our services should we actually be selling?</li>
          <li>What should we charge for them?</li>
          <li>What is it worth to us if we do?</li>
        </ol>
        <p>Most providers can answer none of these with evidence.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What you own at the conclusion',
        body: `<ul class="tick-list">
          <li>Both reports, in full</li>
          <li>The website, copy and analytics</li>
          <li>The research and keyword analysis behind them</li>
        </ul>
        <p>No proprietary platform, no licence, no dependency.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Sequence',
    title: 'The four stages of Month 1',
    intro: `Select any stage for its inputs, method and deliverable.`,
  })}
  ${processDiagram()}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({ eyebrow: 'Scope', title: 'Everything included' })}
      ${checklist([
        'Capability and margin assessment across your service lines',
        'Demand and competition analysis for every service you offer',
        'Identification and ranking of the three strongest opportunities',
        'Land-and-expand offer design for each opportunity',
        'Price validation against current market rates',
        'An explicit finding on the relevance of local search',
        'Keyword mapping per opportunity',
        'An SEO-optimised home page built on your branding',
        'A dedicated optimised page for each of the three opportunities',
        'All website copy, written and reviewed',
        'Analytics, conversion tracking and enquiry routing',
        'Current ranking baseline and post-deployment projection',
        'Best-practice ceiling modelling',
        'Revenue projection using cited industry conversion benchmarks',
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
          'Willingness to lead with a defined offer',
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
  body: 'Thirty minutes covering your services, your client base and your market. You will receive a candid assessment of where your strongest opportunity most likely lies, before committing to anything.',
  secondaryLabel: 'See every stage',
  secondaryHref: '/process/',
})}

${relatedLinks([
  { href: '/process/', label: 'The process', body: 'All four stages with inputs and deliverables stated.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The framework behind the opportunity analysis.' },
  { href: '/growth-engine/', label: 'Phase 2 — Growth Engine', body: 'Optional execution against the opportunities identified.' },
])}
`

export default {
  path: '/gtm-foundation/',
  title: 'GTM Foundation | Two Reports and a Website in 30 Days',
  description:
    'A fixed-fee Month 1 engagement for MSPs: an Opportunities Report, an SEO-optimised website ready to deploy, and a GTM Foundations Impact Report.',
  breadcrumbs: crumbs,
  priority: 0.8,
  schema: [faqBlock.schema],
  body,
}
