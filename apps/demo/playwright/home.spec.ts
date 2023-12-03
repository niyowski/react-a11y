import { expect, test } from '@playwright/test';

import { BRAND_NAME, testId } from '~/constants';

test('has a brand', async ({ page }) => {
  // Act
  await page.goto('/');

  // Assert
  await expect(page.getByTestId(testId.brandLogo)).toBeVisible();
  await expect(page.getByTestId(testId.brand)).toContainText(BRAND_NAME);
});
