#!/usr/bin/env node
/**
 * Post-build validator. Fails the build on anything that would quietly hurt
 * rankings or break navigation:
 *
 *   - internal links that 404
 *   - missing / duplicate / overlong titles and meta descriptions
 *   - missing canonical, zero or multiple <h1>
 *   - invalid JSON-LD
 *   - orphan pages (reachable from nothing)
 *   - images without alt text
 *
 * Run with: npm run check
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from './src/site.js'

const root = dirname(fileURLToPath(import.meta.url))
const DIST = join(root, 'dist')

/**
 * When built with BASE_PATH, every in-page link is prefixed with it but the
 * files still sit at the root of dist/. Strip it before resolving.
 */
const unprefix = (href) =>
  site.basePath && href.startsWith(site.basePath + '/') ? href.slice(site.basePath.length) : href

const TITLE_MAX = 60
const DESC_MIN = 70
const DESC_MAX = 155

const errors = []
const warnings = []
const fail = (page, msg) => errors.push(`${page}: ${msg}`)
const warn = (page, msg) => warnings.push(`${page}: ${msg}`)

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else out.push(full)
  }
  return out
}

const exists = async (p) => {
  try {
    await stat(p)
    return true
  } catch {
    return false
  }
}

/** '/msp-seo/' → does dist/msp-seo/index.html exist? */
async function resolvesInDist(href) {
  const clean = unprefix(href.split('#')[0].split('?')[0])
  if (clean === '' || clean === '/') return exists(join(DIST, 'index.html'))
  const base = join(DIST, clean.replace(/^\//, ''))
  if (clean.endsWith('/')) return exists(join(base, 'index.html'))
  return (await exists(base)) || exists(join(base, 'index.html'))
}

const attr = (html, re) => {
  const m = html.match(re)
  return m ? m[1] : null
}

async function main() {
  if (!(await exists(DIST))) {
    console.error('dist/ not found — run `npm run build` first.')
    process.exit(1)
  }

  const files = (await walk(DIST)).filter((f) => f.endsWith('.html'))
  const titles = new Map()
  const descriptions = new Map()
  const linkedTo = new Set()
  const pageUrls = new Set()

  const pages = []
  for (const file of files) {
    const html = await readFile(file, 'utf8')
    const rel = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/')
    pages.push({ rel, file, html })
    pageUrls.add(rel)
  }

  for (const { rel, html } of pages) {
    const isNoindex = /name="robots" content="noindex/.test(html)

    // --- title -----------------------------------------------------------
    const title = attr(html, /<title>([^<]*)<\/title>/)
    if (!title) fail(rel, 'missing <title>')
    else {
      if (title.length > TITLE_MAX) fail(rel, `title is ${title.length} chars (max ${TITLE_MAX}): "${title}"`)
      if (titles.has(title)) fail(rel, `duplicate title, also used by ${titles.get(title)}`)
      titles.set(title, rel)
    }

    // --- meta description ------------------------------------------------
    const desc = attr(html, /<meta name="description" content="([^"]*)"/)
    if (!desc) fail(rel, 'missing meta description')
    else {
      if (desc.length > DESC_MAX) fail(rel, `meta description is ${desc.length} chars (max ${DESC_MAX})`)
      if (desc.length < DESC_MIN && !isNoindex) warn(rel, `meta description is only ${desc.length} chars`)
      if (descriptions.has(desc)) fail(rel, `duplicate meta description, also used by ${descriptions.get(desc)}`)
      descriptions.set(desc, rel)
    }

    // --- canonical + h1 --------------------------------------------------
    if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) fail(rel, 'missing or relative canonical')

    const h1s = html.match(/<h1[\s>]/g) || []
    if (h1s.length === 0) fail(rel, 'no <h1>')
    else if (h1s.length > 1) fail(rel, `${h1s.length} <h1> elements (expected exactly 1)`)

    // --- open graph ------------------------------------------------------
    for (const prop of ['og:title', 'og:description', 'og:url', 'og:image']) {
      if (!html.includes(`property="${prop}"`)) fail(rel, `missing ${prop}`)
    }

    // --- structured data -------------------------------------------------
    const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    if (!ld) fail(rel, 'missing JSON-LD')
    else {
      try {
        const parsed = JSON.parse(ld[1])
        if (!parsed['@context'] || !parsed['@graph']) fail(rel, 'JSON-LD missing @context or @graph')
      } catch (e) {
        fail(rel, `JSON-LD does not parse: ${e.message}`)
      }
    }

    // --- images ----------------------------------------------------------
    for (const img of html.match(/<img\b[^>]*>/g) || []) {
      if (!/\salt=/.test(img)) fail(rel, `<img> without alt attribute: ${img.slice(0, 70)}`)
    }

    // --- internal links --------------------------------------------------
    for (const m of html.matchAll(/\bhref="(\/[^"]*)"/g)) {
      const href = m[1]
      if (href.startsWith('//')) continue
      if (!(await resolvesInDist(href))) fail(rel, `broken internal link: ${href}`)
      const target = unprefix(href.split('#')[0].split('?')[0])
      if (target !== rel) linkedTo.add(target)
    }

    // --- content depth ---------------------------------------------------
    const text = html
      .replace(/<script[\s\S]*?<\/script>/g, '')
      .replace(/<style[\s\S]*?<\/style>/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    const words = text.split(' ').length
    if (words < 400 && !isNoindex && rel !== '/privacy/') warn(rel, `only ~${words} words of content`)
  }

  // --- orphans -----------------------------------------------------------
  for (const url of pageUrls) {
    if (url === '/' || url === '/404.html') continue
    if (!linkedTo.has(url)) warn(url, 'orphan page — nothing links to it')
  }

  // --- sitemap -----------------------------------------------------------
  const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8')
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  for (const url of pageUrls) {
    const noindex = (await readFile(join(DIST, url === '/' ? 'index.html' : url.endsWith('.html') ? url.slice(1) : join(url.slice(1), 'index.html')), 'utf8')).includes('content="noindex')
    const inSitemap = locs.some((l) => l.endsWith(url))
    if (noindex && inSitemap) fail(url, 'noindexed page is listed in sitemap.xml')
    if (!noindex && !inSitemap) fail(url, 'indexable page missing from sitemap.xml')
  }

  // --- report ------------------------------------------------------------
  console.log(`Checked ${pages.length} pages, ${locs.length} sitemap entries.\n`)
  if (warnings.length) {
    console.log(`Warnings (${warnings.length}):`)
    warnings.forEach((w) => console.log('  ! ' + w))
    console.log('')
  }
  if (errors.length) {
    console.log(`Errors (${errors.length}):`)
    errors.forEach((e) => console.log('  x ' + e))
    process.exit(1)
  }
  console.log('No errors.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
