/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    screens: {
      xl: '1440px',
      lg: '1110px',
      md: '768px',
      sm: '400px'
    },
    colors: {
      red: '#f64a4a',
      orange: '#fb7c58',
      yellow: '#f8cd65',
      neonGreen: '#a4ffaf',
      almostWhite: '#e6e5ea',
      grey: '#817d92',
      darkGrey: '#24232c',
      veryDarkGrey: '#18171f',
      noPassword: '#e6e5ea94'
    },
    fontFamily: {
      jet: ["jetBold", "sans-serif"],
      jetItalic: ["jetBoldItalic", "sans-serif"]
    },

    extend: {
    },
  },
  plugins: [],
}

