import type { Meta, StoryObj } from "@storybook/react";
import { ActivityItem } from "./ActivityItem";
import { CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";

const meta = {
    title: "Molecules/ActivityItem",
    component: ActivityItem,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    // Provide a decorator to simulate the left-line alignment context
    decorators: [
        (Story) => (
            <div className="pl-6 border-l-2 border-slate-200 dark:border-white/10 ml-4 py-4">
                {React.createElement(Story as unknown as React.ElementType)}
            </div>
        ),
    ],
} satisfies Meta<typeof ActivityItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserComment: Story = {
    args: {
        variant: "user",
        authorName: "John Smith",
        timestamp: "2 hours ago",
        avatarSrc: "https://i.pravatar.cc/150?u=john",
        children: "I can take a look at this tomorrow morning.",
    },
};

export const SystemActivity: Story = {
    args: {
        variant: "system",
        authorName: "System",
        timestamp: "5 hours ago",
        children: (
            <span>
                Task status changed to <span className="font-bold text-asmbly-teal">In Progress</span>
            </span>
        ),
    },
};

export const CustomIcon: Story = {
    args: {
        variant: "system",
        authorName: "Completed",
        timestamp: "Yesterday",
        icon: CheckCircle as unknown as LucideIcon,
        children: "Task marked as complete by Jane Doe",
    },
};
