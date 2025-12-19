import type { Meta, StoryObj } from '@storybook/react';
import { ImpactWidgets } from './ImpactWidgets';

const meta = {
    title: 'Organisms/ImpactWidgets',
    component: ImpactWidgets,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'light' },
    },
} satisfies Meta<typeof ImpactWidgets>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockActivity = [
    { id: '1', text: 'Completed "Organize CNC Bits"', time: 'Yesterday • 2 hrs credited', type: 'completed', color: '#7cc0b8' },
    { id: '2', text: 'Claimed "Fix Laser Cutter Exhaust"', time: '2 days ago', type: 'claimed', color: '#f0b323' },
    { id: '3', text: 'Earned "Fixer" Badge', time: 'Last week', type: 'badge', color: '#e05244' },
];

export const Default: Story = {
    args: {
        hours: 12.5,
        tasksCompleted: 5,
        goalProgress: 65,
        recentActivity: mockActivity as any,
    },
};
