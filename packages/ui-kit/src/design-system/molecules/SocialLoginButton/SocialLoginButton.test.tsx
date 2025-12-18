import { render, screen } from '@testing-library/react';
import { SocialLoginButton } from './SocialLoginButton';
import { describe, it, expect } from 'vitest';

describe('SocialLoginButton', () => {
    it('renders correctly', () => {
        render(<SocialLoginButton>Log in with Neon CRM</SocialLoginButton>);
        expect(screen.getByText(/log in with neon crm/i)).toBeInTheDocument();
    });
});
