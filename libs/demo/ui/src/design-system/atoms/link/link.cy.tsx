import { mount } from 'cypress/react18';
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
    mount(
      <MemoryRouter>
        <Link to={href}>My Link</Link>
      </MemoryRouter>,
    );

    // Assert
    getLink().should('contains.text', text);
    getLink().should('have.attr', 'href', href);
  });
});

describe('Anchor', () => {
  it('should render the button with the correct text', () => {
    // Arrange
    const text = 'My Link';
    const href = 'https://www.cypress.io/';

    // Act
    mount(<Anchor href={href}>My Link</Anchor>);

    // Assert
    getLink().should('contains.text', text);
    getLink().should('have.attr', 'href', href);
  });
});
