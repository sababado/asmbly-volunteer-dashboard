import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerMetricCard } from './VolunteerMetricCard';

const meta = {
    title: 'Molecules/VolunteerMetricCard',
    component: VolunteerMetricCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof VolunteerMetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TotalTime: Story = {
    args: {
        label: 'Total Time',
        value: 12.5,
        unit: 'HRS',
        context: '(OCT)',
        lifetimeValue: 142.5,
        lifetimeUnit: 'hrs',
    },
};

export const TasksCompleted: Story = {
    args: {
        label: 'Tasks Completed',
        value: 4,
        unit: 'TASKS',
        context: '(OCT)',
        lifetimeValue: 38,
        lifetimeUnit: 'tasks',
        variant: 'teal',
    },
};
