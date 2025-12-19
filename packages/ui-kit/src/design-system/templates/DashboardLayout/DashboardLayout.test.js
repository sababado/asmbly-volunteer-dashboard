import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DashboardLayout } from './DashboardLayout';
import { LayoutDashboard } from 'lucide-react';
const mockSidebarProps = {
    items: [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    ],
};
describe('DashboardLayout', () => {
    it('renders sidebar and children', () => {
        render(<DashboardLayout sidebarProps={mockSidebarProps}>
                <div>Content</div>
            </DashboardLayout>);
        expect(screen.getAllByText('Dashboard')[0]).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
});
