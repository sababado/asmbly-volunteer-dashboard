import * as React from "react";
import { cn } from "../../../lib/utils";

import { ActivityItem } from "../../molecules/ActivityItem/ActivityItem";
import type { ActivityItemProps } from "../../molecules/ActivityItem/ActivityItem";

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    items?: (ActivityItemProps & { id?: string | number })[];
}

const ActivityFeed = React.forwardRef<HTMLDivElement, ActivityFeedProps>(
    ({ className, title = "Activity & Updates", items, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("mt-8 pt-8 border-t border-border", className)} {...props}>
                <h3 className="text-xl font-display font-bold text-foreground mb-8">
                    {title}
                </h3>
                <div className="relative pl-6 space-y-10">
                    {/* Vertical Line */}
                    <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-border" />
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
