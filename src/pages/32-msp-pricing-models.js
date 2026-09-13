import {
  hero, section, sectionHead, cards, faq, cta, callout,
  checklist, breadcrumbs, relatedLinks, keywordTable, quote,
} from '../components.js'

const crumbs = [
  { label: 'Resources', href: '/resources/' },
  { label: 'MSP Pricing Models', href: '/resources/msp-pricing-models/' },
]

const faqBlock = faq([
  {
    q: 'Should we publish our prices on the website?',
    a: `<p>You do not have to publish a rate card, but you should explain how pricing works. Buyers comparing three providers will choose the one that made the process feel predictable. Silence on price does not create mystique — it creates the suspicion that the answer depends on how much you think they can pay.</p>`,
  },
  {
    q: 'What is the most common MSP pricing model?',
    a: `<p>Per-user is the most common for standard managed services, because headcount is easier for a buyer to forecast than device count and it stops penalising the employee with a laptop, a phone and a tablet. Per-device persists in device-heavy environments like manufacturing and clinics, and tiered packaging usually sits on top of whichever unit is chosen.</p>`,
  },
  {
    q: 'How does pricing affect marketing?',
    a: `<p>More than most MSPs expect. Your pricing model determines which buyers you attract, which deals you lose and on what grounds, and how much of your sales cycle is spent explaining yourself. A confusing model forces a discovery call before anyone can evaluate you — which filters out serious buyers who were simply comparing options on a Tuesday afternoon.</p>`,
  },
  {
    q: 'Should we compete on price?',
    a: `<p>Only if you have a genuine structural cost advantage, which almost no $2–5M MSP does. Otherwise price competition is a race you win by becoming the provider that cannot afford to answer the phone. The alternative is positioning — being obviously more right for a specific buyer, which is what the <a href="/gtm-foundation/">GTM Foundation</a> is for.</p>`,
  },
  {
    q: 'How do we raise prices on existing clients?',
    a: `<p>Not a marketing question, but the answer is adjacent to one: it is far easier when your positioning has changed and the service has visibly changed with it. An annual adjustment tied to a genuine expansion of scope reads as a new agreement. An adjustment with no story attached reads as an increase, and that is the conversation nobody enjoys.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'Guide',
  title: 'MSP pricing models, and what each one does to your marketing',
  lede: `Per-user, per-device, tiered, à la carte, value-based. The commercial mechanics of each — and why refusing to discuss price anywhere on your website quietly costs you deals you never hear about.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/msp-marketing-strategy/', label: 'Packaging and positioning' },
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Pricing is a positioning decision</h2>
      <p>MSPs tend to treat pricing as a finance question — cover the cost, add a margin, check what the competition charges. But the model you choose does more marketing work than most of your marketing does. It decides which buyers self-select in, which objections you spend your sales cycle answering, and whether your offer is comparable to the provider down the road or deliberately not.</p>
      <p>That is why packaging and pricing are part of go-to-market work here rather than something handled separately. A sharp position with a confusing price list still loses.</p>
      ${quote({ text: `Your pricing model is the first thing a buyer can actually compare. Make sure it compares in your favour.` })}
    </div>
    <div>
      ${callout({
        title: 'The 30-searches-a-month page',
        body: `<p><em>msp pricing models</em> gets about 30 searches a month at a $63.40 cost per click — MSP owners researching how to structure their own offer.</p>
        <p>Your buyers do not search this. They search "how much does managed IT cost" and variations. Both pages are worth having; they are for completely different people. <a href="/resources/msp-keyword-research/">Why that distinction matters &rarr;</a></p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The models',
    title: 'Five ways MSPs price, and how each behaves',
  })}
  ${cards([
    {
      kicker: 'Most common',
      title: 'Per user',
      body: `A flat monthly rate per employee, covering their devices. Easy for a buyer to forecast against headcount, and it stops punishing the person with a laptop, a phone and a tablet.`,
      list: [
        'Strong: predictable, scales with the client, simple to quote',
        'Weak: unprofitable in device-heavy or shift-work environments',
        'Attracts: buyers who want a budget line they can defend internally',
      ],
    },
    {
      kicker: 'Traditional',
      title: 'Per device',
      body: `Priced per endpoint, server and network device. Closest to your actual cost to serve, which is why it survives in device-heavy verticals.`,
      list: [
        'Strong: tracks cost honestly, fair in mixed environments',
        'Weak: penalises modern multi-device users, harder to forecast',
        'Attracts: manufacturing, clinics, anywhere devices outnumber people',
      ],
    },
    {
      kicker: 'Packaging',
      title: 'Tiered',
      body: `Good / better / best on top of a per-user or per-device unit. The packaging layer most MSPs should have and many do not.`,
      list: [
        'Strong: creates an upgrade path and anchors the middle tier',
        'Weak: meaningless if the tiers differ only in response-time promises',
        'Attracts: buyers who want to feel they chose rather than were quoted',
      ],
    },
    {
      kicker: 'Flexible',
      title: 'À la carte',
      body: `A base agreement plus separately priced services — backup, security stack, compliance, projects, vCIO.`,
      list: [
        'Strong: lets a price-sensitive buyer start somewhere',
        'Weak: complicated quotes, scope disputes, uneven margin',
        'Attracts: buyers optimising line items, which is rarely who you want',
      ],
    },
    {
      kicker: 'Advanced',
      title: 'Value-based',
      body: `Priced against the outcome — uptime guarantees, compliance posture, risk transfer — rather than against units consumed.`,
      list: [
        'Strong: escapes per-seat comparison entirely, best margin available',
        'Weak: requires genuine specialisation and proof to defend',
        'Attracts: regulated and risk-aware buyers who are not shopping on price',
      ],
    },
    {
      kicker: 'Everywhere',
      title: 'Project and co-managed work',
      body: `Sits alongside whichever model you choose. Co-managed is increasingly where the growth is for MSPs serving larger clients with an internal IT person.`,
      list: [
        'Strong: opens accounts too big to fully outsource',
        'Weak: scope boundaries must be explicit or margin disappears',
        'Attracts: 100+ seat organisations with one overloaded IT manager',
      ],
    },
  ])}`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>What to put on the website</h2>
      <p>The reflex is to say nothing and route everything to a discovery call. It is understandable — pricing depends on environment, and you do not want to be compared on a number out of context.</p>
      <p>But consider what actually happens. A buyer with a real problem compares four providers on a Tuesday afternoon. Three say "contact us for a quote." One explains how their pricing works, what drives it up or down, and roughly where a company of that size lands. That fourth one gets the call — not because they were cheapest, but because they were the only one who made the buyer feel like the process would be straightforward.</p>
      <p>You do not need to publish a rate card. You need to remove the fear that asking will start something.</p>
      <h3>A pricing page that works</h3>
      ${checklist(
        [
          'Explain the model you use and why you chose it',
          'Name the variables that move the number — seats, sites, compliance scope, after-hours',
          'Give a range or a starting point, even a wide one',
          'Say what is always included, so tiers are not a guessing game',
          'Explain onboarding: cost, duration, what it involves',
          'Say what happens when they leave — it defuses the biggest switching fear',
          'Make the next step small: a question, not a commitment',
        ],
        { columns: 1 },
      )}
    </div>
    <div>
      ${callout({
        tone: 'success',
        title: 'The competitive reality',
        body: `<p>In most metros, no local MSP has a useful pricing page. It is one of the few genuinely open positions left — high commercial intent, almost no competition, and it improves close rate on every other channel that feeds it.</p>`,
      })}
      ${callout({
        tone: 'warn',
        title: 'What not to do',
        body: `<p>Do not publish a number you will not honour, and do not build a "pricing" page that only says pricing is customised. A buyer who clicks pricing and learns nothing has been told something — that the answer depends on them.</p>`,
      })}
      ${keywordTable({
        rows: [{ keyword: 'msp pricing models', volume: 30, cpc: 63.4 }],
        showCpc: true,
        caption: 'The term this page targets.',
      })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Packaging is half the positioning',
  body: 'Deciding what you sell, in what tiers, at what price, is part of the GTM Foundation — because a sharp position with a confusing price list still loses deals.',
  secondaryLabel: 'See the GTM Foundation',
  secondaryHref: '/gtm-foundation/',
})}

${relatedLinks([
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'Where packaging and pricing decisions get made.' },
  { href: '/resources/msp-keyword-research/', label: 'MSP keyword research', body: 'The demand data behind every page recommendation here.' },
  { href: '/msp-website-design/', label: 'MSP website design', body: 'Building the pricing page — and the rest of the site around it.' },
])}
`

export default {
  path: '/resources/msp-pricing-models/',
  title: 'MSP Pricing Models Explained | Per-User vs Per-Device',
  description:
    'MSP pricing models compared: per-user, per-device, tiered, à la carte and value-based — how each shapes which buyers you attract and what to publish.',
  breadcrumbs: crumbs,
  priority: 0.6,
  schemaType: 'Article',
  schema: [faqBlock.schema],
  body,
}
