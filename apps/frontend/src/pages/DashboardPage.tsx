import { VolunteerDashboardPage } from '@voldash/ui-kit';
import { useNavigate } from 'react-router-dom';


const mockTasks = [
    {
        id: '1',
        title: 'Replace Blades on Planer',
        description: 'The blades are showing signs of wear and tear.',
        area: 'wood' as const,
        urgency: 'high' as const,
        duration: '30 mins',
        status: 'ready' as const,
    },
    {
        id: '2',
        title: 'Empty Dust Collector Bins',
        description: 'Bins 2 and 4 are nearing capacity.',
        area: 'wood' as const,
        urgency: 'medium' as const,
        duration: '15 mins',
        status: 'open' as const,
    },
    {
        id: '3',
        title: 'Organize Welding Table',
        description: 'Sort clamps and clean the surface.',
        area: 'metal' as const,
        urgency: 'low' as const,
        duration: '1 hr',
        status: 'open' as const,
    },
];

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

    return (
        <VolunteerDashboardPage
            user={{ name: 'Alex' }}
            tasks={mockTasks}
            stats={mockStats}
            announcements={mockAnnouncements}
            recentActivity={mockActivities}
            onClaimTask={(id) => console.log('claim', id)}
            impactStats={mockImpactStats}
            onViewAllTasks={() => navigate('/tasks')}
        />
    );
};
