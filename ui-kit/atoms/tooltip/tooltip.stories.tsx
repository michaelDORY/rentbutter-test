import { Meta, type StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: (
      <div className="ml-10 flex size-4 items-center justify-center rounded-full bg-warning-500 text-white">
        !
      </div>
    ),
    content: 'Some information is missing',
  },
};
