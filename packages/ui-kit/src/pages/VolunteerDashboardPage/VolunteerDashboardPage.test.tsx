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
            />
        );
        expect(screen.getByText(/Welcome back, Alex/i)).toBeInTheDocument();
        expect(screen.getByText(/Open Tasks/i)).toBeInTheDocument();
        expect(screen.getByText(/Your Impact/i)).toBeInTheDocument();
    });
});
