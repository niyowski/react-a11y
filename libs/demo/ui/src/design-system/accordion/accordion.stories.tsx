import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './accordion';
import type { AccordionItem } from './types';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const items: AccordionItem[] = [
  {
    id: 'accordion-item-1',
    title: 'Accordion Item 1',
    content: <p>Elit id culpa minim nisi ipsum culpa eiusmod laboris.</p>,
  },
  {
    id: 'accordion-item-2',
    title: 'Accordion Item 2',
    content: <p>Officia duis ut est eu exercitation.</p>,
  },
  {
    id: 'accordion-item-3',
    title: 'Accordion Item 3',
    content: (
      <p>Cupidatat do ad fugiat elit aliquip commodo non qui ut eiusmod.</p>
    ),
  },
];

export const Default: Story = {
  name: 'Accordion',
  render: (args) => <Accordion {...args} />,
  args: {
    items,
    isAllExpanded: false,
  },
};
