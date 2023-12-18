import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const codeInstall = `
npm install jest-axe --save-dev

# Install additional dependencies if needed
npm install jest jest-environment-jsdom @types/jest-axe --save-dev
`;

const installation: CodeBlock = {
  id: 'jest-axe-installation',
  language: 'bash',
  code: codeInstall,
};

const codeImpl = `
// In your test setup file
import 'jest-axe/extend-expect';

// In your test file
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// In your test
it('should not have any a11y violations', async () => {
  // Act
  const { container } = render(<MyComponent />);

  // Assert
  expect(
    await axe(container, {
      rules: {
        'a-rule-that-is-disabled-temporarily': { enabled: false },
      },
    }),
  ).toHaveNoViolations();
});

// Advanced setup; e.g., /test/axe.ts
import merge from 'deepmerge';
import { axe } from 'jest-axe';

type AxeRules = Record<string, { enabled: boolean }>;
type AxeOptions = Parameters<typeof axe>[1] & { rules?: AxeRules };

const DEFAULT_AXE_OPTIONS: AxeOptions = {
  rules: {
    'a-rule-that-is-disabled-always': { enabled: false },
  },
};

export async function expectToHaveNoViolations(
  ui: HTMLElement,
  options?: AxeOptions,
) {
  const axeOptions: AxeOptions = merge(DEFAULT_AXE_OPTIONS, options ?? {});
  expect(await axe(ui, axeOptions)).toHaveNoViolations();
}
`;

const implementation: CodeBlock = {
  id: 'jest-axe-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="jest-axe-code"
      aria-label="How to use jest-axe?"
      title="How to use"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
