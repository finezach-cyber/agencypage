import {
  hero, section, sectionHead, cards, faq, cta, callout,
  checklist, processDiagram, keywordTable,
} from '../components.js'
import { coreCluster } from '../data/keywords.js'

const faqBlock = faq([
  {
    q: 'What makes this different from other MSP marketing agencies?',
    a: `<p>Most agencies begin with execution: a website refresh, a content calendar, an ad account. We begin with the commercial question that determines whether any of it works — which of your services to lead with, for which buyers, and on what grounds they should select you. Month 1 answers that question and delivers the website and campaign plan built on the answer. Only then do we run campaigns.</p>`,
  },
  {
    q: 'What does Month 1 cost, and what am I committing to?',
    a: `<p>Month 1 is a fixed-fee engagement, quoted after the first call and before any work begins. It commits you to nothing beyond that month. At the end you hold the positioning, the website and the campaign plan, and you decide whether to continue. See <a href="/process/">the process</a> for the full sequence.</p>`,
  },
  {
    q: 'What happens if I decline Phase 2?',
    a: `<p>You keep everything produced in Month 1 — the website, the domain, the copy, the research and the campaign plan — in full, with no licence, no ongoing fee and no claw-back. You are free to execute the plan in-house or with another firm.</p>`,
  },
  {
    q: 'How should I evaluate an MSP marketing company?',
    a: `<p>Three questions separate most of the field. Does the firm establish your positioning before selling execution, or does it begin with deliverables? Can it show what it would do differently for your market specifically, rather than describing its process? And does it report on booked meetings and revenue by source, or on impressions and rankings? An MSP marketing company that cannot answer the first question will produce activity irrespective of how competent the execution is.</p>`,
  },
  {
    q: 'What does MSP digital marketing include?',
    a: `<p>In this engagement, MSP digital marketing covers the website, organic and local search, review generation and Google Business Profile, email and LinkedIn outbound, content, conversion optimisation and the analytics and CRM configuration that connects all of it to pipeline. It does not include paid advertising as a primary channel, for the reason given above. Every component is documented in the <a href="/msp-marketing-services/">services scope</a>.</p>`,
  },
  {
    q: 'Which MSPs do you work with?',
    a: `<p>Managed service providers between roughly $2M and $5M in annual revenue, with the capacity to service new clients when they arrive. We accept one MSP per metropolitan market so that our clients never compete against each other in search results.</p>`,
  },
  {
    q: 'How quickly does this produce pipeline?',
    a: `<p>Outbound typically produces first conversations within weeks of launch. Organic search compounds over three to six months and longer in dense markets. We sequence both so that near-term activity runs while search positions build. Any firm promising ranked, converting demand within 30 days is describing something other than search.</p>`,
  },
  {
    q: 'Do you run paid advertising?',
    a: `<p>Not as the primary channel. Clicks in this category run between $28 and $98, which makes paid search an expensive place to discover what your market responds to. We establish the message through outbound and organic first, then paid becomes an option for amplifying what already converts.</p>`,
  },
])

const body = `
${hero({
  eyebrow: 'MSP marketing agency',
  title: 'The top MSP marketing solution for managed service providers',
  lede: `We determine what your MSP should be selling, and to whom, before a dollar goes to demand generation. Month 1 delivers your positioning, an SEO-optimised website and a complete campaign plan. What happens next is your decision.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
  stats: [
    { label: 'Month 1', value: 'Fixed fee' },
    { label: 'Deliverable', value: 'Site + plan' },
    { label: 'Coverage', value: 'One MSP per metro' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Month 1 deliverables</p>
    <ul>
      <li><span>Capability and margin audit</span> <b>&#10003;</b></li>
      <li><span>Market and competitor research</span> <b>&#10003;</b></li>
      <li><span>Positioning and service packaging</span> <b>&#10003;</b></li>
      <li><span>SEO-optimised website, built</span> <b>&#10003;</b></li>
      <li><span>Inbound and outbound campaign plan</span> <b>&#10003;</b></li>
    </ul>
    <p class="panel__foot">Yours to keep whether or not you continue to Phase 2.</p>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The problem',
    title: 'Most MSP marketing fails before the first campaign runs',
    intro: `Not because the execution is poor. Because the positioning underneath it was never established, and marketing can only amplify the message it is given.`,
  })}
  <div class="split">
    <div class="stack">
      <p>Open five managed service provider websites in any market and you will find the same four services listed in the same order: managed IT, cybersecurity, cloud, IT support. The language is interchangeable. So is the proof. A buyer who cannot evaluate the technical substance of any of it defaults to the two variables they can compare — price and proximity.</p>
      <p>This is a positioning failure, not a copywriting failure. It is what happens when a technically capable firm has never been required to decide which part of the market it is built to serve. Breadth of capability becomes breadth of message, and breadth of message reads as no message at all.</p>
      <p>The consequence is that marketing spend produces activity without producing pipeline. Traffic rises. Enquiries do not. The conclusion drawn is usually that marketing does not work for managed services, when what did not work was promoting an undifferentiated offer to an undefined buyer.</p>
      <p><strong>We do not take generic copy and generic offers to market.</strong> That is the entire reason Month 1 exists.</p>
    </div>
    <div>
      ${callout({
        title: 'Symptoms of an unresolved position',
        body: `<ul class="tick-list">
          <li>Referrals are the only dependable source of new clients</li>
          <li>Deals stall on price, because nothing else distinguishes the options</li>
          <li>The company ranks for its own name and little else</li>
          <li>The website receives traffic and produces few enquiries</li>
          <li>Previous marketing investment produced reports rather than revenue</li>
        </ul>`,
      })}
      ${callout({
        tone: 'warn',
        title: 'The diagnostic',
        body: `<p>If your website copy would remain accurate with a competitor's name placed at the top of it, the position has not been established — and no amount of SEO, content or outbound will compensate for that.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'The approach',
    title: 'A defined sequence, with a decision point in the middle',
    intro: `Month 1 establishes the commercial foundation and builds the assets. You then decide whether we execute. Select any stage to see what it involves and what it produces.`,
  })}
  ${processDiagram({ compact: true })}
  <p class="pmap__foot"><a href="/process/">Read the full process, stage by stage &rarr;</a></p>`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'Month 1',
    title: 'What the first month produces',
    intro: `A fixed-fee engagement that ends with a commercial strategy and the assets required to execute it — not a strategy document.`,
  })}
  ${cards(
    [
      {
        kicker: 'Stage 01–02',
        title: 'Capability audit and market research',
        body: `We establish what your firm is genuinely strong at, where margin and retention actually come from, and which verticals you have already concentrated in. That is then tested against the market: search demand across your service area, competitor positioning, and the gaps nobody is answering well.`,
      },
      {
        kicker: 'Stage 03',
        title: 'Positioning and service packaging',
        body: `The research resolves into decisions. Which services lead, which buyers they are aimed at, how the offer is packaged and priced, and what is no longer actively marketed. Every subsequent asset is built from this.`,
      },
      {
        kicker: 'Stage 04',
        title: 'An SEO-optimised website',
        body: `Built on the positioning and structured against the demand map: a page for each commercial intent your buyers search, technically sound, fast, and built to convert. Delivered live within the month, owned outright by you.`,
      },
      {
        kicker: 'Stage 05',
        title: 'A tailored campaign plan',
        body: `Inbound and outbound specified for your market — the search targets, the account list and segmentation, the messaging by segment, the sequence of channels, and the metrics against which performance is judged.`,
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'The decision',
        title: 'At the end of Month 1, you choose',
        intro: `The separation between the two phases is deliberate. It removes the requirement to commit to a long engagement before seeing the quality of the thinking.`,
      })}
      <p><strong>Continue.</strong> Phase 2 is a three-month agreement in which we execute the plan: search, content, outbound, reputation and reporting, run as one system and measured on booked meetings. <a href="/growth-engine/">Review the Growth Engine scope</a>.</p>
      <p><strong>Stop.</strong> The website, the copy, the research and the campaign plan are yours in full — no licence, no ongoing fee, nothing that stops working. Execute it internally or hand it to another firm.</p>
      <p>Either outcome is acceptable to us. An MSP that leaves after Month 1 with a clear position and a working website is better served than one retained on a contract that was never earned.</p>
    </div>
    <div>
      ${callout({
        tone: 'success',
        title: 'What you own after Month 1',
        body: `<ul class="tick-list">
          <li>The website, domain, copy and analytics</li>
          <li>The market and competitor research</li>
          <li>The positioning and packaging decisions</li>
          <li>The demand map for your service area</li>
          <li>The inbound and outbound campaign plan</li>
        </ul>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'MSP marketing services',
    title: 'What we execute in Phase 2',
    intro: `Each discipline is part of one system. They are documented separately because that is how they are evaluated.`,
  })}
  ${cards([
    {
      title: 'MSP lead generation',
      href: '/msp-lead-generation/',
      body: `Inbound and outbound directed at a single defined ICP with a single message. Account targeting, list construction, sequenced outreach and appointment setting, measured on booked meetings rather than form completions.`,
    },
    {
      title: 'MSP marketing strategy',
      href: '/msp-marketing-strategy/',
      body: `The decisions that precede execution: ideal customer profile, positioning, service packaging, demand mapping and channel sequencing — documented as a marketing plan your team can act on.`,
    },
    {
      title: 'MSP SEO',
      href: '/msp-seo/',
      body: `Search visibility for the terms your buyers use, across local and organic results. Technical foundation, service and location pages, and the reputation signals that determine local ranking.`,
    },
    {
      title: 'All MSP marketing services',
      href: '/msp-marketing-services/',
      body: `The complete scope of what we deliver across both phases, including content, reputation management and the reporting infrastructure that connects activity to pipeline.`,
    },
  ], { columns: 4 })}`,
})}

${section({
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'Specialisation',
        title: 'We work exclusively with managed service providers',
      })}
      <p>Working in one category compounds. Each engagement adds to a body of evidence the next one begins with: which services carry genuine demand, which verticals convert, which offers hold up under scrutiny, which site structures produce enquiries, and which outbound messages earn replies.</p>
      <p>It also means the work does not require translation. We understand what co-managed IT involves, why a vCISO offer prices differently from break-fix, and why claiming to be proactive rather than reactive has not differentiated a provider for over a decade.</p>
      ${keywordTable({
        rows: coreCluster,
        totalLabel: 'Monthly searches',
        caption: 'What MSP owners search when they decide to engage a marketing firm.',
      })}
    </div>
    <div>
      <h3>This engagement fits</h3>
      ${checklist(
        [
          'MSPs at roughly $2–5M in annual revenue',
          'Growth currently dependent on referral',
          'Technical strengths that have never been marketed',
          'Capacity to service new clients on arrival',
          'Willingness to lead with a defined segment',
        ],
        { columns: 1 },
      )}
      <h3>This engagement does not fit</h3>
      ${checklist(
        [
          'A requirement for enquiries within the month',
          'An intention to remain a generalist provider',
          'No internal capacity to take a sales call promptly',
          'A procurement process optimised for lowest cost per deliverable',
        ],
        { columns: 1 },
      )}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta()}
`

export default {
  path: '/',
  title: 'MSP Marketing Agency | The Top MSP Marketing Solution',
  description:
    'An MSP marketing agency that defines your market before building demand. Month 1 delivers positioning, an SEO-optimised website and a full campaign plan.',
  priority: 1.0,
  changefreq: 'weekly',
  schema: [faqBlock.schema],
  body,
}
