<script setup lang="ts">
const props = defineProps<{
  currentSlide: number;
}>();

const logoRotation = computed(
  () => `transform: rotate(${props.currentSlide * 10}deg)`
);
</script>

<template>
  <div class="w-[120rem] h-[120rem] absolute -right-1/2 top-1/2 z-0 opacity-80">
    <NuxtImg
      src="logo-big.svg"
      class="w-full transition duration-400 ease-in-out"
      loading="lazy"
      width="100%"
      height="100%"
      :style="logoRotation"
    />
  </div>
</template>
