import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Design System/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  name: 'Heading',
  render: (args) => <Heading {...args} />,
  args: {
    as: 'h1',
    children: 'My Heading',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'h1',
    },
  },
};

export const H1 = () => {
  return <Heading as="h1">My Heading</Heading>;
};

export const H2 = () => {
  return <Heading as="h2">My Heading</Heading>;
};

export const H3 = () => {
  return <Heading as="h3">My Heading</Heading>;
};

export const H4 = () => {
  return <Heading as="h4">My Heading</Heading>;
};

export const H5 = () => {
  return <Heading as="h5">My Heading</Heading>;
};

export const H6 = () => {
  return <Heading as="h6">My Heading</Heading>;
};
