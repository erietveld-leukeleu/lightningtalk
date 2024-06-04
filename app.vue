<script setup lang="ts">
const currentSlide = ref<number>(1);
const totalSlides = ref<number>(0);
const slideHolder = ref<HTMLElement | null>(null);
const presentationControls = ref<HTMLElement | null>(null);
const animationDirection = ref<"UP" | "DOWN">("DOWN");

onMounted(() => {
  if (slideHolder.value) {
    totalSlides.value = slideHolder.value.childNodes.length;
  }
  if (presentationControls.value) {
    presentationControls.value.focus();
  }
  nextTick(() => {
    if (window.location.hash) {
      currentSlide.value = parseInt(window.location.hash.replace(/\D/g, ""));
    }
  });
});

const setUrl = () => {
  window.location.hash = currentSlide.value.toString();
};

const toNextSlide = () => {
  currentSlide.value < totalSlides.value
    ? currentSlide.value++
    : totalSlides.value;
  animationDirection.value = "DOWN";
  setUrl();
};
const toPreviousSlide = () => {
  currentSlide.value > 1 ? currentSlide.value-- : 1;
  animationDirection.value = "UP";
  setUrl();
};
</script>

<template>
  <main>
    <Head>
      <Title>Lightning Talk</Title>
    </Head>
    <Progress :currentSlide="currentSlide" :total-slides="totalSlides" />
    <div
      class="bg-leukeleudark bg-leukeleugradient text-white font-leukeleu leading-tight overflow-hidden select-none"
    >
      <BgLogo :currentSlide="currentSlide" />
      <div class="px-6 pt-6 pb-9 flex min-h-screen relative z-10">
        <div
          class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 max-w-[800px] min-w-[780px] flex justify-center items-center text-center relative group overflow-hidden mr-6 [&>*]:absolute"
        >
          <Current :currentSlide="currentSlide" :total-slides="totalSlides" />
          <SlidesLeft
            :animationDirection="animationDirection"
            :currentSlide="currentSlide"
          />
        </div>
        <div
          :class="{
            '!bg-leukeleu': currentSlide === totalSlides || currentSlide === 7,
          }"
          class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden transition-colors [&>*]:absolute"
          ref="slideHolder"
        >
          <Controls
            :currentSlide="currentSlide"
            :total-slides="totalSlides"
            @fire-next="toNextSlide"
            @fire-previous="toPreviousSlide"
          />
          <SlidesRight
            :animationDirection="animationDirection"
            :currentSlide="currentSlide"
          />
        </div>
      </div>
    </div>
  </main>
</template>
