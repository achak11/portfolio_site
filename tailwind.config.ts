import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0284c7',
          light: '#38bdf8'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
} satisfies Config