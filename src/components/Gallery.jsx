import useReveal from '../hooks/useReveal.js'
import Photo from './Photo.jsx'
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
            <figure className={photo.cls} key={photo.base}>
              <Photo photo={photo} sizes="(max-width: 700px) 100vw, 380px" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
