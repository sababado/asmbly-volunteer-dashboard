import { StatCard } from './StatCard';
import { Timer, CheckCircle } from 'lucide-react';
const meta = {
    title: 'Design System/Molecules/StatCard',
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
};
export default meta;
export const Hours = {
    args: {
        icon: Timer,
        value: 12.5,
        label: 'Hours this month',
        variant: 'secondary',
    },
};
export const Tasks = {
    args: {
        icon: CheckCircle,
        value: 5,
        label: 'Tasks Completed',
        variant: 'accent-teal',
    },
};
