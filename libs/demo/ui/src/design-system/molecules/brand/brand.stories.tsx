import type { Meta, StoryObj } from '@storybook/react';

import { Brand } from './brand';

const meta: Meta<typeof Brand> = {
  title: 'Design System/Molecules/Brand',
  component: Brand,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  name: 'Brand',
  render: (args) => <Brand {...args} />,
  args: {
    logo: <img src="/logo.svg" width="32" height="32" />,
    name: 'My Brand',
  },
  argTypes: {
    logo: {
      control: { type: 'none' },
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'My Brand',
    },
  },
};
