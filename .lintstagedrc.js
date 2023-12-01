module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  '{apps,libs,tools}/**/*.{ts,tsx}': [
    (files) => `nx affected --target=lint --files=${files.join(',')} --fix`,
    (files) => `nx affected --target=typecheck --files=${files.join(',')}`,
    (files) => `nx affected --target=test --files=${files.join(',')}`,
    'nx affected --target=cy --parallel --maxParallel=4',
  ],
};
