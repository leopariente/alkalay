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

export const HERO_PHOTOS = [
  {
    src: '/assets/event-10.jpg',
    alt: 'דלי קרח עם בקבוקי יין ופרוסקו באירוע בקפה אלקלעי',
    eager: true,
  },
  { src: '/assets/event-4.jpg', alt: 'אורחים באירוע ערב בחצר בית הקפה' },
  {
    src: '/assets/event-1.jpg',
    alt: 'שולחן אירוח עם סלטים, דליקטסים ומאפים בקפה אלקלעי',
  },
]

/* ---------- למה אצלנו ---------- */

export const WHY_ITEMS = [
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
  { src: '/assets/event-4.jpg', alt: 'אורחים באירוע ערב בחצר בית הקפה', cls: 'g-a' },
  { src: '/assets/event-2.jpg', alt: 'שולחן כיבוד עשיר באירוע פרטי', cls: 'g-b' },
  { src: '/assets/event-3.jpg', alt: 'מגשי דליקטסים וסלטים', cls: 'g-c' },
  { src: '/assets/event-5.jpg', alt: 'מאפים ולחמים טריים לאירוע', cls: 'g-d' },
  { src: '/assets/event-9.jpg', alt: 'הבר והפנים של קפה אלקלעי', cls: 'g-e' },
  { src: '/assets/event-8.jpg', alt: 'אווירת מסיבה בקפה אלקלעי', cls: 'g-f' },
  { src: '/assets/event-6.jpg', alt: 'שולחן בופה ארוך תחת אורות בחצר בית הקפה', cls: 'g-g' },
]
