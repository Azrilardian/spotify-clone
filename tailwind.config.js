/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      mainGreen: '#1db954',
      mainBlack: '#121212',
      mainGray: '#b3b3b3',
      mainDarkGray: '#535353',
      mainDarkestGray: '#212121',
    },
    fontFamily: {
      primary: ['Gotham', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
