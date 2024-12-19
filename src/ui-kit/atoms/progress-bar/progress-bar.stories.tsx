import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './progress-bar';

const metaProgressBar: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    maxValue: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'number' },
    },
  },
};

export default metaProgressBar;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 0,
    maxValue: 3,
  },
};
export const OneThird: Story = {
  args: {
    value: 1,
    maxValue: 3,
  },
};
export const TwoThird: Story = {
  args: {
    value: 2,
    maxValue: 3,
  },
};
export const Full: Story = {
  args: {
    value: 3,
    maxValue: 3,
  },
};
