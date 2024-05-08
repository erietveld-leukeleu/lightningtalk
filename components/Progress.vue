<script setup lang="ts">
const props = defineProps<{
  currentSlide: number;
  totalSlides: number;
}>();

const progressBar = computed(
  () => `width: ${Math.ceil((props.currentSlide / props.totalSlides) * 100)}%`
);
</script>

<template>
  <div class="bg-leukeleudarker w-full p-1 flex top-0">
    <div
      :style="progressBar"
      class="bg-leukeleu h-1 transition-all duration-500 rounded-full"
    ></div>
  </div>
</template>
