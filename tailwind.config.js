/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{md,html}'],
  theme: {
    colors: {
      blueWater: '#4969ED',
      whiteLight: '#F8F7F3',
      orangePeel: '#F89066',
      gray: colors.slate,
      black: colors.black,
      white: colors.white,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [],
};
