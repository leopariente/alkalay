import useReveal from '../hooks/useReveal.js'
import { GALLERY_PHOTOS } from '../constants.js'

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
          {GALLERY_PHOTOS.map((photo) => (
            <figure className={photo.cls} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
