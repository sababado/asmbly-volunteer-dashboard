import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TaskList } from './TaskList';
const mockTasks = [
    {
        title: 'Task 1',
        description: 'Desc 1',
        area: 'wood',
        urgency: 'low',
        duration: '1h',
        status: 'open',
    },
];
describe('TaskList', () => {
    it('renders tasks and filters', () => {
        render(<TaskList tasks={mockTasks}/>);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Open Tasks')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument(); // Search
    });
});
