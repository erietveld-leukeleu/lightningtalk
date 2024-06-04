<script setup lang="ts">
import { useWindowFocus } from "@vueuse/core";

const focused = useWindowFocus();
const controlNext = ref<HTMLElement | null>(null);

defineProps<{
  currentSlide: number;
  totalSlides: number;
}>();

onMounted(() => {
  nextTick(() => {
    controlNext.value?.focus();
  });
});

const emit = defineEmits(["firePrevious", "fireNext"]);

function toPreviousSlide() {
  emit("firePrevious");
}

function toNextSlide() {
  emit("fireNext");
}

watch(focused, (isFocused) => {
  if (isFocused) controlNext.value?.focus();
});
</script>

<template>
  <div
    class="absolute bottom-2 right-2 flex gap-2 focus:ring-0 focus:ring-offset-0 focus:outline-none opacity-0 transition-opacity group-hover:opacity-100"
    tabindex="0"
    @keydown.left.prevent="toPreviousSlide"
    @keydown.right.prevent="toNextSlide"
    @keydown.up.prevent="toPreviousSlide"
    @keydown.down.prevent="toNextSlide"
    ref="presentationControls"
  >
    <a
      href="#"
      :class="{ 'pointer-events-none opacity-20': currentSlide === 1 }"
      class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu outline-none"
      @click.prevent="toPreviousSlide"
      ref="controlPrevious"
    >
      &uarr;
    </a>
    <a
      href="#"
      :class="{
        'pointer-events-none opacity-20': currentSlide === totalSlides,
      }"
      class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu outline-none"
      @click.prevent="toNextSlide"
      ref="controlNext"
    >
      &darr;
    </a>
  </div>
</template>
