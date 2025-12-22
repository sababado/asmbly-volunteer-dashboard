import { VolunteerDashboardPage } from '@voldash/ui-kit';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import { SIDEBAR_ITEMS } from '../config/navigation';




const mockStats = {
    hoursLogged: 12.5,
    tasksCompleted: 5,
    currentStreak: 3,
};

const mockActivities = [
    { id: '1', user: 'Alex', action: 'completed', target: 'Safety Check', time: '2 hours ago' },
    { id: '2', user: 'Sam', action: 'claimed', target: 'Dust Cleanup', time: '5 hours ago' }
];

const mockAnnouncements: Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'warning' | 'success';
    date: string;
}> = [];

const mockImpactStats = {
    hours: 12.5,
    tasksCompleted: 5,
    goalProgress: 65,
    recentActivity: [
        { id: '1', text: 'Completed "Organize CNC Bits"', time: 'YESTERDAY • 2 HRS CREDITED', type: 'completed' as const, color: 'bg-accent-teal' },
        { id: '2', text: 'Claimed "Fix Laser Cutter Exhaust"', time: '2 DAYS AGO', type: 'claimed' as const, color: 'bg-brand-gold' },
    ]
};

export const DashboardPage = () => {
    const navigate = useNavigate();
    const { tasks } = useTasks();

    // Mapping backend tasks to UI Kit props
    const taskListItems = tasks.map(t => ({
        id: t.id,
        title: t.title,
        description: t.description || '',
        area: (t.workspace.toLowerCase() === 'woodshop' ? 'wood' :
            t.workspace.toLowerCase() === 'metalshop' ? 'metal' :
                'general') as any, // Simple mapping fallback
        urgency: t.urgency,
        duration: 'N/A', // Not yet in backend
        status: (t.status === 'open' ? 'open' : 'ready') as any,
        onClickUpLink: `https://app.clickup.com/t/${t.clickup_task_id}`
    }));

    return (
        <VolunteerDashboardPage
            user={{ name: 'Alex' }}
            sidebarItems={SIDEBAR_ITEMS}
            tasks={taskListItems}
            stats={mockStats}
            announcements={mockAnnouncements}
            recentActivity={mockActivities}
            onClaimTask={(id) => console.log('claim', id)}
            impactStats={mockImpactStats}
            onViewAllTasks={() => navigate('/tasks')}
        />
    );
};
