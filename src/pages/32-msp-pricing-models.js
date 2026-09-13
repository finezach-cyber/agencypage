import {
  hero, section, sectionHead, cards, faq, cta, callout,
  checklist, breadcrumbs, relatedLinks, keywordTable,
} from '../components.js'
import { pricingCluster } from '../data/keywords.js'

const crumbs = [{ label: 'MSP Pricing Models', href: '/msp-pricing-models/' }]

const faqBlock = faq([
  {
    q: 'Should we publish prices on the website?',
    a: `<p>A rate card is not required, but an explanation of how pricing works is. A buyer comparing three providers will favour the one that made the process feel predictable. Silence on price does not create latitude; it creates the suspicion that the figure depends on what the buyer appears able to pay.</p>`,
  },
  {
    q: 'What is the most common MSP pricing model?',
    a: `<p>Per-user is the most common for standard managed services, because headcount is easier for a buyer to forecast than device count and it does not penalise the employee carrying a laptop, a phone and a tablet. Per-device persists in device-dense environments such as manufacturing and clinical settings, and tiered packaging generally sits above whichever unit is selected.</p>`,
  },
  {
    q: 'How does pricing affect marketing?',
    a: `<p>More than most providers anticipate. The model determines which buyers you attract, on what grounds deals are lost, and how much of the sales cycle is spent explaining the structure. A model requiring a discovery call before it can be understood filters out serious buyers conducting a comparison on a Tuesday afternoon.</p>`,
  },
  {
    q: 'Should we compete on price?',
    a: `<p>Only with a genuine structural cost advantage, which few providers at this size possess. Absent that, price competition is won by becoming the firm that can no longer afford to answer the phone. The alternative is positioning — being demonstrably more suitable for a defined buyer, which is what <a href="/process/#positioning">stage 03</a> establishes.</p>`,
  },
  {
    q: 'How do we raise prices on existing clients?',
    a: `<p>Not strictly a marketing question, though the answer is adjacent to one: it is considerably easier when the position has changed and the service has visibly changed with it. An adjustment accompanied by a genuine expansion of scope reads as a new agreement. An adjustment with no accompanying change reads as an increase.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'Guide',
  title: 'MSP pricing models, and what each one does to your marketing',
  lede: `For MSPs and IT services companies: per-user, per-device, tiered, à la carte and value-based. The commercial mechanics of each, which buyers each attracts, and why declining to address price anywhere on your website costs deals you never hear about.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/msp-marketing-strategy/', label: 'Packaging and positioning' },
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Pricing is a positioning decision</h2>
      <p>MSPs and IT services firms tend to treat pricing as a finance exercise: establish the cost to serve, apply a margin, check it against the local competition. But the model selected performs more marketing work than most marketing does. It determines which buyers select themselves in, which objections occupy the sales cycle, and whether the offer is directly comparable to the provider three miles away or deliberately not.</p>
      <p>This is why packaging and pricing are settled during <a href="/process/#positioning">Month 1</a> rather than handled separately. A precise position accompanied by an opaque price structure still loses.</p>
    </div>
    <div>
      ${callout({
        title: 'Two different audiences',
        body: `<p><em>msp pricing models</em> returns approximately 30 searches a month at $63.40 per click — MSP owners researching how to structure their own offer.</p>
        <p>Your buyers do not search this term. They search for the cost of managed IT support and its variants. Both pages are worth publishing; they address entirely different readers, and conflating them is a common and costly error.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({ eyebrow: 'The models', title: 'Five structures, and how each behaves commercially' })}
  ${cards([
    {
      kicker: 'Most common',
      title: 'Per user',
      body: `A fixed monthly rate per employee covering their devices. Straightforward for a buyer to forecast against headcount, and it does not penalise multi-device users.`,
      list: [
        'Strengths: predictable, scales with the client, simple to quote',
        'Weaknesses: unprofitable in device-dense or shift-based environments',
        'Attracts: buyers requiring a budget line they can defend internally',
      ],
    },
    {
      kicker: 'Traditional',
      title: 'Per device',
      body: `Priced per endpoint, server and network device. The closest approximation to actual cost to serve, which is why it persists in device-dense sectors.`,
      list: [
        'Strengths: tracks cost honestly, equitable in mixed estates',
        'Weaknesses: penalises modern multi-device users, harder to forecast',
        'Attracts: manufacturing, clinical settings, device-heavy operations',
      ],
    },
    {
      kicker: 'Packaging',
      title: 'Tiered',
      body: `Three levels applied above a per-user or per-device unit. The packaging layer most providers should operate and many do not.`,
      list: [
        'Strengths: establishes an upgrade path and anchors the middle tier',
        'Weaknesses: meaningless where tiers differ only in response-time commitments',
        'Attracts: buyers who prefer to select rather than be quoted',
      ],
    },
    {
      kicker: 'Flexible',
      title: 'À la carte',
      body: `A base agreement with separately priced services: backup, security stack, compliance, projects, advisory.`,
      list: [
        'Strengths: allows a price-sensitive buyer to begin somewhere',
        'Weaknesses: complex quotes, scope disputes, inconsistent margin',
        'Attracts: buyers optimising line items, rarely the clients you want',
      ],
    },
    {
      kicker: 'Advanced',
      title: 'Value-based',
      body: `Priced against outcomes — availability commitments, compliance posture, risk transfer — rather than units consumed.`,
      list: [
        'Strengths: escapes per-seat comparison, strongest available margin',
        'Weaknesses: requires genuine specialisation and evidence to defend',
        'Attracts: regulated and risk-aware buyers not shopping on price',
      ],
    },
    {
      kicker: 'Alongside',
      title: 'Project and co-managed work',
      body: `Operates above whichever model is selected. Co-managed is increasingly where growth sits for providers serving larger organisations with internal IT staff.`,
      list: [
        'Strengths: opens accounts too large to outsource entirely',
        'Weaknesses: scope boundaries must be explicit or margin erodes',
        'Attracts: 100+ seat organisations with one overextended IT manager',
      ],
    },
  ])}`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>What belongs on the website</h2>
      <p>The instinct is to publish nothing and route every enquiry to a discovery call. It is understandable: pricing depends on the environment, and no provider wants to be compared on a figure presented without context.</p>
      <p>Consider what occurs in practice. A buyer with a live problem evaluates four providers on a Tuesday afternoon. Three state that pricing is available on request. The fourth explains the model, the variables that move it, and approximately where an organisation of that size lands. The fourth receives the call — not because it is cheapest, but because it was the only firm that made the process appear straightforward.</p>
      <p>A rate card is not required. Removing the apprehension that asking initiates something is.</p>
      <h3>Pricing for IT services companies versus managed services</h3>
      <p>The models above describe recurring agreements. An IT services company selling projects, migrations or assessments prices differently: by scope, by phase or by outcome rather than per seat or per device. The commercial logic still holds — a buyer who can anticipate the structure proceeds, and one who cannot asks for the cheapest version — but the published explanation differs.</p>
      <p>For project work the useful disclosure is the shape of an engagement rather than a rate: what a typical scope includes, what moves the figure, roughly what a firm of that size spends, and what happens when the scope changes mid-engagement. That last point closes more deals than a discount, because unmanaged scope change is the outcome buyers of project work most expect and most fear.</p>
      <p>Firms selling both — an ongoing agreement alongside project work — need each explained separately. Combining them produces a page that reads as evasive about both.</p>

      <h3>What an effective pricing page contains</h3>
      ${checklist(
        [
          'The model in use and the reasoning behind it',
          'The variables that move the figure: seats, sites, compliance scope, after-hours cover',
          'A range or starting point, however broad',
          'What is always included, so tiers are not a matter of inference',
          'Onboarding: cost, duration and what it involves',
          'What occurs at the end of the agreement, which defuses the principal switching concern',
          'A small next step: a question, not a commitment',
        ],
        { columns: 1 },
      )}
    </div>
    <div>
      ${callout({
        tone: 'success',
        title: 'The competitive position',
        body: `<p>In most metropolitan markets no local provider maintains a useful pricing page. It is among the few genuinely open positions remaining: high commercial intent, minimal competition, and it improves close rate across every channel that feeds it.</p>`,
      })}
      ${callout({
        tone: 'warn',
        title: 'What to avoid',
        body: `<p>Do not publish a figure you will not honour, and do not build a pricing page whose only content is that pricing is bespoke. A buyer who selects "pricing" and learns nothing has been told something — that the answer depends on them.</p>`,
      })}
      ${keywordTable({ rows: pricingCluster, caption: 'The term this page targets.' })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Packaging is half of the positioning',
  body: 'Determining what you sell, in what tiers, at what price is settled during Month 1 — because a precise position with an opaque price structure still loses deals.',
  secondaryLabel: 'See the process',
  secondaryHref: '/process/',
})}

${relatedLinks([
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'Where packaging and pricing decisions are made.' },
  { href: '/process/#positioning', label: 'Positioning and offer design', body: 'Stage 03 of the engagement, in detail.' },
  { href: '/msp-marketing-services/', label: 'MSP marketing services', body: 'The full scope delivered across both phases.' },
])}
`

export default {
  path: '/msp-pricing-models/',
  title: 'MSP Pricing Models Explained | Per-User vs Per-Device',
  description:
    'MSP pricing models compared: per-user, per-device, tiered, à la carte and value-based — how each shapes which buyers you attract and what to publish.',
  breadcrumbs: crumbs,
  priority: 0.6,
  schemaType: 'Article',
  schema: [faqBlock.schema],
  body,
}
