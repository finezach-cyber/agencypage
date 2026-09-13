import {
  hero, section, sectionHead, steps, keywordTable, faq, cta,
  callout, breadcrumbs, relatedLinks, serviceSchema, cards,
} from '../components.js'
import { strategyCluster } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/msp-marketing-services/' },
  { label: 'MSP Marketing Strategy', href: '/msp-marketing-strategy/' },
]

const faqBlock = faq([
  {
    q: 'What should an MSP marketing plan contain?',
    a: `<p>Six components: a defined ideal customer profile, a position you can defend, service packaging matched to what that ICP buys, a demand map for your service area, a channel plan with sequencing, and the measures by which performance will be judged. A document lacking any of these is a list of tactics, and tactics lists are why providers spend for two years without establishing a trend.</p>`,
  },
  {
    q: 'How much should an MSP spend on marketing?',
    a: `<p>The common benchmark is three to eight per cent of revenue, but the sequence matters considerably more than the percentage. A $3M provider with no established position will expend eight per cent as ineffectively as three. Establish what you are saying and to whom; the budget question then has a defensible answer.</p>`,
  },
  {
    q: 'Should we narrow to a single vertical?',
    a: `<p>Generally you should lead with one rather than eliminate the others. Most providers at this size already hold concentration in two or three sectors without having recognised it. Leading with the strongest sharpens every message while the general managed services business continues underneath. You are changing what is presented, not what is delivered.</p>`,
  },
  {
    q: 'Do we need a strategy if we simply want more leads?',
    a: `<p>Particularly then. Lead generation amplifies a message; amplifying a message identical to your competitors' produces expensive indifference. This is why we do not sell <a href="/growth-engine/">execution</a> without the foundation preceding it.</p>`,
  },
  {
    q: 'How does this differ from engaging a marketing consultant?',
    a: `<p>A consultant delivers a strategy and leaves the implementation to you. Month 1 concludes with the strategy <em>and</em> the website built on it, because a plan that is never implemented has produced nothing. Execution afterwards is your choice — internally or with us.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP marketing strategy',
  title: 'An MSP marketing strategy that begins with what you sell',
  lede: `Channel selection is the final decision, not the first. We establish which of your services carry genuine demand, which buyers you win disproportionately, and why they should select you — then document the marketing plan that follows.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
  stats: [
    { label: 'Output', value: 'Plan + website' },
    { label: 'Duration', value: '30 days' },
    { label: 'Commitment', value: 'Month 1 only' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">A marketing plan answers</p>
    <ul>
      <li><span>Who exactly do we sell to?</span> <b>ICP</b></li>
      <li><span>Why should they select us?</span> <b>Position</b></li>
      <li><span>What are we selling them?</span> <b>Packaging</b></li>
      <li><span>Where is the demand?</span> <b>Demand map</b></li>
      <li><span>How do we reach them?</span> <b>Channels</b></li>
      <li><span>How will we know it works?</span> <b>Measures</b></li>
    </ul>
    <p class="panel__foot">Most MSP marketing plans begin at the fifth row.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why most MSP marketing strategies fail before execution begins</h2>
      <p>An MSP marketing plan typically arrives as a schedule of activity: publish twice monthly, post to LinkedIn three times a week, run search advertising, attend the quarterly chamber event, issue a newsletter. It is a plan in that it describes work. It is not a strategy, because it contains no decision.</p>
      <p>Strategy is the determination of what will not be pursued. Which buyers are not being addressed, which services are not being led with, which markets are not being served. That is uncomfortable for a firm built on accepting whatever arrived, and it is also the only thing that makes the marketing function — because in a category where every provider lists the same capabilities, the sole available advantage is being demonstrably more suitable for a particular buyer.</p>

      <h3>The capability trap</h3>
      <p>Technically strong providers encounter this almost universally. The firm can deliver managed IT, cybersecurity, cloud migration, compliance, telephony, backup and advisory work, so it presents all of it. The buyer reads a list they are unequipped to evaluate, concludes the firm resembles the previous three they assessed, and asks the only question available to them: the cost per seat.</p>
      <p>Presenting everything is how a provider arrives at competing on price. Leading with one thing is how it stops.</p>

      <h3>The concentration that already exists</h3>
      <p>Nearly every provider we assess is already specialised and has not registered it. Nine of forty clients are dental practices. The strongest margin sits in the compliance-heavy accounts competitors decline. The fastest onboarding occurs on a platform the team happens to know unusually well. None of it appears on the website, because it accumulated rather than being chosen, and accumulation does not feel like strategy.</p>
      <p>That concentration is the most valuable input available — evidence of where the firm already wins, which is a considerably better foundation than selecting a vertical because it was described as lucrative at a conference.</p>

      <h3>Demand must be verified, not assumed</h3>
      <p>The external half matters equally. There is no value in building a strategy around a service nobody searches for, or a vertical containing four reachable prospects in the service area. Before any recommendation is made we map actual demand: what buyers in your market search, in what volume, who already ranks, and where the openings sit. That work is <a href="/process/#research">stage 02 of the process</a>.</p>
    </div>
    <div>
      ${callout({
        title: 'The sentence the plan resolves to',
        body: `<p>You are <strong>X</strong>, for <strong>Y</strong>, on the grounds of <strong>Z</strong> — stated without qualification.</p>
        <p>Where that sentence cannot be completed, no volume of search or outbound activity will improve the outcome. It will distribute the ambiguity more widely.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'What changes once it can be',
        body: `<ul class="tick-list">
          <li>Outbound earns replies because it is evidently not a broadcast</li>
          <li>Pages rank because they are not interchangeable</li>
          <li>Price ceases to be the opening question</li>
          <li>Referrals arrive better qualified and more specific</li>
          <li>The team knows which opportunities to decline</li>
        </ul>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Framework',
    title: 'The six decisions in an MSP marketing plan',
    intro: `Decisions one through four are made during Month 1. Five and six determine what Phase 2 executes.`,
  })}
  ${steps([
    {
      title: 'Ideal customer profile',
      body: `Not "20 to 200 seats within an hour". Sector, size band, geography, trigger events, and the characteristics of the clients retained longest at the strongest margin — derived from your own client data, then validated against market size.`,
    },
    {
      title: 'Positioning',
      body: `The defensible answer to why your firm rather than the provider three miles away. Built on something verifiable: a vertical you understand, a service depth you hold, a delivery model competitors do not offer, a response commitment you can meet.`,
    },
    {
      title: 'Service packaging',
      body: `What leads, what supports, what is deprioritised, and how the offer is structured and priced so a buyer can distinguish between tiers without requiring a discovery call.`,
      list: [
        'The lead offer and the problem it resolves',
        'Tier structure and what separates each',
        'Pricing model and how it is communicated',
        'Services that remain available but cease to be marketed',
      ],
    },
    {
      title: 'Demand map',
      body: `Search volume by service and location across your area, competitor positions, local result density, vertical demand, and a candid assessment of which terms are winnable within twelve months.`,
    },
    {
      title: 'Channel plan',
      body: `Which channels, sequenced by speed of return and rate of compounding. Typically outbound for near-term conversations, local search and reputation over the medium term, content and authority over the longer horizon.`,
    },
    {
      title: 'Measurement',
      body: `Leading indicators readable within weeks — reply rates, review velocity, indexed pages, local visibility — and the lagging measures that settle the question: booked meetings, opportunities created, revenue closed by source.`,
    },
  ])}`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'Deliverable',
    title: 'The strategy and the asset it is built into',
    intro: `A strategy document held in a shared drive has produced nothing. Month 1 concludes with the plan implemented as a working website.`,
  })}
  ${cards(
    [
      {
        kicker: 'Documented',
        title: 'The marketing plan',
        body: `ICP, positioning, packaging, demand map, channel sequence and measures — written so your team can execute it with or without us.`,
      },
      {
        kicker: 'Implemented',
        title: 'The website',
        body: `Architecture, copy and design expressing the positioning, structured against the demand map so the pages are capable of ranking.`,
      },
      {
        kicker: 'Optional',
        title: 'The execution',
        body: `<a href="/growth-engine/">Phase 2</a> operates the plan across inbound, outbound, reputation and content. A separate decision, made after delivery.`,
      },
    ],
    { columns: 3 },
  )}
  <div style="margin-top:2.5rem">
    ${keywordTable({
      rows: strategyCluster,
      totalLabel: 'Monthly searches',
      caption: 'What MSP owners search when the plan is the missing component.',
    })}
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Begin with the strategy, not the spend',
  body: 'A 30-minute call covering your services, your client concentrations and your market. You will receive a candid assessment of where your position most likely lies.',
})}

${relatedLinks([
  { href: '/process/', label: 'The process', body: 'How the strategy is built and implemented across Month 1.' },
  { href: '/msp-pricing-models/', label: 'MSP pricing models', body: 'Packaging and pricing — the component most providers avoid deciding.' },
  { href: '/msp-lead-generation/', label: 'MSP lead generation', body: 'What the strategy makes possible once execution begins.' },
])}
`

export default {
  path: '/msp-marketing-strategy/',
  title: 'MSP Marketing Strategy & Marketing Plan Framework',
  description:
    'Build an MSP marketing strategy from ICP, positioning and packaging — then a marketing plan mapped to verified search demand across your service area.',
  breadcrumbs: crumbs,
  priority: 0.9,
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
