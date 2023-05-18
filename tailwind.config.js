/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#1db954',
        'main-black': '#121212',
        'main-gray': '#b3b3b3',
        'main-dark-gray': '#535353',
        'main-darkest-gray': '#212121',
      },
      fontFamily: {
        primary: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
