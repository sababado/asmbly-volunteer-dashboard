import * as React from 'react';
import { VolunteerTimeTemplate } from '../../design-system/templates/VolunteerTimeTemplate/VolunteerTimeTemplate';
import { DashboardHeader } from '../../design-system/organisms/DashboardHeader/DashboardHeader';
import { VolunteerStatsGrid } from '../../design-system/organisms/VolunteerStatsGrid/VolunteerStatsGrid';
import { VolunteerRewardCard, type VolunteerRewardCardProps } from '../../design-system/molecules/VolunteerRewardCard/VolunteerRewardCard';
import { VolunteerMetricCard, type VolunteerMetricCardProps } from '../../design-system/molecules/VolunteerMetricCard/VolunteerMetricCard';
import { VolunteerLogsTable, type VolunteerLog } from '../../design-system/organisms/VolunteerLogsTable/VolunteerLogsTable';
import { Tag, BarChart } from 'lucide-react';

export interface VolunteerTimePageProps {
    rewards: VolunteerRewardCardProps[];
    metrics: VolunteerMetricCardProps[];
    logs: VolunteerLog[];
    stats: {
        totalRecords: number;
        totalPages: number;
        currentPage: number;
    };
    onSearch?: (value: string) => void;
    onMonthChange?: (value: string) => void;
    onExport?: () => void;
    onPageChange?: (page: number) => void;
}

export const VolunteerTimePage: React.FC<VolunteerTimePageProps> = ({
    rewards,
    metrics,
    logs,
    stats,
    onSearch,
    onMonthChange,
    onExport,
    onPageChange
}) => {

    const TagIcon = Tag as React.ElementType;
    const BarChartIcon = BarChart as React.ElementType;

    const RewardsSection = (
        <VolunteerStatsGrid>
            {rewards.map((reward, i) => (
                <VolunteerRewardCard key={i} {...reward} />
            ))}
        </VolunteerStatsGrid>
    );

    const MetricsSection = (
        <VolunteerStatsGrid>
            {metrics.map((metric, i) => (
                <VolunteerMetricCard key={i} {...metric} />
            ))}
        </VolunteerStatsGrid>
    );

    return (
        <VolunteerTimeTemplate
            header={
                <DashboardHeader
                    title="My Volunteer Time"
                    subtitle="Track your contributions, badges, and impact history."
                />
            }
            rewardsHeading={
                <div className="flex items-center gap-2 mb-2">
                    <TagIcon className="w-5 h-5 text-brand-woodwork" />
                    <h2 className="text-xl font-display font-bold text-asmbly-navy uppercase">Membership Rewards</h2>
                </div>
            }
            stats={
                <>
                    {RewardsSection}
                    <div className="flex items-center gap-2 mb-2 mt-8">
                        <BarChartIcon className="w-5 h-5 text-asmbly-navy" />
                        <h2 className="text-xl font-display font-bold text-asmbly-navy uppercase">Current Impact</h2>
                    </div>
                    {MetricsSection}
                </>
            }
            logs={
                <VolunteerLogsTable
                    logs={logs}
                    totalRecords={stats.totalRecords}
                    totalPages={stats.totalPages}
                    currentPage={stats.currentPage}
                    onSearch={onSearch}
                    onMonthChange={onMonthChange}
                    onExport={onExport}
                    onPageChange={onPageChange}
                />
            }
        />
    );
};
