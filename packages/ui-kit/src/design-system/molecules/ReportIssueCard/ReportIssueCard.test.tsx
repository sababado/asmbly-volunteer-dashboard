import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ReportIssueCard } from './ReportIssueCard';

describe('ReportIssueCard', () => {
    it('renders with default label', () => {
        render(<ReportIssueCard href="#" />);
        expect(screen.getByText('Report an Issue')).toBeInTheDocument();
    });

    it('renders as link', () => {
        render(<ReportIssueCard href="/report" />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/report');
    });
});
