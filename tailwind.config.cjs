/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.js",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '340px',

      'md': '600px',

      'lg': '724px',

      'xl': '1080px',

      '2xl': '1236px',
    }
  },
  plugins: [],
}
