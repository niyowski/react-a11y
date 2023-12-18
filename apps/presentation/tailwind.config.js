const { join } = require('path');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx}')],
  theme: {
    extend: {
      colors: {
        base: colors.stone,
        primary: colors.amber,
        secondary: colors.sky,
        tertiary: colors.indigo,
        info: colors.blue,
        success: colors.emerald,
        warning: colors.yellow,
        danger: colors.rose,
      },
      fontFamily: {
        mono: ['Recursive', defaultTheme.fontFamily.mono], // for code
        serif: ['Salsa', defaultTheme.fontFamily.serif], // for quotes
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
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
