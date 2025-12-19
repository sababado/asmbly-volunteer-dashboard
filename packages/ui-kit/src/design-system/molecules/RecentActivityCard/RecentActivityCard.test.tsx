import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RecentActivityCard } from './RecentActivityCard';

const mockActivity = [
    { id: '1', text: 'Test Activity 1', time: '2 hours ago', type: 'completed' as const, color: '#4ade80' },
    { id: '2', text: 'Test Activity 2', time: '4 hours ago', type: 'claimed' as const, color: '#60a5fa' },
];

describe('RecentActivityCard', () => {
    it('renders recent activity title', () => {
        render(<RecentActivityCard activities={mockActivity} />);
        expect(screen.getByText('Recent Activity')).toBeInTheDocument();
        expect(screen.getByText('View All')).toBeInTheDocument();
    });

    it('renders list of activities', () => {
        render(<RecentActivityCard activities={mockActivity} />);
        expect(screen.getByText('Test Activity 1')).toBeInTheDocument();
        expect(screen.getByText('Test Activity 2')).toBeInTheDocument();
        expect(screen.getByText('2 hours ago')).toBeInTheDocument();
    });

    it('handles view all click', () => {
        const onViewAll = vi.fn();
        render(<RecentActivityCard activities={mockActivity} onViewAll={onViewAll} />);
        fireEvent.click(screen.getByText('View All'));
        expect(onViewAll).toHaveBeenCalled();
    });

    it('renders empty list correctly', () => {
        render(<RecentActivityCard activities={[]} />);
        expect(screen.getByText('Recent Activity')).toBeInTheDocument();
        expect(screen.queryByText('Test Activity 1')).not.toBeInTheDocument();
    });
});
