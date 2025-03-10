<script setup lang="ts">
import { useTaskStore } from "~/stores/taskStore";
import { useRouter } from "vue-router";

const store = useTaskStore();
const router = useRouter();

const filterOptions = ["all", "active", "completed"];
const selectedFilter = ref("all");

const onFilterChange = (filter: string) => {
    selectedFilter.value = filter;
    store.setFilter(filter);
    router.push("/");
};
</script>

<template>
    <header
        class="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md"
    >
        <div class="flex space-x-2 bg-gray-700 p-1 rounded-lg">
            <button
                v-for="option in filterOptions"
                :key="option"
                @click="onFilterChange(option)"
                class="px-4 py-2 rounded-md transition duration-200"
                :class="{
                    'bg-blue-500 text-white shadow-md':
                        selectedFilter === option,
                    'bg-gray-700 text-gray-300 hover:bg-gray-600':
                        selectedFilter !== option,
                }"
            >
                {{ option.charAt(0).toUpperCase() + option.slice(1) }}
            </button>
        </div>

        <NuxtLink
            to="create-task"
            class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
            + Create Task
        </NuxtLink>
    </header>
</template>
