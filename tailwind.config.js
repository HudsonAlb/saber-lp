/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        yellow: {
          brand: '#FFD43B',
        },
        orange: {
          brand: '#FF8C42',
          light: '#FFF0E6',
        },
        dark: '#2D2D2D',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
