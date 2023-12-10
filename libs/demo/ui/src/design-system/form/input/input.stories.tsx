import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Form/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: 'Input',
  render: (args) => <Input {...args} />,
  args: {
    value: 'value',
    hasError: false,
    radius: 'default',
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: 'value',
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    radius: {
      control: { type: 'select' },
      options: ['default', 'full', 'special'],
      defaultValue: 'default',
    },
  },
};

export const Placeholder = () => {
  return <Input placeholder="placeholder" />;
};

export const ReadOnly = () => {
  return <Input value="value" readOnly />;
};

export const Disabled = () => {
  return <Input value="value" disabled />;
};

export const FullRadius = () => {
  return <Input value="value" radius="full" />;
};

export const SpecialRadius = () => {
  return <Input value="value" radius="special" />;
};

export const HasError = () => {
  return <Input value="value" hasError />;
};
