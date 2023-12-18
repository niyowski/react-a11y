import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const installation: CodeBlock = {
  id: 'storybook-addon-a11y-installation',
  language: 'bash',
  code: `npm install storybook-addon-a11y --save-dev`,
};

const codeImpl = `
// .storybook/main.ts
const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y'],
};

// .storybook/preview.ts
export const parameters = {
  a11y: {
    config: {
      rules: [{ id: 'a-rule-that-is-disabled-always', enabled: false }],
    },
  },
};

// component.stories.tsx
MyStory.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'a-rule-that-is-disabled-temporarily', enabled: false }],
    },
  },
};
`;

const implementation: CodeBlock = {
  id: 'storybook-addon-a11y-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="storybook-addon-a11y-code"
      aria-label="How to use storybook-addon-a11y?"
      title="How to use"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
