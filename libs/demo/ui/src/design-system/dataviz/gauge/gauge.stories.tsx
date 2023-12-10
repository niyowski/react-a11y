import type { Meta, StoryObj } from '@storybook/react';

import { COLORS } from '../../constants';
import { Gauge } from './gauge';

const meta: Meta<typeof Gauge> = {
  title: 'Design System/DataViz/Gauge',
  component: Gauge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Gauge>;

export const Default: Story = {
  name: 'Gauge',
  render: (args) => <Gauge {...args} />,
  args: {
    value: 42,
    title: 'My Gauge',
    description:
      'The answer to the ultimate question of life, the universe, and everything',
    size: 'medium',
    color: 'green',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      defaultValue: 0,
    },
    titleElement: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'h2',
    },
    title: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    description: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    color: {
      control: { type: 'select' },
      options: COLORS,
      defaultValue: 'green',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
  },
};

export const Size = () => {
  return (
    <div className="flex space-x-4">
      <Gauge value={42} size="small" />
      <Gauge value={42} size="medium" />
      <Gauge value={42} size="large" />
    </div>
  );
};

export const Color = () => {
  return (
    <div className="grid grid-cols-5">
      {COLORS.map((color) => (
        <Gauge
          key={color}
          value={42}
          color={color as never}
          description={color}
        />
      ))}
    </div>
  );
};

export const Title = () => {
  return (
    <div className="grid grid-cols-5">
      {['h2', 'h3', 'h4', 'h5', 'h6'].map((titleElement) => (
        <Gauge
          key={titleElement}
          titleElement={titleElement as never}
          title={titleElement}
          value={42}
        />
      ))}
    </div>
  );
};

export const Description = () => {
  return (
    <Gauge
      value={42}
      description="The answer to the ultimate question of life, the universe, and everything"
    />
  );
};
