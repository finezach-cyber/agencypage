import { hero, section, sectionHead, cards, cta, breadcrumbs, keywordTable, callout } from '../components.js'
import { agencyCore } from '../data/keywords.js'

const body = `
${breadcrumbs([{ label: 'Services', href: '/services/' }])}

${hero({
  eyebrow: 'MSP marketing services',
  title: 'Marketing services for managed service providers',
  lede: `Four disciplines, one system. They are listed separately because that is how people search for them — but we do not sell them in isolation, because in isolation they do not work.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/gtm-foundation/', label: 'How engagements work' },
})}

${section({
  inner: `
  ${sectionHead({
    title: 'What we do',
    intro: `Each of these sits inside either the <a href="/gtm-foundation/">GTM Foundation</a> (month one) or the <a href="/growth-engine/">Growth Engine</a> (ongoing execution).`,
  })}
  ${cards(
    [
      {
        kicker: 'Growth Engine',
        title: 'MSP lead generation',
        href: '/msp-lead-generation/',
        body: `Inbound and outbound run against one ICP with one story. ICP definition, list building, email and LinkedIn sequences, landing pages, routing and appointment setting — measured on booked calls rather than form fills.`,
      },
      {
        kicker: 'Growth Engine',
        title: 'SEO for MSPs',
        href: '/msp-seo/',
        body: `Local and organic search for the 40,970 monthly searches from businesses hiring an IT provider. Google Business Profile, service pages, location pages, vertical pages, reviews and the technical foundation underneath.`,
      },
      {
        kicker: 'GTM Foundation',
        title: 'MSP website design',
        href: '/msp-website-design/',
        body: `A website built on your positioning and structured against the keyword map: fast, accessible, crawlable, with real conversion paths. Shipped inside month one, owned entirely by you.`,
      },
      {
        kicker: 'GTM Foundation',
        title: 'MSP marketing strategy',
        href: '/msp-marketing-strategy/',
        body: `The decisions that come before execution — ICP, positioning, service packaging, demand mapping, channel sequencing and the metrics you will judge it all by.`,
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  tone: 'muted',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'How it fits together',
        title: 'Two engagements, in order',
      })}
      <p><strong><a href="/gtm-foundation/">Phase 1 — GTM Foundation.</a></strong> One month, one-time. Market research, ICP, positioning, service packaging, SEO strategy, messaging, and the website built on it. You own everything at the end and owe nothing further.</p>
      <p><strong><a href="/growth-engine/">Phase 2 — Growth Engine.</a></strong> Three-month minimum. We become your outsourced growth team across inbound, reputation, outbound, content and growth infrastructure.</p>
      ${callout({
        title: 'Why we will not sell phase two alone',
        body: `<p>Execution amplifies a message. Amplifying a message that sounds like every other MSP in your market is the most common way marketing budget disappears. The foundation is what makes the spend work.</p>`,
      })}
    </div>
    <div>
      ${keywordTable({
        rows: agencyCore,
        totalLabel: 'Monthly searches',
        caption: 'What MSP owners search when looking for help like this.',
      })}
      <p style="margin-top:1.5rem" class="muted">We publish our own demand data for the same reason we publish yours: it is the clearest way to show how we decide what to build.</p>
    </div>
  </div>`,
})}

${cta()}
`

export default {
  path: '/services/',
  title: 'MSP Marketing Services | What We Do for MSPs',
  description:
    'MSP marketing services: lead generation, SEO, website design and go-to-market strategy for managed service providers doing $2–5M in annual revenue.',
  breadcrumbs: [{ label: 'Services', href: '/services/' }],
  priority: 0.8,
  body,
}
