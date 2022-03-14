const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // "./**/*.{html,js}",
    "./src/**/*.{html,js}",
    //"./index.html",
    "./*.{html, js}",
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },

    extend: {
      colors:{
        'Very-Dark-Grayish-Blue': 'hsl(217, 19%, 35%)',
        'Desaturated-Dark-Blue': 'hsl(214, 17%, 51%)',
        'Grayish-Blue': 'hsl(212, 23%, 69%)',
        'Light-Grayish-Blue': 'hsl(210, 46%, 95%)',
      },

      fontFamily: {
        'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [],
}
