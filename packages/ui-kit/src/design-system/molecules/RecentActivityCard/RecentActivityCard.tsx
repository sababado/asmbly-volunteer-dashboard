import * as React from 'react';
import { cn } from '../../../lib/utils';
import type { RecentActivity } from '../../organisms/ImpactWidgets/ImpactWidgets';

export interface RecentActivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
    activities: RecentActivity[];
    onViewAll?: () => void;
}

const RecentActivityCard = React.forwardRef<HTMLDivElement, RecentActivityCardProps>(
    ({ className, activities, onViewAll, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col bg-card border border-border shadow-sm", className)}
                {...props}
            >
                <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-muted/30">
                    <h3 className="text-base font-display font-bold uppercase tracking-wide text-primary">Recent Activity</h3>
                    <button
                        onClick={onViewAll}
                        className="text-xs text-primary font-bold uppercase tracking-wider hover:underline"
                    >
                        View All
                    </button>
                </div>
                <div className="p-0">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex gap-4 p-5 border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                            <div className="mt-1">
                                <div className="size-2.5 rotate-45" style={{ backgroundColor: activity.color }} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold text-foreground leading-tight">{activity.text}</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wide">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);
RecentActivityCard.displayName = "RecentActivityCard";

export { RecentActivityCard };
