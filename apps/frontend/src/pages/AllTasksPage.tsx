import { VolunteerAllTasksPage } from '@voldash/ui-kit';
import { useNavigate } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../config/navigation';

const mockTasks = Array(12).fill(null).map((_, i) => ({
    title: i % 2 === 0 ? 'Replace Blades on Planer' : 'Organize Welding Table',
    description: i % 2 === 0 ? 'The blades are showing signs of wear and tear.' : 'Sort clamps and clean the surface.',
    area: (i % 3 === 0 ? 'wood' : i % 3 === 1 ? 'metal' : 'electronics') as 'wood' | 'metal' | 'electronics',
    urgency: (i % 4 === 0 ? 'critical' : 'medium') as 'critical' | 'medium',
    duration: '30 mins',
    status: 'open' as const,
    isNew: i === 0
}));

export const AllTasksPage = () => {
    const navigate = useNavigate();

    return (
        <VolunteerAllTasksPage
            user={{ name: 'Alex' }}
            sidebarItems={SIDEBAR_ITEMS}
            tasks={mockTasks}
            onViewTask={(id) => navigate(`/tasks/${id}`)}
            onClaimTask={(id) => console.log('claim', id)}
        />
    );
};
