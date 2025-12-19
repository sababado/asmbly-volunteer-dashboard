import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ToolPartList } from './ToolPartList';

describe('ToolPartList', () => {
    it('renders title and children', () => {
        render(<ToolPartList title="Custom Title"><div data-testid="child" /></ToolPartList>);
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });
});
