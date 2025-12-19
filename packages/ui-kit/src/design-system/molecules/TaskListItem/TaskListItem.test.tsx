import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TaskListItem } from './TaskListItem';

describe('TaskListItem', () => {
    it('renders task details', () => {
        render(
            <TaskListItem
                title="Fix Saw"
                description="Broken"
                area="wood"
                urgency="high"
                duration="1h"
                status="ready"
            />
        );
        expect(screen.getByText('Fix Saw')).toBeInTheDocument();
        expect(screen.getByText('Broken')).toBeInTheDocument();
        expect(screen.getByText('Ready')).toBeInTheDocument(); // Badge
    });

    it('calls onClaim when button clicked', () => {
        const handleClaim = vi.fn();
        render(
            <TaskListItem
                title="T"
                description="D"
                area="wood"
                urgency="low"
                duration="1h"
                status="open"
                onClaim={handleClaim}
            />
        );
        fireEvent.click(screen.getByText('Claim Task'));
        expect(handleClaim).toHaveBeenCalled();
    });
});
