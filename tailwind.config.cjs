/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa','sans-serif'],
        temp: ['Nada Qonita', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },

      backgroundImage: {
        'main-mobile': "url('/images/background-mobile.webp')",
        'what-is-fml-mobile': "url('/images/what-is-fml.jpg')"
      }
    },
  },
  plugins: [],
}
