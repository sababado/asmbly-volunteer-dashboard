import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerDashboardPage } from './VolunteerDashboardPage';

const meta = {
    title: 'Pages/VolunteerDashboardPage',
    component: VolunteerDashboardPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof VolunteerDashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

import { TaskListItemProps } from '../../design-system/molecules/TaskListItem/TaskListItem';
import { ImpactWidgetsProps } from '../../design-system/organisms/ImpactWidgets/ImpactWidgets';

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

const mockImpact: Omit<ImpactWidgetsProps, 'className'> = {
    hours: 12.5,
    tasksCompleted: 5,
    goalProgress: 65,
    recentActivity: [
        { id: '1', text: 'Completed "Organize CNC Bits"', time: 'Yesterday • 2 hrs credited', type: 'completed', color: '#7cc0b8' },
        { id: '2', text: 'Claimed "Fix Laser Cutter Exhaust"', time: '2 days ago', type: 'claimed', color: '#f0b323' },
    ],
};

export const Default: Story = {
    args: {
        user: { name: 'Alex' },
        tasks: mockTasks,
        impactStats: mockImpact,
        stats: {
            hoursLogged: 12.5,
            tasksCompleted: 5,
            currentStreak: 3
        },
        announcements: [],
        recentActivity: [],
        onClaimTask: () => alert('Claim task'),
    },
};
