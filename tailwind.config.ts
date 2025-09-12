import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#3c73ff' } },
      boxShadow: { soft: '0 8px 30px rgba(0,0,0,0.08)' }
    },
  },
  plugins: [],
} satisfies Config