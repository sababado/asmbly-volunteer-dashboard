import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Badge } from '../../atoms/Badge/Badge';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
// Checkbox removed


export interface VolunteerRewardCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle: string;
    status: 'ACTIVE' | 'IN PROGRESS' | 'PENDING'; // Add more as needed
    progress: number;
    goal: number;
    progressLabel?: string;
    footerContent?: React.ReactNode;
}

const VolunteerRewardCard = React.forwardRef<HTMLDivElement, VolunteerRewardCardProps>(
    ({ className, title, subtitle, status, progress, goal, progressLabel, footerContent, ...props }, ref) => {

        // Define status badge variant
        const getStatusVariant = (s: string) => {
            switch (s) {
                case 'ACTIVE': return 'secondary'; // using secondary (woodwork yellow-ish) for Active/Gold
                case 'IN PROGRESS': return 'accent-red';
                default: return 'default';
            }
        };



        return (
            <div
                ref={ref}
                className={cn("bg-white dark:bg-card p-6 rounded-lg shadow-sm w-full h-full flex flex-col justify-between", className)}
                {...props}
            >
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-start gap-3">
                            {/* Icon used if specific card design needs it */}

                            <div className="bg-brand-woodwork/10 p-2 rounded-full hidden">
                                {/* Optional Icon placeholder if needed, design shows icon in header for section, 
                                   but individual cards mainly text. 
                                   Actually first card has icon. Lets stick to simple text structure first as per mock.
                                   Wait, design shows icon in "Membership Rewards" header, not in card. 
                                   But the first card in previous design had icon. 
                                   New screenshot shows just text. Strict adherence to new screenshot.
                               */ }
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-asmbly-navy font-display uppercase leading-tight">{title}</h3>
                                <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
                            </div>
                        </div>
                        <Badge variant={getStatusVariant(status)} className="mb-auto shrink-0">
                            {status}
                        </Badge>
                    </div>

                    <div className="mt-8">
                        <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase mb-2 tracking-wider">
                            <span>{progressLabel || 'Progress'}: {progress} HRS</span>
                            <span>Goal: {goal} HRS</span>
                        </div>
                        <ProgressBar value={progress} max={goal} variant={getStatusVariant(status) === 'secondary' ? 'secondary' : 'accent-red'} className="h-3 rounded-full" />
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                    {footerContent}
                </div>
            </div>
        );
    }
);
VolunteerRewardCard.displayName = "VolunteerRewardCard";

export { VolunteerRewardCard };
