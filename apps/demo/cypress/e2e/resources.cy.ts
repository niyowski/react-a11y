import { BRAND_NAME, testId } from '~/constants';

describe('/resources', () => {
  beforeEach(() => {
    cy.visit('/resources');
    cy.injectAndConfigureAxe();
  });

  it('should have a brand', () => {
    cy.get(`[data-testid="${testId.brandLogo}"]`).should('be.visible');
    cy.get(`[data-testid="${testId.brand}"]`).contains(BRAND_NAME);
  });

  it('should not have any a11y violations', () => {
    cy.auditAccessibility();
  });
});
