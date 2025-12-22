import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VolunteerRewardCard } from './VolunteerRewardCard';

describe('VolunteerRewardCard', () => {
    it('renders with correct title and progress', () => {
        render(
            <VolunteerRewardCard
                title="Free Month"
                subtitle="Basic"
                status="ACTIVE"
                progress={5}
                goal={10}
            />
        );
        expect(screen.getByText('Free Month')).toBeInTheDocument();
        expect(screen.getByText('Basic')).toBeInTheDocument();
        expect(screen.getByText('ACTIVE')).toBeInTheDocument();
        expect(screen.getByText(/Progress: 5 HRS/)).toBeInTheDocument();
    });

    it('renders footer content', () => {
        render(
            <VolunteerRewardCard
                title="Test"
                subtitle="Test Sub"
                status="IN PROGRESS"
                progress={0}
                goal={10}
                footerContent={<div data-testid="footer-content">Footer</div>}
            />
        );
        expect(screen.getByTestId('footer-content')).toBeInTheDocument();
    });
});
