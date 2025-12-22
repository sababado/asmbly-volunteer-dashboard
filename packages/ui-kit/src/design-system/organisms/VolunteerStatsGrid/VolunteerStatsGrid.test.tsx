import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VolunteerStatsGrid } from './VolunteerStatsGrid';

describe('VolunteerStatsGrid', () => {
    it('renders children correctly', () => {
        render(
            <VolunteerStatsGrid>
                <div data-testid="child-1">Child 1</div>
                <div data-testid="child-2">Child 2</div>
            </VolunteerStatsGrid>
        );
        expect(screen.getByTestId('child-1')).toBeInTheDocument();
        expect(screen.getByTestId('child-2')).toBeInTheDocument();
    });
});
