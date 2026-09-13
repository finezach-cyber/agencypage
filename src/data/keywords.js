/**
 * Keyword demand data used across the site.
 *
 * Two distinct lists, and the distinction is the whole strategy:
 *
 *  - `agencyDemand` is what an MSP *owner* searches when they have decided to
 *    hire marketing help. This is what OUR site targets.
 *  - `buyerDemand` is what a business searches when it wants to hire an MSP.
 *    This is what our CLIENTS' sites target. We publish it as evidence, but we
 *    deliberately do not build pages against it — see /resources/msp-keyword-research/.
 *
 * Volumes are US monthly search volume; CPC is Google Ads average cost per
 * click. `null` CPC means no reliable figure was available.
 */

/** Cluster 1 — our home page. 1,340/mo */
export const agencyCore = [
  { keyword: 'msp marketing', volume: 720, cpc: 35.87 },
  { keyword: 'msp marketing agency', volume: 210, cpc: 26.15 },
  { keyword: 'msp marketing company', volume: 140, cpc: null },
  { keyword: 'msp marketing services', volume: 110, cpc: 38.12 },
  { keyword: 'msp digital marketing', volume: 90, cpc: 28.12 },
  { keyword: 'msp marketing firm', volume: 40, cpc: null },
  { keyword: 'msp marketing consultant', volume: 30, cpc: null },
]

/** Cluster 2 — /msp-seo/. 600/mo */
export const seoCluster = [
  { keyword: 'msp seo', volume: 140, cpc: 89.43 },
  { keyword: 'seo for it companies', volume: 140, cpc: null },
  { keyword: 'msp seo agency', volume: 110, cpc: null },
  { keyword: 'msp seo services', volume: 90, cpc: null },
  { keyword: 'it services seo', volume: 90, cpc: null },
  { keyword: 'local seo for msp', volume: 20, cpc: null },
  { keyword: 'msp local seo', volume: 10, cpc: null },
]

/** Cluster 3 — /msp-website-design/. 490/mo */
export const websiteCluster = [
  { keyword: 'msp website', volume: 320, cpc: null },
  { keyword: 'msp website design', volume: 110, cpc: null },
  { keyword: 'it company website design', volume: 50, cpc: null },
  { keyword: 'it services website design', volume: 10, cpc: null },
]

/** Cluster 4 — /msp-lead-generation/. 460/mo */
export const leadGenCluster = [
  { keyword: 'msp lead generation', volume: 170, cpc: 66.96 },
  { keyword: 'msp leads', volume: 70, cpc: 43.8 },
  { keyword: 'msp lead generation services', volume: 70, cpc: 61.67 },
  { keyword: 'lead generation for msp', volume: 70, cpc: 21.17 },
  { keyword: 'msp sales leads', volume: 40, cpc: null },
  { keyword: 'managed services lead generation', volume: 20, cpc: null },
  { keyword: 'it services lead generation', volume: 20, cpc: null },
]

/** Cluster 5 — /msp-marketing-strategy/. 250/mo */
export const strategyCluster = [
  { keyword: 'msp marketing strategy', volume: 140, cpc: null },
  { keyword: 'msp marketing plan', volume: 110, cpc: null },
]

/**
 * What businesses search when they want to hire an MSP. 40,970/mo.
 * This is the demand we build our clients' sites against.
 */
export const buyerDemand = [
  { keyword: 'it support near me', volume: 9900, cpc: 31.72 },
  { keyword: 'managed it services near me', volume: 8100, cpc: 60.69 },
  { keyword: 'it services near me', volume: 8100, cpc: 42.19 },
  { keyword: 'managed it services provider', volume: 5400, cpc: 98.09 },
  { keyword: 'it support company', volume: 5400, cpc: 75.37 },
  { keyword: 'outsourced it support', volume: 2400, cpc: 71.16 },
  { keyword: 'managed service provider near me', volume: 1600, cpc: 28.59 },
  { keyword: 'best managed service provider', volume: 70, cpc: null },
]

/** Vertical demand — only worth targeting when the MSP actually serves the vertical. */
export const verticalDemand = [
  { keyword: 'healthcare it services', volume: 480, cpc: 32.43 },
  { keyword: 'it services for accounting firms', volume: 90, cpc: null },
  { keyword: 'it support for dental practices', volume: 40, cpc: 97.83 },
  { keyword: 'msp for law firms', volume: 30, cpc: 58.51 },
]

export const sum = (rows) => rows.reduce((t, r) => t + r.volume, 0)

/** Average CPC across rows that have one — used to price the organic traffic. */
export const avgCpc = (rows) => {
  const priced = rows.filter((r) => typeof r.cpc === 'number')
  if (!priced.length) return null
  return priced.reduce((t, r) => t + r.cpc, 0) / priced.length
}
