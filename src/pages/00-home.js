import { hero, section, sectionHead, cards, steps, keywordTable, faq, cta, callout, checklist } from '../components.js'
import { buyerDemand } from '../data/keywords.js'

const faqBlock = faq([
  {
    q: 'What does an MSP marketing agency actually do differently?',
    a: `<p>A generalist agency starts with tactics — blogs, ads, a website refresh. We start with the commercial question: what should you be selling, to whom, and why should they pick you over the MSP down the road? Managed services is a market where nearly every provider lists the same four services and competes on nothing. The work that moves the number is positioning first, execution second.</p>`,
  },
  {
    q: 'Do I have to sign a long contract?',
    a: `<p>No. Month one is the <a href="/gtm-foundation/">GTM Foundation</a> — a one-time engagement that produces your positioning, service packaging, SEO strategy and a rebuilt website. If you never work with us again, you keep all of it. The <a href="/growth-engine/">Growth Engine</a> that follows has a three-month minimum because nothing in search or outbound produces a fair read in less time.</p>`,
  },
  {
    q: 'What size MSP is this built for?',
    a: `<p>Managed service providers between roughly $2M and $5M in annual revenue. Below that, you usually need sales activity more than you need marketing infrastructure. Above about $10M, you typically have an internal marketing team and need specialists rather than an outsourced growth function.</p>`,
  },
  {
    q: 'How long before we see leads?',
    a: `<p>Outbound and Google Business Profile work can produce conversations in the first few weeks. Organic search is slower: new service and location pages usually take three to six months to settle into meaningful positions, longer in dense metros. Anyone promising ranked-and-converting inside 30 days is selling you something else.</p>`,
  },
  {
    q: 'Do you work with more than one MSP in the same city?',
    a: `<p>No. We take one MSP per metro. Ranking two clients for <em>managed it services near me</em> in the same market means one of them paid us to lose.</p>`,
  },
  {
    q: 'Do you do paid ads?',
    a: `<p>Not as the main engine. With clicks on terms like <em>managed it services provider</em> running near $98, paid search is an expensive way to learn what your market responds to. We prefer to learn that through organic and outbound, then let you buy clicks later on the messages that already convert.</p>`,
  },
])

const body = `
${hero({
  eyebrow: 'MSP marketing agency',
  title: 'We help MSPs build the path from $2M to $10M',
  lede: `Most managed service providers don't have a marketing problem. They have a positioning problem that marketing can't fix. We find what you should actually be selling, build the website around that thesis, then run the engine that puts it in front of buyers.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/gtm-foundation/', label: 'See how it works' },
  stats: [
    { label: 'Built for', value: '$2–5M MSPs' },
    { label: 'Foundation', value: '30 days' },
    { label: 'One client', value: 'per metro' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">What your buyers search every month</p>
    <ul>
      <li><span>it support near me</span> <b>9,900</b></li>
      <li><span>managed it services near me</span> <b>8,100</b></li>
      <li><span>it services near me</span> <b>8,100</b></li>
      <li><span>managed it services provider</span> <b>5,400</b></li>
      <li><span>it support company</span> <b>5,400</b></li>
    </ul>
    <p class="panel__foot">US volume. Clicks on these terms cost $28–$98 in Google Ads. <a href="/resources/msp-keyword-research/">See the full demand map &rarr;</a></p>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The real problem',
    title: 'Your website says the same four things as every competitor',
    intro: `Managed IT Services. Cybersecurity. Cloud Solutions. IT Support. Open five MSP websites in your market and you will find the same list, in roughly the same order, under a stock photo of a server room.`,
  })}
  <div class="split">
    <div class="stack">
      <p>This is not a copywriting failure. It is what happens when a technically excellent company has never been forced to decide what it is <em>for</em>. You are good at a lot of things, so you list a lot of things, and the buyer — who cannot evaluate any of it — falls back on price and proximity.</p>
      <p>That is why so much MSP marketing spend disappears without a trace. Ads, SEO and outbound all amplify a message. If the message is "we do IT, and we're nice people," amplifying it just means more people hear something unremarkable.</p>
      <p>The fix is not a better tagline. It is figuring out which slice of the market you win in disproportionately, what it is worth to them, and then rebuilding the entire go-to-market around that answer.</p>
    </div>
    <div>
      ${callout({
        tone: 'warn',
        title: 'The symptom you actually feel',
        body: `<ul class="tick-list">
          <li>Referrals are the only reliable source of new logos</li>
          <li>Deals stall on price because nothing else separates you</li>
          <li>You rank for your company name and nothing else</li>
          <li>The website gets traffic and produces almost no calls</li>
          <li>You've hired a marketer or an agency before and got activity, not pipeline</li>
        </ul>`,
      })}
    </div>
  </div>`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Two products, in order',
    title: 'Find the market. Then build the machine.',
    intro: `We don't sell a retainer that starts with three blog posts a month. We sell a foundation, and then the execution of that foundation. You can stop after the first one.`,
  })}
  ${cards(
    [
      {
        kicker: 'Phase 1 · Month 1 · one-time',
        title: 'GTM Foundation',
        href: '/gtm-foundation/',
        linkLabel: 'See what month one produces',
        body: `Before we spend a dollar generating leads, we determine what you should be selling, to whom, and why they should choose you. Then we build the digital foundation for that answer — including the website itself, not a strategy deck.`,
        list: [
          'Market and competitor research',
          'ICP and vertical selection',
          'Positioning and service packaging',
          'Keyword and demand mapping',
          'Messaging and site architecture',
          'A rebuilt, ranking-ready website',
        ],
      },
      {
        kicker: 'Phase 2 · 3-month minimum',
        title: 'Growth Engine',
        href: '/growth-engine/',
        linkLabel: 'See the execution scope',
        body: `Your outsourced growth team. We operationalise the strategy we just built across inbound, outbound, reputation and content — and wire up the infrastructure that lets you see what is working.`,
        list: [
          'SEO, local SEO and landing pages',
          'Review generation and Google Business Profile',
          'Email and LinkedIn outbound',
          'Content, case studies and sales collateral',
          'CRM, forms, tracking and attribution',
          'Monthly reporting against pipeline',
        ],
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Services',
    title: 'What we do for managed service providers',
    intro: `Each of these is part of the engine, not a standalone product. They are listed separately because that is how people search for them.`,
  })}
  ${cards([
    {
      title: 'MSP lead generation',
      href: '/msp-lead-generation/',
      body: `Inbound and outbound working the same ICP list, so the people who find you and the people we contact hear the same story. Built to produce qualified conversations, not form fills.`,
    },
    {
      title: 'SEO for MSPs',
      href: '/msp-seo/',
      body: `Local and organic search for the terms your buyers actually type — <em>it support near me</em>, <em>managed it services provider</em>, and the vertical variants where you have a real right to win.`,
    },
    {
      title: 'MSP website design',
      href: '/msp-website-design/',
      body: `A website built to rank and convert, structured around your positioning: service pages, location pages, proof, and a path to a conversation on every page.`,
    },
    {
      title: 'MSP marketing strategy',
      href: '/msp-marketing-strategy/',
      body: `The research and decisions that come before execution: who you sell to, what you package, what you charge, and where the demand actually sits in your market.`,
    },
  ])}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'The journey',
    title: 'Diagnose &rarr; Build &rarr; Activate &rarr; Optimize',
  })}
  ${steps([
    {
      title: 'Diagnose',
      body: `We learn what you are genuinely good at, where your margin actually comes from, which customers and verticals you have quietly concentrated in, what your service area really is, and how your competitors are positioned. Then we map that against what buyers in your market are searching for.`,
    },
    {
      title: 'Build',
      body: `Research becomes a decision: your ICP, your positioning, your service packaging, your keyword targets, your messaging. Then we build the website around that thesis — so month one ends with a tangible asset, not a recommendation.`,
    },
    {
      title: 'Activate',
      body: `The engine starts. Service and location pages go live and get indexed. Review generation begins. Outbound sequences go out to the ICP list we built. Content starts filling the gaps between what buyers search and what your site answers.`,
    },
    {
      title: 'Optimize',
      body: `Every month we look at what produced conversations and do more of it. Rankings, review velocity, reply rates, form conversions and booked calls — measured against pipeline, not vanity metrics.`,
    },
  ])}`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'The demand is there',
    title: 'There are 40,970 searches a month from people trying to hire an MSP',
    intro: `Not from people who want marketing advice — from businesses actively looking for a provider. This is the demand your website should be capturing, and most MSP websites capture almost none of it.`,
  })}
  <div class="split">
    <div>
      ${keywordTable({
        rows: buyerDemand,
        totalLabel: 'Total monthly searches',
        caption: 'US monthly search volume and Google Ads cost per click.',
      })}
    </div>
    <div class="stack">
      <p>Two things stand out. First, the volume is dominated by <em>near me</em> and local-intent searches, which means this is won with local SEO, Google Business Profile and location pages — not with clever content.</p>
      <p>Second, look at the cost per click. A click on <em>managed it services provider</em> costs about $98 in Google Ads. Your competitors are paying that because the lead is worth it. Every organic position you hold is traffic you are not renting.</p>
      <p><a href="/resources/msp-keyword-research/">See the full MSP keyword research, including vertical demand &rarr;</a></p>
    </div>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'Why MSPs',
        title: 'We only work with managed service providers',
        intro: `Specialisation is not a marketing line here. It is the reason the work compounds.`,
      })}
      <p>Every engagement teaches us something the next one inherits: which services have real demand, which verticals convert, which offers land, which website structures produce calls, which outbound messages get replies, which review strategies move the map pack. A generalist agency starts each client from zero. We start from a pattern.</p>
      <p>It also means we understand what we are selling. We know what a stack looks like, what co-managed means, why a vCISO offer prices differently from break-fix, and why "we're proactive, not reactive" stopped being a differentiator around 2011.</p>
    </div>
    <div>
      <h3>This is a fit if</h3>
      ${checklist(
        [
          'You do roughly $2–5M in annual revenue',
          'Growth today depends mostly on referrals',
          'You have real technical strengths you have never marketed',
          'You want pipeline, and can service it when it arrives',
          'You are willing to narrow what you sell to win a segment',
        ],
        { columns: 1 },
      )}
      <h3>This is not a fit if</h3>
      ${checklist(
        [
          'You want leads next week with no foundation',
          'You want to stay a generalist and out-market everyone',
          'Nobody internally can take a sales call within 24 hours',
          'You are looking for the cheapest per-blog-post option',
        ],
        { columns: 1 },
      )}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: faqBlock.html,
})}

${cta()}
`

export default {
  path: '/',
  title: 'MSP Marketing Agency | Build the Path From $2M to $10M',
  description:
    'MSP marketing built for managed service providers doing $2–5M. We find your wedge, build the website around it, then run SEO, outbound and reputation.',
  priority: 1.0,
  changefreq: 'weekly',
  schema: [faqBlock.schema],
  body,
}
