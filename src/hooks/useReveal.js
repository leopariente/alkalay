import { useEffect, useRef } from 'react'

// חושף אלמנטים בגלילה. מחזיר ref שמוצמד למכל — כל צאצא עם .reveal ייחשף בתורו.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = root.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
