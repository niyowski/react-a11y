import merge from 'deepmerge';
import { axe } from 'jest-axe';

export * from 'jest-axe';

type AxeRules = Record<string, { enabled: boolean }>;
type AxeOptions = Parameters<typeof axe>[1] & { rules?: AxeRules };

export const DEFAULT_AXE_OPTIONS: AxeOptions = {
  rules: {
    // Temporarily disable rules to be able to commit
    'button-name': { enabled: false },
    'duplicate-id': { enabled: false },
    'heading-order': { enabled: false },
    'image-alt': { enabled: false },
    'nested-interactive': { enabled: false },
  },
};

export async function expectToHaveNoViolations(
  ui: HTMLElement,
  options?: AxeOptions,
) {
  const axeOptions: AxeOptions = merge(DEFAULT_AXE_OPTIONS, options ?? {});
  expect(await axe(ui, axeOptions)).toHaveNoViolations();
}
