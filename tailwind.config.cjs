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
        temp: ['Satisfy'],
        roboto: ['Roboto']
      },

      backgroundImage: {
        'main-mobile': "url('/images/background-mobile.webp')",
      }
    },
  },
  plugins: [],
}
