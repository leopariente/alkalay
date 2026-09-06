import { HERO_FACTS, HERO_PHOTOS } from '../constants.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <span className="eyebrow">קפה אלקלעי · תל אביב</span>
        <h1>אירועים פרטיים עד 60 איש אצלנו בקפה אלקלעי בשבת</h1>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#leadform">
            השאירו פרטים
          </a>
          <a className="btn btn-ghost" href="#menu">
            מה על השולחן
          </a>
        </div>
        <ul className="hero-facts" aria-label="פרטי האירוע בקצרה">
          {HERO_FACTS.map((fact) => (
            <li key={fact.label}>
              <b>{fact.value}</b>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="hero-strip">
        {HERO_PHOTOS.map((photo) => (
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
