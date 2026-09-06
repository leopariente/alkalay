// נקודת כניסה לרינדור בצד השרת. משמשת רק את scripts/prerender.js בזמן הבנייה —
// כדי שה-HTML הסופי יכיל את כל הטקסט, גם לזחלנים שלא מריצים JavaScript.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(<App />)
}
