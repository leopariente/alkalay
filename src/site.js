// זהות האתר במקום אחד — כתובת, NAP (שם/כתובת/טלפון) וקואורדינטות.
// כל כתובת URL מוחלטת באתר נגזרת מכאן: canonical, og:url, sitemap.xml, robots.txt ו-JSON-LD.
//
// ── מעבר לדומיין מותג ─────────────────────────────────────────────
// 1. לשנות כאן את SITE_URL (בלי לוכסן בסוף).
// 2. npm run build + דיפלוי — canonical / og / sitemap / robots / JSON-LD מתעדכנים לבד.
// 3. ב-Vercel: להוסיף את הדומיין ולהגדיר alkalay.vercel.app → הדומיין החדש כ-308.
// 4. Search Console: לאמת את הנכס החדש ולשלוח מחדש את sitemap.xml.
// ──────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://alkalay.vercel.app'

export const SITE_NAME = 'קפה אלקלעי'

export const SITE_TITLE = 'אירועים פרטיים בתל אביב | קפה אלקלעי'

export const SITE_DESCRIPTION =
  'אירועים פרטיים בשבת בקפה אלקלעי תל אביב — עד 60 איש, תפריט בהתאמה אישית, יין ובירה מהחבית וחניון צמוד. השאירו פרטים ונחזור אליכם.'

// קישור למקום ב-Google Maps — אותו קישור שמופיע בפוטר.
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Elkalai/@32.0908173,34.7794991,101m/data=!3m1!1e3!4m15!1m8!3m7!1s0x151d4b8b57ff2071:0xd3038414e726c15d!2sElkalai+St+1,+Tel+Aviv-Jaffa,+6274201!3b1!8m2!3d32.0909639!4d34.7795864!16s%2Fg%2F11rr6d0rv1!3m5!1s0x151d4b8b580f0087:0x7694b7f5aafaa823!8m2!3d32.0909639!4d34.7795864!16s%2Fg%2F1tf0sv_w'

export const BUSINESS = {
  name: SITE_NAME,
  street: 'אלקלעי 1',
  city: 'תל אביב',
  postalCode: '6274201',
  country: 'IL',
  region: 'IL-TA',
  // מקביל ל-tel:036041260 שבפוטר, בפורמט בינלאומי לצורך JSON-LD.
  phone: '+972-3-6041260',
  phoneDisplay: '03-6041260',
  lat: 32.0909639,
  lng: 34.7795864,
  maxAttendees: 60,
  priceRange: '₪₪',
  // להוסיף כאן פרופילי אינסטגרם/פייסבוק כשיהיו — זה מה שמקשר בין האתר לישות בגוגל.
  sameAs: [GOOGLE_MAPS_URL],
}

// תמונת שיתוף 1200×630 (WhatsApp / פייסבוק / טוויטר). נוצרת ב-scripts/optimize-images.js.
export const OG_IMAGE = `${SITE_URL}/assets/og-cover.jpg`
export const OG_IMAGE_ALT = 'אירוע פרטי בקפה אלקלעי, תל אביב'
