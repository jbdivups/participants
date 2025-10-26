import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click Me'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Click Me',
    colorPalette: 'blue'
  }
};
