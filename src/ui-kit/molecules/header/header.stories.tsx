import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const metaHeader: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
  argTypes: {
    showBackButton: {
      control: { type: 'boolean' },
    },
    showStepper: {
      control: { type: 'boolean' },
    },
    onNavigate: {
      action: 'navigate',
    },
    onClose: {
      action: 'close',
    },
  },
};

export default metaHeader;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    showBackButton: false,
    showStepper: false,
  },
};

export const WithBackButton: Story = {
  args: {
    showBackButton: true,
    showStepper: false,
  },
};

export const WithBackButtonAndStepper: Story = {
  args: {
    showBackButton: true,
    showStepper: true,
  },
};
