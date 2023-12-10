import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../input';
import { Field } from './field';

const meta: Meta<typeof Field> = {
  title: 'Design System/Form/Field',
  component: Field,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  name: 'Field',
  render: (args) => (
    <Field {...args}>
      <Input defaultValue="value" />
    </Field>
  ),
  args: {
    label: 'My Field',
    required: false,
    isLabelHidden: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'My Field',
    },
    isLabelHidden: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export const Required = () => {
  return (
    <Field label="Required Field" required>
      <Input defaultValue="value" />
    </Field>
  );
};

export const HiddenLabel = () => {
  return (
    <Field label="Field with a Hidden Label" isLabelHidden>
      <Input defaultValue="value" />
    </Field>
  );
};

export const RequiredFieldWithHiddenLabel = () => {
  return (
    <Field label="Required Field with a Hidden Label" isLabelHidden required>
      <Input defaultValue="value" />
    </Field>
  );
};
