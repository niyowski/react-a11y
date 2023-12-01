import { BRAND_NAME, testId } from '~/app/constants';

describe('demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should have a brand name', () => {
    cy.get(`[data-testid="${testId.brandName}"]`).contains(BRAND_NAME);
  });
});
