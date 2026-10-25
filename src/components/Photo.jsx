// תמונה עם גרסאות WebP + נפילה חזרה ל-JPG, ועם width/height מפורשים כדי שלא
// יהיה קפיצת פריסה (CLS). קבצי ה-WebP נוצרים ב-scripts/optimize-images.js.
export default function Photo({ photo, sizes, className, eager = false }) {
  const { base, alt, width, height, widths = [600, 1200], position } = photo
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={`${base}.jpg`}
        alt={alt}
        width={width}
        height={height}
        // נקודת מיקוד לחיתוך object-fit: cover, לתמונות אנכיות בתוך מסגרת רחבה.
        style={position ? { objectPosition: position } : undefined}
        decoding="async"
        loading={eager ? 'eager' : 'lazy'}
        // התמונה הראשונה בהירו היא ה-LCP — היא צריכה לצאת לדרך מיד.
        fetchpriority={eager ? 'high' : undefined}
      />
    </picture>
  )
}
