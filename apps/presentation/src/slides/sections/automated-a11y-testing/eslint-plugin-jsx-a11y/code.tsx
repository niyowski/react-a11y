import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const installation: CodeBlock = {
  id: 'eslint-plugin-jsx-a11y-installation',
  language: 'bash',
  code: `npm install eslint-plugin-jsx-a11y --save-dev`,
};

const codeImpl = `
// .eslintrc.json
{
  "extends": [
    // There is not much difference between recommended or strict configs
    // Please refer to the docs for more details
    "plugin:jsx-a11y/recommended",
    "plugin:jsx-a11y/strict",
  ],
  "rules": {
    // Rules that are disabled or not included in recommended or strict configs
    "jsx-a11y/anchor-ambiguous-text": "error",
    "jsx-a11y/control-has-associated-label": "error",
    "jsx-a11y/label-has-for": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
    "jsx-a11y/prefer-tag-over-role": "error"
  },
  "settings": {
    // Enable your custom components to be checked as DOM elements
    // Especially useful for design systems
    "jsx-a11y": {
      "polymorphicPropName": "as",
      "components": {
        "Input": "input",
        "Button": "button",
      }
    }
  }
}
`;

const implementation: CodeBlock = {
  id: 'eslint-plugin-jsx-a11y-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="eslint-plugin-jsx-a11y-code"
      aria-label="How to use eslint-plugin-jsx-a11y?"
      title="How to use"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
