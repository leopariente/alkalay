import useReveal from '../hooks/useReveal.js'
import { CheckIcon } from './icons.jsx'

// מספר הוואטסאפ בפורמט בינלאומי ללא + וללא 0 מקדים.
// 055-9860712 -> 972559860712
const WHATSAPP_NUMBER = '972559860712'
const WHATSAPP_TEXT = 'היי, מעוניין/ת לחגוג אצלכם בקפה אלקלעי'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`

export default function LeadForm() {
  const ref = useReveal()

  return (
    <section className="lead-section" id="leadform" ref={ref}>
      <div className="container form-wrap">
        <div className="form-side reveal">
          <span className="eyebrow">נדבר?</span>
          <h2>שלחו לנו הודעה בוואטסאפ</h2>
          <p className="lead">
            בלי טפסים ובלי מילוי פרטים — הודעה אחת ואנחנו איתכם. נשמע מה חוגגים,
            כמה אתם ומתי, ונבנה יחד את השבת שלכם בקפה אלקלעי.
          </p>
          <p className="contact-line">
            מעדיפים לדבר? התקשרו אלינו ל־<a href="tel:0559860712">055-9860712</a>
          </p>
        </div>

        <div className="form-card reveal">
          <div className="success">
            <CheckIcon />
            <h3>אנחנו כאן, מוזמנים לכתוב</h3>
            <p>
              לחיצה אחת פותחת שיחת וואטסאפ איתנו עם הודעה מוכנה — רק לשלוח, ונחזור
              אליכם ממש בקרוב.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              דברו איתנו בוואטסאפ
            </a>
            <p className="form-note">בלי ספאם, בלי התחייבות — רק שיחה טובה.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
