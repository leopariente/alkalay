import useReveal from '../hooks/useReveal.js'

const ROWS = [
  { label: 'מהמאפייה', text: 'מאפים טריים, קרואסונים, לחמים ומתוקים ישר מהתנור.' },
  { label: 'סלטים', text: 'סלטים עשירים וצבעוניים, ירקות בעונה, גבינות ושמן זית טוב.' },
  { label: 'דליקטסים', text: 'נתחי דגים, ממרחים, אנטיפסטי וכל מה שהולך טוב עם כוס יין.' },
  { label: 'לשתות', text: 'קפה איכותי, שתייה קרה, יין ובירה מהחבית.' },
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
            אין אצלנו "חבילה מספר 2". יושבים, מדברים, ומרכיבים תפריט אישי על בסיס
            המוצרים של בית הקפה — לפי האנשים שלכם ולפי השעה של האירוע.
          </p>
          <ul className="menu-list">
            {ROWS.map((row) => (
              <li key={row.label}>
                <b>{row.label}</b>
                <span>{row.text}</span>
              </li>
            ))}
          </ul>
          <p className="note">
            <span>
              <b>שווה לדעת:</b> אנחנו לא מגישים אוכל חם. הכל מוגש קר וטרי — בדיוק
              הפורמט שמשאיר את האורחים על הרגליים ובשיחה, במקום מרותקים לצלחת.
            </span>
          </p>
        </div>
        <div className="frame reveal">
          <img
            src="/assets/event-1.jpg"
            alt="שולחן אירוח עם סלטים, דליקטסים ומאפים בבית קפה אלקלעי 1"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
