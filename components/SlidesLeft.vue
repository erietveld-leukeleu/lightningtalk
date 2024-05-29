<script setup lang="ts">
defineProps<{
  animationDirection: "UP" | "DOWN";
  currentSlide?: number;
}>();
</script>

<template>
  <SlideHolder :animationDirection="animationDirection">
    <div v-if="currentSlide === 1">
      <client-only>
        <Vue3Lottie animationLink="logo.json" :height="600" :width="600" />
      </client-only>
    </div>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 2">
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </SlideList>
  </SlideHolder>
</template>
