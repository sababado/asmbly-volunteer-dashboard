import type { Meta, StoryObj } from '@storybook/react';
import { ActivityFeed } from './ActivityFeed';
import { ActivityItem } from '../../molecules/ActivityItem/ActivityItem';
import { Bot } from 'lucide-react';

const meta = {
    title: 'Organisms/ActivityFeed',
    component: ActivityFeed,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <ActivityItem
                    authorName="Alex M."
                    timestamp="2 hours ago"
                    avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQE67rAVuq5hPxflevpUhrcVum_yPMUIbhX3Wial98Fh6P_jI-PcaoAGUDe1bY9Pcr7sngPqH4LyYOcwInQfwHcVCxWe0zzLtzve1CXthG8lY8NQ4-R11B-jP_2iz6-wtmmN_upIJrgHENePijzO3ggu78cp1wpuQKEd7dExVeDbNcOVy3NRGccfRZxnlFM9iPBdHxFkBd6ivYTcPp3FZkgMd58Pc-sGCgVs3xyR4hBbG6YL8bqgx_Ntp9z6o2pJMqKR_9QXTNZy"
                >
                    "I checked the inventory, we have 2 spare cartridges left in Bin A4. I've tagged the machine out."
                </ActivityItem>
                <ActivityItem
                    variant="system"
                    authorName="ClickUp Bot"
                    timestamp="5 hours ago"
                    icon={Bot}
                >
                    Task created automatically from Incident Report #221. Priority set to <span className="text-red-600 dark:text-red-400 font-bold">High</span>.
                </ActivityItem>
            </>
        ),
    },
};

export const WithItems: Story = {
    args: {
        items: [
            {
                id: "1",
                authorName: "Alex M.",
                timestamp: "2 hours ago",
                avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQE67rAVuq5hPxflevpUhrcVum_yPMUIbhX3Wial98Fh6P_jI-PcaoAGUDe1bY9Pcr7sngPqH4LyYOcwInQfwHcVCxWe0zzLtzve1CXthG8lY8NQ4-R11B-jP_2iz6-wtmmN_upIJrgHENePijzO3ggu78cp1wpuQKEd7dExVeDbNcOVy3NRGccfRZxnlFM9iPBdHxFkBd6ivYTcPp3FZkgMd58Pc-sGCgVs3xyR4hBbG6YL8bqgx_Ntp9z6o2pJMqKR_9QXTNZy",
                children: "\"I checked the inventory, we have 2 spare cartridges left in Bin A4. I've tagged the machine out.\"",
            },
            {
                id: "2",
                variant: "system",
                authorName: "ClickUp Bot",
                timestamp: "5 hours ago",
                icon: Bot,
                children: <span>Task created automatically from Incident Report #221. Priority set to <span className="text-red-600 dark:text-red-400 font-bold">High</span>.</span>,
            },
        ],
    },
};
