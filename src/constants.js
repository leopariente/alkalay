// כל הקבועים של האתר במקום אחד — תוכן, נכסים והגדרות טופס.
import { CakeIcon, GlassesIcon, DoveIcon } from './components/icons.jsx'

/* ---------- טופס יצירת קשר (Web3Forms) ---------- */

// מפתח הגישה ציבורי מעצם הגדרתו — הוא רק מנתב לתיבה שלנו.
// אפשר לדרוס דרך .env במשתנה VITE_WEB3FORMS_KEY.
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || '0445a1c5-274c-4cf3-bd1d-e85cd2f2bdaa'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
export const FORM_FROM_NAME = 'אלקלעי 1'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const PHONE_RE = /^0\d{1,2}-?\d{7}$/

/* ---------- Hero ---------- */

export const HERO_FACTS = [
  { value: 'עד 60', label: 'אורחים' },
  { value: 'שבת', label: 'בוקר · צהריים · ערב' },
  { value: 'פנים וחוץ', label: 'ישיבה ועמידה' },
  { value: 'חניון', label: 'חניון בזל הסמוך' },
]

// כל תמונה: base ללא סיומת (JPG כ-fallback, WebP ב-600/1200 מ-scripts/optimize-images.js),
// ומידות מפורשות למניעת קפיצת פריסה. שמות הקבצים תיאוריים בשביל חיפוש תמונות בגוגל.
export const HERO_PHOTOS = [
  {
    base: '/assets/alkalay-event-wine-ice-bucket',
    alt: 'דלי קרח עם בקבוקי יין ופרוסקו באירוע בקפה אלקלעי',
    width: 1200,
    height: 900,
    eager: true,
  },
  {
    base: '/assets/alkalay-event-evening-courtyard',
    alt: 'אורחים באירוע ערב בחצר בית הקפה',
    width: 1200,
    height: 900,
  },
  {
    base: '/assets/alkalay-event-table-spread',
    alt: 'שולחן אירוח עם סלטים, דליקטסים ומאפים בקפה אלקלעי',
    width: 1200,
    height: 900,
  },
]

// שלוש עמודות ברוחב מלא עד 1160px, עמודה אחת מתחת ל-700px.
export const HERO_PHOTO_SIZES = '(max-width: 700px) calc(100vw - 44px), 356px'

export const LOGO_PHOTO = {
  base: '/assets/logo',
  alt: 'לוגו קפה אלקלעי',
  width: 62,
  height: 62,
  widths: [600],
}

/* ---------- למה אצלנו ---------- */

export const WHY_ITEMS = [
  {
    title: 'אווירה תל-אביבית שכונתית',
    text: 'קפה אלקלעי מציע אווירה תל-אביבית שכונתית ונעימה שגורמת לכל אורח להרגיש בבית מהרגע הראשון. האירוע מותאם לכם אישית עם תפריט מדויק מחומרי גלם טריים, קפה משובח ויין איכותי – כי מי שמכיר אותנו, כבר יודע!',
  },
  {
    title: 'עד 60 איש, בפנים ובחוץ',
    text: 'שילוב זורם של ישיבה ועמידה שמייצר אווירת מינגלינג מושלמת וקלילה. אינטימי מספיק כדי שכולם ידברו, גדול מספיק בשביל מסיבה אמיתית.',
  },
  {
    // עוגן ישן של סעיף התפריט — הקישורים בניווט ובהירו עדיין מצביעים אליו.
    id: 'menu',
    title: 'תפריט שנבנה יחד איתכם',
    text: 'אנחנו בונים יחד אתכם תפריט אישי ומדויק, המבוסס על חומרי הגלם הטריים והאיכותיים של בית הקפה:'
  },
]

/* ---------- למי זה מתאים ---------- */

export const FORWHO_ITEMS = [
  {
    Icon: CakeIcon,
    title: 'ימי הולדת',
    text: 'עגול, לא עגול — לא משנה. בוקר של קפה ומאפים, צהריים ארוכים או ערב עם בירה מהחבית והרמת כוסית.',
  },
  {
    Icon: GlassesIcon,
    title: 'מסיבות פרטיות',
    text: 'מסיבת הפתעה, חגיגת סיום, מפגש חברים או משפחה. אתם מביאים פלייליסט — אנחנו את המקום.',
  },
  {
    Icon: DoveIcon,
    title: 'אירועים אינטימיים',
    text: 'בריתות, אירוסין קטנים, מפגשי משפחה או ערב לכבוד מישהו. אירוח חם בלי הפקה גדולה.',
  },
]

/* ---------- גלריה ---------- */

export const GALLERY_PHOTOS = [
  { base: '/assets/alkalay-event-evening-courtyard', alt: 'אורחים באירוע ערב בחצר בית הקפה', width: 1200, height: 1600, cls: 'g-a' },
  { base: '/assets/alkalay-event-buffet-table', alt: 'שולחן כיבוד עשיר באירוע פרטי', width: 1200, height: 1600, cls: 'g-b' },
  { base: '/assets/alkalay-event-platters', alt: 'מגשי דליקטסים וסלטים', width: 1200, height: 1600, cls: 'g-c' },
  { base: '/assets/alkalay-event-pastries', alt: 'מאפים ולחמים טריים לאירוע', width: 1200, height: 1600, cls: 'g-d' },
  { base: '/assets/alkalay-cafe-bar-interior', alt: 'הבר והפנים של קפה אלקלעי', width: 1200, height: 1600, cls: 'g-e' },
  { base: '/assets/alkalay-event-party', alt: 'אווירת מסיבה בקפה אלקלעי', width: 1200, height: 1600, cls: 'g-f' },
  { base: '/assets/alkalay-event-buffet-lights', alt: 'שולחן בופה ארוך תחת אורות בחצר בית הקפה', width: 1200, height: 1600, cls: 'g-g' },
]
