import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ActionCard } from './ActionCard';

describe('ActionCard', () => {
    it('renders with default label', () => {
        render(<ActionCard href="#" />);
        expect(screen.getByText('Report an Issue')).toBeInTheDocument();
    });

    it('renders as link', () => {
        render(<ActionCard href="/report" />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/report');
    });
});
