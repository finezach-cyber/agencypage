#!/usr/bin/env node
/**
 * Zero-dependency static site build.
 *
 *   node build.js            → renders dist/ for a root-domain deploy
 *   BASE_PATH=/agencypage node build.js
 *                            → renders for a GitHub Pages *project* site served
 *                              from a subdirectory
 *
 * Every page module in src/pages/ exports a default object:
 *   { path, title, description, breadcrumbs?, schema?, body, ... }
 */
import { readdir, mkdir, writeFile, rm, cp, readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { renderPage } from './src/layout.js'
import { site } from './src/site.js'

const root = dirname(fileURLToPath(import.meta.url))
const OUT = join(root, 'dist')
const PAGES_DIR = join(root, 'src', 'pages')

/**
 * Rewrites root-relative URLs so the site works when served from a
 * subdirectory. No-op when basePath is empty.
 */
function applyBasePath(html) {
  if (!site.basePath) return html
  return html.replace(
    /\b(href|src|action|content)="\/(?!\/)/g,
    (_m, attr) => `${attr}="${site.basePath}/`,
  )
}

function sitemap(pages) {
  const entries = pages
    // A site-level noindex yields a valid but empty sitemap, rather than one
    // that contradicts the robots meta tag on every page it lists.
    .filter((p) => !site.noindex && !p.noindex && p.path !== '/404.html')
    .sort((a, b) => (b.priority || 0.5) - (a.priority || 0.5))
    .map(
      (p) => `  <url>
    <loc>${site.domain}${site.basePath}${p.path}</loc>
    <lastmod>${p.dateModified || site.buildDate}</lastmod>
    <changefreq>${p.changefreq || 'monthly'}</changefreq>
    <priority>${(p.priority ?? 0.6).toFixed(1)}</priority>
  </url>`,
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`
}

function robots() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Block nothing of substance — this is a marketing site and every page is
# meant to be indexed. 404 is noindexed via meta tag.

Sitemap: ${site.domain}${site.basePath}/sitemap.xml
`
}

async function loadPages() {
  const files = (await readdir(PAGES_DIR)).filter((f) => f.endsWith('.js')).sort()
  const pages = []
  for (const file of files) {
    const mod = await import(pathToFileURL(join(PAGES_DIR, file)).href)
    const page = typeof mod.default === 'function' ? mod.default() : mod.default
    if (!page || !page.path) throw new Error(`src/pages/${file} has no default export with a path`)
    page.sourceFile = file
    pages.push(page)
  }
  return pages
}

/** '/msp-seo/' → 'dist/msp-seo/index.html'; '/404.html' → 'dist/404.html' */
function outputPath(urlPath) {
  if (urlPath.endsWith('.html')) return join(OUT, urlPath.replace(/^\//, ''))
  return join(OUT, urlPath.replace(/^\//, ''), 'index.html')
}

async function build() {
  const started = Date.now()
  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })

  // Content hash of the stylesheet, so /assets/* can be cached immutably while
  // a CSS change still reaches returning visitors. Set before pages render.
  const css = await readFile(join(root, 'src', 'assets', 'styles.css'), 'utf8')
  site.assetVersion = createHash('sha256').update(css).digest('hex').slice(0, 8)

  const pages = await loadPages()
  const seen = new Set()
  for (const page of pages) {
    if (seen.has(page.path)) throw new Error(`Duplicate page path: ${page.path}`)
    seen.add(page.path)
    const file = outputPath(page.path)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, applyBasePath(renderPage(page)), 'utf8')
  }

  await cp(join(root, 'src', 'assets'), join(OUT, 'assets'), { recursive: true })
  await writeFile(join(OUT, 'sitemap.xml'), sitemap(pages), 'utf8')
  await writeFile(join(OUT, 'robots.txt'), robots(), 'utf8')
  // GitHub Pages runs Jekyll by default, which drops files it doesn't recognise.
  await writeFile(join(OUT, '.nojekyll'), '', 'utf8')
  if (site.customDomain) await writeFile(join(OUT, 'CNAME'), site.customDomain + '\n', 'utf8')

  console.log(
    `Built ${pages.length} pages in ${Date.now() - started}ms → dist/${site.basePath ? ` (base path ${site.basePath})` : ''}`,
  )
}

build().catch((err) => {
  console.error(err)
  process.exit(1)
})
