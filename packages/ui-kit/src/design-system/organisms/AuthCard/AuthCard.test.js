import { render, screen } from '@testing-library/react';
import { AuthCard } from './AuthCard';
import { describe, it, expect } from 'vitest';
describe('AuthCard', () => {
    it('renders title and subtitle', () => {
        render(<AuthCard title="Volunteer Portal" subtitle="Manage tasks"><div>Child Content</div></AuthCard>);
        expect(screen.getByText('Volunteer Portal')).toBeInTheDocument();
        expect(screen.getByText(/manage tasks/i)).toBeInTheDocument();
    });
    it('renders children', () => {
        render(<AuthCard title="Test" subtitle="Test"><div>Child Content</div></AuthCard>);
        expect(screen.getByText('Child Content')).toBeInTheDocument();
    });
});
