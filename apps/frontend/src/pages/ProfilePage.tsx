import React from 'react';
import { DashboardLayout } from '@voldash/ui-kit';
import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../config/navigation';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const UserCircleIcon = UserCircle as React.ElementType;

    return (
        <DashboardLayout
            sidebarProps={{
                items: SIDEBAR_ITEMS,
                activePath: '/profile',
                onLogout: () => console.log('logout')
            }}
        >
            <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
                <UserCircleIcon className="w-16 h-16 text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">Your Profile</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Manage your preferences, view your history, and update your skills. This section is currently under development.
                </p>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="mt-6 px-4 py-2 bg-asmbly-navy text-white rounded hover:bg-opacity-90 transition-colors"
                >
                    Return to Dashboard
                </button>
            </div>
        </DashboardLayout>
    );
};
