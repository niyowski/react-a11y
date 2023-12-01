import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: 'Button',
  render: (args) => <Button {...args} />,
  args: {
    intent: 'default',
    radius: 'default',
    children: 'My Button',
  },
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
      defaultValue: undefined,
    },
    radius: {
      control: { type: 'select' },
      options: ['default', 'full', 'special'],
      defaultValue: 'default',
    },
  },
};

export const Primary = () => {
  return <Button intent="primary">My Button</Button>;
};

export const Secondary = () => {
  return <Button intent="secondary">My Button</Button>;
};

export const FullRadius = () => {
  return <Button radius="full">My Button</Button>;
};

export const SpecialRadius = () => {
  return <Button radius="special">My Button</Button>;
};

export const Disabled = () => {
  return <Button disabled>My Button</Button>;
};
