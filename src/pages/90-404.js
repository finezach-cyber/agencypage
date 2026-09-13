import { section, sectionHead, cards } from '../components.js'

const body = `
${section({
  inner: `
  <div style="text-align:center;max-width:60ch;margin-inline:auto">
    ${sectionHead({
      eyebrow: 'Error 404',
      title: 'That page does not exist',
      intro: `The link may be out of date, or the page may have moved. Here is where most people are heading.`,
      align: 'center',
      level: 1,
    })}
    <a class="btn btn--primary btn--lg" href="/">Back to the home page</a>
  </div>
  <div style="margin-top:3.5rem">
    ${cards([
      { title: 'MSP lead generation', href: '/msp-lead-generation/', body: 'Inbound and outbound built on one ICP and one story.' },
      { title: 'SEO for MSPs', href: '/msp-seo/', body: 'Local and organic search for the terms your buyers type.' },
      { title: 'MSP website design', href: '/msp-website-design/', body: 'Sites built to rank and convert, shipped in month one.' },
      { title: 'MSP keyword research', href: '/resources/msp-keyword-research/', body: '40,970 monthly searches, mapped and explained.' },
    ], { columns: 4 })}
  </div>`,
})}
`

export default {
  path: '/404.html',
  title: 'Page Not Found',
  description: 'The page you were looking for does not exist or has moved.',
  noindex: true,
  body,
}
