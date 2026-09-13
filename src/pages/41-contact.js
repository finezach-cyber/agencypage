import { section, sectionHead, callout, checklist, breadcrumbs, faq } from '../components.js'
import { site } from '../site.js'

const faqBlock = faq([
  {
    q: 'What happens on the first call?',
    a: `<p>Thirty minutes. We ask about your services, your best clients, where your margin comes from, your service area and what you have tried before. You get an honest read on where your wedge probably is and whether we are a fit. There is no deck and no second call scheduled before you have decided you want one.</p>`,
  },
  {
    q: 'Are you taking clients in my area?',
    a: `<p>We work with one MSP per metro. If yours is taken we will tell you on that first call rather than sell you something compromised.</p>`,
  },
  {
    q: 'What if we are not ready to start?',
    a: `<p>That is common and fine. Plenty of MSPs talk to us a quarter or two before they do anything. The call is useful on its own — at minimum you leave with a clearer view of the demand in your market.</p>`,
  },
])

/**
 * The form posts to a third-party handler because GitHub Pages has no backend.
 * Until `formEndpoint` is configured we deliberately render a mailto fallback
 * rather than a form that silently drops every submission.
 */
const formConfigured = Boolean(site.formEndpoint)

const formHtml = formConfigured
  ? `<form class="contact-form" action="${site.formEndpoint}" method="POST">
      <div class="form-grid">
        <div class="field">
          <label for="name">Your name <span aria-hidden="true">*</span></label>
          <input type="text" id="name" name="name" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="company">Company <span aria-hidden="true">*</span></label>
          <input type="text" id="company" name="company" autocomplete="organization" required>
        </div>
        <div class="field">
          <label for="email">Email <span aria-hidden="true">*</span></label>
          <input type="email" id="email" name="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" autocomplete="tel">
        </div>
        <div class="field">
          <label for="revenue">Annual revenue</label>
          <select id="revenue" name="revenue">
            <option value="">Prefer not to say</option>
            <option>Under $1M</option>
            <option>$1M – $2M</option>
            <option>$2M – $5M</option>
            <option>$5M – $10M</option>
            <option>Over $10M</option>
          </select>
        </div>
        <div class="field">
          <label for="market">Primary service area</label>
          <input type="text" id="market" name="market" placeholder="e.g. Austin metro">
          <span class="field__hint">We work with one MSP per metro.</span>
        </div>
        <div class="field field--full">
          <label for="message">What are you trying to fix? <span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" required placeholder="Where growth comes from today, what you have tried, and what prompted you to look now."></textarea>
        </div>
        <div class="field field--full">
          <label class="hp" for="website-url">Leave this field empty</label>
          <input class="hp" type="text" id="website-url" name="_gotcha" tabindex="-1" autocomplete="off">
          <button class="btn btn--primary btn--lg" type="submit">Send message</button>
          <p class="form-note">We reply within one business day. No sequence, no newsletter — just a reply from a person.</p>
        </div>
      </div>
    </form>`
  : `${callout({
      tone: 'warn',
      title: 'Form endpoint not configured yet',
      body: `<p>This site is deployed as static files, so the contact form needs a third-party handler before it can accept submissions. Rather than show a form that silently discards leads, we are showing you this.</p>
      <p><strong>To enable it:</strong> create a form at <a href="https://formspree.io" rel="noopener">Formspree</a> (or any equivalent) and paste the endpoint into <code>formEndpoint</code> in <code>src/site.js</code>, then rebuild.</p>
      <p>In the meantime, email <a href="mailto:${site.email}">${site.email}</a> or call <a href="tel:${site.phone}">${site.phoneDisplay}</a>.</p>`,
    })}`

const body = `
${breadcrumbs([{ label: 'Contact', href: '/contact/' }])}

${section({
  inner: `
  <div class="split split--sticky">
    <div>
      ${sectionHead({
        eyebrow: 'Book a GTM call',
        title: 'Find out what your MSP should actually be selling',
        intro: `Thirty minutes. We look at your services, your market and your competitors, and tell you where the demand is. No deck, no pitch sequence, no second call unless you want one.`,
        level: 1,
      })}
      ${formHtml}
      <!-- BOOKING EMBED SLOT: when you have a Calendly / Cal.com / HubSpot link,
           drop the inline embed here and set bookingUrl in src/site.js so every
           CTA on the site points at it instead of this page. -->
    </div>
    <div>
      ${callout({
        title: 'On that call we will cover',
        body: `<ul class="tick-list">
          <li>What you are genuinely good at, and where your margin comes from</li>
          <li>Concentrations in your client base you may not have noticed</li>
          <li>What buyers in your service area are searching for</li>
          <li>Where your competitors are already winning</li>
          <li>Whether your metro is available</li>
        </ul>`,
      })}
      <h2>Other ways to reach us</h2>
      <p>
        <strong>Email:</strong> <a href="mailto:${site.email}">${site.email}</a><br>
        <strong>Phone:</strong> <a href="tel:${site.phone}">${site.phoneDisplay}</a><br>
        <strong>Based in:</strong> ${site.city}, ${site.region} — working with MSPs across the US
      </p>
      <h2>Before you get in touch</h2>
      ${checklist(
        [
          'We work with MSPs doing roughly $2–5M',
          'We take one client per metro',
          'We start with the foundation, not a lead-gen retainer',
          'If it is not a fit we will say so on the first call',
        ],
        { columns: 1 },
      )}
    </div>
  </div>`,
})}

${section({ tone: 'muted', inner: faqBlock.html })}
`

export default {
  path: '/contact/',
  title: 'Contact | Book a GTM Call for Your MSP',
  description:
    'Book a 30-minute GTM call. We look at your services, market and competitors and tell you where the demand is — and whether your metro is available.',
  breadcrumbs: [{ label: 'Contact', href: '/contact/' }],
  priority: 0.7,
  schemaType: 'ContactPage',
  schema: [faqBlock.schema],
  body,
}
