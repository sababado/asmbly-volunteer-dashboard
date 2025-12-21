import { VolunteerDashboardPage } from '@voldash/ui-kit';
import { useNavigate } from 'react-router-dom';


const mockTasks = [
    {
        title: 'Replace Blades on Planer',
        description: 'The blades are showing signs of wear and tear.',
        area: 'wood' as const,
        urgency: 'high' as const,
        duration: '30 mins',
        status: 'ready' as const,
    },
    {
        title: 'Empty Dust Collector Bins',
        description: 'Bins 2 and 4 are nearing capacity.',
        area: 'wood' as const,
        urgency: 'medium' as const,
        duration: '15 mins',
        status: 'open' as const,
    },
    {
        title: 'Organize Welding Table',
        description: 'Sort clamps and clean the surface.',
        area: 'metal' as const,
        urgency: 'low' as const,
        duration: '1 hr',
        status: 'open' as const,
    },
];

const mockStats = {
    hours: 12.5,
    tasksCompleted: 5,
    monthlyGoal: 20, // This logic is internal to widget but prop expects direct values?
    // Wait, ImpactWidgetsProps has: hours, tasksCompleted, goalProgress, recentActivity.
    // It does NOT have monthlyGoal in props (it's hardcoded in the component text "Monthly Goal: 20hrs").
    // So I should remove monthlyGoal and add goalProgress.
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
            impactStats={mockStats}
            onViewAllTasks={() => navigate('/tasks')}
        />
    );
};
