import { hero, section, sectionHead, cards, cta, breadcrumbs, callout, checklist } from '../components.js'

const body = `
${breadcrumbs([{ label: 'Resources', href: '/resources/' }])}

${hero({
  eyebrow: 'Resources',
  title: 'MSP marketing research, published',
  lede: `The analysis we run for clients, made public. No gates, no email capture, no "download the PDF" — if it is useful, it should be readable.`,
  primary: { href: '/contact/', label: 'Book a GTM call' },
  secondary: { href: '/resources/msp-keyword-research/', label: 'Start with the keyword data' },
})}

${section({
  inner: `
  ${sectionHead({ title: 'Research and guides' })}
  ${cards(
    [
      {
        kicker: 'Research',
        title: 'MSP keyword research: what IT buyers search',
        href: '/resources/msp-keyword-research/',
        linkLabel: 'Read the research',
        body: `The full demand map — 40,970 monthly searches from businesses trying to hire a managed service provider, with cost per click, intent analysis and the vertical layer underneath. This is the data every client engagement starts from.`,
      },
      {
        kicker: 'Guide',
        title: 'MSP pricing models explained',
        href: '/resources/msp-pricing-models/',
        linkLabel: 'Read the guide',
        body: `Per-user, per-device, tiered, à la carte and value-based pricing — how each one behaves commercially, which buyers each attracts, and why refusing to discuss price on your website costs you deals.`,
      },
    ],
    { columns: 2 },
  )}`,
})}

${section({
  tone: 'muted',
  inner: `
  <div class="split">
    <div class="prose">
      <h2>Why we publish the research instead of gating it</h2>
      <p>The standard agency move is to put the useful analysis behind an email form, then run whoever fills it in through a nurture sequence. We do not, for two reasons.</p>
      <p>The first is practical: an MSP owner evaluating marketing help wants to know whether we understand their market. A gate prevents exactly the thing that would prove it. If our keyword analysis is good, reading it should be enough to tell.</p>
      <p>The second is that gated PDFs are a poor trade. You give up an email address, get a document you skim once, and receive eight follow-ups. Nobody is better off. Everything here is a web page — readable, linkable, and indexable, which is also why it works as marketing.</p>
      <h2>How to use these</h2>
      <p>The <a href="/resources/msp-keyword-research/">keyword research</a> is the one to start with. It shows the demand that exists in the managed services market and — more usefully — the structural difference between what your buyers search and what MSP owners search. Getting that distinction wrong is the most common reason MSP content marketing produces engagement from peers and no pipeline.</p>
      <p>The <a href="/resources/msp-pricing-models/">pricing models guide</a> is about packaging: how each pricing structure changes which buyers you attract, and why the pricing page most MSPs refuse to build is one of the few open competitive positions left in most metros.</p>
      <p>Both are national-level analysis. The version that actually drives decisions is the one built for your service area, which is part of the <a href="/gtm-foundation/">GTM Foundation</a>.</p>
    </div>
    <div>
      ${callout({
        title: 'What is in each piece',
        body: `<ul class="tick-list">
          <li>Real search volume and cost-per-click figures</li>
          <li>The reasoning behind the recommendation, not just the conclusion</li>
          <li>What we would not do, and why</li>
          <li>No email gate, no download, no sequence</li>
        </ul>`,
      })}
      ${callout({
        tone: 'success',
        title: 'Applying it yourself',
        body: `<p>Everything here is written so an MSP owner could act on it without hiring anyone. If you would rather have it done for you, that is what we sell — but the analysis stands on its own.</p>`,
      })}
      <h3>Where to go next</h3>
      ${checklist([
        'Building the site yourself? Start with <a href="/msp-website-design/">MSP website design</a>',
        'Deciding what to target? Read <a href="/msp-seo/">SEO for MSPs</a>',
        'Not sure what you are selling? See <a href="/msp-marketing-strategy/">MSP marketing strategy</a>',
      ], { columns: 1 })}
    </div>
  </div>`,
})}

${cta()}
`

export default {
  path: '/resources/',
  title: 'MSP Marketing Resources & Research',
  description:
    'Free MSP marketing research: keyword demand data for managed service providers, pricing model analysis, and the frameworks behind our client engagements.',
  breadcrumbs: [{ label: 'Resources', href: '/resources/' }],
  priority: 0.6,
  body,
}
