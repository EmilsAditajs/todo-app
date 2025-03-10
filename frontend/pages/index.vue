<script setup lang="ts">
import TaskList from "~/components/taskList";
import { useTaskStore } from "~/stores/taskStore";

</script>

<template>
    <h1 class="text-3xl font-bold text-center my-5">Todo app</h1>

    <TaskList />
</template>
