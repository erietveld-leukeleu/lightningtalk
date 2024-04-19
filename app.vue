<script setup lang="ts">
  const currentSlide = ref<number>(1);
  const totalSlides = ref<number>(0);
  const slideHolder = ref<HTMLElement | null>(null);
  const presentationControls = ref<HTMLElement | null>(null);
  const controlNext = ref<HTMLElement | null>(null);

  const animationDirection = ref<'UP' | 'DOWN'>('DOWN');

  onMounted(()=>{
    if(slideHolder.value) {
      totalSlides.value = slideHolder.value.childNodes.length - 1
    }
    if(presentationControls.value) {
      presentationControls.value.focus()
    }
  })

  const toNextSlide = () => {
    currentSlide.value < totalSlides.value ? currentSlide.value++ : totalSlides.value
    animationDirection.value = 'DOWN'
  }
  const toPreviousSlide = () => {
    currentSlide.value > 1 ? currentSlide.value-- : 1
    animationDirection.value = 'UP'
  }

  onMounted(() => {
    controlNext.value?.focus();
  })
</script>

<template>
  <main>
    <Head>
      <Title>Lightning Talk</Title>
    </Head>
    <div class="bg-leukeleudarker w-full p-1 flex top-0">
        <div :style="`width: ${Math.ceil((currentSlide / totalSlides) * 100)}%`" class="bg-leukeleu h-1 transition-all duration-500 rounded-full">
           
        </div>
    </div>
    <div class="bg-leukeleudark bg-leukeleugradient text-white font-leukeleu leading-tight overflow-hidden select-none">
      <div class="w-[120rem] h-[120rem] absolute -right-1/2 top-1/2 z-0 opacity-80">
        <NuxtImg src="logo-big.svg" class="w-full" loading="lazy" width="100%" height="100%" />
      </div>
      <div class="px-6 pt-6 pb-9 flex min-h-screen relative z-10">
        <div class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden mr-6 [&>*]:absolute">
          <div class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-1.5 w-[60px] truncate rounded-xl mb-6 uppercase absolute top-2 left-2 z-10">{{ currentSlide }} &bull; {{ totalSlides }}</div>
          <SlideHolder :animationDirection="animationDirection">
            <div v-if="currentSlide === 1">
              <client-only>
                <Vue3Lottie
                  animationLink="logo.json"
                  :height="400"
                  :width="400"
                />
              </client-only>
            </div>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 2">
              <li>Lightweight animation library</li>
              <li>High quality animations</li>
              <li>Front-end libraries for Vue</li>
              <li>Text-based (JSON) animation files</li>
              <li>275K companies (Microsoft, Netflix, Disney) use Lottie</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 3">
              <li>Timeline-based animation creation</li>
              <li></li>
            </SlideList>
          </SlideHolder>
        </div>
        <div :class="{'!bg-leukeleu': currentSlide === 8}" class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden transition-colors [&>*]:absolute" ref="slideHolder">
          <div class="absolute bottom-2 right-2 flex gap-2 focus:ring-0 focus:ring-offset-0 focus:outline-none opacity-0 transition-opacity group-hover:opacity-100" tabindex="0" @keydown.left.prevent="toPreviousSlide" @keydown.right.prevent="toNextSlide" @keydown.up.prevent="toPreviousSlide" @keydown.down.prevent="toNextSlide" ref="presentationControls">
            <a href="#" :class="{'pointer-events-none opacity-20' : currentSlide === 1}" class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu outline-none" @click.prevent="toPreviousSlide" ref="controlPrevious">
              &uarr;
            </a>
            <a href="#" :class="{'pointer-events-none opacity-20' : currentSlide === totalSlides}" class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu outline-none" @click.prevent="toNextSlide" ref="controlNext">
              &darr;
            </a>
          </div>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle label="Talk" title="Accessibility in Vue / Nuxt" subtitle="Rules and best practices" v-if="currentSlide === 1" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle title="Basic accessibility rules" v-if="currentSlide === 2" link="https://lottiefiles.com/" linktext="Lottiefiles.com" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle title="Thanks" v-if="currentSlide === 3" />
          </SlideHolder>
        </div>
      </div>
    </div>
  </main>
</template>
