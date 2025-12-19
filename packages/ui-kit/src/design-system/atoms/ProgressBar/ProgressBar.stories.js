import { ProgressBar } from './ProgressBar';
const meta = {
    title: 'Design System/Atoms/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100 } },
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'accent-teal', 'accent-red'],
        }
    },
};
export default meta;
export const Default = {
    args: {
        value: 65,
        variant: 'secondary'
    },
};
export const Full = {
    args: {
        value: 100,
        variant: 'accent-teal'
    },
};
