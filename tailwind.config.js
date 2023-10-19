/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {
            left: '-100%'
          },
          '100%': {
            left: '100%'
          },
        }
      },
      animation: {
        'loading-bar': 'slide 1.25s ease-out infinite',
      },
    },
  },
  plugins: [],
}

