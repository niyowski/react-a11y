import { Accordion, type AccordionProps } from './accordion';
import { testId } from './constants';
import type { AccordionItem } from './types';

const mount = (props: AccordionProps) => {
  return cy.mount(<Accordion {...props} data-testid={testId.accordion} />);
};

const getByTestId = (id: string) => cy.get(`[data-testid=${id}]`);

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
    getByTestId(testId.accordion).should('exist');
    getByTestId(testId.accordionItem).should('have.length', 3);
    getByTestId(testId.accordionHeader)
      .should('have.length', 3)
      .then(($items) => {
        cy.wrap($items[0]).should('contain.text', 'Accordion Item 1');
        cy.wrap($items[1]).should('contain.text', 'Accordion Item 2');
        cy.wrap($items[2]).should('contain.text', 'Accordion Item 3');
      });
    getByTestId(testId.accordionToggleButton)
      .should('have.length', 3)
      .last()
      .click();
    getByTestId(testId.accordionContent)
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
