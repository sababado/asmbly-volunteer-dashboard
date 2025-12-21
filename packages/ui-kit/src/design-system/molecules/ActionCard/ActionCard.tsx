import * as React from 'react';
import { cn } from '../../../lib/utils';
import { AlertTriangle } from 'lucide-react';

export interface ActionCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    label?: string;
    icon?: React.ElementType;
}

const ActionCard = React.forwardRef<HTMLAnchorElement, ActionCardProps>(
    ({ className, label = "Report an Issue", icon: Icon = AlertTriangle, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={cn(
                    "flex items-center justify-between p-4 bg-white border-l-4 border-transparent hover:border-brand-purple shadow-sm hover:shadow-md transition-all group cursor-pointer",
                    className
                )}
                {...props}
            >
                <span className="text-sm font-bold uppercase tracking-wide text-slate-700 group-hover:text-brand-purple leading-tight">
                    {label}
                </span>
                {React.createElement(Icon as React.ElementType, { className: "text-slate-400 group-hover:text-brand-purple transition-colors shrink-0", size: 22 })}
            </a>
        );
    }
);
ActionCard.displayName = "ActionCard";

export { ActionCard };
