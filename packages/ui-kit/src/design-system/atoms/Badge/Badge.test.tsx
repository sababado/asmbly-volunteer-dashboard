import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
    it('renders correctly', () => {
        render(<Badge>Test Badge</Badge>);
        expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('applies variant classes', () => {
        render(<Badge variant="primary">Primary</Badge>);
        const badge = screen.getByText('Primary');
        expect(badge).toHaveClass('bg-primary');
    });

    it('renders as div', () => {
        render(<Badge>Div Badge</Badge>);
        const badge = screen.getByText('Div Badge');
        expect(badge.tagName).toBe('DIV');
    });
});
