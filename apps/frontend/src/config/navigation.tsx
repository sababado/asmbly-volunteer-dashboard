import { LayoutDashboard, CheckSquare, Trophy, User, Clock } from 'lucide-react';

export const SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: CheckSquare, label: 'My Tasks', href: '/tasks' },
    { icon: Clock, label: 'My Volunteer Time', href: '/volunteer-time' },
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: User, label: 'Profile', href: '/profile' },
];
