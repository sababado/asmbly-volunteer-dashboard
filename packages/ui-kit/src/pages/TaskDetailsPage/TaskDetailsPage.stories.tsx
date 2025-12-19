import type { Meta, StoryObj } from "@storybook/react";
import { TaskDetailsPage } from "./TaskDetailsPage";
import { Wrench, Settings } from "lucide-react";

const meta = {
    title: "Pages/TaskDetailsPage",
    component: TaskDetailsPage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TaskDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTask = {
    id: "1",
    title: "Fix the Laser Cutter Exhaust",
    description: "The exhaust fan on the laser cutter is making a loud grinding noise and seems to be losing suction. Please inspect the motor and the ducting for any obstructions or damage. This needs to be addressed before heavy usage this weekend.",
    tags: [
        { label: "Maintenance", type: "default" } as const,
        { label: "High Priority", type: "warning" } as const,
    ],
    warning: "Critical for safe operation. Do not use machine until resolved.",
    images: [
        { id: 1, src: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop", alt: "Laser cutter" },
        { id: 2, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop", alt: "Motor detail" },
    ],
};

const mockToolsParts = [
    { id: "1", icon: Wrench, name: "Philips Screwdriver", detail: "Tool" },
    { id: "2", icon: Settings, name: "Replacement Filter", detail: "1x • Closet B", detailColor: "teal" as const },
    { id: "3", icon: Wrench, name: "Ladder", detail: "Workshop Main" },
];

const mockActivity = [
    {
        id: "1",
        variant: "user" as const,
        authorName: "John Smith",
        timestamp: "2 hours ago",
        avatarSrc: "https://i.pravatar.cc/150?u=john",
        children: "I'll take a look at this tomorrow morning.",
    },
    {
        id: "2",
        variant: "system" as const,
        authorName: "System",
        timestamp: "1 day ago",
        children: <span>Jane Doe changed status to <span className="font-bold">Unclaimed</span></span>,
    },
    {
        id: "3",
        variant: "user" as const,
        authorName: "Jane Doe",
        timestamp: "1 day ago",
        avatarSrc: "https://i.pravatar.cc/150?u=jane",
        children: "Reported the issue.",
    },
];

export const Default: Story = {
    args: {
        activePath: "/tasks",
        task: mockTask,
        claimCard: {
            status: "Unclaimed",
            estTime: "2 hours",
            points: "50",
            onClaim: () => alert("Claimed!"),
        },
        reporter: {
            name: "Jane Doe",
            role: "Facilities Manager",
            avatarSrc: "https://i.pravatar.cc/150?u=jane",
            onChatClick: () => alert("Chat!"),
        },
        toolsParts: mockToolsParts,
        activity: mockActivity,
        assistance: {
            onActionClick: () => alert("Help!"),
        },
    },
};

export const Claimed: Story = {
    args: {
        ...Default.args,
        claimCard: {
            status: "In Progress",
            estTime: "2 hours",
            points: "50",
            isClaimed: true,
            onComplete: () => alert("Completed!"),
        },
    },
};
