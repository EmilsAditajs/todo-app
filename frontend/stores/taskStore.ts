import { defineStore } from "pinia";
import { useApiFetch } from "../composables/useApiFetch";
import type { Task } from "~/helpers/types";

export const useTaskStore = defineStore("task", () => {
    const tasks = ref<Task[]>([]);
    const filter = ref<"all" | "active" | "completed">("all");

    const handleApiError = (response: any) => {
        if (response.error.value) {
            console.error(response.error.value);
            return false;
        }
        return true;
    };

    const fetchAllTasks = async () => {
        const response = await useApiFetch<Task[]>("/api/task");

        if (!handleApiError(response)) return;

        tasks.value = response.data.value as Task[];
    }

    const createTask = async (task: Task) => {
        const response = await useApiFetch<Task>("/api/task", {
            method: "POST",
            body: JSON.stringify(task),
        });

        if (!handleApiError(response)) return;

        tasks.value.push(response.data.value as Task);

        return response;
    }

    const deleteTask = async (id: number) => {
        const response = await useApiFetch(`/api/task/${id}`, {
            method: "DELETE",
        });

        if (!handleApiError(response)) return;

        tasks.value = tasks.value.filter((task) => task.id !== id);
    }

    const updateTaskStatus = async (id: number, status: "active" | "completed") => {
        const response = await useApiFetch(`/api/task/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ status }),
        });

        if (!handleApiError(response)) return;

        const taskIndex = tasks.value.findIndex((task) => task.id === id);

        if (taskIndex !== -1) {
            tasks.value[taskIndex].status = status;
        }
    }

    const filteredTasks = computed(() => {
        if (filter.value === "all") {
            return tasks.value;
        }
        return (
            tasks.value?.filter((task) => task.status === filter.value) || []
        );
    });

    const setFilter = (newFilter: "all" | "active" | "completed") => {
        filter.value = newFilter;
    };

    return {
        tasks,
        filter,
        filteredTasks,
        fetchAllTasks,
        createTask,
        deleteTask,
        updateTaskStatus,
        setFilter
    };
});
