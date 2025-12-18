import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { describe, it, expect } from 'vitest';

describe('LoginForm', () => {
    it('renders correctly', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send magic link/i })).toBeInTheDocument();
    });
});
