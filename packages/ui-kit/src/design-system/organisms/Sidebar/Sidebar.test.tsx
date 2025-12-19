import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Sidebar } from './Sidebar';
import { LayoutDashboard } from 'lucide-react';

const mockItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
];

describe('Sidebar', () => {
    it('renders logo and items', () => {
        render(<Sidebar items={mockItems} />);
        expect(screen.getByText('Asmbly')).toBeInTheDocument();
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('toggles collapse state', () => {
        render(<Sidebar items={mockItems} />);
        const toggleButton = screen.getByTitle('Collapse Sidebar');

        fireEvent.click(toggleButton);
        // Label should be hidden when collapsed
        expect(screen.queryByText('Asmbly')).not.toBeInTheDocument();
        expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTitle('Expand Sidebar'));
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
});
