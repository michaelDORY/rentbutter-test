import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const typographyMeta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'small'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default typographyMeta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => (
    <div>
      <div>
        <Typography variant="h1" align="left">
          Typography Heading
        </Typography>
        <Typography variant="body" align="left">
          Typography Body Text
        </Typography>
        <Typography variant="small" align="left">
          Small Typography
        </Typography>
      </div>
    </div>
  ),
};
