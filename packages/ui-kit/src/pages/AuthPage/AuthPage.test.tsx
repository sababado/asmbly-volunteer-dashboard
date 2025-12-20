import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AuthPage } from './AuthPage'

describe('AuthPage', () => {
    it('renders the banner if provided', () => {
        render(<AuthPage banner={<div data-testid="banner">Banner</div>} />)
        expect(screen.getByTestId('banner')).toBeInTheDocument()
    })

    it('triggers callbacks on actions', () => {
        const handleLogin = vi.fn()
        const handleSocial = vi.fn()
        const handleTrouble = vi.fn()
        const handleMember = vi.fn()

        render(
            <AuthPage
                onLogin={handleLogin}
                onSocialLogin={handleSocial}
                onTroubleLoggingIn={handleTrouble}
                onBecomeMember={handleMember}
            />
        )

        // Login Form Submission
        const input = screen.getByPlaceholderText('maker@example.com')
        fireEvent.change(input, { target: { value: 'test@example.com' } })
        fireEvent.click(screen.getByText('Send Magic Link'))
        expect(handleLogin).toHaveBeenCalledWith('test@example.com')

        // Social Login
        fireEvent.click(screen.getByText('Log in with Neon CRM'))
        expect(handleSocial).toHaveBeenCalled()

        // Footer links
        fireEvent.click(screen.getByText('Trouble logging in?'))
        expect(handleTrouble).toHaveBeenCalled()

        fireEvent.click(screen.getByText('Become a member'))
        expect(handleMember).toHaveBeenCalled()
    })
})
