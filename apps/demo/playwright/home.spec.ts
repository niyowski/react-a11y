import { expect, test } from '@playwright/test';

import { BRAND_NAME, testId } from '~/constants';

test('has a brand name', async ({ page }) => {
  // Act
  await page.goto('/');

  // Assert
  await expect(page.getByTestId(testId.brandName)).toContainText(BRAND_NAME);
});
