// יוצר גרסאות WebP לכל תמונות האירועים + תמונת שיתוף 1200×630.
//
// מריצים ידנית אחרי הוספת/החלפת תמונה:  npm run images
// הפלט נכתב לצד המקור ב-public/assets/ ונכנס ל-git — כך שהבנייה ב-Vercel
// לא תלויה ב-sharp ולא מאטה.
//
// המקורות (.jpg) נשארים כ-fallback בתוך <picture>.

import { readdir, stat } from 'node:fs/promises'
import { join, parse, resolve } from 'node:path'

import sharp from 'sharp'

const ASSETS = resolve(import.meta.dirname, '..', 'public', 'assets')

// שני רוחבים: 600 לנייד, 1200 לדסקטופ ולמסכי רטינה (זו גם רזולוציית המקור).
const WIDTHS = [600, 1200]
const OG = { name: 'og-cover.jpg', source: 'alkalay-event-table-spread.jpg', width: 1200, height: 630 }

const files = (await readdir(ASSETS)).filter(
  (f) => /\.jpe?g$/i.test(f) && f !== OG.name,
)

for (const file of files) {
  const { name } = parse(file)
  const input = join(ASSETS, file)
  const meta = await sharp(input).metadata()

  for (const width of WIDTHS) {
    // לא מגדילים תמונה מעבר לרזולוציית המקור.
    if (meta.width && width > meta.width) continue
    const out = join(ASSETS, `${name}-${width}.webp`)
    await sharp(input).resize({ width }).webp({ quality: 74 }).toFile(out)
    const { size } = await stat(out)
    console.log(`${name}-${width}.webp  ${(size / 1024).toFixed(0)} KB`)
  }
}

// תמונת השיתוף: יחס 1.91:1 שוואטסאפ ופייסבוק מצפים לו. קרופ ממורכז מהמקור.
await sharp(join(ASSETS, OG.source))
  .resize({ width: OG.width, height: OG.height, fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(join(ASSETS, OG.name))

console.log(`${OG.name}  ${OG.width}×${OG.height}`)
