import { render, screen } from '@testing-library/react';
import { AuthPage } from './AuthPage';
import { describe, it, expect } from 'vitest';

describe('AuthPage', () => {
    it('renders correctly', () => {
        render(<AuthPage />);
        // Check for key elements from composed components
        expect(screen.getByText('Volunteer Portal')).toBeInTheDocument();
        expect(screen.getByText(/log in with neon crm/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    });
});
