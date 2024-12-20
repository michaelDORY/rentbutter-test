import { Meta, type StoryObj } from '@storybook/react';
import { TextInput } from './text-input';
import { Info, MapPin } from 'lucide-react';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/TextInput',
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Label',
    helperText: 'This is a helper text',
    placeholder: 'Text input',
    className: 'max-w-[360px]',
    leftIcon: <Info size={16} />,
    rightIcon: <MapPin size={16} />,
  },
};
export const Error: Story = {
  args: {
    label: 'Label',
    helperText: 'This is a helper text',
    placeholder: 'Text input',
    className: 'max-w-[360px]',
    error: true,
    leftIcon: <Info size={16} />,
    rightIcon: <MapPin size={16} />,
  },
};
export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
    helperText: 'This is a helper text',
    placeholder: 'Text input',
    className: 'max-w-[360px]',
    leftIcon: <Info size={16} />,
    rightIcon: <MapPin size={16} />,
  },
};
