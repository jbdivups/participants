import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'solid',
    label: 'Button',
    colorPalette: 'green'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'solid',
    label: 'Button',
    colorPalette: 'blue'
  }
};
