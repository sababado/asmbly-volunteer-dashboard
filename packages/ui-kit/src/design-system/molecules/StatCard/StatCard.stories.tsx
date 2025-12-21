import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';
import { Timer, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const meta = {
    title: 'Molecules/StatCard',
    component: StatCard,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'accent-teal', 'accent-red'] }
    },
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#292D6A' },
            ],
        },
    },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hours: Story = {
    args: {
        icon: Timer as unknown as LucideIcon,
        value: 12.5,
        label: 'Hours this month',
        variant: 'secondary',
    },
};

export const Tasks: Story = {
    args: {
        icon: CheckCircle as unknown as LucideIcon,
        value: 5,
        label: 'Tasks Completed',
        variant: 'accent-teal',
    },
};
