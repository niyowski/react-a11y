import type { Meta, StoryObj } from '@storybook/react';

import { type Tab, Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

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

export const Default: Story = {
  name: 'Tabs',
  render: (args) => <Tabs {...args} />,
  args: {
    tabs,
  },
};
