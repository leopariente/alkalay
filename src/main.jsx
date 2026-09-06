import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ה-HTML כבר מכיל את הדף כולו (scripts/prerender.js) — לכן hydrate ולא render.
hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
