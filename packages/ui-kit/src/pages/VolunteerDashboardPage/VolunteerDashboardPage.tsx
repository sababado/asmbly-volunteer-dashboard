import * as React from 'react';
import { DashboardLayout } from '../../design-system/templates/DashboardLayout/DashboardLayout';
import { DashboardHeader } from '../../design-system/organisms/DashboardHeader/DashboardHeader';
import { TaskList } from '../../design-system/organisms/TaskList/TaskList';
import { ImpactWidgets } from '../../design-system/organisms/ImpactWidgets/ImpactWidgets';
import { RecentActivityCard } from '../../design-system/molecules/RecentActivityCard/RecentActivityCard';
import { AnnouncementBanner } from '../../design-system/molecules/AnnouncementBanner/AnnouncementBanner';
import { StatCard } from '../../design-system/molecules/StatCard/StatCard';

import type { SidebarItemProps } from '../../design-system/molecules/SidebarItem/SidebarItem';
import type { TaskListItemProps } from '../../design-system/molecules/TaskListItem/TaskListItem';
import type { ImpactWidgetsProps } from '../../design-system/organisms/ImpactWidgets/ImpactWidgets';
import { LayoutDashboard, CheckSquare, Trophy, User, Clock } from 'lucide-react';

export interface VolunteerDashboardPageProps {
    user: {
        name: string;
    };
    stats: {
        hoursLogged: number;
        tasksCompleted: number;
        currentStreak: number;
    };
    announcements: Array<{
        id: string;
        title: string;
        message: string;
        type: 'info' | 'warning' | 'success';
        date: string;
    }>;
    recentActivity: Array<{
        id: string;
        user: string;
        action: string;
        target: string;
        time: string;
    }>;
    tasks: TaskListItemProps[];
    onClaimTask: (taskId: string) => void;
    sidebarItems?: Omit<SidebarItemProps, 'isCollapsed'>[];
    impactStats: Omit<ImpactWidgetsProps, 'className'>;
    onViewAllTasks?: () => void;
}


const defaultSidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: CheckSquare, label: 'My Tasks', href: '/tasks' },
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: User, label: 'Profile', href: '/profile' },
];

const VolunteerDashboardPage: React.FC<VolunteerDashboardPageProps> = ({
    user,
    sidebarItems = defaultSidebarItems,
    tasks,
    impactStats,
    onViewAllTasks,
    stats,
    announcements,
    recentActivity,
    // onClaimTask // Unused for now
}) => {
    return (
        <DashboardLayout
            sidebarProps={{
                items: sidebarItems,
                activePath: '/dashboard',
                onLogout: () => console.log('logout') // Replace with actual handler
            }}
        >
            <div className="flex flex-col gap-8">
                <DashboardHeader
                    title={`Welcome back, ${user.name}`}
                    subtitle="The Woodshop needs some love today. Ready to help keep our community space running smoothly?"
                />

                <div className="flex flex-col xl:flex-row gap-8 items-start">
                    <div className="flex-1 w-full xl:min-w-0">
                        <div className="flex flex-col gap-6">
                            {/* Stats Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <StatCard
                                    label="Hours Logged"
                                    value={stats.hoursLogged.toString()}
                                    icon={Clock}
                                    variant="primary"
                                />
                                <StatCard
                                    label="Tasks Completed"
                                    value={stats.tasksCompleted.toString()}
                                    icon={CheckSquare}
                                    variant="secondary"
                                />
                                <StatCard
                                    label="Current Streak"
                                    value={`${stats.currentStreak} Days`}
                                    icon={Trophy}
                                    variant="accent-teal"
                                />
                            </div>

                            {/* Announcements */}
                            {announcements.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold font-display uppercase text-asmbly-navy dark:text-white">Announcements</h3>
                                    {announcements.map(announcement => (
                                        <AnnouncementBanner
                                            key={announcement.id}
                                            title={announcement.title}
                                            message={announcement.message}
                                            variant={announcement.type === 'success' ? 'info' : announcement.type}
                                            onDismiss={() => console.log('dismiss', announcement.id)}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Tasks */}
                            <TaskList tasks={tasks} onViewAllClick={onViewAllTasks} />

                            {/* Recent Activity */}
                            <div className="space-y-4">
                                <RecentActivityCard
                                    activities={recentActivity.map(a => ({
                                        id: a.id,
                                        text: `${a.user} ${a.action} ${a.target}`,
                                        time: a.time,
                                        color: '#F59E0B',
                                        type: 'badge' // Valid type from RecentActivity interface
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[380px] shrink-0">
                        <ImpactWidgets {...impactStats} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
VolunteerDashboardPage.displayName = "VolunteerDashboardPage";

export { VolunteerDashboardPage };
