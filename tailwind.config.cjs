/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa'],
        temp: ['Courgette']
      },

      backgroundImage: {
        'main': "url('/images/background-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
