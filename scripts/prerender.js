// בנייה בשני שלבים + הזרקת HTML סטטי, JSON-LD, sitemap ו-robots.
//
// למה: האתר הוא SPA, ולכן ה-HTML שנשלח מכיל רק <div id="root"></div>.
// גוגלבוט מריץ JS, אבל Bing, וואטסאפ, פייסבוק וטוויטר לא — הם היו רואים דף ריק.
// כאן מרנדרים את <App /> למחרוזת ומזריקים אותה ל-dist/index.html; ב-main.jsx
// React עושה hydrate על אותו markup.
//
// כל כתובת מוחלטת נגזרת מ-SITE_URL שב-src/site.js — החלפת דומיין = שורה אחת שם.

import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

import { build } from 'vite'

import {
  BUSINESS,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '../src/site.js'

const ROOT = resolve(import.meta.dirname, '..')
const DIST = join(ROOT, 'dist')
// כתובת ברירת המחדל הכתובה ב-index.html; נדרסת ב-SITE_URL אם הוא שונה.
const PLACEHOLDER_ORIGIN = 'https://alkalay.vercel.app'

/* ---------- 1. בנייה ---------- */

// ה-API של Vite ולא ה-CLI: spawn של npx.cmd נשבר בווינדוס (EINVAL).
await build({ root: ROOT })

// הבנייה חייבת לשבת בתוך הפרויקט — react מסומן כ-external ב-SSR, וייבוא מתיקיית
// temp חיצונית לא היה מוצא את node_modules.
const ssrDir = mkdtempSync(join(ROOT, 'node_modules', '.alkalay-ssr-'))
await build({
  root: ROOT,
  build: { ssr: 'src/entry-server.jsx', outDir: ssrDir, emptyOutDir: true },
})

const { render } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const appHtml = render()
rmSync(ssrDir, { recursive: true, force: true })

if (!appHtml || appHtml.length < 500) {
  throw new Error(`prerender: הפלט קצר מדי (${appHtml?.length ?? 0} תווים) — משהו נשבר`)
}

/* ---------- 2. JSON-LD ---------- */

// שבת בלבד, שלושה חלונות אירוח. תואם ל-HERO_FACTS ולפוטר.
const saturdayHours = [
  { opens: '09:00', closes: '12:30' },
  { opens: '12:30', closes: '17:00' },
  { opens: '18:00', closes: '23:30' },
].map((slot) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: 'https://schema.org/Saturday',
  opens: slot.opens,
  closes: slot.closes,
}))

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'CafeOrCoffeeShop'],
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS.name,
      description: SITE_DESCRIPTION,
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      logo: `${SITE_URL}/assets/logo.jpg`,
      telephone: BUSINESS.phone,
      priceRange: BUSINESS.priceRange,
      currenciesAccepted: 'ILS',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.lat,
        longitude: BUSINESS.lng,
      },
      hasMap: BUSINESS.sameAs[0],
      sameAs: BUSINESS.sameAs,
      maximumAttendeeCapacity: BUSINESS.maxAttendees,
      openingHoursSpecification: saturdayHours,
      areaServed: { '@type': 'City', name: BUSINESS.city },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'he-IL',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#events`,
      name: 'אירועים פרטיים בקפה אלקלעי',
      serviceType: 'אירוח אירועים פרטיים',
      description:
        'אירועים פרטיים בשבת עד 60 איש — ימי הולדת, מסיבות פרטיות ואירועים אינטימיים, ' +
        'עם תפריט בהתאמה אישית, יין ובירה מהחבית, בפנים ובחצר.',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'City', name: BUSINESS.city },
      audience: { '@type': 'Audience', audienceType: 'אירועים פרטיים' },
    },
  ],
}

// </script> בתוך JSON היה סוגר את התג מוקדם.
const jsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c')

/* ---------- 3. הזרקה ל-index.html ---------- */

const indexPath = join(DIST, 'index.html')
let html = readFileSync(indexPath, 'utf8')

if (!html.includes('<div id="root"></div>')) {
  throw new Error('prerender: לא נמצא <div id="root"></div> ב-dist/index.html')
}

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
html = html.replace(
  '</head>',
  `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`,
)

if (SITE_URL !== PLACEHOLDER_ORIGIN) {
  html = html.replaceAll(PLACEHOLDER_ORIGIN, SITE_URL)
}

// og:image:alt מגיע מ-site.js כדי שלא יסטה מהתמונה עצמה.
html = html.replace(
  /(<meta property="og:image:alt" content=")[^"]*(")/,
  `$1${OG_IMAGE_ALT}$2`,
)

writeFileSync(indexPath, html)

/* ---------- 4. robots.txt + sitemap.xml ---------- */

writeFileSync(
  join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

const lastmod = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
)

console.log(
  `\nprerender: ${appHtml.length} תווים הוזרקו, JSON-LD + robots.txt + sitemap.xml נכתבו (${SITE_TITLE})`,
)
