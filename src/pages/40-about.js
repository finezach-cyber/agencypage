import { hero, section, sectionHead, cards, cta, callout, checklist, breadcrumbs, quote, relatedLinks } from '../components.js'

const body = `
${breadcrumbs([{ label: 'About', href: '/about/' }])}

${hero({
  eyebrow: 'About us',
  title: 'We only work with managed service providers',
  lede: `Specialisation is not a positioning line we borrowed from our own advice. It is the reason the work compounds — every engagement teaches us something the next one starts with.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/gtm-foundation/', label: 'How we work' },
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why we narrowed to MSPs</h2>
      <p>A generalist agency starts every client from zero. New industry, new buyer, new vocabulary, new competitive set — and a learning curve the client pays for. We did that for long enough to notice the pattern was more valuable than the hours.</p>
      <p>Managed services turned out to be an unusually good market to specialise in, for a reason that is slightly uncomfortable to say out loud: MSPs are, almost without exception, technically excellent and commercially generic. They can genuinely solve problems their buyers cannot evaluate, and they describe that capability in the same four bullet points as every competitor.</p>
      <p>That gap between real capability and its expression is the most fixable problem in marketing. It is also the one where a focused agency has an enormous advantage over a generalist, because the answer is never "post more" — it is "decide what you are."</p>

      <h2>What we accumulate</h2>
      <p>Working only in this market means every engagement adds to a picture a generalist never builds: which MSP services have real search demand, which verticals convert and which just sound lucrative, which offers land with a 60-seat manufacturer versus a 15-seat dental practice, which website structures produce calls, which outbound messages get replies rather than unsubscribes, which reputation strategies move the map pack.</p>
      <p>You are buying that pattern alongside the execution. It is the reason we can tell you in the first month that a vertical you are excited about has four reachable prospects in your service area — before you spend a year finding out.</p>

      <h2>How we work</h2>
      <p>Foundation first, always. We will not sell an execution retainer to an MSP with no positioning, because amplifying a generic message is the most reliable way to waste a marketing budget and then conclude that marketing does not work.</p>
      <p>One client per metro. Ranking two clients for the same local term means one of them paid us to lose.</p>
      <p>And we do the work ourselves. There is no account-manager layer between you and the people executing, which is also why we cap how many MSPs we take on at once.</p>
    </div>
    <div>
      ${quote({ text: `MSPs are technically excellent and commercially generic. That gap is the most fixable problem in marketing.` })}
      ${callout({
        title: 'The progression we are building toward',
        body: `<p>$2–5M MSP &rarr; help them reach $10M &rarr; repeat the playbook.</p>
        <p>That is a more defensible business than being another generalist agency, and it means our incentives point at your growth rather than at your retainer.</p>`,
      })}
      ${callout({
        tone: 'success',
        title: 'How we say no',
        body: `<p>We turn down MSPs whose metro is taken, who need leads before they have capacity to serve them, and who want to stay generalists. It is a short call and an honest one.</p>`,
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
        title: 'We will tell you when SEO is the wrong bet',
        body: `If you need conversations this quarter, search alone will not do it. We will say so, and we will sequence outbound first rather than sell you a channel that pays out in month six.`,
      },
      {
        title: 'We will not promise lead volumes we cannot model',
        body: `Before we forecast anything we size your addressable market. A number invented to win the deal is a number that loses the client in month four.`,
      },
      {
        title: 'We will not sell you shared leads',
        body: `Everything is generated for you, against your ICP, on your positioning. Leads sold to three MSPs at once put you straight back into a price comparison.`,
      },
      {
        title: 'We will not build forty thin location pages',
        body: `It used to work. Now it is the clearest thin-content signal there is, and it can suppress the pages that would have ranked on their own.`,
      },
      {
        title: 'We report on pipeline, not impressions',
        body: `Booked calls, opportunities and closed revenue by source. If a metric cannot be connected to pipeline, it does not lead the report.`,
      },
      {
        title: 'You own everything',
        body: `Site, domain, copy, analytics, research. No proprietary platform, no lock-in, nothing that stops working the day you leave.`,
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
          'Managed service providers doing roughly $2–5M annually',
          'Growth today mostly from referrals and word of mouth',
          'Real technical strengths that have never been marketed',
          'Capacity to onboard new clients when they arrive',
          'An owner willing to narrow the message to win a segment',
          'A metro we are not already working in',
        ],
        { columns: 1 },
      )}
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not a fit', title: 'Who we are not for' })}
      ${checklist(
        [
          'Sub-$1M MSPs — you need sales activity before marketing infrastructure',
          'MSPs above roughly $10M with an internal marketing team',
          'Anyone wanting leads next week with no foundation',
          'Anyone shopping for the cheapest per-blog-post rate',
          'Anyone unwilling to be specific about who they serve',
        ],
        { columns: 1 },
      )}
    </div>
  </div>`,
})}

${cta({
  title: 'A short call tells us both whether this fits',
  body: 'Thirty minutes, no deck. We will look at your services, your client base and your market — and if it is not a fit, we will say so on that call.',
})}

${relatedLinks([
  { href: '/gtm-foundation/', label: 'GTM Foundation', body: 'What the first month looks like in detail.' },
  { href: '/growth-engine/', label: 'Growth Engine', body: 'The ongoing execution engagement.' },
  { href: '/resources/msp-keyword-research/', label: 'MSP keyword research', body: 'A sample of how we analyse a market before recommending anything.' },
])}
`

export default {
  path: '/about/',
  title: 'About Us | An Agency That Only Works With MSPs',
  description:
    'We are a marketing agency working exclusively with managed service providers doing $2–5M. How we work, what we will not do, and who we are a fit for.',
  breadcrumbs: [{ label: 'About', href: '/about/' }],
  priority: 0.6,
  schemaType: 'AboutPage',
  body,
}
