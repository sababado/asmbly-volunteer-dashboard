import * as React from 'react';
import { cn } from '../../../lib/utils';
import { TaskListItem } from '../../molecules/TaskListItem/TaskListItem';
import type { TaskListItemProps } from '../../molecules/TaskListItem/TaskListItem';
import { Select } from '../../atoms/Select/Select';
import { Input } from '../../atoms/Input/Input';
import { Search } from 'lucide-react';

export interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {
    tasks: TaskListItemProps[];
}

const TaskList = React.forwardRef<HTMLDivElement, TaskListProps>(
    ({ className, tasks, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col gap-8", className)}
                {...props}
            >
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 p-4 bg-background shadow-sm border border-border">
                    <div className="flex-1 min-w-[200px]">
                        <Input
                            icon={React.createElement(Search as React.ElementType, { size: 18 })}
                            placeholder="Search tasks..."
                            className="bg-muted border-border"
                        />
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
                        <Select containerClassName="min-w-[120px]">
                            <option>All Areas</option>
                            <option>Woodshop</option>
                            <option>Metal Shop</option>
                        </Select>
                        <Select containerClassName="min-w-[120px]">
                            <option>All Types</option>
                            <option>Preventative</option>
                            <option>Repair</option>
                        </Select>
                        <Select containerClassName="min-w-[120px]">
                            <option>Difficulty</option>
                            <option>Quick Win</option>
                            <option>Major Project</option>
                        </Select>
                    </div>
                </div>

                {/* Header */}
                <div className="flex items-end justify-between px-1 border-b border-border pb-2">
                    <h2 className="text-xl font-display font-bold text-primary uppercase relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary">
                        Open Tasks
                    </h2>
                    <span className="text-sm text-muted-foreground font-medium">Showing {tasks.length} tasks</span>
                </div>

                {/* List */}
                <div className="flex flex-col gap-5">
                    {tasks.map((task, index) => (
                        <TaskListItem key={index} {...task} />
                    ))}
                </div>
            </div>
        );
    }
);
TaskList.displayName = "TaskList";

export { TaskList };
