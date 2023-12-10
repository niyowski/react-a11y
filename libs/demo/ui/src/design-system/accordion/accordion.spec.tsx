import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Accordion } from './accordion';
import { testId } from './constants';
import type { AccordionItem } from './types';

function expectToBeVisible(el: HTMLElement) {
  return expect(el).not.toHaveClass('hidden');
}

function expectToBeHidden(el: HTMLElement) {
  return expect(el).toHaveClass('hidden');
}

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

describe('Accordion', () => {
  it('should render correctly', async () => {
    // Arrange
    const user = userEvent.setup();

    // Act
    render(<Accordion items={items} data-testid={testId.accordion} />);

    // Assert
    const headerElements = screen.getAllByTestId(testId.accordionHeader);
    expect(screen.getByTestId(testId.accordion)).toBeInTheDocument();
    expect(screen.getAllByTestId(testId.accordionItem)).toHaveLength(3);
    expect(headerElements).toHaveLength(3);
    expect(screen.getAllByTestId(testId.accordionToggleButton)).toHaveLength(3);
    const contentElements = screen.getAllByTestId(testId.accordionContent);
    expectToBeHidden(contentElements[0]);
    expectToBeHidden(contentElements[1]);
    expectToBeHidden(contentElements[2]);

    // Act && Assert
    const header = headerElements[0];
    await user.click(header);
    expectToBeVisible(screen.getAllByTestId(testId.accordionContent)[0]);

    // Act && Assert
    const toggleButton = screen.getAllByTestId(testId.accordionToggleButton)[0];
    await user.click(toggleButton);
    expectToBeHidden(screen.getAllByTestId(testId.accordionContent)[0]);
  });

  it("should render correctly when 'isAllExpanded' is true", async () => {
    // Act
    render(<Accordion items={items} isAllExpanded />);

    // Assert
    const contentElements = screen.getAllByTestId(testId.accordionContent);
    expectToBeVisible(contentElements[0]);
    expectToBeVisible(contentElements[1]);
    expectToBeVisible(contentElements[2]);
  });
});
