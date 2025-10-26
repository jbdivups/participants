import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me I\'m a button'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Click me I\'m a button',
    colorPalette: 'green'
  },
  argTypes: {
    colorPalette: {
      control: { type: 'select' }
    }
  }
};
