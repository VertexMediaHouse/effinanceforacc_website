/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: 'var(--color-brand)',
        accent: 'var(--color-accent)',
        tertiary: 'var(--color-tertiary)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        'border-warm': 'var(--color-border-warm)',
      },
      boxShadow: {
        'brand': '0 4px 24px rgba(57,47,131,0.08)',
        'brand-lg': '0 8px 32px rgba(57,47,131,0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 10% 30%, #faecd7 0%, transparent 50%), radial-gradient(circle at 90% 80%, #f0f7f2 0%, transparent 50%), #fcfbfa',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      }
    },
  },
  plugins: [],
}
