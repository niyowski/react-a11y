import { testId } from './constants';
import type { TabsProps } from './tabs';
import { Tabs } from './tabs';
import type { Tab } from './types';

const mount = (props: TabsProps) => {
  cy.mount(<Tabs {...props} data-testid={testId.tabs} />);
  cy.injectAndConfigureAxe();
};

const getByTestId = (id: string) => cy.get(`[data-testid=${id}]`);

describe('Tabs', () => {
  // Arrange
  const tabs: Tab[] = [
    {
      id: 'tab-1',
      title: 'Tab 1',
      children: 'Tab 1 content',
    },
    {
      id: 'tab-2',
      title: 'Tab 2',
      children: 'Tab 2 content',
    },
    {
      id: 'tab-3',
      title: 'Tab 3',
      children: 'Tab 3 content',
    },
  ];

  it('should render correctly', () => {
    // Act
    mount({ tabs });

    // Assert
    getByTestId(testId.tabs).should('exist');
    getByTestId(testId.tabList).should('exist');
    getByTestId(testId.tabListItem)
      .children()
      .should('have.length', 3)
      .then(($children) => {
        cy.wrap($children[0]).should('contain.text', 'Tab 1');
        cy.wrap($children[1]).should('contain.text', 'Tab 2');
        cy.wrap($children[2]).should('contain.text', 'Tab 3');
      });
    getByTestId(testId.tabItem)
      .should('have.length', 3)
      .then(($items) => {
        cy.wrap($items[0]).should('contain.text', 'Tab 1 content');
        cy.wrap($items[0]).should('have.class', 'block');
        cy.wrap($items[1]).should('contain.text', 'Tab 2 content');
        cy.wrap($items[1]).should('have.class', 'hidden');
        cy.wrap($items[2]).should('contain.text', 'Tab 3 content');
        cy.wrap($items[2]).should('have.class', 'hidden');
      });
  });

  it('should not have any a11y violations', () => {
    // Act
    mount({ tabs });

    // Assert
    cy.auditAccessibility();
  });
});
