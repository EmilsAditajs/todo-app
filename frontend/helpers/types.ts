export type Task = {
    id?: number;
    title: string;
    description: string;
    status?: 'active' | 'completed';
}
