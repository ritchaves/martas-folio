const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '365px',
      ...defaultTheme.screens,
    },
    extend: {
      margin: {
        '300': '300px',
        '400': '400px',
        '500': '500px',
      }
    },
    fontFamily: {
      'display': ['Barrio'],
      'body': ['Bubbler One'],
    },
    height: {
      "80v": "80vh",
    }
  },
  plugins: [],
}
