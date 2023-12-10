import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { testId } from './constants';
import { Tabs } from './tabs';
import type { Tab } from './types';

describe('Tabs', () => {
  it('should render correctly', async () => {
    // Arrange
    const user = userEvent.setup();
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
    render(<Tabs tabs={tabs} data-testid={testId.tabs} />);

    // Assert
    expect(screen.getByTestId(testId.tabs)).toBeInTheDocument();
    expect(screen.getAllByTestId(testId.tabListItem)).toHaveLength(3);
    expect(screen.getAllByTestId(testId.tabItem)).toHaveLength(3);
    expect(screen.getByText('Tab 1 content')).toBeVisible();

    // Act
    const tabListButtons = screen.getAllByTestId(testId.tabListItem);
    const tabListButton = tabListButtons[1];
    await user.click(tabListButton);

    // Assert
    expect(screen.getByText('Tab 2 content')).toBeVisible();
  });
});
