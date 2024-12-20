import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const metaProgressBar: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

export default metaProgressBar;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'This is my checkbox',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'This is my checkbox',
  },
};
