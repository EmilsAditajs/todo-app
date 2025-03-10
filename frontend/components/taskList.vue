<script setup lang="ts">
import { useTaskStore } from "~/stores/taskStore";
import Task from "~/components/Task.vue";
import { storeToRefs } from "pinia";

const store = useTaskStore();
const { filteredTasks } = storeToRefs(store);

onMounted(() => {
    store.fetchAllTasks();
});
</script>

<template>
    <div class="space-y-4 p-4">
        <ul v-if="filteredTasks && filteredTasks.length" class="space-y-4">
            <li v-for="task in filteredTasks" :key="task.id">
                <Task :task="task" />
            </li>
        </ul>

        <div v-else class="text-center text-gray-500 text-lg">
            No tasks available. Try adding some!
        </div>
    </div>
</template>
