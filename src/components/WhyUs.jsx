import useReveal from '../hooks/useReveal.js'

const ITEMS = [
  {
    title: 'אווירה של שבת בתל אביב',
    text: 'בלי פרוטוקול ובלי אולם אירועים. מוזיקה נעימה, אור טבעי ואנשים שמסתובבים בין השולחנות — בדיוק כמו שבת טובה, רק שהמקום כולו שלכם.',
  },
  {
    title: 'לוקיישן בלב העיר',
    text: 'אלקלעי 1. קרוב לכולם, קל להסביר לאורחים איך מגיעים, ואפשר להמשיך מכאן לכל מקום בתל אביב.',
  },
  {
    title: 'חניון צמוד — כן, בתל אביב',
    text: 'חניון נגיש ממש ליד בית הקפה. האורחים מגיעים רגועים, בלי עשרים דקות של חיפוש חנייה ובלי דוחות.',
  },
  {
    title: 'עד 50 איש, בפנים ובחוץ',
    text: 'שילוב של ישיבה ועמידה, בפנים ובחוץ. אינטימי מספיק כדי שכולם ידברו, גדול מספיק בשביל מסיבה אמיתית.',
  },
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why" ref={ref}>
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">למה לחגוג אצלנו</span>
          <h2>מקום אחד שעושה את כל העבודה</h2>
          <p className="lead">
            אתם מביאים את האנשים ואת הסיבה למסיבה. כל השאר — עלינו.
          </p>
        </header>
        <div className="why-list">
          {ITEMS.map((item, index) => (
            <article className="why-row reveal" key={item.title}>
              <span className="why-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
