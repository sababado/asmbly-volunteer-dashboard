import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VolunteerDashboardPage } from './VolunteerDashboardPage';

describe('VolunteerDashboardPage', () => {
    it('renders dashboard with user name and sections', () => {
        render(
            <VolunteerDashboardPage
                user={{ name: 'Alex' }}
                tasks={[]}
                impactStats={{
                    hours: 0,
                    tasksCompleted: 0,
                    goalProgress: 0,
                    recentActivity: []
                }}
                stats={{
                    hoursLogged: 0,
                    tasksCompleted: 0,
                    currentStreak: 0
                }}
                announcements={[]}
                recentActivity={[]}
                onClaimTask={() => { }}
            />
        );
        expect(screen.getByText(/Welcome back, Alex/i)).toBeInTheDocument();
        expect(screen.getByText(/LATEST TASKS/i)).toBeInTheDocument();
        expect(screen.getByText(/Your Impact/i)).toBeInTheDocument();
    });
});
