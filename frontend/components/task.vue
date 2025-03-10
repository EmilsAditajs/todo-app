<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useTaskStore } from "~/stores/taskStore";
import type { Task } from "~/helpers/types";

const props = defineProps({
    task: {
        type: Object as () => Task,
        required: true,
    },
});

const store = useTaskStore();

const isExpanded = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

const deleteTask = () => {
    store.deleteTask(props.task.id);
};

const toggleTaskStatus = () => {
    const newStatus = props.task.status === "active" ? "completed" : "active";
    store.updateTaskStatus(props.task.id, newStatus);
};
</script>

<template>
    <div
        class="bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
    >
        <div
            @click="toggleExpand"
            class="flex justify-between items-center cursor-pointer hover:bg-gray-50 rounded-lg p-2 mb-4 transition-colors"
        >
            <h3 class="font-bold text-xl text-gray-900">
                {{ props.task.title }}
            </h3>
            <svg
                :class="isExpanded ? 'rotate-180' : 'rotate-0'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600 transform transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>

        <div v-if="isExpanded" class="mt-4 space-y-4">
            <p class="text-gray-700">{{ props.task.description }}</p>

            <div class="flex space-x-4 mt-4">
                <button
                    @click="deleteTask"
                    class="text-red-500 hover:text-red-700 text-sm flex items-center space-x-2 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <span>Delete Task</span>
                </button>

                <button
                    :class="
                        props.task.status === 'completed'
                            ? 'text-green-500'
                            : 'text-blue-500'
                    "
                    @click="toggleTaskStatus"
                    class="text-sm flex items-center space-x-2 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    <span>
                        {{
                            props.task.status === "completed"
                                ? "Mark as Active"
                                : "Mark as Completed"
                        }}
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
