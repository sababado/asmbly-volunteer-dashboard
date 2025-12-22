import { useState, useEffect } from 'react';
// We need to import the type, but it might not be exported from UI kit or common location yet.
// For now, I will define a local interface that matches the expected Backend response AND UI Kit props.
// Ideally, types should be shared.

export interface Task {
    id: string;
    title: string;
    description?: string;
    workspace: string; // Mapped from 'area' or 'workspace'
    urgency: 'low' | 'medium' | 'high' | 'critical';
    status: string;
    clickup_task_id: string;
}

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTasks() {
            try {
                // Determine API URL based on environment or default to local
                // In Vite, we can use import.meta.env
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

                const response = await fetch(`${apiUrl}/tasks/`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
                }

                const data = await response.json();

                // Map Backend Response (ProblemReportResponse) to Frontend Task
                // Backend: title, description, workspace, urgency, status, id, clickup_task_id
                // Frontend (UI Kit): id, title, description, area, urgency, duration?, status

                const mappedTasks: Task[] = data.map((item: any) => ({
                    id: item.id, // DynamoDB PK (PROBLEM_REPORT#...) or just ID
                    title: item.title,
                    description: item.description,
                    workspace: item.workspace,
                    urgency: item.urgency,
                    status: item.status,
                    clickup_task_id: item.clickup_task_id
                }));

                setTasks(mappedTasks);
            } catch (err: any) {
                console.error("Error fetching tasks:", err);
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            }
        }

        fetchTasks();
    }, []);

    return { tasks, loading, error };
}
