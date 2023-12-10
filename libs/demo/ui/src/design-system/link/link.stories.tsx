import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Anchor } from './anchor';
import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Design System/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: 'Link',
  render: (args) => (
    <MemoryRouter>
      <Link {...args} />
    </MemoryRouter>
  ),
  args: {
    intent: 'default',
    children: 'My Link',
  },
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
      defaultValue: undefined,
    },
  },
};

export const Primary = () => {
  return (
    <MemoryRouter>
      <Link to="/" intent="primary">
        My Link
      </Link>
    </MemoryRouter>
  );
};

export const Secondary = () => {
  return (
    <MemoryRouter>
      <Link to="/" intent="secondary">
        My Link
      </Link>
    </MemoryRouter>
  );
};

export const External = () => {
  return (
    <Anchor href="https://storybook.js.org/" intent="default">
      My Link
    </Anchor>
  );
};
