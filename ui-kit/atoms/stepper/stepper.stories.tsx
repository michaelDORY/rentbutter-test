import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Atoms/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: 'number' },
    },
    activeStep: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    steps: 3,
    activeStep: 1,
  },
};
export const SecondStep: Story = {
  args: {
    steps: 3,
    activeStep: 2,
  },
};
export const ThirdStep: Story = {
  args: {
    steps: 3,
    activeStep: 3,
  },
};
