import * as React from "react";
import { DashboardLayout } from "../../design-system/templates/DashboardLayout/DashboardLayout";
import { TaskDetailsTemplate } from "../../design-system/templates/TaskDetailsTemplate/TaskDetailsTemplate";
import { ClaimTaskCard } from "../../design-system/organisms/ClaimTaskCard/ClaimTaskCard";
import type { ClaimTaskCardProps } from "../../design-system/organisms/ClaimTaskCard/ClaimTaskCard";
import { ReporterCard } from "../../design-system/molecules/ReporterCard/ReporterCard";
import type { ReporterCardProps } from "../../design-system/molecules/ReporterCard/ReporterCard";
import { ToolPartList } from "../../design-system/organisms/ToolPartList/ToolPartList";
import { ToolPartItem } from "../../design-system/molecules/ToolPartItem/ToolPartItem";
import type { ToolPartItemProps } from "../../design-system/molecules/ToolPartItem/ToolPartItem";
import { ActivityFeed } from "../../design-system/organisms/ActivityFeed/ActivityFeed";
import type { ActivityItemProps } from "../../design-system/molecules/ActivityItem/ActivityItem";
import { AssistanceCard } from "../../design-system/molecules/AssistanceCard/AssistanceCard";
import type { AssistanceCardProps } from "../../design-system/molecules/AssistanceCard/AssistanceCard";
import type { SidebarItemProps } from "../../design-system/molecules/SidebarItem/SidebarItem";
import { Button } from "../../design-system/atoms/Button/Button";
import { ImageGrid } from "../../design-system/molecules/ImageGrid/ImageGrid";
import { Callout } from "../../design-system/molecules/Callout/Callout";
import { ArrowLeft, LayoutDashboard, CheckSquare, Trophy, Store, User } from "lucide-react";

export interface TaskDetailsPageProps {
    /**
     * Navigation items for the sidebar
     */
    sidebarItems?: Omit<SidebarItemProps, "isCollapsed">[];
    /**
     * Active path for the sidebar
     */
    activePath?: string;
    /**
     * User's logout handler
     */
    onLogout?: () => void;
    /**
     * Handler for back navigation
     */
    onBack?: () => void;
    /**
     * Task information
     */
    task: {
        id: string;
        title: string;
        description: string;
        tags?: { label: string; type: "default" | "warning" }[];
        images?: { id: number; src: string; alt: string }[];
        warning?: string;
    };
    /**
     * Claim card props
     */
    claimCard: Omit<ClaimTaskCardProps, "className">;
    /**
     * Reporter information
     */
    reporter: Omit<ReporterCardProps, "className">;
    /**
     * Tools and parts required
     */
    toolsParts?: (ToolPartItemProps & { id: string })[];
    /**
     * Activity feed items
     */
    activity?: (ActivityItemProps & { id: string })[];
    /**
     * Assistance card customization
     */
    assistance?: Omit<AssistanceCardProps, "className">;
}

const defaultSidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: CheckSquare, label: "My Tasks", href: "/tasks" },
    { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
    { icon: Store, label: "Shop Areas", href: "/shops" },
    { icon: User, label: "Profile", href: "/profile" },
];

const TaskDetailsPage: React.FC<TaskDetailsPageProps> = ({
    sidebarItems = defaultSidebarItems,
    activePath = "/tasks",
    onLogout,
    onBack,
    task,
    claimCard,
    reporter,
    toolsParts = [],
    activity = [],
    assistance,
}) => {
    // Construct sub-components
    const breadcrumbs = (
        <Button variant="ghost" onClick={onBack} className="pl-0 gap-2 text-muted-foreground hover:text-foreground">
            {React.createElement(ArrowLeft as any, { className: "w-4 h-4" })}
            Back to Dashboard
        </Button>
    );

    const header = (
        <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-asmbly-navy dark:text-white uppercase leading-tight">
                {task.title}
            </h1>
            {task.tags && task.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {task.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${tag.type === "warning"
                                ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                                : "bg-asmbly-teal/10 text-asmbly-teal dark:bg-asmbly-teal/20"
                                }`}
                        >
                            {tag.label}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );

    const mainContent = (
        <div className="bg-white dark:bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border space-y-8">
            <div className="prose dark:prose-invert max-w-none space-y-6">
                <div>
                    <h3 className="text-xl font-display font-bold uppercase text-asmbly-navy dark:text-white mb-3">
                        Description
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                        {task.description}
                    </p>
                </div>

                {task.warning && (
                    <Callout variant="warning" title="Important Note">
                        {task.warning}
                    </Callout>
                )}
            </div>

            {task.images && task.images.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-xl font-display font-bold uppercase text-asmbly-navy dark:text-white">
                        Attached Images
                    </h3>
                    <ImageGrid images={task.images} />
                </div>
            )}
        </div>
    );

    const feed = activity.length > 0 ? (
        <ActivityFeed items={activity} />
    ) : null;

    const toolList = toolsParts.length > 0 ? (
        <ToolPartList>
            {toolsParts.map((item) => (
                <ToolPartItem key={item.id} {...item} />
            ))}
        </ToolPartList>
    ) : null;

    return (
        <DashboardLayout
            sidebarProps={{
                items: sidebarItems,
                activePath: activePath,
                onLogout: onLogout,
            }}
        >
            <TaskDetailsTemplate
                breadcrumbs={breadcrumbs}
                header={header}
                main={mainContent}
                activityFeed={feed}
                sidebarTop={<ClaimTaskCard {...claimCard} />}
                sidebarMiddle={<ReporterCard {...reporter} />}
                sidebarBottom={toolList}
                sidebarAssistance={<AssistanceCard {...assistance} />}
            />
        </DashboardLayout>
    );
};

TaskDetailsPage.displayName = "TaskDetailsPage";

export { TaskDetailsPage };
