import { VolunteerAllTasksPage } from '@voldash/ui-kit';
import { useNavigate } from 'react-router-dom';

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
            tasks={mockTasks}
            onViewTask={(id) => navigate(`/tasks/${id}`)}
            onClaimTask={(id) => console.log('claim', id)}
        // Pass navigation to sidebar if needed, or sidebar uses href links which react-router handles?
        // Sidebar in UI Kit uses <a> tags. In SPA we might want explicit handling or just let browser handle it (refresh).
        // For now, standard links are fine or we can pass custom Link component.
        // But DashboardLayout.sidebarProps items have href.
        />
    );
};
