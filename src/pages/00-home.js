import {
  hero, section, sectionHead, cards, faq, cta, callout,
  checklist, processDiagram, keywordTable, audienceStrip,
} from '../components.js'
import { coreCluster } from '../data/keywords.js'

const faqBlock = faq([
  {
    q: 'What makes this different from other MSP marketing agencies?',
    a: `<p>Most agencies begin with execution: a website refresh, a content calendar, an ad account. We begin with the commercial question that determines whether any of it works — which of your services carry genuine demand against weak competition, and what those offers should cost. Month 1 answers that question, builds the website against the answer, and projects what deploying it is worth. Only then does execution begin.</p>`,
  },
  {
    q: 'What does Month 1 cost, and what am I committing to?',
    a: `<p>Month 1 is a fixed-fee engagement, quoted after the first call and before any work begins. It commits you to nothing beyond that month. At the end you hold both reports and the website, and you decide whether to continue. See <a href="/process/">the process</a> for the full sequence.</p>`,
  },
  {
    q: 'What happens if I decline Phase 2?',
    a: `<p>You keep everything produced in Month 1 — both reports, the website, the copy and the underlying research — in full, with no licence, no ongoing fee and no claw-back. Deploy the site and work the opportunities in-house, or hand the whole of it to another firm.</p>`,
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
    q: 'Do you work with IT services companies as well as MSPs?',
    a: `<p>Yes. The method applies to any firm selling technical services to businesses — managed service providers, IT services companies, IT support firms, MSSPs and co-managed IT providers. What matters is that you hold a service list wider than your marketing reflects, which is near-universal in this category. We typically work with firms between roughly $2M and $5M in annual revenue that have the capacity to service new clients when they arrive.</p>`,
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
  title: 'The top MSP marketing solution for MSPs and IT services companies',
  lede: `For managed service providers and IT services companies. We identify which of your services carry the most demand against the least competition, then build an SEO-optimised website against those opportunities. Month 1 delivers two reports and a website ready to deploy.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
  stats: [
    { label: 'Month 1', value: 'Fixed fee' },
    { label: 'Deliverables', value: '2 reports + site' },
    { label: 'Commitment', value: 'Month 1 only' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">What Month 1 delivers</p>
    <ul>
      <li><span>Opportunities Report</span> <b>01</b></li>
      <li><span>SEO-optimised website, ready to deploy</span> <b>02</b></li>
      <li><span>GTM Foundations Impact Report</span> <b>03</b></li>
    </ul>
    <p class="panel__foot">All three owned outright, whether or not you continue to Phase 2.</p>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The problem',
    title: 'Most MSP marketing fails before the first campaign runs',
    intro: `Not because the execution is poor. Because the offer underneath it was never established, and marketing can only amplify the message it is given.`,
  })}
  <div class="split">
    <div class="stack">
      <p>Open five MSP or IT services websites in any market and you will find the same four services listed in the same order: managed IT, cybersecurity, cloud, IT support. The language is interchangeable. So is the proof. A buyer who cannot evaluate the technical substance of any of it defaults to the two variables they can compare — price and proximity.</p>
      <p>This is a positioning failure, not a copywriting failure. It is what happens when a technically capable firm has never been required to decide which part of the market it is built to serve. Breadth of capability becomes breadth of message, and breadth of message reads as no message at all.</p>
      <p>The consequence is that marketing spend produces activity without producing pipeline. Traffic rises. Enquiries do not. The conclusion drawn is usually that marketing does not work for managed services, when what did not work was promoting an undifferentiated offer to an undefined buyer.</p>
      <p><strong>We do not take generic copy and generic offers to market.</strong> Establishing which offers carry real demand against weak competition is what Month 1 exists to do, and it decides what the website is for.</p>
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
    title: 'Two reports and a website you can deploy',
    intro: `A fixed-fee engagement that ends with validated offers, the asset built to sell them, and a projection of what that is worth — not a strategy document.`,
  })}
  ${cards(
    [
      {
        kicker: 'Deliverable 1',
        title: 'The Opportunities Report',
        body: `Every service you offer is assessed for demand against competitive difficulty. The three strongest become your opportunities, each shaped as a land-and-expand offer between $5,000 and $10,000, with the pricing validated against what the market currently pays. The report states the size of each opportunity, the keywords that reach it, who you would be ranking against, and whether local search is relevant to your model at all.`,
      },
      {
        kicker: 'Deliverable 2',
        title: 'An SEO-optimised website, ready to deploy',
        body: `Built against those opportunities and carrying your existing branding: an SEO-optimised home page positioned on the strongest offer, plus a dedicated, individually optimised page for each of the three opportunities. All copy written from the research, technical SEO applied throughout, tracking configured. Delivered complete for you to put live.`,
      },
      {
        kicker: 'Deliverable 3',
        title: 'The GTM Foundations Impact Report',
        body: `Where your website ranks today, where it is projected to rank once the new site is deployed, and the further ceiling available with best practice applied — an authoritative reference presence, managed LinkedIn content, outbound and reputation. Cited industry conversion benchmarks are then applied at every step: search to visit, visit to booked meeting, meeting to revenue, and initial revenue to longer-term engagement.`,
      },
    ],
    { columns: 3 },
  )}
  ${callout({
    title: 'Why the projection is stated in revenue',
    body: `<p>Ranking positions are not a business outcome. The Impact Report carries the projection through to the figure you would use to assess any other investment, using benchmarks that are cited rather than asserted — so you can check them.</p>
    <p><a href="/gtm-foundation/#samples">See sample versions of both reports &rarr;</a></p>`,
  })}`,
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
      <p><strong>Continue.</strong> We execute against the opportunities the research identified: search, content, outbound, reputation and reporting, run as one system and measured on booked meetings. <a href="/growth-engine/">Review the Growth Engine scope</a>.</p>
      <p><strong>Stop.</strong> Both reports and the website are yours in full — no licence, no ongoing fee, nothing that ceases to function. Deploy the site and work the opportunities internally, or hand the whole of it to another firm.</p>
      <p>Either outcome is acceptable to us. An MSP that leaves after Month 1 with three validated offers and a website built against them is better served than one retained on a contract that was never earned.</p>
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
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Choosing an MSP marketing company</h2>
      <p>Three questions separate most of the field, and they are worth asking of us as much as of anyone else.</p>
      <p><strong>Does the firm establish what you should be selling before selling you execution?</strong> An agency that opens with deliverables — a site refresh, a content schedule, an ad account — is proposing to amplify whatever message already exists. If that message is the same as your competitors', amplification produces cost rather than pipeline.</p>
      <p><strong>Can it show what it would do differently for your market specifically?</strong> A description of process is not an answer. A named opportunity, with the demand behind it and the competition it would face, is.</p>
      <p><strong>Does it report on booked meetings and revenue by source?</strong> Impressions, rankings and published article counts are inputs. They are worth tracking and they are not the outcome you are buying.</p>

      <h3>What MSP digital marketing should cover</h3>
      <p>Used properly, MSP digital marketing is not a channel list. It is the website, organic and local search, review generation and Google Business Profile, email and LinkedIn outbound, content, conversion work, and the analytics and CRM configuration that ties all of it to pipeline — operated as one system against one set of validated offers rather than as parallel workstreams each reporting separately.</p>
      <p>Paid advertising sits outside that default. With clicks in this category running from $28 to $98, paid search is an expensive place to discover what your market responds to. Establish the message through organic and outbound first; paid then becomes a way to amplify what already converts.</p>
    </div>
    <div>
      ${callout({
        title: 'Questions worth asking any agency',
        body: `<ul class="tick-list">
          <li>What will you tell me I should stop selling?</li>
          <li>What does the first month produce that I keep?</li>
          <li>Which of my competitors already rank, and why?</li>
          <li>What will you report, and what will you leave out?</li>
          <li>Who performs the work day to day?</li>
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
      ${audienceStrip({
        title: 'We work exclusively with MSPs and IT services companies',
        intro: `Working in one category compounds: each engagement adds to a body of evidence the next one begins with — which services carry genuine demand, which verticals convert, which offers hold up under scrutiny, which site structures produce enquiries, and which outbound messages earn replies.`,
      })}
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
          'MSPs and IT services firms at roughly $2–5M in annual revenue',
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
    'MSP marketing for MSPs and IT services firms. Month 1 finds your highest-demand offers and delivers two reports plus an SEO-optimised website to deploy.',
  priority: 1.0,
  changefreq: 'weekly',
  schema: [faqBlock.schema],
  body,
}
