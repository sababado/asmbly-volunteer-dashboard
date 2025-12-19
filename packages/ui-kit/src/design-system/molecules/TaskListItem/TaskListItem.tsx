import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Badge } from '../../atoms/Badge/Badge';
import { Button } from '../../atoms/Button/Button';
import { ExternalLink, Clock, Hammer, Monitor, Scissors, PenTool, Printer } from 'lucide-react';

export type TaskUrgency = 'low' | 'medium' | 'high' | 'critical';
export type TaskStatus = 'open' | 'ready' | 'in-progress' | 'completed';
export type ShopArea = 'wood' | 'metal' | 'electronics' | 'lasers' | 'printing' | 'textiles' | 'ceramics' | 'general';

export interface TaskListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    area: ShopArea;
    urgency: TaskUrgency;
    duration: string;
    status: TaskStatus;
    onClickUpLink?: string;
    onClaim?: () => void;
    isNew?: boolean; // Highlight for new/open tasks
}

const getAreaIcon = (area: ShopArea) => {
    switch (area) {
        case 'wood': return Hammer;
        case 'metal': return Scissors; // Proxy for metal shears
        case 'electronics': return Monitor;
        case 'lasers': return PenTool; // Proxy
        case 'printing': return Printer;
        default: return Hammer;
    }
}

const getUrgencyColor = (urgency: TaskUrgency) => {
    switch (urgency) {
        case 'critical': return 'accent-red';
        case 'high': return 'accent-red';
        case 'medium': return 'secondary';
        case 'low': return 'outline'; // or default generic
        default: return 'outline';
    }
}

const getStatusBadge = (status: TaskStatus) => {
    switch (status) {
        case 'ready': return <Badge variant="accent-teal">Ready</Badge>;
        case 'open': return <Badge variant="primary">Open</Badge>;
        default: return null;
    }
}

const TaskListItem = React.forwardRef<HTMLDivElement, TaskListItemProps>(
    ({ className, title, description, area, urgency, duration, status, onClickUpLink, onClaim, isNew, ...props }, ref) => {
        const Icon = getAreaIcon(area);

        return (
            <div
                ref={ref}
                className={cn(
                    "group flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-brand-purple/30",
                    className
                )}
                {...props}
            >
                <div className={cn("hidden md:block w-1.5 shrink-0",
                    status === 'ready' ? "bg-brand-textiles" : "bg-brand-purple"
                )} />

                <div className="flex-1 flex flex-col gap-4 p-5 md:p-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-display font-bold text-brand-purple group-hover:text-blue-900 transition-colors uppercase leading-tight">
                                {title}
                            </h3>
                            {getStatusBadge(status)}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center mt-auto pt-2">
                        <Badge variant="default" className="gap-1.5">
                            <Icon size={14} />
                            <span className="capitalize">{area}shop</span>
                            {/* Simple capitalization, can map properly if needed */}
                        </Badge>

                        <Badge variant={getUrgencyColor(urgency)} className="gap-1.5">
                            {/* Icons for urgency could be added */}
                            <span className="capitalize">{urgency} Urgency</span>
                        </Badge>

                        <Badge variant="default" className="gap-1.5">
                            <Clock size={14} />
                            {duration}
                        </Badge>
                    </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 p-5 md:p-6 md:pl-0 border-t md:border-t-0 md:border-l border-gray-100 bg-gray-50/50 md:bg-transparent">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="w-full md:w-auto shadow-sm whitespace-nowrap font-bold uppercase tracking-wider"
                        onClick={onClaim}
                    >
                        Claim Task
                    </Button>

                    {onClickUpLink && (
                        <a
                            href={onClickUpLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-slate-400 hover:text-brand-purple transition-colors"
                        >
                            View in ClickUp <ExternalLink size={12} />
                        </a>
                    )}
                </div>
            </div>
        );
    }
);
TaskListItem.displayName = "TaskListItem";

export { TaskListItem };
