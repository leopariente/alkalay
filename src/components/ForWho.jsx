import useReveal from '../hooks/useReveal.js'
import { FORWHO_ITEMS } from '../constants.js'

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
          {FORWHO_ITEMS.map(({ Icon, title, text }) => (
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
