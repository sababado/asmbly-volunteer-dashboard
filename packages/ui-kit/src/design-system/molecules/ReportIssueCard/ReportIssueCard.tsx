import * as React from 'react';
import { cn } from '../../../lib/utils';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export interface ReportIssueCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    label?: string;
}

const ReportIssueCard = React.forwardRef<HTMLAnchorElement, ReportIssueCardProps>(
    ({ className, label = "Report an Issue", ...props }, ref) => {
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
                <AlertTriangle className="text-slate-400 group-hover:text-brand-purple transition-colors shrink-0" size={22} />
            </a>
        );
    }
);
ReportIssueCard.displayName = "ReportIssueCard";

export { ReportIssueCard };
