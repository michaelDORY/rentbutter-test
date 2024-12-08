import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Typography } from '@/ui-kit/atoms';
import { Modal } from './modal.tsx';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const SimpleModalContent = () => (
  <div className="space-y-4">
    <Typography>
      This is a simple modal content. You can customize it as needed.
    </Typography>
    <div className="flex space-x-4">
      <Button>Confirm</Button>
      <Button variant="link">Cancel</Button>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    children: <SimpleModalContent />,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    children: <SimpleModalContent />,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};
