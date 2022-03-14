module.exports = {
  content: [
    "./**/*.{html,js}",
    "./src/**/*.{html,js}",
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
        'Manrope': ['Manrope','sans-serif'],
      },

    },
  },
  plugins: [],
}
