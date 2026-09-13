import {
  hero, section, sectionHead, cards, steps, keywordTable, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, serviceSchema, quote,
} from '../components.js'
import { leadGenCluster } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/services/' },
  { label: 'MSP Lead Generation', href: '/msp-lead-generation/' },
]

const faqBlock = faq([
  {
    q: 'Do you sell MSP leads?',
    a: `<p>No. We do not sell lists, we do not sell shared leads, and we do not sell appointments sourced from a pool that three other MSPs also bought. Everything we generate is generated for you, against an ICP we defined with you, using messaging built on your positioning. A purchased lead has no relationship to you and no reason to take your call.</p>`,
  },
  {
    q: 'How many leads should we expect per month?',
    a: `<p>We will not give you a number before we have seen your market, your ICP size, your service area and your offer — anyone who does is guessing to win the deal. What we will do in the first month is size the addressable list, so you know exactly how many accounts exist that match your ICP. That number, plus realistic reply and conversion rates, is a forecast you can actually hold us to.</p>`,
  },
  {
    q: 'What counts as a qualified lead?',
    a: `<p>We define it with you before we start, and it is usually: a company inside your service area, in your target size band, matching your ICP criteria, that has agreed to a scheduled conversation. Not a form fill. Not a content download. Not a LinkedIn connection. If the definition is loose, the reporting is meaningless.</p>`,
  },
  {
    q: 'Is outbound still effective for managed services?',
    a: `<p>Generic outbound is not. "Are you happy with your current IT provider?" gets ignored because every MSP in the country sends it. Outbound that references a specific trigger — a compliance deadline in their industry, a vertical-specific workflow problem, an acquisition, a hiring pattern that signals growth — still works, because it is evidently not a blast. The difference is the research, which is why we do positioning before outreach.</p>`,
  },
  {
    q: 'How fast does lead generation start producing?',
    a: `<p>Outbound produces conversations fastest — typically the first meaningful replies land within three to six weeks of sequences going live, once list building and warmup are done. Inbound takes longer: see the honest timeline on our <a href="/msp-seo/">MSP SEO page</a>. We run both because one funds your patience for the other.</p>`,
  },
  {
    q: 'Will you use our CRM?',
    a: `<p>Yes, and if it is a mess we will clean it up first — that is part of the growth infrastructure work in the <a href="/growth-engine/">Growth Engine</a>. Leads that land in an inbox instead of a pipeline stage do not get worked, and then the channel gets blamed.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP lead generation',
  title: 'Lead generation for MSPs that produces conversations, not form fills',
  lede: `Inbound and outbound working the same ICP, telling the same story. We build the target list, write the messaging off your positioning, and run the sequences — while search compounds underneath.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/growth-engine/', label: 'See the full engine' },
  stats: [
    { label: 'Channels', value: 'In + outbound' },
    { label: 'Lists', value: 'Built, not bought' },
    { label: 'Measured on', value: 'Booked calls' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Why most MSP lead gen fails</p>
    <ul>
      <li><span>Bought lists with no ICP behind them</span> <b>1</b></li>
      <li><span>"Happy with your IT provider?" emails</span> <b>2</b></li>
      <li><span>Leads that land nowhere in the CRM</span> <b>3</b></li>
      <li><span>A website that cannot close the traffic</span> <b>4</b></li>
      <li><span>No follow-up after the first no-reply</span> <b>5</b></li>
    </ul>
    <p class="panel__foot">Every one of these is a fixable process problem, not a channel problem.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why MSP lead generation usually disappoints</h2>
      <p>Most MSPs have tried it. They bought a list, ran a sequence, got a handful of replies — half of them unsubscribes — and concluded outbound does not work for managed services. Or they hired an agency that delivered "leads" that turned out to be content downloads from people in other states.</p>
      <p>The channel is rarely the problem. Four things underneath it usually are.</p>

      <h3>You are selling to a market you have not defined</h3>
      <p>"Businesses with 20–200 seats within an hour's drive" is a geography, not an ICP. It does not tell you what to say. An ICP is a segment where you can articulate why <em>you specifically</em> are the right provider — an industry whose compliance regime you already handle, a stack you have unusual depth in, a size band where your onboarding is genuinely better. Until that exists, every message defaults to "we do IT and we care about service."</p>

      <h3>Your message is the same as everyone else's</h3>
      <p>The average MSP prospect gets multiple versions of the same email every month. Responsive support, proactive monitoring, strategic partner, free network assessment. It is not that the offer is bad; it is that it is indistinguishable, and indistinguishable mail gets deleted without being read.</p>

      <h3>Inbound and outbound are run as separate projects</h3>
      <p>A prospect gets your email, looks you up, and lands on a website that describes a different, more generic company than the one that just emailed them about their industry's compliance problem. The disconnect is enough to kill the deal quietly. When the same positioning drives both, the outbound email makes the website more credible and the website makes the email more credible.</p>

      <h3>Nothing happens after the lead arrives</h3>
      <p>Leads land in a shared inbox. Nobody owns the follow-up. The one who does get a call has a great conversation and then hears nothing for three weeks. We have seen engagements where fixing routing and follow-up produced more closed business than adding any new channel would have.</p>
    </div>
    <div>
      ${callout({
        tone: 'warn',
        title: 'On buying MSP leads',
        body: `<p>Shared-lead services sell the same prospect to several MSPs. You are then competing on response speed and price with providers the buyer sees as interchangeable — which is the exact position good positioning is meant to get you out of.</p>
        <p>It can produce volume. It rarely produces the kind of client you wanted.</p>`,
      })}
      ${quote({
        text: `If your outbound email would still make sense with a competitor's logo pasted on it, it is not going to work.`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The approach',
    title: 'Two engines, one story',
    intro: `Inbound and outbound are not separate campaigns here. They target the same ICP with the same positioning, and each one makes the other work harder.`,
  })}
  ${cards(
    [
      {
        kicker: 'Inbound',
        title: 'Get found by people already looking',
        body: `There are 40,970 searches a month from businesses actively trying to hire an MSP. Inbound captures the ones in your service area — through local search, service and vertical pages, reviews, and a website built to convert the traffic it earns.`,
        list: [
          'Local SEO and Google Business Profile',
          'Service, location and vertical landing pages',
          'Review generation that feeds the map pack',
          'Conversion optimisation on the pages that already get traffic',
        ],
        href: '/msp-seo/',
        linkLabel: 'How we do MSP SEO',
      },
      {
        kicker: 'Outbound',
        title: 'Start conversations with accounts that fit',
        body: `Search only reaches people already in market. Outbound reaches the accounts you want before they start looking — which, for a service with multi-year contracts, is most of them.`,
        list: [
          'ICP definition and addressable market sizing',
          'Prospect list building and verification',
          'Email sequences built on trigger events',
          'LinkedIn touches that are not automation spam',
          'Follow-up cadences and appointment setting',
        ],
        href: '/growth-engine/',
        linkLabel: 'See the outbound scope',
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Process',
    title: 'How we build the lead generation engine',
  })}
  ${steps([
    {
      title: 'Define the ICP and size the market',
      body: `Which industries, which size band, which geography, which triggers. Then we count it — the actual number of addressable accounts. That number sets realistic expectations before anyone promises you a lead volume.`,
      list: [
        'Analysis of your existing client base for hidden concentrations',
        'Margin and retention by segment, not just revenue',
        'Competitive density per segment',
      ],
    },
    {
      title: 'Build the list',
      body: `Firmographic filtering, verification, deduplication against your CRM, and enrichment with the signals that make a message specific — stack, headcount trend, compliance exposure, recent moves.`,
    },
    {
      title: 'Write the messaging',
      body: `Off your positioning, not off a template. Different sequences for different segments, because the reason a dental practice switches providers is not the reason a manufacturer does.`,
    },
    {
      title: 'Run, follow up, and route',
      body: `Sequences go live with proper domain warmup and sending hygiene. Replies get worked. Interested accounts get booked. Everything lands in your CRM in a stage with an owner, not in an inbox.`,
    },
    {
      title: 'Read the data and adjust',
      body: `Reply rate by segment, by message, by trigger. Booked-call rate. Show rate. Close rate by source. Within a couple of months the data tells you which segment is genuinely your best market — and that often changes the strategy.`,
    },
  ])}`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'Search demand',
    title: 'What MSP owners search when they go looking for this',
    intro: `If you found this page through one of these, the data is worth seeing — it is the same kind of analysis we run on your market, just pointed at ours.`,
  })}
  <div class="split">
    <div>${keywordTable({ rows: leadGenCluster, totalLabel: 'Total monthly searches' })}</div>
    <div class="stack">
      <p>Note the cost per click. <em>msp lead generation</em> runs $66.96 a click and <em>msp lead generation services</em> $61.67. Agencies pay that because an MSP retainer is worth it.</p>
      <p>We would rather rank than rent — and the same logic applies to your market, where the clicks cost $28 to $98.</p>
      <p><a href="/resources/msp-keyword-research/">See the full demand map for MSP buyers &rarr;</a></p>
    </div>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'What you get',
        title: 'Included in the lead generation scope',
      })}
      ${checklist([
        'ICP definition and addressable market sizing',
        'Prospect list building, verification and enrichment',
        'CRM deduplication and hygiene',
        'Email sequence copy by segment',
        'Sending infrastructure, domain warmup and deliverability',
        'LinkedIn outreach and connection cadences',
        'Inbound landing pages and conversion paths',
        'Lead routing, forms and notification rules',
        'Appointment setting and calendar handoff',
        'Follow-up cadences for non-responders',
        'Source attribution and pipeline reporting',
        'Monthly review against booked calls, not clicks',
      ])}
    </div>
    <div>
      ${callout({
        tone: 'success',
        title: 'What we need from you',
        body: `<ul class="tick-list">
          <li>Someone who can take a sales call within 24 hours of a booking</li>
          <li>Access to your CRM and existing client data</li>
          <li>An hour a week, mostly in the first month</li>
          <li>Willingness to say no to segments that are not worth serving</li>
        </ul>
        <p>Lead generation fails more often from slow follow-up on the client side than from anything that happens in the campaign.</p>`,
      })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Find out how many accounts actually match your ICP',
  body: 'On a 30-minute call we will define your ideal customer profile and size the addressable market in your service area. You will leave with a real number whether or not we work together.',
})}

${relatedLinks([
  { href: '/msp-seo/', label: 'SEO for MSPs', body: 'The inbound half — how we capture buyers already searching for a provider.' },
  { href: '/msp-website-design/', label: 'MSP website design', body: 'Where every lead lands. If it does not convert, nothing upstream matters.' },
  { href: '/gtm-foundation/', label: 'GTM Foundation', body: 'The positioning work that makes outbound messaging worth reading.' },
])}
`

export default {
  path: '/msp-lead-generation/',
  title: 'MSP Lead Generation Services | Qualified IT Leads',
  description:
    'MSP lead generation that builds your list instead of buying it. Inbound and outbound run off one ICP and one positioning, measured on booked calls.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [
    faqBlock.schema,
    serviceSchema({
      name: 'MSP Lead Generation',
      description:
        'Inbound and outbound lead generation for managed service providers: ICP definition, list building, email and LinkedIn outbound, landing pages and appointment setting.',
      path: '/msp-lead-generation/',
      serviceType: 'Lead Generation',
    }),
  ],
  body,
}
