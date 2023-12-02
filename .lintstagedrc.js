module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  '{apps,libs,tools}/**/*.{ts,tsx}': [
    (files) => `nx affected --target=lint --files=${files.join(',')} --fix`,
    (files) => `nx affected --target=typecheck --files=${files.join(',')}`,
    (files) => `nx affected --target=test --files=${files.join(',')}`,
    (files) => `nx affected --target=cy --files=${files.join(',')}`,
    (files) => `nx affected --target=pw --files=${files.join(',')}`,
  ],
};
