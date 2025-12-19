import { LoginForm } from './LoginForm';
const meta = {
    title: 'Organisms/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        emailLabel: 'Email Address',
        emailPlaceholder: 'maker@example.com',
        buttonText: 'Send Magic Link',
    },
};
