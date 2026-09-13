import {
  hero, section, sectionHead, cards, steps, keywordTable, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, serviceSchema,
} from '../components.js'
import { leadGenCluster } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/msp-marketing-services/' },
  { label: 'MSP Lead Generation', href: '/msp-lead-generation/' },
]

const faqBlock = faq([
  {
    q: 'Do you sell MSP leads?',
    a: `<p>No. We do not resell lists, shared leads or appointments sourced from a pool that other providers have also purchased. Every conversation is generated for you, against an ideal customer profile defined with you, using messaging derived from your positioning. A purchased lead has no relationship to your firm and no reason to take the call.</p>`,
  },
  {
    q: 'How many leads should we expect each month?',
    a: `<p>We do not forecast before establishing the size of your addressable market. During Month 1 we determine how many accounts in your service area actually match your ICP. That figure, combined with realistic reply and conversion rates, produces a forecast that can be held to. A number offered before that work is a number invented to win the engagement.</p>`,
  },
  {
    q: 'How do you define a qualified lead?',
    a: `<p>The definition is agreed before launch, and is typically: an organisation within your service area, in the target size band, matching the ICP criteria, that has accepted a scheduled meeting. Not a form completion, a content download or a connection request. Without a firm definition the reporting means nothing.</p>`,
  },
  {
    q: 'Where do MSP leads actually originate?',
    a: `<p>Across our engagements, MSP leads arrive from three sources in roughly descending order of predictability: outbound to a defined account list, local search and reputation, and referral. The proportions vary by market and by how established the position is. What does not vary is that purchased lists sit outside all three — a bought record is not a lead, it is a name with no relationship to your firm.</p>`,
  },
  {
    q: 'Is IT services lead generation different from managed services lead generation?',
    a: `<p>The buyer is the same; the search language is not. Organisations describe what they need as IT services, IT support or outsourced IT, and rarely as managed services. IT services lead generation therefore targets the same accounts through the vocabulary those accounts actually use — which is one of the specific outputs of the <a href="/process/#research">demand mapping</a> stage.</p>`,
  },
  {
    q: 'Does outbound still work for managed services?',
    a: `<p>Generic outbound does not. Enquiring whether a prospect is satisfied with their current IT provider is the message every MSP sends, and it is filtered accordingly. Outbound referencing a specific trigger — a compliance deadline in their sector, an acquisition, a hiring pattern indicating growth, a workflow problem particular to their vertical — continues to perform, because it is evidently not a broadcast. The difference is research, which is why positioning precedes outreach.</p>`,
  },
  {
    q: 'How quickly does lead generation produce meetings?',
    a: `<p>Outbound is the faster channel: first substantive replies typically arrive three to six weeks after sequences launch, once list construction and domain warm-up are complete. Inbound compounds over a longer horizon — see the timeline on our <a href="/msp-seo/">MSP SEO page</a>. We run both so the faster channel sustains activity while search matures.</p>`,
  },
  {
    q: 'Will you work inside our CRM?',
    a: `<p>Yes, and if its state prevents reliable routing we will address that first. Leads arriving in a shared inbox rather than an owned pipeline stage do not get worked, and the channel is then blamed for a process failure.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP lead generation',
  title: 'MSP lead generation built on a defined position',
  lede: `For MSPs and IT services companies. Inbound and outbound directed at one ideal customer profile, carrying one message. We construct the target list, derive the messaging from your validated offers, and run the sequences — measured on booked meetings.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
  stats: [
    { label: 'Channels', value: 'Inbound + outbound' },
    { label: 'Lists', value: 'Built, not purchased' },
    { label: 'Measured on', value: 'Booked meetings' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">Why MSP lead generation underperforms</p>
    <ul>
      <li><span>Purchased lists with no ICP behind them</span> <b>01</b></li>
      <li><span>Messaging indistinguishable from competitors</span> <b>02</b></li>
      <li><span>Leads arriving without an owner or a stage</span> <b>03</b></li>
      <li><span>A website unable to convert the traffic</span> <b>04</b></li>
      <li><span>No follow-up beyond the first non-reply</span> <b>05</b></li>
    </ul>
    <p class="panel__foot">Each of these is a process failure rather than a channel failure.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why lead generation for MSPs commonly disappoints</h2>
      <p>Most managed service providers have attempted it. A list was purchased, a sequence was sent, a handful of replies arrived — several of them unsubscribes — and the conclusion drawn was that outbound does not work in this category. Or an agency was engaged and delivered leads that proved to be content downloads from organisations outside the service area.</p>
      <p>The channel is rarely the cause. Four conditions beneath it usually are.</p>

      <h3>The market has not been defined</h3>
      <p>Organisations of 20 to 200 seats within an hour's drive is a geography, not an ideal customer profile. It provides no basis for deciding what to say. An ICP is a segment in which you can articulate why your firm specifically is the correct provider: a regulatory environment you already operate in, a platform you hold unusual depth in, a size band where your onboarding is demonstrably better. Absent that, every message reverts to competence and service quality — claims every competitor also makes.</p>

      <h3>The message is interchangeable</h3>
      <p>The average MSP prospect receives several versions of the same approach each month: responsive support, proactive monitoring, strategic partnership, a complimentary network assessment. The offer is not poor. It is indistinguishable, and indistinguishable correspondence is deleted before it is read.</p>

      <h3>Inbound and outbound are run as separate programmes</h3>
      <p>A prospect receives an email referencing their sector's compliance requirements, researches the sender, and arrives at a website describing a materially more generic firm. The discrepancy is sufficient to end the evaluation quietly. When both channels are driven by the same positioning, each increases the credibility of the other.</p>

      <h3>Nothing happens after the lead arrives</h3>
      <p>Enquiries land in a shared inbox with no owner. Follow-up is inconsistent. A prospect has a productive first conversation and hears nothing for three weeks. We have seen engagements where correcting routing and follow-up produced more closed revenue than any additional channel would have.</p>
    </div>
    <div>
      ${callout({
        tone: 'warn',
        title: 'On purchased leads',
        body: `<p>Shared-lead services sell the same prospect to several providers simultaneously. You then compete on response time and price against firms the buyer regards as interchangeable — which is precisely the position that establishing a position is intended to escape.</p>`,
      })}
      ${callout({
        title: 'The test we apply to every sequence',
        body: `<p>If the email would remain accurate with a competitor's name on it, it is not ready to send.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Approach',
    title: 'Two channels, one message',
    intro: `Inbound and outbound are not run as separate campaigns. They address the same ICP with the same positioning, and each improves the performance of the other.`,
  })}
  ${cards(
    [
      {
        kicker: 'Inbound',
        title: 'Capture buyers already in market',
        body: `A substantial volume of search demand comes from organisations actively seeking a provider. Inbound captures the portion within your service area through local search visibility, service and vertical pages, reputation signals, and a website built to convert the traffic it earns.`,
        list: [
          'Local search visibility and Google Business Profile',
          'Service, location and vertical landing pages',
          'Review generation feeding local ranking',
          'Conversion work on pages already receiving traffic',
        ],
        href: '/msp-seo/',
        linkLabel: 'MSP SEO in detail',
      },
      {
        kicker: 'Outbound',
        title: 'Reach accounts before they search',
        body: `Search reaches only those already evaluating. Outbound reaches the accounts you want in advance of that — which, for a service sold on multi-year agreements, is the majority of them at any given time.`,
        list: [
          'ICP definition and addressable market sizing',
          'List construction, verification and enrichment',
          'Sequences built on segment-specific trigger events',
          'LinkedIn engagement conducted manually, not automated',
          'Follow-up cadences and appointment setting',
        ],
        href: '/growth-engine/',
        linkLabel: 'Execution scope',
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Sources',
    title: 'Where MSP leads actually come from',
    intro: `Across engagements, three sources produce the meetings — in roughly descending order of predictability.`,
  })}
  ${cards([
    {
      kicker: 'Most predictable',
      title: 'Outbound to a defined account list',
      body: `Reaches the accounts you want before they begin evaluating, which for a service sold on multi-year agreements is most of them at any moment. Predictable because volume is a function of list size and sending capacity rather than of market timing.`,
    },
    {
      kicker: 'Compounds',
      title: 'Search and reputation',
      body: `Captures the firms already looking. Slower to establish and stronger over time, since positions and review volume accumulate rather than reset each month.`,
    },
    {
      kicker: 'Highest quality',
      title: 'Referral',
      body: `The best-converting source and the least controllable. Sharper positioning improves it indirectly: a firm known for something specific gets referred for that thing.`,
    },
  ])}
  ${callout({
    tone: 'warn',
    title: 'What is not on this list',
    body: `<p>Purchased records. A bought contact sits outside all three sources — it carries no relationship to your firm and no reason to take the call, which is why we build lists rather than buy them.</p>`,
  })}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Method',
    title: 'How the lead generation engine is constructed',
    intro: `Stages one to three occur during Month 1. Execution begins in Phase 2. <a href="/process/">See the full process</a>.`,
  })}
  ${steps([
    {
      title: 'Define the ICP and size the market',
      body: `Which sectors, which size band, which geography, which trigger events — then the addressable account count. That figure establishes realistic expectations before any volume is forecast.`,
      list: [
        'Analysis of the existing client base for unrecognised concentration',
        'Margin and retention by segment, not revenue alone',
        'Competitive density within each candidate segment',
      ],
    },
    {
      title: 'Construct the list',
      body: `Firmographic filtering, verification, de-duplication against your CRM, and enrichment with the signals that allow a message to be specific: platform, headcount trajectory, regulatory exposure, recent corporate activity.`,
    },
    {
      title: 'Derive the messaging',
      body: `From your positioning rather than a template. Separate sequences per segment, because the reason a dental practice changes provider is not the reason a manufacturer does.`,
    },
    {
      title: 'Launch, follow up and route',
      body: `Sequences launch with proper domain warm-up and sending hygiene. Replies are worked, interested accounts are booked, and every record enters your CRM at a defined stage with a named owner.`,
    },
    {
      title: 'Read the data and adjust',
      body: `Reply rate by segment, by message and by trigger. Meeting rate, attendance rate, close rate by source. Within two months the data indicates which segment is genuinely your strongest market — an answer that frequently revises the strategy.`,
    },
  ])}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Terminology',
    title: 'IT services lead generation and managed services lead generation',
    intro: `The same buyer, described two ways. Which phrase your market uses changes the targeting, not the method.`,
  })}
  <div class="split">
    <div class="prose">
      <p>Firms in this category describe themselves differently — managed service provider, IT services company, IT support firm, co-managed IT provider — and their buyers describe the need differently again. Organisations rarely search for managed services. They search for IT support, IT services or outsourced IT, because that is the language of the problem rather than the language of the industry.</p>
      <p>That distinction matters for targeting. An IT services company running campaigns built on managed services vocabulary is reaching for terms its buyers do not type, while the terms they do type go unclaimed. Establishing which vocabulary your market actually uses is part of <a href="/process/#research">the demand analysis</a>, and it frequently redirects the campaign before a single message is sent.</p>
      <p>The method is identical either way: define the accounts, identify the offers with real demand and weak competition, and reach those accounts through inbound and outbound carrying one message.</p>
    </div>
    <div>
      ${callout({
        title: 'Where the vocabulary gap shows up',
        body: `<ul class="tick-list">
          <li>Website copy written in industry terms rather than buyer terms</li>
          <li>Outbound subject lines describing a category, not a problem</li>
          <li>Search targets chosen from how the firm self-describes</li>
          <li>Service pages that rank for peers rather than prospects</li>
        </ul>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'Search demand',
    title: 'What MSP and IT services firms search when seeking this service',
    intro: `If you arrived through one of these terms, the analysis is worth noting — it is the same method we apply to your market, directed at ours.`,
  })}
  <div class="split">
    <div>${keywordTable({ rows: leadGenCluster, totalLabel: 'Total monthly searches' })}</div>
    <div class="stack">
      <p>The cost per click is the informative column. <em>msp lead generation</em> commands $66.96 and <em>msp lead generation services</em> $61.67, because a managed services retainer justifies that acquisition cost.</p>
      <p>We would rather hold the position than rent it. The same reasoning governs the recommendations we make in your market, where clicks carry comparable and often higher costs.</p>
      <p><a href="/process/#research">How we map demand in your service area &rarr;</a></p>
    </div>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div>
      ${sectionHead({ eyebrow: 'Scope', title: 'What lead generation covers' })}
      ${checklist([
        'ICP definition and addressable market sizing',
        'List construction, verification and enrichment',
        'CRM de-duplication and record hygiene',
        'Sequence copy written by segment',
        'Sending infrastructure, warm-up and deliverability',
        'LinkedIn outreach and connection cadences',
        'Inbound landing pages and conversion paths',
        'Lead routing, forms and notification rules',
        'Appointment setting and calendar handover',
        'Follow-up cadences for non-responders',
        'Source attribution and pipeline reporting',
        'Monthly review against booked meetings',
      ])}
    </div>
    <div>
      ${callout({
        tone: 'success',
        title: 'What the engagement requires from you',
        body: `<ul class="tick-list">
          <li>A named person able to take a sales call within one business day</li>
          <li>Access to the CRM and existing client data</li>
          <li>Approximately one hour weekly, concentrated in the first month</li>
          <li>A willingness to decline segments not worth serving</li>
        </ul>
        <p>Lead generation fails more often through delayed follow-up on the client side than through anything occurring within the campaign.</p>`,
      })}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Establish how many accounts match your ICP',
  body: 'On a 30-minute call we will define your ideal customer profile and size the addressable market within your service area. You leave with that figure regardless of whether we proceed.',
})}

${relatedLinks([
  { href: '/msp-seo/', label: 'MSP SEO', body: 'The inbound channel — capturing buyers already searching for a provider.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The positioning work that makes outbound messaging worth reading.' },
  { href: '/process/', label: 'The process', body: 'Where lead generation sits across the two phases.' },
])}
`

export default {
  path: '/msp-lead-generation/',
  title: 'MSP Lead Generation Services | Qualified IT Leads',
  description:
    'MSP lead generation that builds your list rather than buying it. Inbound and outbound run from one ICP and one position, measured on booked meetings.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [
    faqBlock.schema,
    serviceSchema({
      name: 'MSP Lead Generation',
      description:
        'Inbound and outbound lead generation for managed service providers: ICP definition, list construction, email and LinkedIn outbound, landing pages and appointment setting.',
      path: '/msp-lead-generation/',
      serviceType: 'Lead Generation',
    }),
  ],
  body,
}
