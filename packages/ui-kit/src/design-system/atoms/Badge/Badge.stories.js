import { Badge } from './Badge';
const meta = {
    title: 'Design System/Atoms/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'accent-teal', 'accent-red', 'outline'],
        },
    },
};
export default meta;
export const Default = {
    args: {
        variant: 'default',
        children: 'Woodshop',
    },
};
export const Primary = {
    args: {
        variant: 'primary',
        children: 'Open',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Medium Urgency',
    },
};
export const AccentTeal = {
    args: {
        variant: 'accent-teal',
        children: 'Ready',
    },
};
export const AccentRed = {
    args: {
        variant: 'accent-red',
        children: 'High Urgency',
    },
};
export const Outline = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};
