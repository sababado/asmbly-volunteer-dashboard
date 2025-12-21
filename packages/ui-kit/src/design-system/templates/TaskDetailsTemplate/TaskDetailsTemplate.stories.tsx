import type { Meta, StoryObj } from "@storybook/react";
import { TaskDetailsTemplate } from "./TaskDetailsTemplate";
import { ClaimTaskCard } from "../../organisms/ClaimTaskCard/ClaimTaskCard";
import { ReporterCard } from "../../molecules/ReporterCard/ReporterCard";
import { ToolPartList } from "../../organisms/ToolPartList/ToolPartList";
import { ToolPartItem } from "../../molecules/ToolPartItem/ToolPartItem";
import { Button } from "../../atoms/Button/Button";
import { ActivityFeed } from "../../organisms/ActivityFeed/ActivityFeed";
import { AssistanceCard } from "../../molecules/AssistanceCard/AssistanceCard";
import { ImageGrid } from "../../molecules/ImageGrid/ImageGrid";
import { Callout } from "../../molecules/Callout/Callout";
import { ArrowLeft, Wrench, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from 'react';

const meta = {
    title: "Templates/TaskDetailsTemplate",
    component: TaskDetailsTemplate,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TaskDetailsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example components to populate the slots
const ExampleHeader = () => (
    <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold text-asmbly-navy dark:text-white uppercase">
            Fix the Laser Cutter Exhaust
        </h1>
        <div className="flex gap-2">
            <span className="bg-asmbly-teal/10 text-asmbly-teal px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Maintenance
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                High Priority
            </span>
        </div>
    </div>
);

const ExampleBreadcrumbs = () => (
    <Button variant="ghost" className="pl-0 gap-2 text-muted-foreground hover:text-foreground">
        {React.createElement(ArrowLeft as React.ElementType, { className: "w-4 h-4" })}
        Back to Dashboard
    </Button>
);

const ExampleMainContent = () => (
    <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border space-y-8">
        <div className="prose dark:prose-invert max-w-none space-y-4">
            <h3 className="text-xl font-display font-bold uppercase text-asmbly-navy dark:text-white">
                Description
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
                The exhaust fan on the laser cutter is making a loud grinding noise and seems to be losing suction.
                Please inspect the motor and the ducting for any obstructions or damage.
            </p>
            <Callout variant="warning" title="Safety Warning">
                This is critical for the safe operation of the laser cutter. Do not use the machine until this is resolved.
            </Callout>
        </div>

        <div className="space-y-4">
            <h3 className="text-xl font-display font-bold uppercase text-asmbly-navy dark:text-white">
                Attached Images
            </h3>
            <ImageGrid images={[
                { id: 1, src: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop", alt: "Laser cutter" },
                { id: 2, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop", alt: "Tools close up" },
            ]} />
        </div>
    </div>
);

const ExampleToolList = () => (
    <ToolPartList>
        <ToolPartItem icon={Wrench as unknown as LucideIcon} name="Philips Screwdriver" detail="Tool" />
        <ToolPartItem icon={Settings as unknown as LucideIcon} name="Replacement Filter" detail="1x • Storage Closet B" detailColor="teal" />
        <ToolPartItem icon={Wrench as unknown as LucideIcon} name="Ladder" detail="Workshop Main" />
    </ToolPartList>
);

const ExampleActivityFeed = () => (
    <ActivityFeed items={[
        {
            id: "1",
            variant: "user",
            authorName: "John Smith",
            timestamp: "2 hours ago",
            avatarSrc: "https://i.pravatar.cc/150?u=john",
            children: "I can take a look at this tomorrow morning."
        },
        {
            id: "2",
            variant: "system",
            authorName: "System",
            timestamp: "1 day ago",
            children: <span>Jane Doe changed status to <span className="font-bold">Unclaimed</span></span>
        },
        {
            id: "3",
            variant: "user",
            authorName: "Jane Doe",
            timestamp: "1 day ago",
            avatarSrc: "https://i.pravatar.cc/150?u=jane",
            children: "Reported issue."
        }
    ]} />
);

export const Default: Story = {
    args: {
        breadcrumbs: <ExampleBreadcrumbs />,
        header: <ExampleHeader />,
        main: <ExampleMainContent />,
        activityFeed: <ExampleActivityFeed />,
        sidebarTop: <ClaimTaskCard status="Unclaimed" estTime="2 hours" points="50" />,
        sidebarMiddle: <ReporterCard name="Jane Doe" role="Facilities Manager" avatarSrc="https://i.pravatar.cc/150?u=jane" />,
        sidebarBottom: <ExampleToolList />,
        sidebarAssistance: <AssistanceCard />,
    },
};

export const Claimed: Story = {
    args: {
        breadcrumbs: <ExampleBreadcrumbs />,
        header: <ExampleHeader />,
        main: <ExampleMainContent />,
        activityFeed: <ExampleActivityFeed />,
        sidebarTop: <ClaimTaskCard status="In Progress" estTime="2 hours" points="50" isClaimed={true} />,
        sidebarMiddle: <ReporterCard name="Jane Doe" role="Facilities Manager" avatarSrc="https://i.pravatar.cc/150?u=jane" />,
        sidebarBottom: <ExampleToolList />,
        sidebarAssistance: <AssistanceCard />,
    },
};
