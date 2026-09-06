import useReveal from '../hooks/useReveal.js'
import { WHY_ITEMS } from '../constants.js'

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why" ref={ref}>
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">למה לחגוג אצלנו</span>
        </header>
        <div className="why-list">
          {WHY_ITEMS.map((item, index) => (
            <article className="why-row reveal" id={item.id} key={item.title}>
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
