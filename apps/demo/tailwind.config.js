const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const config = require('../../libs/demo/ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
