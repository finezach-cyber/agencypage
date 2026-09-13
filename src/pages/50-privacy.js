import { section, sectionHead, breadcrumbs, callout } from '../components.js'
import { site } from '../site.js'

const body = `
${breadcrumbs([{ label: 'Privacy', href: '/privacy/' }])}

${section({
  inner: `
  <div class="prose">
    ${sectionHead({ eyebrow: 'Legal', title: 'Privacy policy', level: 1 })}
    ${callout({
      tone: 'warn',
      title: 'Template — have this reviewed',
      body: `<p>This is a starting point written to match how the site is actually built. It is not legal advice. Before launch, have counsel review it against your jurisdiction and the tools you end up running (analytics, CRM, call tracking, outbound platforms), and update the effective date.</p>`,
    })}

    <p><strong>Effective date:</strong> ${site.buildDate}</p>

    <h2>Who we are</h2>
    <p>${site.legalName} ("we", "us") is a marketing agency working with managed service providers. You can reach us at <a href="mailto:${site.email}">${site.email}</a> or ${site.phoneDisplay}.</p>

    <h2>What we collect</h2>
    <p><strong>Information you give us.</strong> When you submit the contact form we collect your name, company, email address, and anything else you choose to include — phone number, revenue range, service area and your message. We use it to respond to you and, if we work together, to deliver the engagement.</p>
    <p><strong>Information collected automatically.</strong> Standard web analytics: pages viewed, approximate location derived from IP address, referring site, device and browser type. We use this to understand which pages are useful and to improve the site.</p>
    <p>We do not sell personal information, and we do not share it with third parties for their own marketing.</p>

    <h2>Cookies and analytics</h2>
    <p>This site uses only the cookies required by its analytics provider, if one is configured. It does not run advertising or cross-site tracking pixels. You can block cookies in your browser without losing any functionality on this site.</p>

    <h2>How long we keep it</h2>
    <p>Contact enquiries are retained for as long as there is an active or plausible business relationship, and deleted on request. Analytics data is retained according to the provider's standard retention period.</p>

    <h2>Service providers</h2>
    <p>We use third-party services to run this site and our business — form handling, email, analytics and CRM. Those providers process data on our behalf under their own terms and security commitments.</p>

    <h2>Your rights</h2>
    <p>Depending on where you live, you may have the right to access, correct, delete or export the personal information we hold about you, and to object to certain processing. Email <a href="mailto:${site.email}">${site.email}</a> and we will handle the request; we will not ask why.</p>

    <h2>Security</h2>
    <p>The site is served over HTTPS. We limit access to enquiry data to the people who need it. No system is perfectly secure, but we do not collect sensitive categories of personal data in the first place.</p>

    <h2>Children</h2>
    <p>This site is intended for business use and is not directed at anyone under 16.</p>

    <h2>Changes</h2>
    <p>If we change this policy we will update the effective date above. Material changes will be noted on this page.</p>

    <h2>Contact</h2>
    <p>Questions about this policy: <a href="mailto:${site.email}">${site.email}</a>.</p>
  </div>`,
})}
`

export default {
  path: '/privacy/',
  title: 'Privacy Policy',
  description:
    'How we collect, use and retain information submitted through this website, and how to request access to or deletion of your personal information.',
  breadcrumbs: [{ label: 'Privacy', href: '/privacy/' }],
  priority: 0.2,
  changefreq: 'yearly',
  body,
}
