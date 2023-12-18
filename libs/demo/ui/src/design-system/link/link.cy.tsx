import { MemoryRouter } from 'react-router-dom';

import { Anchor } from './anchor';
import { Link } from './link';

const getLink = () => cy.get('a');

describe('Link', () => {
  it('should render the button with the correct text', () => {
    // Arrange
    const text = 'My Link';
    const href = '/';

    // Act
    cy.mount(
      <MemoryRouter>
        <Link to={href}>My Link</Link>
      </MemoryRouter>,
    );
    cy.injectAndConfigureAxe();

    // Assert
    getLink().should('contains.text', text);
    getLink().should('have.attr', 'href', href);

    // Assert a11y
    cy.auditAccessibility();
  });
});

describe('Anchor', () => {
  it('should render the button with the correct text', () => {
    // Arrange
    const text = 'My Link';
    const href = 'https://www.cypress.io/';

    // Act
    cy.mount(<Anchor href={href}>My Link</Anchor>);
    cy.injectAndConfigureAxe();

    // Assert
    getLink().should('contains.text', text);
    getLink().should('have.attr', 'href', href);

    // Assert a11y
    cy.auditAccessibility();
  });
});
