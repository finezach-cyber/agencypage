import { section, sectionHead, cards } from '../components.js'

const body = `
${section({
  inner: `
  <div style="text-align:center;max-width:60ch;margin-inline:auto">
    ${sectionHead({
      eyebrow: 'Error 404',
      title: 'That page does not exist',
      intro: `The link may be out of date, or the page may have moved. The most frequently requested pages are below.`,
      align: 'center',
      level: 1,
    })}
    <a class="btn btn--primary btn--lg" href="/">Back to the home page</a>
  </div>
  <div style="margin-top:3.5rem">
    ${cards([
      { title: 'The process', href: '/process/', body: 'Both phases, with inputs and deliverables at every stage.' },
      { title: 'MSP lead generation', href: '/msp-lead-generation/', body: 'Inbound and outbound run from one ICP and one position.' },
      { title: 'MSP SEO', href: '/msp-seo/', body: 'Local and organic search for the terms your buyers use.' },
      { title: 'MSP marketing services', href: '/msp-marketing-services/', body: 'The full scope across both engagements.' },
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
