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
        primary: {
          text: '#1a1a1a',
        },
        secondary: {
          text: '#555555',
        },
        btn: {
          dark: '#121212',
          light: '#f7f7f7',
        },
        accent: '#e5f0e6',
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
