import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
    it('calls onSubmit with email when submitted', () => {
        const handleSubmit = vi.fn()
        render(
            <LoginForm
                emailLabel="Email"
                emailPlaceholder="test@example.com"
                buttonText="Login"
                onSubmit={handleSubmit}
            />
        )

        const input = screen.getByPlaceholderText('test@example.com')
        fireEvent.change(input, { target: { value: 'user@example.com' } })

        const button = screen.getByRole('button', { name: /Login/i })
        fireEvent.click(button)

        expect(handleSubmit).toHaveBeenCalledWith('user@example.com')
    })
})
