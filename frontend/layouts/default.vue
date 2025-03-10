<script setup lang="ts">
import Header from "~/components/header";
</script>

<template>
    <div>
        <Header />
        <main class="container mx-auto p-4">
            <slot />
        </main>
    </div>
</template>
