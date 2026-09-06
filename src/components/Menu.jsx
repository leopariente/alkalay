import useReveal from '../hooks/useReveal.js'
import { MENU_ROWS } from '../constants.js'

export default function Menu() {
  const ref = useReveal()

  return (
    <section className="menu" id="menu" ref={ref}>
      <div className="container split">
        <div className="reveal">
          <h2>תפריט שנבנה יחד איתכם</h2>
          <p className="lead">
            אנחנו בונים יחד אתכם תפריט אישי ומדויק, המבוסס על חומרי הגלם הטריים
            והאיכותיים של בית הקפה:
          </p>
          <ul className="menu-list">
            {MENU_ROWS.map((row) => (
              <li key={row.label}>
                <b>{row.label}</b>
                <span>{row.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="frame reveal">
          <img
            src="/assets/event-1.jpg"
            alt="שולחן אירוח עם סלטים, דליקטסים ומאפים בקפה אלקלעי"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
