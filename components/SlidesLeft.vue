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
      <li>Drawing attention</li>
      <li>Giving feedback</li>
      <li>Communicate a change of state</li>
      <li>Showing hierarchy of complex data</li>
      <li>Learning how to interact</li>
      <li>Because it's fun ✨</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 3">
      <li>When the user must read a message</li>
      <li>When the user must act immediately</li>
      <li>Should not distract from page purpose</li>
      <li>Often a dark pattern: 'fear of loss'</li>
    </SlideList>
  </SlideHolder>
</template>
