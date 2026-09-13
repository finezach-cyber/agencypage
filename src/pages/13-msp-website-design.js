import {
  hero, section, sectionHead, cards, steps, keywordTable, faq, cta,
  callout, checklist, breadcrumbs, relatedLinks, serviceSchema, quote,
} from '../components.js'
import { websiteCluster } from '../data/keywords.js'

const crumbs = [
  { label: 'Services', href: '/services/' },
  { label: 'MSP Website Design', href: '/msp-website-design/' },
]

const faqBlock = faq([
  {
    q: 'How long does an MSP website take to build?',
    a: `<p>The site ships inside the <a href="/gtm-foundation/">GTM Foundation</a>, which is a one-month engagement. That is possible because the research, positioning and page architecture are decided in the same month — we are not waiting on a separate discovery phase or on a committee to approve wireframes.</p>`,
  },
  {
    q: 'Do we own the website?',
    a: `<p>Yes. Full ownership of the site, the content, the domain and the analytics, with no proprietary platform holding it hostage. If you stop working with us, nothing turns off and nothing needs rebuilding.</p>`,
  },
  {
    q: 'What platform do you build on?',
    a: `<p>Whatever fits how you will maintain it — usually a mainstream CMS your team can edit without calling us. What matters more than the platform is that it renders fast, produces clean crawlable HTML, and does not depend on a page builder that adds three seconds of JavaScript to every load.</p>`,
  },
  {
    q: 'Can you just redesign our existing site?',
    a: `<p>We can, but it is usually the wrong order. A redesign that keeps the existing messaging produces a better-looking version of the same undifferentiated site. The visual refresh is the easy part; deciding what the site should say is the part that changes the result.</p>`,
  },
  {
    q: 'Will the new site hurt our current rankings?',
    a: `<p>Not if it is migrated properly — URL mapping, 301 redirects, preserved metadata where it was working, and post-launch crawl monitoring. Botched migrations are a real risk and a common way MSPs lose traffic in a rebuild, which is why the migration plan is written before anything is moved.</p>`,
  },
  {
    q: 'Do you write the content or do we?',
    a: `<p>We write it, from the research and from interviews with your team. You review it. Asking an MSP owner to write their own service pages is how sites stay unfinished for a year — and the whole point is that the copy comes out of the positioning work, not out of a blank template.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'MSP website design',
  title: 'An MSP website built to rank and convert, not just to look current',
  lede: `Your website is the first physical manifestation of your strategy. We build it around a positioning thesis — which services, which buyers, which markets — so it can earn search traffic and turn it into conversations.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/gtm-foundation/', label: 'See what month one delivers' },
  stats: [
    { label: 'Shipped in', value: 'Month 1' },
    { label: 'Built for', value: 'Search + conversion' },
    { label: 'Ownership', value: '100% yours' },
  ],
  aside: `<div class="panel">
    <p class="panel__label">What we replace</p>
    <ul>
      <li><span>Stock photo of a server room</span> <b>&times;</b></li>
      <li><span>Four generic service tiles</span> <b>&times;</b></li>
      <li><span>"Proactive, not reactive"</span> <b>&times;</b></li>
      <li><span>A contact form in the footer</span> <b>&times;</b></li>
      <li><span>No page for any service you actually sell</span> <b>&times;</b></li>
    </ul>
    <p class="panel__foot">Almost every MSP site we audit has at least four of these.</p>
  </div>`,
})}

${section({
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why most MSP websites do not produce anything</h2>
      <p>The typical managed service provider website is not badly designed. It is well-designed and commercially empty — which is harder to spot and more expensive, because it looks like the box is ticked.</p>
      <p>Here is what an audit usually finds.</p>

      <h3>It describes capabilities, not outcomes anyone was searching for</h3>
      <p>Four tiles: Managed IT, Cybersecurity, Cloud, IT Support. No page behind them deep enough to rank, and nothing that answers the question the visitor actually arrived with, which is usually some version of "can these people fix my specific problem, and are they any good?"</p>

      <h3>There is no page for anything a buyer types</h3>
      <p>Someone searching <em>outsourced it support</em> or <em>co-managed it services</em> has a commercial query and expects a page about that. A homepage with a tile linking to a 200-word summary does not compete with a provider who wrote a real page. You cannot rank for what you have not written about.</p>

      <h3>It is invisible in the markets it serves</h3>
      <p>The company serves six cities and has one page, listing them in the footer. Meanwhile the competitor with a genuine page for each of their top three markets takes the local results.</p>

      <h3>It gives the visitor one thing to do, and it is scary</h3>
      <p>"Contact Us." That is a big ask for someone who is three minutes into evaluating you. A site that converts offers graduated steps — a specific assessment, a pricing explainer, a look at how onboarding works — so the visitor who is not ready to talk still enters the pipeline instead of leaving.</p>

      <h3>It is slow</h3>
      <p>Page builders, sliders, six tracking scripts and uncompressed hero images. An IT company with a four-second load time has a credibility problem before anyone reads a word — and Core Web Vitals are a ranking input on top of that.</p>
    </div>
    <div>
      ${quote({
        text: `The website is the first physical manifestation of the strategy, not the product itself.`,
      })}
      ${callout({
        title: 'The order that matters',
        body: `<p>Positioning &rarr; architecture &rarr; content &rarr; design &rarr; build.</p>
        <p>Most rebuilds run that backwards, starting with a template and filling it in. That is why they produce a nicer site with the same results.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Architecture',
    title: 'The page structure an MSP site actually needs',
    intro: `Built from the keyword map, so every commercial query your buyers use has a page that deserves to rank for it.`,
  })}
  ${cards([
    {
      title: 'Home',
      body: `Says who you serve, what you do for them and why you are different — in the first screen. Not a slider. This page carries your positioning thesis and routes visitors to the right depth.`,
    },
    {
      title: 'Service pages',
      body: `One per service you actually want to sell: managed IT, co-managed IT, cybersecurity, cloud, compliance, vCIO, helpdesk. Deep enough to rank, specific enough to convert, each with its own proof and conversion path.`,
    },
    {
      title: 'Location pages',
      body: `For markets you genuinely serve, with real specifics — local clients, response times, industries concentrated there. Built to take local search, not to pad a sitemap.`,
    },
    {
      title: 'Vertical pages',
      body: `Where you have concentration: healthcare, dental, legal, accounting, manufacturing. These convert best because they name the buyer's compliance and workflow problems back to them.`,
    },
    {
      title: 'Pricing / how we work',
      body: `Most MSPs refuse to publish anything about price, then lose deals to the provider who at least explained their model. You do not need a price list — you need to frame how buying works so nobody is afraid to ask.`,
      href: '/resources/msp-pricing-models/',
      linkLabel: 'On MSP pricing models',
    },
    {
      title: 'Proof',
      body: `Case studies, named client logos where permitted, reviews pulled in, certifications, response-time commitments. Specific evidence, not adjectives.`,
    },
    {
      title: 'About',
      body: `For a relationship service, this is a top-visited page. Real people, real history, real reason the company exists — it reduces the perceived risk of switching providers.`,
    },
    {
      title: 'Conversion paths',
      body: `More than one way in: book a call, request an assessment, get the pricing explainer, ask a question. Matched to how ready the visitor is, present on every page.`,
    },
  ])}`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'Process',
    title: 'How we build it',
    intro: `The website is the deliverable at the end of the <a href="/gtm-foundation/">GTM Foundation</a> month. Everything before it exists to make the site say the right thing.`,
  })}
  ${steps([
    {
      title: 'Research and positioning',
      body: `Your services, margins, existing client concentrations, service area, competitors and the search demand in your market. This produces the thesis the site is built on: you are X, for Y, because Z.`,
    },
    {
      title: 'Architecture and keyword mapping',
      body: `Every page mapped to a commercial intent, with no two pages competing for the same query, and an internal linking plan that pushes authority to the pages that convert.`,
    },
    {
      title: 'Copy',
      body: `Written from interviews with your team and the research, not from a template. Service pages, location pages, verticals, proof, conversion copy — reviewed by you before anything is designed.`,
    },
    {
      title: 'Design and build',
      body: `Clean, fast, responsive, accessible. Structured data for organisation, services and locations. Performance budget enforced — no page builder bloat, no render-blocking third-party scripts.`,
      list: [
        'Core Web Vitals measured before launch',
        'Schema markup for organisation, services and locations',
        'Accessible markup, keyboard navigable, real contrast',
      ],
    },
    {
      title: 'Migrate and launch',
      body: `URL mapping and 301s from the old site, metadata preserved where it was working, analytics and conversion tracking configured, forms tested, and a post-launch crawl to catch anything that slipped.`,
    },
    {
      title: 'Iterate',
      body: `Launch is the starting point. Inside the <a href="/growth-engine/">Growth Engine</a> the site keeps gaining pages and keeps getting conversion work as the data comes in.`,
    },
  ])}`,
})}

${section({
  tone: 'dark',
  inner: `
  <div class="split">
    <div>
      ${sectionHead({
        eyebrow: 'Non-negotiables',
        title: 'What every site we build ships with',
      })}
      ${checklist([
        'Sub-2-second loads on a normal connection',
        'Core Web Vitals in the green at launch',
        'Mobile-first, tested on real viewport sizes',
        'Semantic, crawlable HTML',
        'Schema markup for organisation, services and locations',
        'Unique title and meta description on every page',
        'Accessible: contrast, focus states, keyboard navigation',
        'Conversion tracking and call tracking configured',
        'A CMS your team can actually edit',
        'Full ownership — no proprietary lock-in',
      ])}
    </div>
    <div>
      ${keywordTable({
        rows: websiteCluster,
        totalLabel: 'Monthly searches',
        caption: 'What MSP owners search when they decide the website is the problem.',
      })}
      <p style="margin-top:1.5rem">If you arrived here on one of these, you already suspect the site is holding you back. The useful question is whether it is the design or the strategy behind it — and it is almost always the second.</p>
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}

${cta({
  title: 'Get an honest read on your current site',
  body: 'We will look at your website against the search demand in your market and tell you what is costing you conversations — structure, messaging, speed or all three.',
  primaryLabel: 'Request a site review',
})}

${relatedLinks([
  { href: '/msp-seo/', label: 'SEO for MSPs', body: 'What it takes to rank the pages once they exist.' },
  { href: '/gtm-foundation/', label: 'GTM Foundation', body: 'The month-one engagement the website is built inside.' },
  { href: '/msp-marketing-strategy/', label: 'MSP marketing strategy', body: 'The decisions the site has to express before design starts.' },
])}
`

export default {
  path: '/msp-website-design/',
  title: 'MSP Website Design | Websites That Rank and Convert',
  description:
    'MSP website design built on positioning, not a template. Service, location and vertical pages structured to rank, load fast and produce booked calls.',
  breadcrumbs: crumbs,
  priority: 0.9,
  schema: [
    faqBlock.schema,
    serviceSchema({
      name: 'MSP Website Design',
      description:
        'Website design and build for managed service providers: positioning-led architecture, service and location pages, copywriting, technical SEO and migration.',
      path: '/msp-website-design/',
      serviceType: 'Web Design',
    }),
  ],
  body,
}
