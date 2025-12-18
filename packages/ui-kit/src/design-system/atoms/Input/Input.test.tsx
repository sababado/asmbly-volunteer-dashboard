import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { describe, it, expect } from 'vitest';

describe('Input', () => {
    it('renders correctly', () => {
        render(<Input placeholder="test placeholder" />);
        expect(screen.getByPlaceholderText('test placeholder')).toBeInTheDocument();
    });

    it('renders icon when provided', () => {
        render(<Input icon={<span data-testid="icon">icon</span>} />);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
});
