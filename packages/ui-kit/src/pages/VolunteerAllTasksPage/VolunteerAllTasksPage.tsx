import * as React from 'react';
import { LayoutDashboard, CheckSquare, Trophy, User, Search, Grid, List as ListIcon, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { DashboardLayout } from '../../design-system/templates/DashboardLayout/DashboardLayout';
import { TaskList } from '../../design-system/organisms/TaskList/TaskList';
import { TaskFilterSidebar } from '../../design-system/organisms/TaskFilterSidebar/TaskFilterSidebar';
import { AssistanceCard } from '../../design-system/molecules/AssistanceCard/AssistanceCard';
import { Input } from '../../design-system/atoms/Input/Input';
import { Select } from '../../design-system/atoms/Select/Select';
import { Button } from '../../design-system/atoms/Button/Button';
import type { TaskListItemProps } from '../../design-system/molecules/TaskListItem/TaskListItem';
import type { FilterState } from '../../design-system/organisms/TaskFilterSidebar/TaskFilterSidebar';
import type { SidebarItemProps } from '../../design-system/molecules/SidebarItem/SidebarItem';
import { NotImplementedModal } from '../../design-system/organisms/NotImplementedModal/NotImplementedModal';

export interface VolunteerAllTasksPageProps {
    tasks: TaskListItemProps[];
    sidebarItems?: Omit<SidebarItemProps, 'isCollapsed'>[];
    user: { name: string; };
    onFilterChange?: (filters: FilterState) => void;
    currentFilters?: FilterState;
    onViewTask?: (id: string) => void;
    onClaimTask?: (id: string) => void;
}

const defaultSidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: CheckSquare, label: 'All Tasks', href: '/tasks' }, // "My Tasks" renamed or just active link logic? Design says "ALL TASKS" in nav
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: User, label: 'Profile', href: '/profile' },
];

const defaultFilters: FilterState = {
    workspace: [],
    urgency: [],
    time: [],
    type: []
};

export const VolunteerAllTasksPage: React.FC<VolunteerAllTasksPageProps> = ({
    tasks,
    sidebarItems = defaultSidebarItems,
    user: _user,
    onFilterChange,
    currentFilters = defaultFilters,
    onViewTask: _onViewTask,
    onClaimTask: _onClaimTask
}) => {
    // Local state for implementation modal if features clicked
    const [isNotImplementedOpen, setIsNotImplementedOpen] = React.useState(false);
    const [viewMode, setViewMode] = React.useState<'list' | 'grid'>('list');

    const handleFeatureClick = () => setIsNotImplementedOpen(true);

    return (
        <DashboardLayout
            sidebarProps={{
                items: sidebarItems,
                activePath: '/tasks',
                onLogout: () => console.log('logout') // Replace
            }}
        >
            <div className="flex flex-col gap-6">
                {/* Header Section */}
                <div>
                    <h1 className="text-4xl font-display font-bold text-primary uppercase tracking-tight mb-2">
                        All Tasks
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <p className="text-muted-foreground">
                            Browse over <span className="font-bold text-foreground">100+ opportunities</span> to help maintain and improve our space.
                        </p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            Showing <span className="font-bold text-foreground">1-20</span> of <span className="font-bold text-foreground">112</span> tasks
                        </p>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 items-start">
                    {/* Left Column: Filters */}
                    <div className="w-full xl:w-64 shrink-0 flex flex-col gap-6">
                        <TaskFilterSidebar
                            filters={currentFilters}
                            onFilterChange={onFilterChange || (() => { })}
                            onClearAll={() => onFilterChange?.(defaultFilters)}
                        />

                        <AssistanceCard
                            actionText="Contact Shop Lead"
                            onActionClick={handleFeatureClick}
                        />
                    </div>

                    {/* Right Column: List & Controls */}
                    <div className="flex-1 w-full min-w-0 flex flex-col gap-6">
                        {/* Search & Sort Bar */}
                        <div className="flex flex-col md:flex-row gap-4 p-1">
                            <div className="flex-1">
                                <Input
                                    icon={React.createElement(Search as React.ElementType, { size: 18 })}
                                    placeholder="Search tasks by name, tool, or ID..."
                                    className="bg-white border-border"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
                                    <Select containerClassName="w-[140px]">
                                        <option>Newest First</option>
                                        <option>Oldest First</option>
                                        <option>Urgency</option>
                                    </Select>
                                </div>
                                <div className="flex items-center border border-border rounded-sm bg-white">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn("h-10 w-10 rounded-none", viewMode === 'list' ? 'bg-muted text-foreground' : 'text-muted-foreground')}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <ListIcon size={20} />
                                    </Button>
                                    <div className="w-[1px] h-full bg-border" />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn("h-10 w-10 rounded-none", viewMode === 'grid' ? 'bg-muted text-foreground' : 'text-muted-foreground')}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <Grid size={20} />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Active Filters Filters (Visual Mock) */}
                        {/* Could render chips here based on currentFilters if desired, 
                            but Sidebar handles the selection state. 
                            Design shows "ACTIVE: Woodshop X High Urgency X Clear All" 
                        */}
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-bold text-muted-foreground uppercase tracking-wide mr-1">Active:</span>
                            {/* Mock chips for demo */}
                            <div className="flex items-center gap-1 bg-secondary/30 text-secondary-foreground px-2 py-1 rounded-sm">
                                <span>Woodshop</span>
                                <Button variant="ghost" size="icon" className="h-4 w-4 hover:bg-transparent"><X size={12} /></Button>
                            </div>
                            <div className="flex items-center gap-1 bg-secondary/30 text-secondary-foreground px-2 py-1 rounded-sm">
                                <span>High Urgency</span>
                                <Button variant="ghost" size="icon" className="h-4 w-4 hover:bg-transparent"><X size={12} /></Button>
                            </div>
                            <button className="text-red-500 font-bold hover:underline ml-2">Clear All</button>
                        </div>

                        {/* Task List */}
                        <TaskList
                            tasks={tasks}
                            hideFilters={true}
                            // Propagate header? TaskList has "LATEST TASKS" hardcoded.
                            // Maybe we should hide the header too?
                            // Adding css to hide header if needed or let it be.
                            // Design shows just cards, no "LATEST TASKS" header. 
                            // I should update TaskList to support hiding header OR just use a loop of TaskListItem here?
                            // TaskList encapsulates the List structure. Let's use it but maybe update it to hide header later if needed.
                            // Ideally TaskList should be pure list, and filters/header separate.
                            // For now, let's stick with TaskList.
                            className=""
                        />
                    </div>
                </div>
            </div>

            <NotImplementedModal
                isOpen={isNotImplementedOpen}
                onClose={() => setIsNotImplementedOpen(false)}
            />
        </DashboardLayout>
    );
};
