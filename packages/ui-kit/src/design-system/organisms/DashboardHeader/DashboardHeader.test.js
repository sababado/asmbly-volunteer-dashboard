import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DashboardHeader } from './DashboardHeader';
describe('DashboardHeader', () => {
    it('renders title and subtitle', () => {
        render(<DashboardHeader title="Welcome" subtitle="Hello there"/>);
        expect(screen.getByText('Welcome')).toBeInTheDocument();
        expect(screen.getByText('Hello there')).toBeInTheDocument();
    });
});
