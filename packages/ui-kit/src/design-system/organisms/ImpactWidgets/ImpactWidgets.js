import * as React from 'react';
import { cn } from '../../../lib/utils';
import { StatCard } from '../../molecules/StatCard/StatCard';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { ReportIssueCard } from '../../molecules/ReportIssueCard/ReportIssueCard';
import { Timer, CheckCircle } from 'lucide-react';
const ImpactWidgets = React.forwardRef(({ className, hours, tasksCompleted, goalProgress, recentActivity, ...props }, ref) => {
    return (<aside ref={ref} className={cn("flex flex-col gap-8", className)} {...props}>
                {/* Your Impact Card */}
                <div className="flex flex-col bg-brand-purple text-white shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"/>
                    <div className="px-6 py-5 border-b border-white/10">
                        <h3 className="text-lg font-display font-bold uppercase tracking-wide">Your Impact</h3>
                    </div>
                    <div className="p-6 flex flex-col gap-8">
                        <StatCard icon={Timer} value={hours} label="Hours this month" variant="secondary"/>
                        <StatCard icon={CheckCircle} value={tasksCompleted} label="Tasks Completed" variant="accent-teal"/>

                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex justify-between text-xs font-medium uppercase tracking-wide text-gray-300">
                                <span>Progress to Goal</span>
                                <span>{goalProgress}%</span>
                            </div>
                            <ProgressBar value={goalProgress} variant="secondary"/>
                            <p className="text-xs text-gray-400 mt-1">Monthly Goal: 20hrs</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Card */}
                <div className="flex flex-col bg-white border border-gray-200 shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                        <h3 className="text-base font-display font-bold uppercase tracking-wide text-brand-purple">Recent Activity</h3>
                        <a href="#" className="text-xs text-brand-purple font-bold uppercase tracking-wider hover:underline">View All</a>
                    </div>
                    <div className="p-0">
                        {recentActivity.map((activity) => (<div key={activity.id} className="flex gap-4 p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                <div className="mt-1">
                                    <div className="size-2.5 rotate-45" style={{ backgroundColor: activity.color }}/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-semibold text-slate-800 leading-tight">{activity.text}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">{activity.time}</p>
                                </div>
                            </div>))}
                    </div>
                </div>

                {/* Action Widgets */}
                <div className="flex flex-col gap-3">
                    <ReportIssueCard label="View Shop Calendar" href="#"/>
                    <ReportIssueCard />

                </div>
            </aside>);
});
ImpactWidgets.displayName = "ImpactWidgets";
export { ImpactWidgets };
