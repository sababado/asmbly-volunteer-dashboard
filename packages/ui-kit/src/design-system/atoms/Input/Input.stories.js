import { Input } from './Input';
import { Mail } from 'lucide-react';
const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Email address',
    },
};
export const WithIcon = {
    args: {
        placeholder: 'maker@example.com',
        icon: <Mail className="h-4 w-4"/>,
    }
};
