import { TaskListItem } from './TaskListItem';
const meta = {
    title: 'Design System/Molecules/TaskListItem',
    component: TaskListItem,
    tags: ['autodocs'],
    argTypes: {
        onClaim: { action: 'claimed' },
        area: { control: 'select', options: ['wood', 'metal', 'electronics', 'lasers'] },
        urgency: { control: 'select', options: ['low', 'medium', 'high', 'critical'] },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Replace Blades on Planer',
        description: 'The blades are showing signs of wear and tear, causing tearout on hardwoods.',
        area: 'wood',
        urgency: 'high',
        duration: '30 mins',
        status: 'ready',
        onClickUpLink: '#',
    },
};
export const OpenTask = {
    args: {
        title: 'Empty Dust Collector Bins',
        description: 'Bins 2 and 4 are nearing capacity. Please empty into the dumpster.',
        area: 'wood',
        urgency: 'medium',
        duration: '15 mins',
        status: 'open',
        onClickUpLink: '#',
    },
};
