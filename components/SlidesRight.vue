<script setup lang="ts">
defineProps<{
  animationDirection: "UP" | "DOWN";
  currentSlide?: number;
}>();
</script>

<template>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle
      label="Talk"
      title="Animation in front-end"
      subtitle="Motion design theory"
      v-if="currentSlide === 1"
    />
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
