import useReveal from '../hooks/useReveal.js'

const ROWS = [
  {
    label: 'מהמאפייה שלנו',
    text: 'לחמים טריים ומאפי בוטיק מניחוחות הקונדיטוריה המקומית.',
  },
  { label: 'רעננות בצלחת', text: 'מבחר סלטים טריים, צבעוניים ועשירים.' },
  {
    label: 'דליקטסים ומגשי אירוח',
    text: 'צלחות של גבינות משובחות, דגים מעושנים ונקניקי איכות.',
  },
  {
    label: 'על הבר',
    text: 'יין איכותי ממבחר היינות שלנו, בירה צוננת מהחבית וכמובן — קפה איטלקי מובחר.',
  },
]

export default function Menu() {
  const ref = useReveal()

  return (
    <section className="menu" id="menu" ref={ref}>
      <div className="container split">
        <div className="reveal">
          <span className="eyebrow">הקונספט הקולינרי</span>
          <h2>תפריט שנבנה יחד איתכם</h2>
          <p className="lead">
            אנחנו בונים יחד אתכם תפריט אישי ומדויק, המבוסס על חומרי הגלם הטריים
            והאיכותיים של בית הקפה:
          </p>
          <ul className="menu-list">
            {ROWS.map((row) => (
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
