<script setup lang="ts">
defineProps<{
    image: string
}>()    
</script>

<template>
    <section>
        <div class="relative -left-10 bg-leukeleudark">
            <NuxtImg :src="image" loading="lazy" width="1100" class="block" />
        </div>
    </section>
</template>
