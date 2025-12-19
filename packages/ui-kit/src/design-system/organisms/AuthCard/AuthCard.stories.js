import { AuthCard } from './AuthCard';
const meta = {
    title: 'Organisms/AuthCard',
    component: AuthCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        title: 'Volunteer Portal',
        subtitle: 'Manage tasks, track hours, and help us empower Austin\'s creative makers.',
        children: <div className="p-4 text-center">Content goes here</div>,
    }
};
