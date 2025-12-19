import { Button } from './Button';
import { Mail } from 'lucide-react';
const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'gradient', 'asmbly-yellow'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon', 'xl'],
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: 'Button',
        variant: 'default',
    },
};
export const Outline = {
    args: {
        children: 'Outline',
        variant: 'outline',
    }
};
export const AsmblyYellow = {
    args: {
        children: 'Log In',
        variant: 'asmbly-yellow',
    }
};
export const Gradient = {
    args: {
        children: 'Gradient',
        variant: 'gradient',
    }
};
export const WithIcon = {
    args: {
        children: 'Login with Email',
        leftIcon: <Mail className="h-4 w-4"/>,
    }
};
export const Loading = {
    args: {
        children: 'Please wait',
        isLoading: true,
    }
};
