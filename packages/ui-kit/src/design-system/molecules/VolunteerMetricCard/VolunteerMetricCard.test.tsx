import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VolunteerMetricCard } from './VolunteerMetricCard';

describe('VolunteerMetricCard', () => {
    it('renders with correct metrics', () => {
        render(
            <VolunteerMetricCard
                label="Total Time"
                value={10}
                unit="HRS"
                context="(OCT)"
                lifetimeValue={100}
                lifetimeUnit="hrs"
            />
        );
        expect(screen.getByText('Total Time')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText(/HRS/)).toBeInTheDocument();
        expect(screen.getByText(/OCT/)).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('hrs')).toBeInTheDocument();
        expect(screen.getByText('LIFETIME')).toBeInTheDocument();
    });
});
