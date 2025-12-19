import { ImpactWidgets } from './ImpactWidgets';
const meta = {
    title: 'Design System/Organisms/ImpactWidgets',
    component: ImpactWidgets,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'light' },
    },
};
export default meta;
const mockActivity = [
    { id: '1', text: 'Completed "Organize CNC Bits"', time: 'Yesterday • 2 hrs credited', type: 'completed', color: '#7cc0b8' },
    { id: '2', text: 'Claimed "Fix Laser Cutter Exhaust"', time: '2 days ago', type: 'claimed', color: '#f0b323' },
    { id: '3', text: 'Earned "Fixer" Badge', time: 'Last week', type: 'badge', color: '#e05244' },
];
export const Default = {
    args: {
        hours: 12.5,
        tasksCompleted: 5,
        goalProgress: 65,
        recentActivity: mockActivity,
    },
};
