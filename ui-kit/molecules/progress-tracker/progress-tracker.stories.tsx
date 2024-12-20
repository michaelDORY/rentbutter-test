import type { Meta, StoryObj } from '@storybook/react';
import { ProgressTracker } from './progress-tracker';

const metaProgressBar: Meta<typeof ProgressTracker> = {
  title: 'Molecules/ProgressTracker',
  component: ProgressTracker,
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
type Story = StoryObj<typeof ProgressTracker>;

export const Default: Story = {
  args: {
    value: 0,
    maxValue: 3,
    className: 'max-w-[360px]',
  },
};
export const OneThird: Story = {
  args: {
    value: 1,
    maxValue: 3,
    className: 'max-w-[360px]',
  },
};
export const TwoThird: Story = {
  args: {
    value: 2,
    maxValue: 3,
    className: 'max-w-[360px]',
  },
};
export const Full: Story = {
  args: {
    value: 3,
    maxValue: 3,
    className: 'max-w-[360px]',
  },
};
