import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0F743A',
          'green-dark': '#0a5128',
          gold: '#FBB017',
          'gold-dark': '#d4930a',
          royal: '#2A549E',
          'royal-dark': '#1e3d75',
        },
        playful: {
          coral: '#FF5A5F',
          sky: '#5BC0EB',
          lime: '#9BC53D',
          magenta: '#C73E9E',
        },
        ink: {
          DEFAULT: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        premium: ['"Poiret One"', 'serif'],
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float-in': 'floatIn 0.6s ease-out forwards',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 176, 23, 0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(251, 176, 23, 0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(15,116,58,0.15) 0%, rgba(30,41,59,0.55) 50%, rgba(30,41,59,0.85) 100%)',
      },
    },
  },
  plugins: [typography, forms],
}
