import {
  hero, section, sectionHead, faq, cta, callout, checklist,
  breadcrumbs, relatedLinks, processDiagram, keywordTable, cards,
} from '../components.js'
import { clientDemandExample } from '../data/keywords.js'

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
    q: 'How long does Month 1 actually take?',
    a: `<p>Four weeks from kickoff, provided interviews and content review happen on schedule. The most common cause of extension is an internal disagreement about positioning that needed to surface anyway — we would rather resolve it than publish a site the leadership team does not believe in.</p>`,
  },
  {
    q: 'How much of our time does the process require?',
    a: `<p>Approximately four to six hours in the first fortnight: a kickoff session, interviews with you and one or two technical leads, access to client and financial data, and a content review. Two further review checkpoints follow. We require your knowledge, not your labour.</p>`,
  },
  {
    q: 'Can you work from research we have already commissioned?',
    a: `<p>Send it and we will assess it. If the ideal customer profile, positioning and demand analysis are sound and current, Month 1 narrows to validation and build, and the fee reflects the reduced scope. We will tell you plainly if the existing work is not sufficient to build on.</p>`,
  },
  {
    q: 'Who writes the website copy?',
    a: `<p>We do, drawn from the research and from interviews with your team. You review and approve it. Asking an MSP principal to draft their own service pages is the most reliable way to leave a website unfinished for a year.</p>`,
  },
  {
    q: 'What if we already have a recent website?',
    a: `<p>The build stage becomes a restructure rather than a rebuild: new architecture, new copy and new pages mapped to demand, applied to your existing design system. Stages 01 through 03 are unchanged, and the quote reflects the narrower build.</p>`,
  },
  {
    q: 'Is Phase 2 required?',
    a: `<p>No. It is a separate decision made after Month 1 has been delivered. The separation is the point: you evaluate the quality of the thinking before committing to an execution agreement, and we earn that agreement rather than bundling it.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'The process',
  title: 'How the engagement works, stage by stage',
  lede: `Two phases with a decision point between them. Month 1 establishes the commercial foundation and delivers the assets. Phase 2 executes the plan. Each stage below states what it takes in, what we do, and what you receive.`,
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
    title: 'Month 1: establish the position, build the assets',
    intro: `A fixed-fee engagement. Five stages, delivered in four weeks, ending with a live website and a campaign plan you own outright.`,
  })}

  ${stage({
    id: 'capabilities',
    num: '01',
    title: 'Capability audit',
    lede: `Before assessing the market, we establish what your firm is actually strong at — which is rarely what the website currently emphasises.`,
    inputs: [
      'Interviews with you and your technical leads',
      'Client roster, tenure and contract structure',
      'Revenue, margin and retention by service line',
      'Delivery data: escalations, onboarding, response performance',
    ],
    work: [
      'Identify services delivered with genuine depth, not merely offered',
      'Locate margin and retention concentration by segment',
      'Surface vertical concentration that accumulated unintentionally',
      'Establish the real service area and response capability',
    ],
    deliverable: `A written capability and margin assessment: where your firm performs disproportionately well, and which segments are worth defending. Nearly every MSP we assess is already specialised without having recognised it.`,
  })}

  ${stage({
    id: 'research',
    num: '02',
    title: 'Market research',
    lede: `Internal strength only matters where external demand exists. This stage tests the first against the second.`,
    inputs: [
      'Your defined service area and target size band',
      'The capability assessment from stage 01',
      'Competitor set across your markets',
    ],
    work: [
      'Map search demand by service, location and vertical across your area',
      'Analyse competitor positioning, messaging and site structure',
      'Identify demand that no competitor is answering competently',
      'Size the addressable account base for each candidate segment',
    ],
    deliverable: `A demand map for your service area: what your buyers search, in what volume, what those clicks cost in paid search, who currently ranks, and where the openings are. This is the evidence the positioning decision is made against.`,
  })}

  ${section({
    className: 'section--tight',
    inner: `${callout({
      title: 'What the demand map looks like',
      body: `<p>An illustration of the national picture. Yours is built for your service area and your verticals.</p>
        ${keywordTable({
          rows: clientDemandExample,
          caption: 'What businesses search when they intend to hire an MSP. US monthly volume and paid cost per click.',
        })}
        <p>Two observations drive most positioning decisions. Local intent dominates, which determines where visibility has to be won. And low volume does not mean low value — <em>it support for dental practices</em> draws 40 searches a month at $97.83 a click, because the few firms searching it are worth a great deal to a provider who understands that environment.</p>`,
    })}`,
  })}

  ${stage({
    id: 'positioning',
    num: '03',
    title: 'Positioning and offer design',
    lede: `The research resolves into decisions. This is the stage that determines whether everything downstream works.`,
    inputs: [
      'The capability assessment and the demand map',
      'Commercial constraints: capacity, delivery model, pricing floor',
      'Leadership input on direction and appetite',
    ],
    work: [
      'Define the ideal customer profile and the segments to lead with',
      'Establish the positioning: what you are, for whom, on what grounds',
      'Package services into tiers a buyer can evaluate without a call',
      'Set the pricing model and how it is communicated',
      'Determine what is no longer actively marketed',
    ],
    deliverable: `A positioning statement you can defend, a packaged and priced service structure, and a messaging framework that governs the website, outbound sequences and sales conversations alike.`,
  })}

  ${stage({
    id: 'website',
    num: '04',
    title: 'Website build',
    lede: `The positioning becomes a working asset. We build the site rather than specifying it.`,
    inputs: [
      'The positioning and messaging framework',
      'The demand map and resulting page architecture',
      'Existing brand assets, where they are usable',
    ],
    work: [
      'Map one page to each commercial intent, with no internal competition',
      'Write all copy from the research and interviews, for your review',
      'Design and build: fast, responsive, accessible, structured data throughout',
      'Configure analytics, conversion tracking and enquiry routing',
      'Migrate with URL mapping and redirects so existing equity is preserved',
    ],
    deliverable: `A live, SEO-optimised website built on your positioning — with all copy, the domain and the analytics owned outright by you. No proprietary platform and no licence.`,
  })}

  ${stage({
    id: 'campaign-plan',
    num: '05',
    title: 'Campaign plan',
    lede: `A specification for demand generation in your market, detailed enough to execute with or without us.`,
    inputs: [
      'The positioning, packaging and demand map',
      'Addressable account sizing by segment',
      'Your CRM, sales process and current follow-up practice',
    ],
    work: [
      'Specify inbound targets: search terms, pages, local visibility and reputation',
      'Specify outbound: account criteria, list sources, segmentation and triggers',
      'Draft messaging by segment, since motivations differ by vertical',
      'Sequence the channels by speed of return and rate of compounding',
      'Define the metrics and reporting cadence performance is judged against',
    ],
    deliverable: `A written 90-day campaign plan covering inbound and outbound, with targets, messaging, sequencing and success measures. Yours regardless of what you decide next.`,
  })}`,
})}

${section({
  tone: 'dark',
  id: 'decision',
  inner: `
  ${sectionHead({
    eyebrow: 'The decision point',
    title: 'Month 1 ends. You decide what happens next.',
    intro: `You make this decision holding the finished work, not a proposal describing it.`,
  })}
  ${cards(
    [
      {
        kicker: 'Option A',
        title: 'Stop here',
        body: `The website, copy, research, positioning and campaign plan are yours in full. No licence, no ongoing fee, no claw-back, nothing that ceases to function. Execute the plan internally or engage another firm to run it.`,
      },
      {
        kicker: 'Option B',
        title: 'Continue to Phase 2',
        body: `We execute the plan under a three-month agreement: search, content, outbound, reputation and reporting run as one system and measured on booked meetings. <a href="/growth-engine/">Review the scope</a>.`,
      },
    ],
    { columns: 2 },
  )}
  ${callout({
    title: 'Why the phases are separated',
    body: `<p>Most agency relationships require a multi-month commitment before the client has seen anything beyond a proposal. That structure transfers all of the risk at precisely the moment the buyer has the least information.</p>
    <p>Separating the phases inverts it. You evaluate the quality of the thinking against finished work, and we earn the execution agreement rather than bundling it into the initial signature.</p>`,
  })}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Phase 2 — Growth Engine',
    title: 'Execution against the plan',
    intro: `A three-month agreement. The plan built in Month 1 is operated across every channel where your buyers can be reached.`,
  })}
  ${stage({
    id: 'execution',
    num: '06',
    title: 'Execution',
    lede: `Not a content subscription. The specified plan, run as one system, reported against pipeline.`,
    inputs: [
      'The campaign plan and messaging framework from Month 1',
      'The website as the conversion surface',
      'CRM access and an agreed definition of a qualified meeting',
    ],
    work: [
      'Inbound: SEO execution, local visibility, landing pages, conversion work',
      'Outbound: list construction, sequenced email and LinkedIn, appointment setting',
      'Reputation: review generation, Google Business Profile, monitoring',
      'Content: service, vertical and sales-support material that shortens deals',
      'Infrastructure: CRM configuration, routing, attribution and reporting',
    ],
    deliverable: `Monthly reporting against booked meetings, opportunities created and revenue by source, with leading indicators — reply rates, rankings, review velocity, conversion by page — reviewed alongside them.`,
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
  { href: '/gtm-foundation/', label: 'Phase 1 — GTM Foundation', body: 'Scope, deliverables and terms for the Month 1 engagement.' },
  { href: '/growth-engine/', label: 'Phase 2 — Growth Engine', body: 'The three-month execution agreement in full.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The framework behind stages 01 to 03.' },
])}
`

export default {
  path: '/process/',
  title: 'Our Process | MSP Marketing, Stage by Stage',
  description:
    'The engagement in full: capability audit, market research, positioning, website build and campaign plan in Month 1, then a three-month execution agreement.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [faqBlock.schema],
  body,
}
