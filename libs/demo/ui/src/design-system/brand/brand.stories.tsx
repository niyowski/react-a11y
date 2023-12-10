import type { Meta, StoryObj } from '@storybook/react';

import { Brand } from './brand';

const meta: Meta<typeof Brand> = {
  title: 'Design System/Brand',
  component: Brand,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  name: 'Brand',
  render: (args) => <Brand {...args} />,
  args: {
    logo: <img src="/logo.svg" className="h-8 w-8" />,
    name: 'My Brand',
  },
};
