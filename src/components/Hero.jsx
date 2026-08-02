const FACTS = [
  { value: 'עד 60', label: 'אורחים' },
  { value: 'שבת', label: 'בוקר · צהריים · ערב' },
  { value: 'פנים וחוץ', label: 'ישיבה ועמידה' },
  { value: 'חניון', label: 'חניון בזל הסמוך' },
]

const PHOTOS = [
  {
    src: '/assets/event-10.jpg',
    alt: 'דלי קרח עם בקבוקי יין ופרוסקו באירוע בקפה אלקלעי',
    eager: true,
  },
  { src: '/assets/event-4.jpg', alt: 'אורחים באירוע ערב בחצר בית הקפה' },
  { src: '/assets/event-8.jpg', alt: 'אווירת מסיבה בקפה אלקלעי' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <span className="eyebrow">קפה אלקלעי · תל אביב</span>
        <h1>אירועים פרטיים עד 60 איש אצלנו בקפה אלקלעי בשבת</h1>
        <p className="lead">
          אם אתם מחפשים את האירוע האינטימי והלא פורמלי — כזה שבו האורחים מרגישים
          בבית מהרגע הראשון — נשמח לארח אתכם אצלנו בשבת.
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
      <ul className="hero-strip">
        {PHOTOS.map((photo) => (
          <li key={photo.src}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading={photo.eager ? 'eager' : 'lazy'}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
