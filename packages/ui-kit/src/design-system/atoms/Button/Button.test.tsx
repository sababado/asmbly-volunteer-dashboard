import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('shows loading spinner when isLoading is true', () => {
        render(<Button isLoading>Click me</Button>);
        expect(screen.queryByText('Click me')).not.toBeInTheDocument();
        // Loader is present (implementation detail: Loader2 icon)
    });

    it('renders left icon', () => {
        render(<Button leftIcon={<span data-testid="icon">icon</span>}>Button</Button>);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
});
