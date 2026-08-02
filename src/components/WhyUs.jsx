import useReveal from '../hooks/useReveal.js'

const ITEMS = [
  {
    title: 'אווירה של שבת בתל אביב',
    text: 'שבת בעיר — שילוב בין שיק אורבני לחמימות שכונתית, מוזיקה נעימה, אור טבעי ואנשים שמסתובבים בין השולחנות — בדיוק כמו שבת טובה, רק שהמקום כולו שלכם.',
  },
  {
    title: 'חניון בזל צמוד — כן, בתל אביב',
    text: 'חניון בזל נגיש ממש ליד בית הקפה. האורחים מגיעים רגועים, בלי עשרים דקות של חיפוש חנייה ובלי דוחות.',
  },
  {
    title: 'עד 60 איש, בפנים ובחוץ',
    text: 'שילוב זורם של ישיבה ועמידה שמייצר אווירת מינגלינג מושלמת וקלילה. אינטימי מספיק כדי שכולם ידברו, גדול מספיק בשביל מסיבה אמיתית.',
  },
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why" ref={ref}>
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">למה לחגוג אצלנו</span>
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
