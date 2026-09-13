/**
 * Search demand this site is built against.
 *
 * One market only: the MSP owner who has already decided to hire marketing
 * help. 2,090 searches a month. Every page maps to one cluster below, and no
 * two pages compete for the same query.
 *
 * Volumes are US monthly search volume; `cpc` is the average Google Ads cost
 * per click. `null` means no reliable figure was available.
 */

/** Home page. 1,160/mo */
export const coreCluster = [
  { keyword: 'msp marketing', volume: 720, cpc: 35.87 },
  { keyword: 'msp marketing agency', volume: 210, cpc: 26.15 },
  { keyword: 'msp marketing company', volume: 140, cpc: null },
  { keyword: 'msp digital marketing', volume: 90, cpc: 28.12 },
]

/** /msp-lead-generation/. 400/mo */
export const leadGenCluster = [
  { keyword: 'msp lead generation', volume: 170, cpc: 66.96 },
  { keyword: 'msp leads', volume: 70, cpc: 43.8 },
  { keyword: 'msp lead generation services', volume: 70, cpc: 61.67 },
  { keyword: 'lead generation for msp', volume: 70, cpc: 21.17 },
  { keyword: 'it services lead generation', volume: 20, cpc: null },
]

/** /msp-marketing-strategy/. 250/mo */
export const strategyCluster = [
  { keyword: 'msp marketing strategy', volume: 140, cpc: null },
  { keyword: 'msp marketing plan', volume: 110, cpc: null },
]

/** /msp-seo/. 140/mo, plus the phrasing variants that resolve to the same intent. */
export const seoCluster = [
  {
    keyword: 'msp seo',
    volume: 140,
    cpc: 89.43,
    note: 'also: seo for msp, seo for msps, seo for managed service providers',
  },
]

/** /msp-marketing-services/. 110/mo */
export const servicesCluster = [{ keyword: 'msp marketing services', volume: 110, cpc: 38.12 }]

/** /msp-pricing-models/. 30/mo */
export const pricingCluster = [{ keyword: 'msp pricing models', volume: 30, cpc: 63.4 }]

/**
 * Illustration only, used once inside /process/#research.
 *
 * This is what a business searches when it wants to hire an MSP — our clients'
 * demand, not ours. It appears on the site to demonstrate the market research
 * step. We deliberately do not build pages against it: those searchers want to
 * hire a provider, not a marketing firm.
 */
export const clientDemandExample = [
  { keyword: 'it support near me', volume: 9900, cpc: 31.72 },
  { keyword: 'managed it services near me', volume: 8100, cpc: 60.69 },
  { keyword: 'managed it services provider', volume: 5400, cpc: 98.09 },
  { keyword: 'it support company', volume: 5400, cpc: 75.37 },
  { keyword: 'outsourced it support', volume: 2400, cpc: 71.16 },
  { keyword: 'healthcare it services', volume: 480, cpc: 32.43 },
  { keyword: 'it support for dental practices', volume: 40, cpc: 97.83 },
]

export const sum = (rows) => rows.reduce((total, row) => total + row.volume, 0)

/** Total List 1 demand across every cluster the site targets. */
export const targetedDemand = [
  ...coreCluster,
  ...leadGenCluster,
  ...strategyCluster,
  ...seoCluster,
  ...servicesCluster,
  ...pricingCluster,
]
