import { Meta, type StoryObj } from '@storybook/react';
import { SearchSelect } from './search-select';

const meta: Meta<typeof SearchSelect> = {
  title: 'Organisms/SearchSelect',
  component: SearchSelect,
};

export default meta;
type Story = StoryObj<typeof SearchSelect>;

export const Default: Story = {
  args: {
    options: [
      {
        value: '1600 Amphitheatre Parkway',
        title: '1600 Amphitheatre Parkway',
        subtitle: 'Mountain View, CA, USA',
      },
      {
        value: '1600 Amplifier Parkway',
        title: '1600 Amplifier Parkway',
        subtitle: 'Richmond, VA, USA',
      },
      {
        value: '1600 Amphion Parkway',
        title: '1600 Amphion Parkway',
        subtitle: 'Radiokob, AZ, USA',
      },
      {
        value: '1600 Amphion Parkway1',
        title: '1600 Amphion Parkway',
        subtitle: 'Radiokob, AZ, USA',
      },
    ],
    placeholder: 'Start typing street address',
    className: 'max-w-[360px]',
  },
};
