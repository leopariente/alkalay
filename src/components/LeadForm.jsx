import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { CheckIcon } from './icons.jsx'

// מפתח הגישה של Web3Forms. ציבורי מעצם הגדרתו — הוא רק מנתב לתיבה שלנו.
// אפשר לדרוס דרך .env במשתנה VITE_WEB3FORMS_KEY.
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || '0445a1c5-274c-4cf3-bd1d-e85cd2f2bdaa'
const ENDPOINT = 'https://api.web3forms.com/submit'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^0\d{1,2}-?\d{7}$/

export default function LeadForm() {
  const ref = useReveal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sent, setSent] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const successRef = useRef(null)

  // אחרי החלפת הטופס במסך התודה — מעבירים פוקוס, אחרת קורא מסך
  // לא יידע ששום דבר קרה.
  useEffect(() => {
    if (sent) successRef.current?.focus()
  }, [sent])

  async function handleSubmit(event) {
    event.preventDefault()
    if (sending) return

    const nextErrors = {}
    if (name.trim().length < 2) nextErrors.name = 'נשמח לדעת איך קוראים לכם'
    if (!EMAIL_RE.test(email.trim()))
      nextErrors.email = 'כתובת אימייל לא תקינה. לדוגמה: name@example.com'
    if (!PHONE_RE.test(phone.trim().replace(/\s/g, '')))
      nextErrors.phone = 'מספר טלפון לא תקין. לדוגמה: 050-1234567'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      // פוקוס לשדה השגוי הראשון.
      if (nextErrors.name) nameRef.current?.focus()
      else if (nextErrors.email) emailRef.current?.focus()
      else phoneRef.current?.focus()
      return
    }

    setSending(true)
    setSendError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `פנייה חדשה מהאתר — ${name.trim()}`,
          from_name: 'אלקלעי 1',
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || 'send failed')
      setSent(true)
    } catch {
      setSendError(
        'השליחה נכשלה. אפשר לנסות שוב, או להתקשר אלינו ל־055-9860712.',
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="lead-section" id="leadform" ref={ref}>
      <div className="container form-wrap">
        <div className="form-side reveal">
          <span className="eyebrow">נדבר?</span>
          <h2>השאירו פרטים — ונחזור אליכם </h2>
        </div>

        <div className="form-card reveal">
          {sent ? (
            <div className="success" ref={successRef} tabIndex={-1} role="status">
              <CheckIcon />
              <h3>קיבלנו, תודה!</h3>
              <p>הפנייה נשלחה. נחזור אליכם באימייל ממש בקרוב.</p>
              <button
                type="button"
                className="btn-line"
                onClick={() => {
                  setSent(false)
                  setName('')
                  setEmail('')
                  setPhone('')
                  setMessage('')
                }}
              >
                שליחת פנייה נוספת
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">שם מלא</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  ref={nameRef}
                  autoComplete="name"
                  placeholder="ישראל ישראלי"
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
                <label htmlFor="email">אימייל</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p className="error" id="email-error">
                    {errors.email}
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

              <div className="field">
                <label htmlFor="message">מה חוגגים? (לא חובה)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="סוג האירוע, תאריך משוער, כמות אורחים"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* אזור חי לשגיאות — aria-describedby לבדו לא מכריז בזמן השליחה. */}
              <p role="alert" className="visually-hidden">
                {Object.values(errors).join('. ')}
              </p>

              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'שולח…' : 'שליחת פרטים'}
              </button>

              {sendError && (
                <p className="error" role="alert">
                  {sendError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
