import { BRAND_NAME, testId } from '~/constants';

describe('demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should have a brand', () => {
    cy.get(`[data-testid="${testId.brandLogo}"]`).should('be.visible');
    cy.get(`[data-testid="${testId.brand}"]`).contains(BRAND_NAME);
  });

  it('should have stats', () => {
    cy.get(`[data-testid="${testId.stats}"]`).should('be.visible');
  });
});
