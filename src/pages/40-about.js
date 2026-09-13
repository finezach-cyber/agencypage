import { hero, section, sectionHead, cards, cta, callout, checklist, breadcrumbs, quote, relatedLinks } from '../components.js'

const body = `
${breadcrumbs([{ label: 'About', href: '/about/' }])}

${hero({
  eyebrow: 'About us',
  title: 'We only work with MSPs and IT services companies',
  lede: `Specialisation is not a line borrowed from our own advice. It is the mechanism by which the work compounds: every engagement produces evidence the next one begins with.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why we narrowed to this category</h2>
      <p>A generalist agency begins every engagement from zero: a new sector, a new buyer, an unfamiliar vocabulary and a new competitive set, with a learning curve the client funds. We operated that way long enough to observe that the accumulated pattern was worth more than the hours.</p>
      <p>Managed services and IT services proved an unusually suitable category to specialise in, for a reason worth stating plainly: firms in this market are, with few exceptions, technically excellent and commercially generic. They resolve problems their buyers are unequipped to evaluate, and they describe that capability in the same four bullet points as every competitor.</p>
      <p>The distance between genuine capability and its expression is the most correctable problem in marketing, and the one where a focused firm holds the greatest advantage over a generalist — because the remedy is never to publish more. It is to determine what the firm is.</p>

      <h2>What the specialisation produces</h2>
      <p>Working in a single category means every engagement contributes to a body of evidence a generalist never assembles: which services carry verified search demand, which verticals convert and which merely sound lucrative, which offers land with a 60-seat manufacturer as against a 15-seat dental practice, which site structures produce enquiries, which outbound messages earn replies rather than unsubscribes, and which reputation strategies move local rankings.</p>
      <p>That pattern forms part of what the engagement provides. It is why we can establish within the first month that a vertical you are enthusiastic about contains four reachable prospects in your service area, rather than your discovering it over a year.</p>

      <h2>How we work</h2>
      <p>Foundation first, without exception. We do not sell an execution retainer to a provider with no established position, because amplifying a generic message is the most dependable way to expend a marketing budget and then conclude that marketing does not work in this category.</p>
      <p>And we perform the work ourselves. There is no account-management layer between you and the people executing it, which is also why the number of concurrent engagements is capped.</p>
    </div>
    <div>
      ${quote({ text: `Providers in this category are technically excellent and commercially generic. That distance is the most correctable problem in marketing.` })}
      ${callout({
        title: 'The progression we are building toward',
        body: `<p>A $2–5M provider, supported to $10M, with the method repeated.</p>
        <p>It is a more defensible business than generalist agency work, and it aligns our incentive with your growth rather than with the duration of a retainer.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'How we say no',
        body: `<p>We decline firms that require enquiries before they have the capacity to service them, and firms unwilling to lead with a defined offer. It is a brief conversation and a candid one.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({ eyebrow: 'Principles', title: 'What we will and will not do' })}
  ${cards(
    [
      {
        title: 'We will say when search is the wrong channel',
        body: `Where conversations are required this quarter, search alone will not deliver them. We will state that, and sequence outbound first, rather than sell a channel that returns in month six.`,
      },
      {
        title: 'We do not forecast volumes we cannot model',
        body: `No projection is offered before the addressable market has been sized. A figure invented to win the engagement is a figure that loses the client in month four.`,
      },
      {
        title: 'We do not resell shared leads',
        body: `Every conversation is generated for you, against your ICP and your positioning. A lead sold to three providers simultaneously returns you directly to a price comparison.`,
      },
      {
        title: 'We do not publish forty thin location pages',
        body: `The tactic previously worked. It is now a reliable thin-content signal and frequently suppresses the pages that would have ranked on their own merits.`,
      },
      {
        title: 'We report pipeline, not impressions',
        body: `Booked meetings, opportunities created and revenue closed by source. A metric that cannot be connected to pipeline does not lead the report.`,
      },
      {
        title: 'You own the output',
        body: `Website, domain, copy, analytics and research. No proprietary platform, no licence, and nothing that ceases to function on the day you leave.`,
      },
    ],
    { columns: 3 },
  )}`,
})}

${section({
  inner: `
  <div class="split">
    <div>
      ${sectionHead({ eyebrow: 'Fit', title: 'Who we work with' })}
      ${checklist(
        [
          'MSPs, IT services companies and IT support firms at roughly $2–5M',
          'Growth presently dependent on referral',
          'Technical strengths that have never been marketed',
          'Capacity to onboard new clients on arrival',
          'A principal willing to lead with a defined offer',
        ],
        { columns: 1 },
      )}
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not a fit', title: 'Who we are not for' })}
      ${checklist(
        [
          'Providers below $1M, who require sales activity before marketing infrastructure',
          'Providers above roughly $10M with an internal marketing function',
          'Any firm requiring enquiries within the month, with no foundation in place',
          'Any firm procuring on lowest cost per deliverable',
          'Any firm unwilling to be specific about who it serves',
        ],
        { columns: 1 },
      )}
    </div>
  </div>`,
})}

${cta({
  title: 'One call establishes whether this is a fit',
  body: 'Thirty minutes, without a presentation. We review your services, your client base and your market — and if the engagement is not a fit, we will say so on that call.',
})}

${relatedLinks([
  { href: '/process/', label: 'The process', body: 'Every stage of the engagement, with deliverables stated.' },
  { href: '/gtm-foundation/', label: 'Phase 1 — GTM Foundation', body: 'The Month 1 engagement in detail.' },
  { href: '/growth-engine/', label: 'Phase 2 — Growth Engine', body: 'Optional execution against the opportunities identified.' },
])}
`

export default {
  path: '/about/',
  title: 'About | Marketing for MSPs & IT Services Companies',
  description:
    'A marketing firm working exclusively with MSPs and IT services companies at $2–5M. How we work, what we decline to do, and who we are a fit for.',
  breadcrumbs: [{ label: 'About', href: '/about/' }],
  priority: 0.6,
  schemaType: 'AboutPage',
  body,
}
