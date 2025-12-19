import * as React from "react";
import { cn } from "../../../lib/utils";

import { ActivityItem, ActivityItemProps } from "../../molecules/ActivityItem/ActivityItem";

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    items?: (ActivityItemProps & { id?: string | number })[];
}

const ActivityFeed = React.forwardRef<HTMLDivElement, ActivityFeedProps>(
    ({ className, title = "Activity & Updates", items, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("mt-8 pt-8 border-t border-slate-200 dark:border-white/10", className)} {...props}>
                <h3 className="text-xl font-display font-bold text-asmbly-navy dark:text-white mb-8">
                    {title}
                </h3>
                <div className="relative pl-6 space-y-10">
                    {/* Vertical Line */}
                    <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200 dark:border-white/10 dark:bg-white/10" />
                    {items && items.map((item, index) => (
                        <ActivityItem key={item.id || index} {...item} />
                    ))}
                    {children}
                </div>
            </div>
        );
    }
);
ActivityFeed.displayName = "ActivityFeed";

export { ActivityFeed };
