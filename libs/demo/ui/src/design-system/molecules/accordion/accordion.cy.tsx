import { Accordion, type AccordionProps } from './accordion';
import { testId } from './constants';
import type { AccordionItem } from './types';

const mount = (props: AccordionProps) => {
  return cy.mount(<Accordion data-testid={testId.accordion} {...props} />);
};

const getAccordion = () => cy.get(`[data-testid=${testId.accordion}]`);
const getAccordionItems = () => cy.get(`[data-testid=${testId.accordionItem}]`);
const getAccordionHeaders = () =>
  cy.get(`[data-testid=${testId.accordionHeader}]`);
const getToggleButtons = () =>
  cy.get(`[data-testid=${testId.accordionToggleButton}]`);

const getAccordionContents = () =>
  cy.get(`[data-testid=${testId.accordionContent}]`);

describe('Accordion', () => {
  it('should render correctly', () => {
    // Arrange
    const items: AccordionItem[] = [
      {
        id: 'accordion-item-1',
        title: 'Accordion Item 1',
        content: <p>Accordion Item 1 content.</p>,
      },
      {
        id: 'accordion-item-2',
        title: 'Accordion Item 2',
        content: <p>Accordion Item 2 content.</p>,
      },
      {
        id: 'accordion-item-3',
        title: 'Accordion Item 3',
        content: <p>Accordion Item 3 content.</p>,
      },
    ];

    // Act
    mount({ items });

    // Assert
    getAccordion().should('exist');
    getAccordionItems().should('have.length', 3);
    getAccordionHeaders()
      .should('have.length', 3)
      .then(($items) => {
        cy.wrap($items[0]).should('contain.text', 'Accordion Item 1');
        cy.wrap($items[1]).should('contain.text', 'Accordion Item 2');
        cy.wrap($items[2]).should('contain.text', 'Accordion Item 3');
      });
    getToggleButtons().should('have.length', 3).last().click();
    getAccordionContents()
      .should('have.length', 3)
      .then(($items) => {
        cy.wrap($items[0]).should('be.hidden');
        cy.wrap($items[1]).should('be.hidden');
        cy.wrap($items[2])
          .should('be.visible')
          .should('contain.text', 'Accordion Item 3 content.');
      });
  });
});
