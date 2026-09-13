import {
  hero, section, sectionHead, cards, cta, breadcrumbs, keywordTable,
  callout, processDiagram, checklist, serviceSchema, relatedLinks, audienceStrip,
} from '../components.js'
import { servicesCluster } from '../data/keywords.js'

const crumbs = [{ label: 'Services', href: '/msp-marketing-services/' }]

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP marketing services',
  title: 'MSP marketing services, delivered in a defined sequence',
  lede: `For managed service providers and IT services companies. Everything below is delivered within one of two engagements: Month 1 identifies the opportunities and builds the assets; Phase 2 executes against them. We do not sell these disciplines in isolation, because in isolation they amplify a message that has not been established.`,
  primary: { href: '/contact/', label: 'Book a strategy call' },
  secondary: { href: '/process/', label: 'See the process' },
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Phase 1 — GTM Foundation',
    title: 'Month 1: strategy and build',
    intro: `A fixed-fee engagement concluding with a live website and a documented campaign plan you own outright. <a href="/gtm-foundation/">Full scope and terms</a>.`,
  })}
  ${cards([
    {
      title: 'Capability and margin assessment',
      body: `Establishing which services your firm delivers with genuine depth, where margin and retention actually originate, and whether local search is relevant to your model.`,
    },
    {
      title: 'Opportunity analysis',
      body: `Every service assessed for demand against competitive difficulty, producing the three strongest land-and-expand offers — sized, keyword-mapped and priced. Documented as the Opportunities Report.`,
    },
    {
      title: 'MSP marketing strategy',
      href: '/msp-marketing-strategy/',
      body: `Ideal customer profile, positioning, service packaging and pricing model, demand mapping and channel sequencing — documented as a marketing plan your team can act on.`,
    },
    {
      title: 'Website design and build',
      body: `An SEO-optimised website carrying your branding, built against the three opportunities: an optimised home page plus a dedicated page for each opportunity, delivered ready to deploy.`,
    },
  ], { columns: 2 })}`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Phase 2 — Growth Engine',
    title: 'Execution against the plan',
    intro: `Optional, and entered only after Month 1 has been delivered and reviewed. <a href="/growth-engine/">Full scope and terms</a>.`,
  })}
  ${cards([
    {
      title: 'MSP lead generation',
      href: '/msp-lead-generation/',
      body: `Inbound and outbound directed at the opportunities identified in Month 1: account targeting, list construction, sequenced email and LinkedIn outreach, routing and appointment setting, measured on booked meetings.`,
    },
    {
      title: 'MSP SEO',
      href: '/msp-seo/',
      body: `Local and organic search execution: technical foundation, Google Business Profile, service, location and vertical pages, and the reputation signals that determine local ranking.`,
    },
    {
      title: 'Reputation management',
      body: `Review generation built into your service workflow, review response, Google Business Profile maintenance, monitoring, and the development of testimonials and case studies.`,
    },
    {
      title: 'Content',
      body: `Service, vertical and sales-support material written to shorten evaluations: the questions that arise mid-deal, the proof that substantiates the position, the collateral your sales conversations require.`,
    },
    {
      title: 'Conversion optimisation',
      body: `Continuous work on the pages already receiving traffic — structure, messaging, proof placement and conversion paths — so that visibility earned upstream converts.`,
    },
    {
      title: 'Reporting infrastructure',
      body: `CRM configuration, lead routing, forms, analytics, call tracking and attribution, so that activity can be connected to pipeline rather than reported as volume.`,
    },
  ])}`,
})}

${section({
  inner: `
  ${audienceStrip({
    title: 'Who these services are for',
    intro: `The method is the same across the category. What changes is the vocabulary your buyers use and whether local search is relevant to how you sell — both established in Month 1.`,
  })}`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Sequence',
    title: 'How the services are ordered',
    intro: `Select any stage for detail on what it involves and what it produces.`,
  })}
  ${processDiagram({ compact: true })}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'Terms',
        title: 'How we work',
      })}
      ${checklist(
        [
          'Month 1 is fixed-fee and quoted before work begins',
          'Phase 2 is a separate decision, made after delivery',
          'You own both reports and the website outright',
          'No account-management layer between you and the work',
          'Reporting against booked meetings and revenue by source',
        ],
        { columns: 1 },
      )}
    </div>
    <div>
      ${keywordTable({
        rows: servicesCluster,
        caption: 'The term this page targets.',
      })}
      ${callout({
        title: 'Why the disciplines are not sold separately',
        body: `<p>Each channel amplifies a message. Where the message is indistinguishable from competitors, amplification produces cost without return. The foundation is what makes the subsequent spend perform.</p>`,
      })}
    </div>
  </div>`,
})}

${cta()}

${relatedLinks([
  { href: '/process/', label: 'The process', body: 'Every stage, with inputs and deliverables stated.' },
  { href: '/gtm-foundation/', label: 'Phase 1 — GTM Foundation', body: 'The Month 1 engagement in full.' },
  { href: '/growth-engine/', label: 'Phase 2 — Growth Engine', body: 'Optional execution against the opportunities identified.' },
])}
`

export default {
  path: '/msp-marketing-services/',
  title: 'MSP Marketing Services | MSPs & IT Services Firms',
  description:
    'MSP marketing services for MSPs and IT services companies: opportunity research and an SEO-optimised website in Month 1, then lead generation and SEO.',
  breadcrumbs: crumbs,
  priority: 0.8,
  schema: [
    serviceSchema({
      name: 'MSP Marketing Services',
      description:
        'Marketing services for managed service providers: go-to-market strategy, market research, website design and build, SEO, lead generation, content and reputation management.',
      path: '/msp-marketing-services/',
      serviceType: 'Marketing Services',
    }),
  ],
  body,
}
