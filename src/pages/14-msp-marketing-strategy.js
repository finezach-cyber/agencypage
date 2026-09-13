import {
  hero, section, sectionHead, cards, steps, keywordTable, faq, cta,
  callout, breadcrumbs, relatedLinks, serviceSchema,
} from '../components.js'
import { strategyCluster, buyerDemand, verticalDemand } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/services/' },
  { label: 'MSP Marketing Strategy', href: '/msp-marketing-strategy/' },
]

const faqBlock = faq([
  {
    q: 'What should an MSP marketing plan actually contain?',
    a: `<p>Six things: a defined ICP, a positioning statement you can defend, service packaging that matches what that ICP buys, a keyword and demand map for your service area, a channel plan with sequencing, and the numbers you will judge it by. If a plan does not contain all six, it is a tactics list — and tactics lists are why MSPs spend for two years without a trend line.</p>`,
  },
  {
    q: 'How much should an MSP spend on marketing?',
    a: `<p>The common benchmark is 3–8% of revenue, but the percentage matters far less than the sequence. An MSP doing $3M with no positioning and a generic website will waste 8% as efficiently as it wastes 3%. Fix what you are saying and where you are saying it first; then the question of how much to spend has a sensible answer.</p>`,
  },
  {
    q: 'Should we niche down to one vertical?',
    a: `<p>Usually you should <em>lead</em> with one, not amputate the rest. Most $2–5M MSPs already have quiet concentration in two or three industries and have never noticed. Leading with the strongest one sharpens every message, and the general managed services business keeps running underneath. You are changing the shop window, not the warehouse.</p>`,
  },
  {
    q: 'Do we need a strategy if we just want more leads?',
    a: `<p>You need one precisely <em>because</em> you want more leads. Lead generation amplifies a message. If the message is the same as your competitors', amplification produces expensive indifference. The strategy is what makes the spend work, which is why we will not sell the <a href="/growth-engine/">Growth Engine</a> without the foundation first.</p>`,
  },
  {
    q: 'How is this different from hiring a marketing consultant?',
    a: `<p>A consultant hands you a strategy and leaves you to execute it. Month one here ends with the strategy <em>and</em> the website built on it, because a deck that never gets implemented has produced nothing. After that you can execute it yourself or have us run it.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP marketing strategy',
  title: 'An MSP marketing strategy that starts with what you sell, not where you advertise',
  lede: `Channel decisions are the last step, not the first. Before spending on leads, we work out which services have real demand in your market, which buyers you win disproportionately, and why they should choose you over eleven similar providers.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/gtm-foundation/', label: 'See the month-one engagement' },
  stats: [
    { label: 'Output', value: 'Plan + website' },
    { label: 'Timeline', value: '30 days' },
    { label: 'Commitment', value: 'One-time' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">A real plan answers</p>
    <ul>
      <li><span>Who exactly do we sell to?</span> <b>ICP</b></li>
      <li><span>Why should they pick us?</span> <b>Positioning</b></li>
      <li><span>What are we selling them?</span> <b>Packaging</b></li>
      <li><span>Where is the demand?</span> <b>Keyword map</b></li>
      <li><span>How do we reach them?</span> <b>Channels</b></li>
      <li><span>How do we know it works?</span> <b>Metrics</b></li>
    </ul>
    <p class="panel__foot">Most MSP marketing plans start at row five.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why most MSP marketing strategies fail before the first campaign</h2>
      <p>An MSP marketing plan usually arrives as a channel list. Post on LinkedIn three times a week, publish two blogs a month, run some Google Ads, attend the chamber breakfast, send a newsletter. It is a plan in the sense that it describes activity. It is not a strategy, because it contains no decision.</p>
      <p>Strategy is a decision about what you are <em>not</em> going to do. Which buyers you are not chasing. Which services you are not leading with. Which markets you are not serving. That is uncomfortable for a business built on saying yes to whatever walked in — but it is the only thing that makes the marketing work, because in a market where every provider lists the same services, the only available advantage is being obviously more right for a specific buyer.</p>

      <h3>The capability trap</h3>
      <p>Technically strong MSPs fall into this one almost universally. You genuinely can do managed IT, cybersecurity, cloud migration, compliance, VoIP, backup and vCIO work. So you list all of it. The buyer reads a list they cannot evaluate, concludes you are the same as the last three providers they looked at, and asks the only question they know how to ask: what does it cost per seat?</p>
      <p>Listing everything is how you end up competing on price. Leading with one thing is how you stop.</p>

      <h3>The concentration you already have</h3>
      <p>Nearly every MSP we look at is already specialised and does not know it. Nine of your forty clients are dental practices. Your best-margin work is the compliance-heavy accounts nobody else in town wants. Your fastest onboarding is a stack you happen to have unusual depth in. None of it appears on the website, because it happened by accident and accidents do not feel like strategy.</p>
      <p>That concentration is the most valuable input into the plan. It is evidence of where you already win — which is a far better basis than picking a vertical because a webinar said healthcare was lucrative.</p>

      <h3>Demand has to be checked, not assumed</h3>
      <p>The other half is external. There is no point building a strategy around a service nobody searches for, or a vertical with four prospects in your service area. Before recommending anything we map the actual demand: what buyers in your market type, how many of them there are, what competitors already rank, and where the gaps sit.</p>
    </div>
    <div>
      ${callout({
        title: 'You are X, for Y, because Z',
        body: `<p>The whole plan compresses into one sentence you have to be able to say without hedging.</p>
        <p>If you cannot finish it, no amount of SEO or outbound will fix the result — it will just distribute the hedge more widely.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What changes when you can',
        body: `<ul class="tick-list">
          <li>Outbound emails get replies because they are evidently not a blast</li>
          <li>Pages rank because they are not interchangeable with eleven others</li>
          <li>Price stops being the first question</li>
          <li>Referrals get more specific and better qualified</li>
          <li>Your team knows which deals to walk away from</li>
        </ul>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The framework',
    title: 'The six decisions in an MSP marketing plan',
  })}
  ${steps([
    {
      title: 'ICP — who you actually sell to',
      body: `Not "20–200 seats within an hour." Industry, size band, geography, trigger events, and the characteristics of the clients you keep longest at the best margin. Built from your own client data first, then validated against market size.`,
    },
    {
      title: 'Positioning — why they should choose you',
      body: `The defensible answer to "why you and not the provider down the road." Built on something real: a vertical you understand, a service depth you have, a model competitors do not offer, a response commitment you can actually keep.`,
    },
    {
      title: 'Service packaging — what you are selling them',
      body: `What leads, what supports, what gets deprioritised, and how it is packaged and priced so a buyer can understand the difference between tiers without a discovery call.`,
      list: [
        'Lead offer and the problem it solves',
        'Tier structure and what separates them',
        'Pricing model and how it is communicated',
        'Which services stay available but stop being marketed',
      ],
    },
    {
      title: 'Demand map — where the market actually is',
      body: `Search volume by service and location in your area, competitor rankings, map pack density, vertical demand, and an honest read on which terms are winnable inside twelve months.`,
    },
    {
      title: 'Channel plan — how you reach them, in what order',
      body: `Which channels, sequenced by how fast they produce and how long they compound. Usually: outbound for near-term conversations, local SEO and reviews for the medium term, content and authority for the long term.`,
    },
    {
      title: 'Measurement — how you know it is working',
      body: `Leading indicators you can read in weeks (reply rates, review velocity, indexed pages, map visibility) and lagging ones that decide it (booked calls, opportunities, closed revenue by source).`,
    },
  ])}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Demand research',
    title: 'What the demand map looks like',
    intro: `We run this for your market and your service area. Here is the national picture, so you can see the shape of it.`,
  })}
  <div class="split">
    <div>
      <h3>Core buyer demand</h3>
      ${keywordTable({ rows: buyerDemand, totalLabel: 'Total', caption: 'What businesses search when hiring an MSP.' })}
    </div>
    <div>
      <h3>Vertical demand</h3>
      ${keywordTable({ rows: verticalDemand, totalLabel: 'Total', caption: 'Only worth targeting where you genuinely serve the vertical.' })}
      ${callout({
        title: 'Volume is not the point',
        body: `<p><em>it support for dental practices</em> gets 40 searches a month at a $97.83 cost per click. Forty highly specific, high-value buyers beats ten thousand people who will never call you.</p>
        <p><a href="/resources/msp-keyword-research/">See the full research &rarr;</a></p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'Deliverable',
    title: 'You get the strategy and the thing it is built into',
    intro: `A strategy document that sits in a shared drive has produced nothing. Month one ends with the plan implemented as a website.`,
  })}
  ${cards(
    [
      {
        kicker: 'The plan',
        title: 'Documented and defensible',
        body: `ICP, positioning, packaging, demand map, channel sequence and metrics — written so your team can execute it with or without us.`,
      },
      {
        kicker: 'The implementation',
        title: 'A website built on it',
        body: `Architecture, copy and design that express the positioning, structured against the keyword map so the pages can rank.`,
      },
      {
        kicker: 'The option',
        title: 'Execution, if you want it',
        body: `The <a href="/growth-engine/">Growth Engine</a> operationalises the plan across inbound, outbound, reputation and content. Optional, and a separate decision.`,
      },
    ],
    { columns: 3 },
  )}
  <div style="margin-top:2.5rem">
    ${keywordTable({
      rows: strategyCluster,
      totalLabel: 'Monthly searches',
      caption: 'What MSP owners search when they know the plan is the missing piece.',
    })}
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Start with the strategy, not the spend',
  body: 'A 30-minute call to look at your services, your client concentrations and your market. You will get an honest read on where your wedge probably is.',
})}

${relatedLinks([
  { href: '/gtm-foundation/', label: 'GTM Foundation', body: 'The month-one engagement where the strategy gets built and implemented.' },
  { href: '/msp-website-design/', label: 'MSP website design', body: 'How the strategy becomes a site that ranks and converts.' },
  { href: '/resources/msp-pricing-models/', label: 'MSP pricing models', body: 'Packaging and pricing — the part of the plan most MSPs avoid.' },
])}
`

export default {
  path: '/msp-marketing-strategy/',
  title: 'MSP Marketing Strategy & Marketing Plan Framework',
  description:
    'Build an MSP marketing strategy that starts with ICP, positioning and packaging — then a marketing plan mapped to real search demand in your service area.',
  breadcrumbs: crumbs,
  priority: 0.8,
  schema: [
    faqBlock.schema,
    serviceSchema({
      name: 'MSP Marketing Strategy',
      description:
        'Go-to-market strategy for managed service providers: ICP definition, positioning, service packaging, demand mapping, channel planning and measurement.',
      path: '/msp-marketing-strategy/',
      serviceType: 'Marketing Strategy Consulting',
    }),
  ],
  body,
}
