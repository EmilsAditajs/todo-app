<script setup lang="ts">
import { useApiFetch } from "~/composables/useApiFetch";
import { useTaskStore } from "~/stores/taskStore";
import type { Task } from "~/helpers/types";
import { useRouter } from "vue-router";

const title = ref("");
const description = ref("");
const isSubmitting = ref(false);
const errorMessage = ref("");

const store = useTaskStore();
const router = useRouter();

const createTask = async () => {
    if (!title.value.trim() || !description.value.trim()) {
        errorMessage.value = "Title and Description are required!";
        return;
    }

    isSubmitting.value = true;

    const newTask: Task = {
        title: title.value,
        description: description.value,
    };

    const response = await store.createTask(newTask);

    if (response && response.error?.value) {
        errorMessage.value = "Failed to create task: " + response.error.value;
    } else {
        router.push("/");
    }

    isSubmitting.value = false;
};
</script>

<template>
    <h1 class="text-3xl font-bold text-center my-5">
        Create New Task
    </h1>
    <div class="bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
        <form @submit.prevent="createTask">
            <div class="mb-6">
                <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                    >Title</label
                >
                <input
                    id="title"
                    v-model="title"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter task title"
                />
            </div>

            <div class="mb-6">
                <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                >
                <textarea
                    id="description"
                    v-model="description"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Enter task description"
                ></textarea>
            </div>

            <p v-if="errorMessage" class="text-red-500 text-sm mb-4">
                {{ errorMessage }}
            </p>

            <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition duration-300"
            >
                {{ isSubmitting ? "Creating..." : "Create Task" }}
            </button>
        </form>
    </div>
</template>
