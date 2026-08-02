import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { CheckIcon } from './icons.jsx'

// מספר היעד לוואטסאפ בפורמט בינלאומי ללא + וללא 0 מקדים.
// 03-6041260 -> 97236041260. להחלפה בנייד העסקי במידת הצורך.
const WHATSAPP_NUMBER = '97236041260'

const PHONE_RE = /^0\d{1,2}-?\d{7}$/

export default function LeadForm() {
  const ref = useReveal()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  // כשחוסם החלונות הקופצים בולע את window.open — נותנים קישור ידני.
  const [waUrl, setWaUrl] = useState('')
  const [blocked, setBlocked] = useState(false)
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const successRef = useRef(null)

  // אחרי החלפת הטופס במסך התודה — מעבירים פוקוס, אחרת קורא מסך
  // לא יידע ששום דבר קרה.
  useEffect(() => {
    if (sent) successRef.current?.focus()
  }, [sent])

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (name.trim().length < 2) nextErrors.name = 'נשמח לדעת איך קוראים לכם'
    if (!PHONE_RE.test(phone.trim().replace(/\s/g, '')))
      nextErrors.phone = 'מספר טלפון לא תקין. לדוגמה: 050-1234567'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      // פוקוס לשדה השגוי הראשון.
      if (nextErrors.name) nameRef.current?.focus()
      else phoneRef.current?.focus()
      return
    }

    const text = `היי, מעוניין/ת לחגוג אצלכם בקפה אלקלעי. שם: ${name.trim()}, טלפון: ${phone.trim()}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    const win = window.open(url, '_blank', 'noopener')
    setWaUrl(url)
    setBlocked(!win)
    setSent(true)
  }

  return (
    <section className="lead-section" id="leadform" ref={ref}>
      <div className="container form-wrap">
        <div className="form-side reveal">
          <span className="eyebrow">נדבר?</span>
          <h2>השאירו פרטים — ונחזור אליכם</h2>
          <p className="lead">
            שם ומספר טלפון, זה הכל. נתקשר, נשמע מה חוגגים, כמה אתם ומתי — ונבנה יחד
            את השבת שלכם בקפה אלקלעי.
          </p>
          <p className="contact-line">
            ממהרים? התקשרו אלינו ל־<a href="tel:036041260">03-6041260</a>
          </p>
        </div>

        <div className="form-card reveal">
          {sent ? (
            <div className="success" ref={successRef} tabIndex={-1} role="status">
              <CheckIcon />
              <h3>קיבלנו, תודה!</h3>
              {blocked ? (
                <>
                  <p>
                    הדפדפן חסם את פתיחת וואטסאפ. אפשר לפתוח את ההודעה ידנית, או פשוט
                    להתקשר אלינו.
                  </p>
                  <p className="form-fallback">
                    <a
                      className="btn-line"
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      פתיחת ההודעה בוואטסאפ (נפתח בחלון חדש)
                    </a>
                  </p>
                </>
              ) : (
                <p>
                  פתחנו לכם חלון וואטסאפ עם הפרטים — שלחו את ההודעה ונחזור אליכם ממש
                  בקרוב.
                </p>
              )}
              <button
                type="button"
                className="btn-line"
                onClick={() => {
                  setSent(false)
                  setBlocked(false)
                  setWaUrl('')
                  setName('')
                  setPhone('')
                }}
              >
                שליחת פנייה נוספת
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">שם פרטי</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  ref={nameRef}
                  autoComplete="given-name"
                  placeholder="איך קוראים לכם?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p className="error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="phone">טלפון</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  ref={phoneRef}
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="050-1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? 'phone-error phone-hint' : 'phone-hint'
                  }
                />
                <p className="visually-hidden" id="phone-hint">
                  מספר טלפון ישראלי, לדוגמה 050-1234567
                </p>
                {errors.phone && (
                  <p className="error" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* אזור חי לשגיאות — aria-describedby לבדו לא מכריז בזמן השליחה. */}
              <p role="alert" className="visually-hidden">
                {Object.values(errors).join('. ')}
              </p>

              <button type="submit" className="btn btn-primary">
                שלחו לנו וואטסאפ
              </button>
              <p className="form-note">בלי ספאם, בלי התחייבות — רק שיחה טובה.</p>
              <p className="form-legal">
                הפרטים שתשאירו ישמשו אותנו כדי לחזור אליכם בנוגע לאירוע בלבד, ולא
                יימסרו לצד שלישי. השליחה פותחת שיחת וואטסאפ מהמכשיר שלכם. אין חובה
                חוקית למסור את הפרטים, והם נמסרים בהסכמתכם. לעיון, תיקון או מחיקה —{' '}
                <a href="tel:036041260">03-6041260</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
