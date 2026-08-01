import useReveal from '../hooks/useReveal.js'

const PHOTOS = [
  { src: '/assets/event-4.jpg', alt: 'אורחים באירוע ערב בחצר בית הקפה', cls: 'g-a' },
  { src: '/assets/event-2.jpg', alt: 'שולחן כיבוד עשיר באירוע פרטי', cls: 'g-b' },
  { src: '/assets/event-3.jpg', alt: 'מגשי דליקטסים וסלטים', cls: 'g-c' },
  { src: '/assets/event-5.jpg', alt: 'מאפים ולחמים טריים לאירוע', cls: 'g-d' },
  { src: '/assets/event-9.jpg', alt: 'הבר והפנים של בית קפה אלקלעי 1', cls: 'g-e' },
  { src: '/assets/event-8.jpg', alt: 'אווירת מסיבה בבית קפה אלקלעי 1', cls: 'g-f' },
  { src: '/assets/event-6.jpg', alt: 'שולחן בופה ארוך תחת אורות בחצר בית הקפה', cls: 'g-g' },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">גלריה</span>
          <h2>ככה זה נראה אצלנו</h2>
          <p className="lead">אירועים אמיתיים שהתארחו כאן בשבת.</p>
        </header>
        <div className="gallery-grid reveal">
          {PHOTOS.map((photo) => (
            <figure className={photo.cls} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
