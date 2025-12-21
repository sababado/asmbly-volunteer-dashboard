import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TaskList } from './TaskList';

import { TaskListItemProps } from '../../molecules/TaskListItem/TaskListItem';

const mockTasks: TaskListItemProps[] = [
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
        render(<TaskList tasks={mockTasks} />);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('LATEST TASKS')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument(); // Search
    });
});
