import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const installation: CodeBlock = {
  id: 'axe-core-playwright-installation',
  language: 'bash',
  code: `npm install @axe-core/playwright --save-dev`,
};

const codeImpl = `
// page.spec.ts
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => {
  test('should not have any a11y violations', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .disableRules(['a-rule-that-is-disabled-temporarily'])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
`;

const implementation: CodeBlock = {
  id: 'axe-core-playwright-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="axe-core-playwright-code"
      aria-label="How to use @axe-core/playwright?"
      title="How to use"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
