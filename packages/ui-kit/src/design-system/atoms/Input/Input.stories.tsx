import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Mail } from 'lucide-react';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Email address',
    },
};

export const WithIcon: Story = {
    args: {
        placeholder: 'maker@example.com',
        icon: <Mail className="h-4 w-4" />,
    }
}
