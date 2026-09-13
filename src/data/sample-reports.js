/**
 * Sample deliverables shown on the site.
 *
 * IMPORTANT: every figure here is illustrative and the firm is fictional.
 * "Northway IT" is not a client and these are not results we have produced.
 * Each mock renders with a visible "Sample" stamp and a caption saying so.
 * If you replace these with real client data, get written permission first
 * and update the captions — do not leave a real report labelled as a sample.
 */
import { reportMock, docTable, funnelSteps } from '../components.js'

export function opportunitiesSample() {
  return reportMock({
    kicker: 'Deliverable 1 — Opportunities Report',
    company: 'Northway IT',
    meta: '42 staff &middot; $3.8M revenue &middot; managed IT and cybersecurity',
    caption:
      'Illustrative sample. Northway IT is a fictional firm and every figure shown is representative rather than an actual result.',
    sections: [
      {
        title: 'Local search relevance',
        body: `<p><span class="doc__verdict">Relevant — service area concentrated in three counties</span></p>
          <p class="doc__note">Roughly two thirds of demand for this firm's services carries local intent, so map visibility and review volume gate the result. Where a provider sells a specialised service nationally, this section returns the opposite finding and the strategy changes accordingly.</p>`,
      },
      {
        title: 'The three opportunities',
        body: `${docTable({
          head: ['Opportunity', 'Demand / mo', 'Competition', 'Validated price'],
          rows: [
            ['Co-managed IT for in-house teams', '1,240', 'Medium', '$6,500'],
            ['Microsoft 365 security hardening', '880', 'Low', '$7,500'],
            ['HIPAA compliance readiness assessment', '390', 'Low', '$9,000'],
          ],
        })}
        <p class="doc__note">Ranked by demand against competitive difficulty, not by volume alone. Each is shaped as a land-and-expand offer and priced against what comparable firms currently charge.</p>`,
      },
      {
        title: 'Opportunity 1 — co-managed IT, in detail',
        body: `<p><strong>Why this one.</strong> Northway already supports four organisations with internal IT staff and retains them longer than any other segment, at a higher margin. The market term is searched consistently and the pages currently ranking are thin service listings from generalist providers.</p>
          <p><strong>Who it is for.</strong> Organisations of 100+ seats with one overextended IT manager — too large to outsource entirely, too small to build a team.</p>
          <p><strong>Price.</strong> $6,500 for the initial engagement, validated against six comparable offers in adjacent markets. Positioned as the entry point to a full co-managed agreement.</p>
          ${docTable({
            head: ['Keyword', 'Searches / mo', 'Top-ranking page strength'],
            rows: [
              ['co-managed it services', '720', 'Weak'],
              ['co managed it support', '310', 'Weak'],
              ['it support for internal it teams', '210', 'Moderate'],
            ],
            foot: ['Total addressable demand', '1,240', ''],
          })}`,
      },
    ],
  })
}

export function impactSample() {
  return reportMock({
    kicker: 'Deliverable 3 — GTM Foundations Impact Report',
    company: 'Northway IT',
    meta: 'Projection for the three opportunities identified',
    caption:
      'Illustrative sample. In a delivered report every conversion rate is cited to a named published source so it can be checked independently.',
    sections: [
      {
        title: 'Ranking projection',
        body: `${docTable({
          head: ['Target term', 'Today', 'After deployment', 'With best practice'],
          rows: [
            ['co-managed it services', 'Not ranking', '11–16', '4–7'],
            ['microsoft 365 security', 'Not ranking', '14–20', '5–9'],
            ['hipaa compliance it', '38', '9–14', '3–6'],
            ['Brand name', '1', '1', '1'],
          ],
        })}
        <p class="doc__note">"With best practice" assumes an authoritative reference presence, managed LinkedIn content, consistent outbound and active reputation management alongside the deployed site.</p>`,
      },
      {
        title: 'From rankings to revenue',
        body: `${funnelSteps([
          { label: 'Monthly search demand across the three opportunities', value: '2,510', rate: 'Combined volume from the Opportunities Report' },
          { label: 'Clicks to the site at projected positions', value: '188', rate: 'Applying published click-through rates by ranking position' },
          { label: 'Enquiries and booked meetings', value: '9', rate: 'Applying benchmark B2B visit-to-enquiry conversion' },
          { label: 'Closed engagements', value: '2', rate: 'Applying benchmark meeting-to-close rate for professional services' },
          { label: 'Initial revenue per month', value: '$14,500', rate: 'At the validated prices in the Opportunities Report' },
          { label: 'Expanded annual value', value: '$96,000', rate: 'Applying benchmark land-and-expand rates to ongoing agreements' },
        ])}
        <p class="doc__note">Every rate above is cited rather than asserted. The projection is a model, not a guarantee — it shows what the identified demand is worth if benchmark conversion holds.</p>`,
      },
      {
        title: 'What raises the ceiling',
        body: `<ul class="tick-list">
          <li>An authoritative, citable reference presence for the firm</li>
          <li>Managed LinkedIn content aimed at the same three opportunities</li>
          <li>Outbound to the accounts that match each opportunity</li>
          <li>Sustained review generation across the service area</li>
        </ul>
        <p class="doc__note">These are the difference between the "after deployment" and "best practice" columns above. The report quantifies each so the next investment can be prioritised.</p>`,
      },
    ],
  })
}
