import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SidebarItem } from './SidebarItem';
import { LayoutDashboard } from 'lucide-react';
describe('SidebarItem', () => {
    it('renders label when expanded', () => {
        render(<SidebarItem icon={LayoutDashboard} label="Dashboard"/>);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
    it('hides label when collapsed', () => {
        render(<SidebarItem icon={LayoutDashboard} label="Dashboard" isCollapsed/>);
        expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
    });
    it('applies active styles', () => {
        render(<SidebarItem icon={LayoutDashboard} label="Dashboard" isActive href="#"/>);
        const link = screen.getByRole('link');
        expect(link).toHaveClass('bg-[#363a7d]');
    });
});
