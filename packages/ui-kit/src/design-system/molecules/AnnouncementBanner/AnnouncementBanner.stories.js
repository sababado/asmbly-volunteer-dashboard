import { AnnouncementBanner } from './AnnouncementBanner';
const meta = {
    title: 'Design System/Molecules/AnnouncementBanner',
    component: AnnouncementBanner,
    tags: ['autodocs'],
    argTypes: {
        onDismiss: { action: 'dismissed' },
    },
};
export default meta;
export const Warning = {
    args: {
        variant: 'warning',
        title: 'Shop Announcement: Woodshop closed Sunday',
        message: 'Please plan your maintenance tasks accordingly. The dust collection system is undergoing critical upgrades and the area will be inaccessible.',
    },
};
export const Info = {
    args: {
        variant: 'info',
        title: 'New Tools in Metal Shop',
        message: 'We have instaled new welding stations. Please attend the safety briefing before use.',
    },
};
