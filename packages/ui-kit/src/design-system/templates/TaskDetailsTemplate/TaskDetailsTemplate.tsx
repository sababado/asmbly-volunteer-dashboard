import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface TaskDetailsTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The breadcrumbs or back navigation element
     */
    breadcrumbs?: React.ReactNode;
    /**
     * The main header of the task details page
     */
    header?: React.ReactNode;
    /**
     * The primary content (e.g., description, images)
     */
    main?: React.ReactNode;
    /**
     * The top widget in the sidebar (typically ClaimTaskCard)
     */
    sidebarTop?: React.ReactNode;
    /**
     * The middle widget in the sidebar (typically ReporterCard)
     */
    sidebarMiddle?: React.ReactNode;
    /**
     * The bottom widget in the sidebar (typically ToolPartList)
     */
    sidebarBottom?: React.ReactNode;
    /**
     * The assistance card in the sidebar
     */
    sidebarAssistance?: React.ReactNode;
    /**
     * The activity feed section
     */
    activityFeed?: React.ReactNode;
}

const TaskDetailsTemplate = React.forwardRef<HTMLDivElement, TaskDetailsTemplateProps>(
    ({ className, breadcrumbs, header, main, sidebarTop, sidebarMiddle, sidebarBottom, sidebarAssistance, activityFeed, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("w-full max-w-[1400px] mx-auto p-4 md:p-8 space-y-8", className)}
                {...props}
            >
                {/* Header Section */}
                <div className="space-y-4">
                    {breadcrumbs && <div className="mb-4">{breadcrumbs}</div>}
                    {header}
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Main Content Column (2/3 width) */}
                    <div className="lg:col-span-2 space-y-8">
                        {main}
                        {activityFeed}
                    </div>

                    {/* Sidebar Column (1/3 width) */}
                    <div className="space-y-6">
                        {sidebarTop}
                        {sidebarMiddle}
                        {sidebarBottom}
                        {sidebarAssistance}
                    </div>
                </div>
            </div>
        );
    }
);

TaskDetailsTemplate.displayName = "TaskDetailsTemplate";

export { TaskDetailsTemplate };
