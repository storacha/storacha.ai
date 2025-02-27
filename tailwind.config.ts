import type { Config } from 'tailwindcss'
// @ts-expect-error
import TailwindHamburgers from 'tailwind-hamburgers'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      borderRadius: {
        '20': '5rem',
        '10': '2.5rem',
      }
    }
  },
  plugins: [TailwindHamburgers],
} satisfies Config
