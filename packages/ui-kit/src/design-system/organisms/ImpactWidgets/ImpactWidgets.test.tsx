import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImpactWidgets, RecentActivity } from './ImpactWidgets';

const mockActivity: RecentActivity[] = [
    { id: '1', text: 'Activity 1', time: 'Yesterday', type: 'completed', color: 'red' },
];

describe('ImpactWidgets', () => {
    it('renders stats and activity', () => {
        render(
            <ImpactWidgets
                hours={10}
                tasksCompleted={5}
                goalProgress={50}
                recentActivity={mockActivity}
            />
        );
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Activity 1')).toBeInTheDocument();
        expect(screen.getByText('View Shop Calendar')).toBeInTheDocument();
        expect(screen.getByText('Report an Issue')).toBeInTheDocument(); // From ReportIssueCard default
    });
});
