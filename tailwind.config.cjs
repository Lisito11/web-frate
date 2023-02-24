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
        temp: ['Satisfy']
      },

      backgroundImage: {
        'main-mobile': "url('/images/bg-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
