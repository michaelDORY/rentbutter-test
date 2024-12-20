import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmationBlock } from './confirmation-block';
import { Icon } from '@/ui-kit/atoms';
import { DoorOpen } from 'lucide-react';

const metaProgressBar: Meta<typeof ConfirmationBlock> = {
  title: 'Molecules/ConfirmationBlock',
  component: ConfirmationBlock,
};

export default metaProgressBar;
type Story = StoryObj<typeof ConfirmationBlock>;

export const Default: Story = {
  args: {
    icon: <Icon icon={DoorOpen} size="lg" />,
    title: 'Leave verification?',
    text: 'Your verification progress will be lost and you’ll need to start from the beginning.',
    className: 'max-w-[360px]',
  },
};

export const BiggerTitle: Story = {
  args: {
    icon: <Icon icon={DoorOpen} size="lg" />,
    title: 'Leave verification?',
    text: 'Your verification progress will be lost and you’ll need to start from the beginning.',
    withBiggerTitle: true,
    className: 'max-w-[360px]',
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Confirm ID information',
    text: 'Review the information below and confirm it matches what is on your ID.',
    withBiggerTitle: true,
    className: 'max-w-[360px]',
  },
};
