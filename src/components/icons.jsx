const base = {
  viewBox: '0 0 32 32',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function CakeIcon() {
  return (
    <svg {...base}>
      <path d="M5 27h22M6.5 27v-7.2c0-1 .8-1.8 1.8-1.8h15.4c1 0 1.8.8 1.8 1.8V27" />
      <path d="M6.5 22.4c1.6 0 1.6 1.4 3.2 1.4s1.6-1.4 3.2-1.4 1.6 1.4 3.1 1.4 1.6-1.4 3.2-1.4 1.6 1.4 3.2 1.4 1.6-1.4 3.1-1.4" />
      <path d="M16 18v-4M16 10.5c1.2-1 1.2-2.4 0-3.5-1.2 1.1-1.2 2.5 0 3.5Z" />
      <path d="M11 18v-3M21 18v-3" />
    </svg>
  )
}

export function GlassesIcon() {
  return (
    <svg {...base}>
      <path d="M8 5h8l-4 8.5L8 5ZM12 13.5V26M8.5 26h7" />
      <path d="M18 8h7l-3.5 7.5L18 8ZM21.5 15.5V26M18 26h7" />
    </svg>
  )
}

export function DoveIcon() {
  return (
    <svg {...base}>
      <path d="M25 9.5c-2.6-.6-5 .1-6.9 1.7-2.3 1.9-3.2 4.6-5.6 6-2 1.2-4.4 1-6.5-.4 0 4.7 3.4 8.7 8 9.5 5.3.9 10.3-2.6 11.2-7.9.3-1.7.1-3.3-.4-4.8" />
      <path d="M25 9.5 27.5 5l-4.7 1.6" />
      <circle cx="21.6" cy="12.4" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg {...base}>
      <circle cx="16" cy="16" r="11.5" />
      <path d="m11 16.4 3.4 3.4L21.4 13" />
    </svg>
  )
}
