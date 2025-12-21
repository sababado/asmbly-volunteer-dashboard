import * as React from 'react';
import { DashboardLayout } from '../../design-system/templates/DashboardLayout/DashboardLayout';
import { DashboardHeader } from '../../design-system/organisms/DashboardHeader/DashboardHeader';
import { TaskList } from '../../design-system/organisms/TaskList/TaskList';
import { ImpactWidgets } from '../../design-system/organisms/ImpactWidgets/ImpactWidgets';
import type { SidebarItemProps } from '../../design-system/molecules/SidebarItem/SidebarItem';
import type { TaskListItemProps } from '../../design-system/molecules/TaskListItem/TaskListItem';
import type { ImpactWidgetsProps } from '../../design-system/organisms/ImpactWidgets/ImpactWidgets';
import { LayoutDashboard, CheckSquare, Trophy, Store, User } from 'lucide-react';

export interface VolunteerDashboardPageProps {
    user: {
        name: string;
    };
    sidebarItems?: Omit<SidebarItemProps, 'isCollapsed'>[];
    tasks: TaskListItemProps[];
    impactStats: Omit<ImpactWidgetsProps, 'className'>;
    onViewAllTasks?: () => void;
}


const defaultSidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: CheckSquare, label: 'My Tasks', href: '/tasks' },
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: Store, label: 'Shop Areas', href: '/shops' },
    { icon: User, label: 'Profile', href: '/profile' },
];

const VolunteerDashboardPage: React.FC<VolunteerDashboardPageProps> = ({
    user,
    sidebarItems = defaultSidebarItems,
    tasks,
    impactStats,
    onViewAllTasks
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
                        <TaskList tasks={tasks} onViewAllClick={onViewAllTasks} />
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
