import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

import { BRAND_NAME, testId } from '~/constants';

import { DISABLED_AXE_RULES } from './fixtures/a11y';

test('has a brand', async ({ page }) => {
  // Act
  await page.goto('/resources');

  // Assert
  await expect(page.getByTestId(testId.brandLogo)).toBeVisible();
  await expect(page.getByTestId(testId.brand)).toContainText(BRAND_NAME);
});

test('should not have any a11y violations', async ({ page }) => {
  // Act
  await page.goto('/resources');

  // Assert
  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(DISABLED_AXE_RULES)
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
