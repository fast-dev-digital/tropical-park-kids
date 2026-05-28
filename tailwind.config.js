import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta v2 logo-driven — letras 3D balão (vermelho/amarelo/verde/azul) sobre fundo lilás.
        // Regra: 1 cor de destaque por seção, máximo 2 acentos visíveis ao mesmo tempo.
        cream: {
          DEFAULT: '#FFF8EC',
          deep: '#FCEFD0',
          dark: '#F4E2B6',
        },
        sun: {
          DEFAULT: '#FBC02D',
          deep: '#E0A810',
          soft: '#FFE08A',
        },
        coral: {
          DEFAULT: '#E94B3C',
          deep: '#C73828',
          soft: '#FBC4BE',
        },
        grass: {
          DEFAULT: '#5BB04B',
          deep: '#3F8830',
          soft: '#C1E5B9',
        },
        sky: {
          DEFAULT: '#3DB2E6',
          deep: '#1E8AB8',
          soft: '#BDE4F4',
        },
        grape: {
          DEFAULT: '#7B4DC8',
          deep: '#5A33A0',
          soft: '#D7C7F1',
        },
        ink: {
          DEFAULT: '#2B2533',
          soft: '#5A5266',
          mute: '#9089A0',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '76rem',
        prose: '38rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        playful: '0 14px 40px -12px rgba(251,192,45,0.35)',
        coral: '0 14px 40px -12px rgba(233,75,60,0.30)',
        soft: '0 8px 24px -10px rgba(43,37,51,0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2,0.65,0.3,1) forwards',
        'wiggle': 'wiggle 2.4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pop': 'pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        // Fundo lilás nublado — replica o ambiente cromático da logo:
        // várias camadas de gradient roxo/violeta com nuvens brancas suaves
        // e um leve glow amarelo no canto.
        'lilac-clouds':
          'radial-gradient(ellipse 70% 50% at 28% 22%, rgba(255,255,255,0.28), transparent 62%),' +
          'radial-gradient(ellipse 55% 40% at 78% 70%, rgba(255,255,255,0.18), transparent 60%),' +
          'radial-gradient(circle at 88% 18%, rgba(255,224,138,0.22), transparent 55%),' +
          'radial-gradient(circle at 8% 85%, rgba(90,51,160,0.55), transparent 60%),' +
          'linear-gradient(165deg, #5E3DA6 0%, #7D4CD0 38%, #9166D9 68%, #B891E6 100%)',
        'sun-gradient':
          'linear-gradient(135deg, #FBC02D 0%, #FFE08A 100%)',
        'coral-gradient':
          'linear-gradient(135deg, #E94B3C 0%, #FBC4BE 100%)',
      },
    },
  },
  plugins: [typography, forms],
}
