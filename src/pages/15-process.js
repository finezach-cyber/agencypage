import {
  hero, section, sectionHead, faq, cta, callout, checklist,
  breadcrumbs, relatedLinks, processDiagram, cards,
} from '../components.js'
import { opportunitiesSample, impactSample } from '../data/sample-reports.js'

const crumbs = [{ label: 'Process', href: '/process/' }]

/** Each stage states inputs, method and deliverable — a method with outputs. */
function stage({ id, num, title, lede, inputs, work, deliverable, tone = '' }) {
  return `<section class="stage${tone ? ' stage--' + tone : ''}" id="${id}">
    <div class="stage__head">
      <span class="stage__num" aria-hidden="true">${num}</span>
      <div>
        <h3>${title}</h3>
        <p class="stage__lede">${lede}</p>
      </div>
    </div>
    <div class="stage__grid">
      <div class="stage__col">
        <h4>What we start from</h4>
        ${checklist(inputs, { columns: 1 })}
      </div>
      <div class="stage__col">
        <h4>What we do</h4>
        ${checklist(work, { columns: 1 })}
      </div>
      <div class="stage__col stage__col--out">
        <h4>What you receive</h4>
        <p class="stage__deliverable">${deliverable}</p>
      </div>
    </div>
  </section>`
}

const faqBlock = faq([
  {
    q: 'What exactly do we receive at the end of Month 1?',
    a: `<p>Three things. The <strong>Opportunities Report</strong>, setting out the three offers with the most demand and the least competition, each sized, keyword-mapped and priced at a validated figure. An <strong>SEO-optimised website</strong> carrying your branding, with an optimised home page and a dedicated page for each opportunity, ready for you to deploy. And the <strong>GTM Foundations Impact Report</strong>, projecting where you rank now, where you would rank once the site is live, and the ceiling available with best practice applied — converted into meetings and revenue through cited industry benchmarks.</p>`,
  },
  {
    q: 'How much of our time does the process require?',
    a: `<p>Approximately four to six hours in the first fortnight: a kickoff session, interviews with you and one or two technical leads, access to client and financial data, and a content review. Two further review checkpoints follow. We require your knowledge, not your labour.</p>`,
  },
  {
    q: 'How long does Month 1 take?',
    a: `<p>Four weeks from kickoff, provided interviews and content review happen on schedule. The most common cause of extension is an internal disagreement about which opportunity to lead with — a disagreement that needed to surface regardless, and one we would rather resolve than build around.</p>`,
  },
  {
    q: 'Who writes the website copy?',
    a: `<p>We do, drawn from the research and from interviews with your team. You review and approve it. Asking an MSP principal to draft their own service pages is the most reliable way to leave a website unfinished for a year.</p>`,
  },
  {
    q: 'Why are the offers priced between $5,000 and $10,000?',
    a: `<p>Because that range is where a land-and-expand offer works. It is substantial enough to constitute a real engagement rather than a trial, and small enough that a prospective client can approve it without a procurement process. It establishes the relationship that larger managed services agreements are subsequently built on, which is why the final conversion step in the Impact Report models initial revenue through to longer-term engagement.</p>`,
  },
  {
    q: 'Is Phase 2 required?',
    a: `<p>No. It is a separate decision made after Month 1 has been delivered. The separation is the point: you evaluate the quality of the analysis before committing to execution, and we earn that engagement rather than bundling it.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'The process',
  title: 'How the engagement works, stage by stage',
  lede: `For MSPs and IT services companies. Month 1 identifies the offers with the most demand and the least competition, builds an SEO-optimised website against them, and projects what that is worth. You receive two reports and the website.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/gtm-foundation/', label: 'Phase 1 in detail' },
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    title: 'The sequence',
    intro: `Select any stage to move to it.`,
  })}
  ${processDiagram()}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Phase 1 — GTM Foundation',
    title: 'Month 1: find the opportunity, build the asset, model the return',
    intro: `A fixed-fee engagement delivered in four weeks. Four stages producing three deliverables: the Opportunities Report, an SEO-optimised website ready to deploy, and the GTM Foundations Impact Report.`,
  })}

  ${stage({
    id: 'intake',
    num: '01',
    title: 'Capability intake',
    lede: `We establish what your firm actually sells, to whom, and in which markets — the inputs every later stage is analysed against.`,
    inputs: [
      'Your company, website and full service list',
      'Client roster, tenure and contract structure',
      'Revenue, margin and retention by service line',
      'Your genuine service area and delivery capacity',
    ],
    work: [
      'Identify services delivered with real depth, not merely offered',
      'Locate margin and retention concentration by segment',
      'Surface vertical concentration that accumulated unintentionally',
      'Determine whether local search is relevant to your model, or not',
    ],
    deliverable: `A defined input set for the analysis: the services worth taking to market, the segments worth defending, and a clear answer on whether local search applies to your firm. Not every MSP or IT services company is a local-search business, and treating one as though it were wastes the budget.`,
  })}

  ${stage({
    id: 'opportunities',
    num: '02',
    title: 'Opportunity analysis',
    lede: `The central question of the engagement: of everything you could sell, which offers carry the most demand against the least competition?`,
    inputs: [
      'The service list and capability findings from stage 01',
      'Search demand across your markets',
      'The competitive set ranking for each candidate term',
    ],
    work: [
      'Assess demand against competitive difficulty for every service you offer',
      'Identify the three strongest opportunities — highest demand, weakest competition',
      'Shape each as a land-and-expand offer in the $5,000–$10,000 range',
      'Validate the pricing against what the market currently pays',
      'Size each opportunity and establish the keywords that reach it',
    ],
    deliverable: `<strong>Deliverable 1 — the Opportunities Report.</strong> Your three strongest offers, each with the size of the opportunity described in plain terms, the keywords that reach it, the competition you would rank against, and a validated price point. Written to be read by your leadership team, not decoded by them.`,
  })}

  <div class="sample-inline">
    <h4 class="sample-inline__head">A sample Opportunities Report</h4>
    ${opportunitiesSample()}
  </div>

  ${stage({
    id: 'website',
    num: '03',
    title: 'Website build',
    lede: `The opportunities become a working asset. We build the site rather than specifying it.`,
    inputs: [
      'The three validated opportunities and their keyword targets',
      'Your existing branding, which the build carries through',
      'Current site structure, content and any equity worth preserving',
    ],
    work: [
      'Build an SEO-optimised home page positioned on the strongest opportunity',
      'Build a dedicated, individually optimised page for each of the three opportunities',
      'Write all copy from the research, for your review',
      'Apply technical SEO throughout: structure, speed, metadata, structured data',
      'Configure analytics, conversion tracking and enquiry routing',
    ],
    deliverable: `<strong>Deliverable 2 — the website.</strong> A complete, SEO-optimised site carrying your branding: an optimised home page plus one page per opportunity, ready for you to deploy. All copy, the build and the analytics are owned outright by you.`,
  })}

  ${stage({
    id: 'impact',
    num: '04',
    title: 'Impact modelling',
    lede: `What the work is projected to be worth, stated in revenue rather than in rankings.`,
    inputs: [
      'Your current search positions and visibility',
      'The opportunity keywords and their competitive difficulty',
      'Validated pricing from the Opportunities Report',
    ],
    work: [
      'Establish where your current website ranks today',
      'Project where it ranks once the new site is deployed',
      'Model the further ceiling available through best practice — an authoritative reference presence, managed LinkedIn content, outbound and reputation',
      'Apply cited industry averages at each conversion step: search to visit, visit to booked meeting, meeting to revenue, and initial revenue to longer-term engagement',
    ],
    deliverable: `<strong>Deliverable 3 — the GTM Foundations Impact Report.</strong> Current rankings, projected rankings after deployment, and the ceiling available once best practice is applied — each converted through cited industry benchmarks into meetings and revenue, so the investment can be assessed on expected return rather than on traffic.`,
  })}

  <div class="sample-inline">
    <h4 class="sample-inline__head">A sample GTM Foundations Impact Report</h4>
    ${impactSample()}
  </div>

  ${callout({
    tone: 'success',
    title: 'What Month 1 hands over',
    body: `<ul class="tick-list">
      <li><strong>The Opportunities Report</strong> — your three strongest offers, sized and priced</li>
      <li><strong>The website</strong> — SEO-optimised, on your branding, ready to deploy</li>
      <li><strong>The GTM Foundations Impact Report</strong> — projected rankings and the revenue they imply</li>
    </ul>
    <p>All three are yours outright at the end of the month, whatever you decide next.</p>`,
  })}`,
})}

${section({
  tone: 'dark',
  id: 'decision',
  inner: `
  ${sectionHead({
    eyebrow: 'The decision point',
    title: 'Month 1 ends. You decide what happens next.',
    intro: `You make this decision holding the finished work — both reports and a deployable website — rather than a proposal describing it.`,
  })}
  ${cards(
    [
      {
        kicker: 'Option A',
        title: 'Stop here',
        body: `Both reports and the website are yours in full — deploy the site, work the opportunities, and apply the Impact Report's recommendations internally or through another firm. No licence, no ongoing fee, no claw-back, nothing that ceases to function.`,
      },
      {
        kicker: 'Option B',
        title: 'Continue to Phase 2',
        body: `We execute against the opportunities the research identified: search, content, outbound, reputation and reporting run as one system and measured on booked meetings. <a href="/growth-engine/">Review the scope</a>.`,
      },
    ],
    { columns: 2 },
  )}
  ${callout({
    title: 'Why the phases are separated',
    body: `<p>Most agency relationships require a commitment before the client has seen anything beyond a proposal. That structure transfers the risk at precisely the moment the buyer holds the least information.</p>
    <p>Separating the phases inverts it. You evaluate the quality of the analysis against finished work, and we earn the execution engagement rather than bundling it into the first signature.</p>`,
  })}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Phase 2 — Growth Engine',
    title: 'Execution against the opportunities',
    intro: `Optional, and decided only once Month 1 has been delivered. The opportunities identified in the research are worked across every channel where those buyers can be reached.`,
  })}
  ${stage({
    id: 'execution',
    num: '05',
    title: 'Execution',
    lede: `Not a content subscription. The identified opportunities, worked as one system and reported against pipeline.`,
    inputs: [
      'The Opportunities Report and the Impact Report recommendations',
      'The website as the conversion surface',
      'CRM access and an agreed definition of a qualified meeting',
    ],
    work: [
      'Inbound: SEO execution against the opportunity keywords, landing pages, conversion work',
      'Outbound: list construction, sequenced email and LinkedIn, appointment setting',
      'Reputation: review generation, Google Business Profile, monitoring',
      'Content: service, vertical and sales-support material that shortens deals',
      'Infrastructure: CRM configuration, routing, attribution and reporting',
    ],
    deliverable: `Monthly reporting against booked meetings, opportunities created and revenue by source, measured against the projections set out in the Impact Report — with leading indicators such as reply rates, rankings, review velocity and conversion by page reviewed alongside them.`,
  })}
  ${callout({
    tone: 'warn',
    title: 'On timelines',
    body: `<p>Outbound produces conversations within weeks. Search compounds over months, and longer in competitive metropolitan markets. We run both so that near-term activity proceeds while search positions accumulate, and we state this at the outset rather than in month three.</p>`,
  })}`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Begin with the first call',
  body: 'Thirty minutes. We review your services, your client base and your market, and give you a candid assessment of where your position most likely lies — before any commitment.',
  secondaryLabel: 'Phase 1 in detail',
  secondaryHref: '/gtm-foundation/',
})}

${relatedLinks([
  { href: '/gtm-foundation/', label: 'Phase 1 — GTM Foundation', body: 'The two reports and the website, in full.' },
  { href: '/growth-engine/', label: 'Phase 2 — Growth Engine', body: 'Optional execution against the opportunities identified.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The framework behind stages 01 to 03.' },
])}
`

export default {
  path: '/process/',
  title: 'Our Process | MSP Marketing, Stage by Stage',
  description:
    'The engagement in full: capability intake, opportunity analysis, an SEO-optimised website build and impact modelling in Month 1, then optional execution.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [faqBlock.schema],
  body,
}
