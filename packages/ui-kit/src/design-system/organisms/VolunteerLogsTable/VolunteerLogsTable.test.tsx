import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { VolunteerLogsTable, VolunteerLog } from './VolunteerLogsTable';

const dummyLogs: VolunteerLog[] = [
    {
        id: '1',
        date: 'Oct 24, 2024',
        time: '9:00 AM',
        title: 'Task 1',
        description: 'Desc 1',
        area: 'Shop',
        duration: 2.5,
        status: 'APPROVED',
    }
];

describe('VolunteerLogsTable', () => {
    it('renders logs correctly', () => {
        render(<VolunteerLogsTable logs={dummyLogs} totalRecords={1} />);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('2.5')).toBeInTheDocument();
        expect(screen.getByText('APPROVED')).toBeInTheDocument();
    });

    it('pagination buttons call callbacks', () => {
        const handlePageChange = vi.fn();
        render(<VolunteerLogsTable logs={dummyLogs} totalRecords={10} totalPages={2} currentPage={1} onPageChange={handlePageChange} />);

        const nextBtn = screen.getByText('NEXT');
        fireEvent.click(nextBtn);
        expect(handlePageChange).toHaveBeenCalledWith(2);
    });

    it('search input calls callback', () => {
        const handleSearch = vi.fn();
        render(<VolunteerLogsTable logs={dummyLogs} onSearch={handleSearch} />);

        const input = screen.getByPlaceholderText('Search logs...');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleSearch).toHaveBeenCalledWith('test');
    });
});
