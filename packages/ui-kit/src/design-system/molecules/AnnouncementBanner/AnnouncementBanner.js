import * as React from 'react';
import { cn } from '../../../lib/utils';
import { AlertTriangle } from 'lucide-react';
const AnnouncementBanner = React.forwardRef(({ className, title, message, onDismiss, variant = 'warning', ...props }, ref) => {
    return (<div ref={ref} className={cn("relative overflow-hidden bg-white shadow-sm border-l-4 p-6 md:p-8", variant === 'warning' ? "border-brand-woodwork" : "border-brand-metal", className)} {...props}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex gap-5">
                        <div className={cn("p-3 rounded-full h-fit shrink-0", variant === 'warning' ? "bg-brand-woodwork/10 text-brand-woodwork" : "bg-brand-metal/10 text-brand-metal")}>
                            <AlertTriangle size={28}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-display font-bold text-brand-purple uppercase tracking-wide">
                                {title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed max-w-3xl">
                                {message}
                            </p>
                        </div>
                    </div>
                    {onDismiss && (<button onClick={onDismiss} className="shrink-0 text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-brand-purple px-4 py-2 hover:bg-slate-100 transition-colors">
                            Dismiss
                        </button>)}
                </div>
            </div>);
});
AnnouncementBanner.displayName = "AnnouncementBanner";
export { AnnouncementBanner };
