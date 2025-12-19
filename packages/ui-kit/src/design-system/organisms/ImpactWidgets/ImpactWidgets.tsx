import * as React from 'react';
import { cn } from '../../../lib/utils';
import { StatCard } from '../../molecules/StatCard/StatCard';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { ActionCard } from '../../molecules/ActionCard/ActionCard';
import { RecentActivityCard } from '../../molecules/RecentActivityCard/RecentActivityCard';
import { Timer, CheckCircle, Calendar } from 'lucide-react';

export interface RecentActivity {
    id: string;
    text: string;
    time: string;
    type: 'completed' | 'claimed' | 'badge';
    color: string;
}

export interface ImpactWidgetsProps extends React.HTMLAttributes<HTMLDivElement> {
    hours: number;
    tasksCompleted: number;
    goalProgress: number; // 0-100
    recentActivity: RecentActivity[];
}

const ImpactWidgets = React.forwardRef<HTMLDivElement, ImpactWidgetsProps>(
    ({ className, hours, tasksCompleted, goalProgress, recentActivity, ...props }, ref) => {
        return (
            <aside
                ref={ref}
                className={cn("flex flex-col gap-8", className)}
                {...props}
            >
                {/* Your Impact Card */}
                <div className="flex flex-col bg-brand-purple text-white shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                    <div className="px-6 py-5 border-b border-white/10">
                        <h3 className="text-lg font-display font-bold uppercase tracking-wide">Your Impact</h3>
                    </div>
                    <div className="p-6 flex flex-col gap-8">
                        <StatCard
                            icon={Timer}
                            value={hours}
                            label="Hours this month"
                            variant="secondary"
                        />
                        <StatCard
                            icon={CheckCircle}
                            value={tasksCompleted}
                            label="Tasks Completed"
                            variant="accent-teal"
                        />

                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex justify-between text-xs font-medium uppercase tracking-wide text-gray-300">
                                <span>Progress to Goal</span>
                                <span>{goalProgress}%</span>
                            </div>
                            <ProgressBar value={goalProgress} variant="secondary" />
                            <p className="text-xs text-gray-400 mt-1">Monthly Goal: 20hrs</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Card */}
                <RecentActivityCard activities={recentActivity} />

                {/* Action Widgets */}
                <div className="flex flex-col gap-3">
                    <ActionCard
                        label="View Shop Calendar"
                        href="#"
                        icon={Calendar}
                    />
                    <ActionCard
                        label="Report an Issue"
                        href="#"
                    // Default icon is AlertTriangle
                    />

                </div>
            </aside>
        );
    }
);
ImpactWidgets.displayName = "ImpactWidgets";

export { ImpactWidgets };
