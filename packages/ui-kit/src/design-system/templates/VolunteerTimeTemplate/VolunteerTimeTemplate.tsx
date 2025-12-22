import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface VolunteerTimeTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    header: React.ReactNode;
    stats: React.ReactNode;
    rewardsHeading?: React.ReactNode;
    impactHeading?: React.ReactNode;
    logs: React.ReactNode;
}

const VolunteerTimeTemplate = React.forwardRef<HTMLDivElement, VolunteerTimeTemplateProps>(
    ({ className, header, stats, rewardsHeading, logs, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col gap-6 p-6 md:p-12 md:pt-6 max-w-[1600px] mx-auto", className)}
                {...props}
            >
                {header}

                <div className="flex flex-col gap-4">
                    {rewardsHeading}

                    {/* 
                        Design shows Rewards and Impact in different sections in the vertical flow.
                        But our Grid might handle both or we might need two grids.
                        The screenshot shows:
                        1. "MEMBERSHIP REWARDS" header
                        2. Two Reward Cards
                        3. "CURRENT IMPACT" header
                        4. Two Impact Cards (Time/Tasks)
                        
                        So we might need two slots for stats or just pass them as children to sections.
                        Let's make it flexible.
                        Wait, my `VolunteerStatsGrid` was 2 cols.
                        So I can stack two grids.
                     */}
                    {stats}
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    {/* Logs Table Area */}
                    {logs}
                </div>
            </div>
        );
    }
);
VolunteerTimeTemplate.displayName = "VolunteerTimeTemplate";

export { VolunteerTimeTemplate };
