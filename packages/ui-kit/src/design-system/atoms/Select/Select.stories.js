import { Select } from './Select';
const meta = {
    title: 'Design System/Atoms/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export const Default = {
    args: {
        children: (<>
                <option>All Areas</option>
                <option>Woodshop</option>
                <option>Metal Shop</option>
            </>),
    },
};
