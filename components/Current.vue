<script setup lang="ts">
defineProps<{
  currentSlide: number;
  totalSlides: number;
}>();
</script>

<template>
  <div
    v-if="currentSlide !== totalSlides && currentSlide !== 1"
    class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-1.5 w-[70px] truncate rounded-full mb-6 uppercase absolute top-2 left-2 z-10"
  >
    {{ currentSlide }} &bull; {{ totalSlides }}
  </div>
</template>
