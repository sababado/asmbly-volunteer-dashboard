import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VolunteerTimePage } from './VolunteerTimePage';
import { Default } from './VolunteerTimePage.stories';

describe('VolunteerTimePage', () => {
    it('integrates components correctly', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render(<VolunteerTimePage {...(Default.args as any)} />);
        expect(screen.getByText('My Volunteer Time')).toBeInTheDocument();
        expect(screen.getByText('Membership Rewards')).toBeInTheDocument();
        expect(screen.getByText('Current Impact')).toBeInTheDocument();
        expect(screen.getByText('REPLACE BLADES ON PLANER')).toBeInTheDocument();
    });
});
