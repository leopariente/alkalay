const FACTS = [
  { value: 'עד 50', label: 'אורחים' },
  { value: 'שבת', label: 'בוקר · צהריים · ערב' },
  { value: 'פנים וחוץ', label: 'ישיבה ועמידה' },
  { value: 'חניון', label: 'צמוד לבית הקפה' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-bg"
        role="img"
        aria-label="דלי קרח עם בקבוקי יין ופרוסקו באירוע בבית קפה אלקלעי 1"
      />
      <div className="hero-content">
        <span className="eyebrow">אלקלעי 1 · תל אביב</span>
        <h1>חוגגים אצלנו בשבת.</h1>
        <p className="lead">
          בית קפה שכונתי בלב תל אביב שהופך ליום אחד לאירוע פרטי משלכם. תפריט שנבנה
          יחד איתכם, יין ובירה מהחבית, וחניון ממש בכניסה.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#leadform">
            השאירו פרטים
          </a>
          <a className="btn btn-ghost" href="#menu">
            מה על השולחן
          </a>
        </div>
        <ul className="hero-facts">
          {FACTS.map((fact) => (
            <li key={fact.label}>
              <b>{fact.value}</b>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
