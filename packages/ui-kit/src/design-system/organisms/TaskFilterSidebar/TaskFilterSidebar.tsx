import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

export type TaskType = 'preventative' | 'problem' | 'facilities';
// Reuse types from TaskList/Item if possible, or define new filter types
// For this sidebar we need loose strings or defined types. Let's define specific ones.
export type WorkspaceFilter = 'woodshop' | 'metal_shop' | 'electronics' | 'laser_cutters' | '3d_printing' | 'general_facility';
export type UrgencyFilter = 'critical' | 'high' | 'medium' | 'low';
export type TimeFilter = 'less_30' | '30_60' | '60_180' | 'more_180';

export interface FilterState {
    workspace: WorkspaceFilter[];
    urgency: UrgencyFilter[];
    time: TimeFilter[];
    type: TaskType[];
}

export interface TaskFilterSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    counts?: {
        [key: string]: number;
    };
    onClearAll?: () => void;
}

const FilterSection = ({
    title,
    children,
    actions
}: {
    title: string;
    children: React.ReactNode;
    actions?: React.ReactNode
}) => (
    <div className="flex flex-col gap-3 py-6 border-b border-border/50 last:border-0">
        <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{title}</h4>
            {actions}
        </div>
        {children}
    </div>
);

const CheckboxRow = ({
    label,
    checked,
    count,
    onChange,
    color
}: {
    label: string;
    checked: boolean;
    count?: number;
    onChange: () => void;
    color?: string; // Optional dot color
}) => (
    <label className="flex items-center gap-3 cursor-pointer group select-none">
        <div
            className={cn(
                "w-5 h-5 rounded border flex items-center justify-center transition-all",
                checked
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-background border-input group-hover:border-primary/50"
            )}
            onClick={(e) => { e.preventDefault(); onChange(); }}
        >
            {checked && <Check size={14} strokeWidth={3} />}
        </div>
        <div className="flex-1 flex items-center justify-between">
            <span className={cn("text-sm", color ? "flex items-center gap-2" : "")}>
                {color && <span className={cn("w-2 h-2 rounded-full", color)} />}
                {label}
            </span>
            {count !== undefined && (
                <span className="text-xs text-muted-foreground">({count})</span>
            )}
        </div>
    </label>
);

export const TaskFilterSidebar: React.FC<TaskFilterSidebarProps> = ({
    className,
    filters,
    onFilterChange,
    counts = {},
    onClearAll,
    ...props
}) => {
    const handleToggle = <K extends keyof FilterState>(
        category: K,
        value: FilterState[K][number]
    ) => {
        const current = filters[category] as unknown as string[];
        const next = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value];

        onFilterChange({
            ...filters,
            [category]: next
        });
    };

    return (
        <aside className={cn("flex flex-col w-full md:w-64 shrink-0", className)} {...props}>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide">
                    {/* Icon could go here */}
                    <span>Filters</span>
                </div>
                {onClearAll && (
                    <button
                        onClick={onClearAll}
                        className="text-xs text-muted-foreground hover:text-primary underline transition-colors"
                    >
                        Reset all
                    </button>
                )}
            </div>

            <FilterSection title="Workspace">
                <div className="flex flex-col gap-2">
                    <CheckboxRow label="Woodshop" checked={filters.workspace.includes('woodshop')} count={counts.woodshop || 42} onChange={() => handleToggle('workspace', 'woodshop')} />
                    <CheckboxRow label="Metal Shop" checked={filters.workspace.includes('metal_shop')} count={counts.metal_shop || 28} onChange={() => handleToggle('workspace', 'metal_shop')} />
                    <CheckboxRow label="Electronics" checked={filters.workspace.includes('electronics')} count={counts.electronics || 12} onChange={() => handleToggle('workspace', 'electronics')} />
                    <CheckboxRow label="Laser Cutters" checked={filters.workspace.includes('laser_cutters')} count={counts.laser_cutters || 8} onChange={() => handleToggle('workspace', 'laser_cutters')} />
                    <CheckboxRow label="3D Printing" checked={filters.workspace.includes('3d_printing')} count={counts['3d_printing'] || 10} onChange={() => handleToggle('workspace', '3d_printing')} />
                    <CheckboxRow label="General Facility" checked={filters.workspace.includes('general_facility')} count={counts.general_facility || 12} onChange={() => handleToggle('workspace', 'general_facility')} />
                </div>
            </FilterSection>

            <FilterSection title="Urgency">
                <div className="flex flex-col gap-2">
                    <CheckboxRow label="Critical" color="bg-red-500" checked={filters.urgency.includes('critical')} onChange={() => handleToggle('urgency', 'critical')} />
                    <CheckboxRow label="High" color="bg-orange-400" checked={filters.urgency.includes('high')} onChange={() => handleToggle('urgency', 'high')} />
                    <CheckboxRow label="Medium" color="bg-teal-400" checked={filters.urgency.includes('medium')} onChange={() => handleToggle('urgency', 'medium')} />
                    <CheckboxRow label="Low" color="bg-slate-300" checked={filters.urgency.includes('low')} onChange={() => handleToggle('urgency', 'low')} />
                </div>
            </FilterSection>

            <FilterSection title="Task Type">
                <div className="flex flex-col gap-2">
                    <CheckboxRow label="Preventative" checked={filters.type.includes('preventative')} onChange={() => handleToggle('type', 'preventative')} />
                    <CheckboxRow label="Problem Reports" checked={filters.type.includes('problem')} onChange={() => handleToggle('type', 'problem')} />
                    <CheckboxRow label="Facilities" checked={filters.type.includes('facilities')} onChange={() => handleToggle('type', 'facilities')} />
                </div>
            </FilterSection>

            <FilterSection title="Time Estimate">
                <div className="flex flex-wrap gap-2">
                    {['less_30', '30_60', '60_180', 'more_180'].map((time) => (
                        <button
                            key={time}
                            onClick={() => handleToggle('time', time as TimeFilter)}
                            className={cn(
                                "px-3 py-1.5 text-xs font-medium rounded-sm border transition-all",
                                filters.time.includes(time as TimeFilter)
                                    ? "bg-secondary text-secondary-foreground border-secondary"
                                    : "bg-muted/50 text-muted-foreground border-border hover:border-primary/50"
                            )}
                        >
                            {time === 'less_30' && '< 30m'}
                            {time === '30_60' && '30m-1h'}
                            {time === '60_180' && '1h-3h'}
                            {time === 'more_180' && '3h+'}
                        </button>
                    ))}
                </div>
            </FilterSection>
        </aside>
    );
};
