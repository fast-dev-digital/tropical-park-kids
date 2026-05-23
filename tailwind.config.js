import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta editorial-botânica.
        // brand-* mantidos por compatibilidade com a spec, mas usados com restrição.
        brand: {
          green: '#0F743A',
          'green-deep': '#0a4d27',
          'green-dark': '#0a5128',
          gold: '#FBB017',
          'gold-dark': '#d4930a',
          royal: '#2A549E',
          'royal-dark': '#1e3d75',
        },
        // Pergaminho e tons orgânicos — substituem o branco puro como base editorial.
        parchment: {
          DEFAULT: '#F5EFE3',
          deep: '#EBE2CE',
          dark: '#D9CDB0',
        },
        // Verde floresta — usado como tinta institucional, não como botão.
        forest: {
          DEFAULT: '#1F3A2B',
          deep: '#142519',
          ink: '#0F1F14',
        },
        // Tons de tinta quentes em vez de slate frio.
        ink: {
          DEFAULT: '#1A1F1A',
          soft: '#2F3A30',
          muted: '#5B665D',
          faint: '#8A9388',
        },
        // Acento dourado, reservado para momento único.
        ember: {
          DEFAULT: '#B47A2E',
          deep: '#8C5C1F',
        },
        playful: {
          coral: '#C44536',
          sky: '#5BC0EB',
          lime: '#9BC53D',
          magenta: '#C73E9E',
        },
      },
      fontFamily: {
        // Fraunces (variable serif) protagonista, com itálico para captions.
        display: ['"Fraunces"', 'Georgia', 'serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        // DM Sans para corpo e UI — quente, neutro, não-Inter.
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Mono editorial para numeração de seções e details.
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escalas editoriais com leading apertado.
        kicker: ['0.7rem', { lineHeight: '1', letterSpacing: '0.22em' }],
        number: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        editorial: '0.22em',
      },
      maxWidth: {
        editorial: '76rem',
        prose: '38rem',
        narrow: '52rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.2,0.65,0.3,1) forwards',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(15,31,20,0.35) 0%, rgba(15,31,20,0.55) 55%, rgba(15,31,20,0.85) 100%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.07  0 0 0 0 0.13  0 0 0 0 0.10  0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        editorial: '0 30px 60px -25px rgba(15,31,20,0.35)',
        plate: '0 1px 0 0 rgba(26,31,26,0.08)',
      },
    },
  },
  plugins: [typography, forms],
}
