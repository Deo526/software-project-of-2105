/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      flexBasis: {
        '7/12': '56.92%',
      }
    },
  },
  plugins: [],
}

