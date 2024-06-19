<script setup lang="ts">
defineProps<{
  image: string;
  shadow?: boolean;
}>();
</script>

<template>
  <section>
    <div class="relative bg-leukeleudark shadow-leukeleu">
      <NuxtImg :src="image" loading="lazy" width="800" class="block" />
    </div>
  </section>
</template>
