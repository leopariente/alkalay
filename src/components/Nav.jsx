import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" aria-label="קפה אלקלעי תל אביב — לראש העמוד">
          <img src="/assets/logo.jpg" alt="קפה אלקלעי תל אביב" />
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#why">
            למה אצלנו
          </a>
          <a className="nav-link" href="#menu">
            התפריט
          </a>
          <a className="btn btn-primary" href="#leadform">
            דברו איתנו
          </a>
        </nav>
      </div>
    </header>
  )
}
