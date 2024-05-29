<script setup lang="ts">
const props = defineProps<{
  animationDirection?: "UP" | "DOWN";
}>();

const enterFromClass = computed(() =>
  !props.animationDirection
    ? "-translate-y-[10%] opacity-0 translate-y-[10%] scale-90"
    : "translate-y-[10%] opacity-0 -translate-y-[10% scale-90"
);
const leaveToClass = computed(() =>
  props.animationDirection
    ? "translate-y-[10%] opacity-0 translate-y-[10%]"
    : "-translate-y-[10%] opacity-0 translate-y-[10%]"
);
</script>

<template>
  <Transition
    appear
    :duration="300"
    :enter-from-class="enterFromClass"
    enter-active-class="transition duration-300"
    :leave-to-class="leaveToClass"
    leave-active-class="transition duration-300"
  >
    <slot />
  </Transition>
</template>
