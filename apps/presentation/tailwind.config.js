const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx}')],
  theme: {
    extend: {
      colors: {
        base: colors.stone,
        primary: colors.yellow,
        secondary: colors.blue,
        danger: colors.red,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  important: true,
  safelist: [
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
  ],
};
