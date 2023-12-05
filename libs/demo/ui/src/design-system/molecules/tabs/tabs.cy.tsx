import { testId } from './constants';
import type { Tab, TabsProps } from './tabs';
import { Tabs } from './tabs';

const mount = (props: TabsProps) => {
  return cy.mount(<Tabs data-testid={testId.tabs} {...props} />);
};

const getTabs = () => cy.get(`[data-testid=${testId.tabs}]`);
const getTabList = () => cy.get(`[data-testid=${testId.tabList}]`);
const getTabListItems = () => cy.get(`[data-testid=${testId.tabListItem}]`);
const getTabItem = () => cy.get(`[data-testid=${testId.tabItem}]`);

describe('Tabs', () => {
  it('should render correctly', () => {
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

    // Act
    mount({ tabs });

    // Assert
    getTabs().should('exist');
    getTabList().should('exist');
    getTabListItems()
      .children()
      .should('have.length', 3)
      .then(($children) => {
        cy.wrap($children[0]).should('contain.text', 'Tab 1');
        cy.wrap($children[1]).should('contain.text', 'Tab 2');
        cy.wrap($children[2]).should('contain.text', 'Tab 3');
      });
    getTabItem()
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
});
