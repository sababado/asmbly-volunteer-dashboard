import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AnnouncementBanner } from './AnnouncementBanner';
describe('AnnouncementBanner', () => {
    it('renders title and message', () => {
        render(<AnnouncementBanner title="Test Title" message="Test Message"/>);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Message')).toBeInTheDocument();
    });
    it('calls onDismiss when button clicked', () => {
        const handleDismiss = vi.fn();
        render(<AnnouncementBanner title="T" message="M" onDismiss={handleDismiss}/>);
        fireEvent.click(screen.getByText('Dismiss'));
        expect(handleDismiss).toHaveBeenCalled();
    });
    it('does not render dismiss button if handler not provided', () => {
        render(<AnnouncementBanner title="T" message="M"/>);
        expect(screen.queryByText('Dismiss')).not.toBeInTheDocument();
    });
});
