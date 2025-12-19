import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './TaskList';

const meta = {
    title: 'Organisms/TaskList',
    component: TaskList,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'light' },
    },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

import { TaskListItemProps } from '../../molecules/TaskListItem/TaskListItem';

const mockTasks: TaskListItemProps[] = [
    {
        title: 'Replace Blades on Planer',
        description: 'The blades are showing signs of wear and tear.',
        area: 'wood',
        urgency: 'high',
        duration: '30 mins',
        status: 'ready',
    },
    {
        title: 'Empty Dust Collector Bins',
        description: 'Bins 2 and 4 are nearing capacity.',
        area: 'wood',
        urgency: 'medium',
        duration: '15 mins',
        status: 'open',
    },
    {
        title: 'Organize Welding Table',
        description: 'Sort clamps and clean the surface.',
        area: 'metal',
        urgency: 'low',
        duration: '1 hr',
        status: 'open',
    },
];

export const Default: Story = {
    args: {
        tasks: mockTasks,
    },
};
