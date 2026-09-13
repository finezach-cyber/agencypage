import {
  hero, section, sectionHead, keywordTable, faq, cta, callout,
  checklist, breadcrumbs, relatedLinks, cards,
} from '../components.js'
import { buyerDemand, verticalDemand, agencyCore, seoCluster, websiteCluster, leadGenCluster, sum, avgCpc } from '../data/keywords.js'

const crumbs = [
  { label: 'Resources', href: '/resources/' },
  { label: 'MSP Keyword Research', href: '/resources/msp-keyword-research/' },
]

const buyerTotal = sum(buyerDemand)
const localTerms = buyerDemand.filter((k) => /near me/.test(k.keyword))
const localTotal = sum(localTerms)
const localShare = Math.round((localTotal / buyerTotal) * 100)
const agencyTotal = sum(agencyCore) + sum(seoCluster) + sum(websiteCluster) + sum(leadGenCluster)
const buyerAvgCpc = avgCpc(buyerDemand)

const faqBlock = faq([
  {
    q: 'Where does this keyword data come from?',
    a: `<p>US monthly search volumes and average Google Ads cost per click from standard keyword research tooling. Treat volumes as directional rather than precise — they are rounded and they move seasonally. The relative scale between terms is the part worth trusting, and it is the part that should drive decisions.</p>`,
  },
  {
    q: 'Should my MSP target all of these keywords?',
    a: `<p>No. These are national figures; your service area is a slice of them. The exercise is to take this structure — core service terms, local variants, vertical terms — and rebuild it for your metro, then subtract everything you cannot credibly win in twelve months. A page for every term on this list is how MSPs end up with forty thin pages and no rankings.</p>`,
  },
  {
    q: 'Why is "best managed service provider" so low volume?',
    a: `<p>Because businesses shopping for IT support rarely search in superlatives. They search by proximity and by problem. That 70-a-month figure is a useful reality check against the instinct to build "best MSP in [city]" pages — the demand is in <em>near me</em>, not in <em>best</em>.</p>`,
  },
  {
    q: 'Is 40 searches a month worth building a page for?',
    a: `<p>When the click costs $97.83, yes. <em>it support for dental practices</em> is 40 searches from buyers with a specific, expensive problem and a short list of providers who understand it. Volume is the wrong first filter for a business selling multi-year contracts — value per conversion is.</p>`,
  },
  {
    q: 'How do I turn this into a keyword map for my own market?',
    a: `<p>Take your service area, pull city-modified variants of the core terms, layer in the verticals you actually serve, then check what already ranks for each. Whatever has a competitor with real content and real reviews in position one to three is a twelve-month project; whatever has thin pages at the top is the near-term opportunity. That analysis is part of the <a href="/gtm-foundation/">GTM Foundation</a>.</p>`,
  },
])

const body = `
${breadcrumbs(crumbs)}

${hero({
  eyebrow: 'Research',
  title: 'MSP keyword research: what IT buyers actually search',
  lede: `There are ${buyerTotal.toLocaleString('en-US')} searches a month in the US from businesses trying to hire a managed service provider — and the average click on them costs $${buyerAvgCpc.toFixed(2)} in Google Ads. Here is the full map, and what it means for how an MSP site should be built.`,
  primary: { href: '/contact/', label: 'Map demand in my market' },
  secondary: { href: '/msp-seo/', label: 'How we target it' },
  stats: [
    { label: 'Buyer searches / mo', value: buyerTotal.toLocaleString('en-US') },
    { label: 'Local intent', value: localShare + '%' },
    { label: 'Top CPC', value: '$98.09' },
  ],
})}

${section({
  inner: `
  <div class="prose">
    <h2>Two completely different keyword markets</h2>
    <p>Before the data, the distinction that makes it usable — because conflating these two is the most common and most expensive mistake in MSP marketing.</p>
    <p><strong>The first market is your buyers.</strong> A business owner whose IT person just quit, or whose insurer just asked about MFA, searching for a provider. This is ${buyerTotal.toLocaleString('en-US')} searches a month, and it is what <em>your</em> website should be built for.</p>
    <p><strong>The second market is MSP owners looking for marketing help.</strong> That is roughly ${agencyTotal.toLocaleString('en-US')} searches a month, and it is what <em>our</em> website is built for. It is a useful example — you are reading a page that exists because of it — but it is not your market.</p>
    ${callout({
      tone: 'warn',
      title: 'The mistake this prevents',
      body: `<p>MSPs who start doing their own content often drift into writing about the MSP industry: pricing models for MSPs, how to run an NOC, MSP business growth. That content attracts other MSPs and peer-group readers. It is interesting, it gets engagement from people who will never buy, and it generates zero pipeline.</p>
      <p>Your buyer does not know what "MSP" stands for. They search <em>it support near me</em>.</p>`,
    })}
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'The core demand',
    title: 'What businesses search when they want to hire an MSP',
    intro: `US monthly search volume with average Google Ads cost per click. The CPC column is the important one — it is what your competitors are willing to pay for a single click.`,
  })}
  ${keywordTable({
    rows: buyerDemand,
    totalLabel: 'Total monthly searches',
    caption: 'Core MSP buyer demand, US, monthly.',
  })}

  <div class="split" style="margin-top:3rem">
    <div class="prose">
      <h3>What this table tells you</h3>
      <p><strong>Local intent dominates.</strong> The four <em>near me</em> terms alone are ${localTotal.toLocaleString('en-US')} searches — about ${localShare}% of the total. Google answers those queries with the map pack before the organic results, which means your Google Business Profile, review count, proximity and citation consistency decide whether you are visible at all. For most MSPs this is the single highest-leverage channel and the one most neglected.</p>
      <p><strong>The intent is commercial, not informational.</strong> Nobody types <em>outsourced it support</em> to learn about a concept. They have a problem and a budget. This is why clicks cost $28–$98, and why a blog-heavy content strategy underperforms a smaller set of well-built service pages.</p>
      <p><strong>The language is not your language.</strong> <em>it support</em> and <em>it services</em> carry far more volume than <em>managed service provider</em>. Your buyers do not use the industry term. A website written in MSP vocabulary is optimised for your peers, not your market.</p>
      <p><strong>Superlatives barely register.</strong> <em>best managed service provider</em> is 70 searches a month against 9,900 for <em>it support near me</em>. The instinct to build "best IT company in [city]" pages is chasing demand that is not there.</p>
    </div>
    <div>
      ${callout({
        tone: 'success',
        title: 'What it costs to rent versus own',
        body: `<p>At an average of $${buyerAvgCpc.toFixed(2)} per click, a hundred clicks a month from paid search runs roughly $${Math.round(buyerAvgCpc * 100).toLocaleString('en-US')} — every month, forever, stopping the day you stop paying.</p>
        <p>The same hundred clicks from organic positions cost nothing per click once earned. That arithmetic is the entire case for <a href="/msp-seo/">MSP SEO</a>, and it is why we would rather build pages than buy clicks.</p>`,
      })}
    </div>
  </div>`,
})}

${section({
  inner: `
  ${sectionHead({
    eyebrow: 'The vertical layer',
    title: 'Industry demand, when you actually serve the industry',
    intro: `Smaller volumes, much sharper intent, and far less competent competition. These are the pages that convert best — and the ones you should not build unless the vertical is real for you.`,
  })}
  <div class="split">
    <div>
      ${keywordTable({ rows: verticalDemand, totalLabel: 'Total', caption: 'Vertical demand, US, monthly.' })}
    </div>
    <div class="prose">
      <p>Look at <em>it support for dental practices</em>: 40 searches a month at $97.83 a click. That is a buyer with a specific compliance-shaped problem, a small shortlist, and a strong preference for someone who already understands their practice management software.</p>
      <p>These pages work when you have genuine concentration. If nine of your clients are dental practices, you already know what their real problems are — imaging systems, HIPAA, uptime during patient hours — and you can write a page no generalist can match.</p>
      <p>They fail badly when the vertical is aspirational. A compliance page written by someone who has never handled a covered entity reads as generic to the one audience qualified to notice.</p>
      <p>This is why vertical selection happens during the <a href="/gtm-foundation/">GTM Foundation</a> and comes out of your own client data, not out of a list of lucrative industries.</p>
    </div>
  </div>`,
})}

${section({
  tone: 'dark',
  inner: `
  ${sectionHead({
    eyebrow: 'Applying it',
    title: 'How this becomes a site architecture',
    intro: `The demand map is not a content calendar. It is a page plan — one page per commercial intent, each with a reason to exist.`,
  })}
  ${cards([
    {
      title: 'Service pages',
      body: `One per service you actually want to sell, matched to how buyers name it. <em>IT support</em> and <em>IT services</em>, not <em>managed service delivery</em>.`,
    },
    {
      title: 'Location pages',
      body: `For the markets where you can say something specific. <em>Near me</em> demand is answered by the map pack plus a page that proves you are genuinely present.`,
    },
    {
      title: 'Vertical pages',
      body: `Where you have concentration. Low volume, high value, weak competition — the best conversion rate on the site.`,
    },
    {
      title: 'Comparison and pricing',
      body: `The questions buyers ask before contacting anyone. Thin competition, high commercial intent, and a way to stop losing deals on unexplained price.`,
    },
  ], { columns: 4 })}
  <div style="margin-top:2.5rem">
    ${checklist(
      [
        'One commercial intent per page — no two pages competing for the same query',
        'Buyer vocabulary, not industry vocabulary',
        'Local pages only where you can prove presence',
        'Vertical pages only where you have real clients',
        'Every page with its own conversion path',
        'Reviews and profile work running alongside — they gate the local results',
      ],
      { columns: 2 },
    )}
  </div>`,
})}

${section({
  tone: 'muted',
  inner: `
  ${sectionHead({
    eyebrow: 'Our own market',
    title: 'For transparency: the demand we built this site against',
    intro: `We publish our own numbers because it is the clearest demonstration of the method. Every page on this site maps to one of these clusters.`,
  })}
  <div class="split">
    <div>
      ${keywordTable({ rows: agencyCore, totalLabel: 'Home page cluster', caption: 'Targeted by our home page.' })}
      <div style="margin-top:1.5rem">${keywordTable({ rows: websiteCluster, totalLabel: 'Website cluster', caption: 'Targeted by /msp-website-design/.' })}</div>
    </div>
    <div>
      ${keywordTable({ rows: seoCluster, totalLabel: 'SEO cluster', caption: 'Targeted by /msp-seo/.' })}
      <div style="margin-top:1.5rem">${keywordTable({ rows: leadGenCluster, totalLabel: 'Lead gen cluster', caption: 'Targeted by /msp-lead-generation/.' })}</div>
    </div>
  </div>
  <p style="margin-top:2rem" class="lede">${agencyTotal.toLocaleString('en-US')} searches a month across four clusters, four pages, no overlap. That is the whole plan — and it is the same discipline we apply to a client's market, just pointed somewhere more valuable.</p>`,
})}

${section({ inner: faqBlock.html })}

${cta({
  title: 'Want this map built for your market?',
  body: 'We will pull the demand for your service area, show you what your competitors already rank for, and tell you which terms are realistically winnable inside a year.',
  primaryLabel: 'Map demand in my market',
  secondaryLabel: 'See how we target it',
  secondaryHref: '/msp-seo/',
})}

${relatedLinks([
  { href: '/msp-seo/', label: 'SEO for MSPs', body: 'How this demand map turns into rankings and calls.' },
  { href: '/msp-website-design/', label: 'MSP website design', body: 'The site architecture the keyword map produces.' },
  { href: '/resources/msp-pricing-models/', label: 'MSP pricing models', body: 'The pricing page most MSPs refuse to build, and why it costs them.' },
])}
`

export default {
  path: '/resources/msp-keyword-research/',
  title: 'MSP Keyword Research: 40,970 Monthly Buyer Searches',
  description:
    'MSP keyword research with volume and CPC: what businesses type when hiring an IT provider, the vertical layer, and how to turn it into a site plan.',
  breadcrumbs: crumbs,
  priority: 0.7,
  schemaType: 'Article',
  schema: [faqBlock.schema],
  body,
}
