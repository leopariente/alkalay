import useReveal from '../hooks/useReveal.js'
import { CakeIcon, GlassesIcon, DoveIcon } from './icons.jsx'

const ITEMS = [
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

export default function ForWho() {
  const ref = useReveal()

  return (
    <section id="forwho" ref={ref}>
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">למי זה מתאים</span>
          <h2>כל סיבה טובה לשבת אחת</h2>
          <p className="lead">
            אנחנו מארחים אירועים פרטיים בשבת בלבד — בוקר, צהריים או ערב. קבוצות עד
            60 איש.
          </p>
        </header>
        <div className="forwho-grid">
          {ITEMS.map(({ Icon, title, text }) => (
            <article className="forwho-item reveal" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
