<script setup lang="ts">
  const currentSlide = ref<number>(1);
  const totalSlides = ref<number>(0);
  const slideHolder = ref<HTMLElement | null>(null);
  const presentationControls = ref<HTMLElement | null>(null);
  const controlNext = ref<HTMLElement | null>(null);

  const animationDirection = ref<'UP' | 'DOWN'>('DOWN');

  onMounted(()=>{
    if(slideHolder.value) {
      totalSlides.value = slideHolder.value.childNodes.length
    }
    if(presentationControls.value) {
      presentationControls.value.focus()
    }
    nextTick(() => {
      controlNext.value?.focus();
      if(window.location.hash) {
        currentSlide.value = parseInt(window.location.hash.replace(/\D/g, ''))
      }
    });
  })

  const setUrl = () => {
    window.location.hash = currentSlide.value.toString();
  }

  const toNextSlide = () => {
    currentSlide.value < totalSlides.value ? currentSlide.value++ : totalSlides.value
    animationDirection.value = 'DOWN'
    setUrl()
  }
  const toPreviousSlide = () => {
    currentSlide.value > 1 ? currentSlide.value-- : 1
    animationDirection.value = 'UP'
    setUrl()
  }
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
          <div v-if="currentSlide !== totalSlides && currentSlide !== 1" class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-1.5 w-[60px] truncate rounded-full mb-6 uppercase absolute top-2 left-2 z-10">{{ currentSlide }} &bull; {{ totalSlides }}</div>
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
              <li>27% of Europe's population has a disability</li> <!-- 135 million people -->
              <li>Visual impairments, motor disabilities, hearing, cognitive, speech disorders</li>
              <li class="focus"><br /><br />97% of websites are not Web Content Accessibility Guidelines (WCAG) compliant</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 3 || currentSlide === 4">
              <li v-if="currentSlide !== 4"><strong>P O U R</strong></li>
              <li>Perceivable</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">Captions, descriptions, display orientation, contrast, resizing</li>
              </SlideListItemAnimation>
              <li>Operable</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">Keyboard usage, enough reading time, stop moving content</li>
              </SlideListItemAnimation>
              <li>Understandable</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">Specified language, labels, order of navigation</li>
              </SlideListItemAnimation>
              <li>Robust</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">Future-proof, semantic code, role of components</li>
              </SlideListItemAnimation>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 5">
              <li>Government websites are legally required to be accessible (2018)</li>
              <li><strong>European Accessibility Act (june 2025)</strong></li> <!-- Local governments adjust to country's situation -->
              <li>More people with access to products, job market</li> <!-- People must be able to use something like any other -->
              <li>Computers, smartphones, TVs, banking devices, etc.</li>
              <li>OSs, webshops, e-books, streaming services, internet banking</li>
              <li>Checks contrast, semantics, alternative texts, language and links</li>
              <li>50% of Dutch webshops not ready</li>
              <li>.. some exceptions</li> <!-- Like the public broadcaster NPO, schools, non-government health organizations, postal services -->
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 6">
              <li></li>
            </SlideList>
          </SlideHolder>
        </div>
        <div :class="{'!bg-leukeleu': currentSlide === totalSlides || currentSlide === 6}" class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden transition-colors [&>*]:absolute" ref="slideHolder">
          <div class="absolute bottom-2 right-2 flex gap-2 focus:ring-0 focus:ring-offset-0 focus:outline-none opacity-0 transition-opacity group-hover:opacity-100" tabindex="0" @keydown.left.prevent="toPreviousSlide" @keydown.right.prevent="toNextSlide" @keydown.up.prevent="toPreviousSlide" @keydown.down.prevent="toNextSlide" ref="presentationControls">
            <a href="#" :class="{'pointer-events-none opacity-20' : currentSlide === 1}" class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu outline-none" @click.prevent="toPreviousSlide" ref="controlPrevious">
              &uarr;
            </a>
            <a href="#" :class="{'pointer-events-none opacity-20' : currentSlide === totalSlides}" class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu outline-none" @click.prevent="toNextSlide" ref="controlNext">
              &darr;
            </a>
          </div>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle label="Talk" title="Accessibility in Vue" subtitle="Rules and best practices" v-if="currentSlide === 1" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 2" title="Accessibility" subtitle="for people with a disability.. or for special environments" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 3 || currentSlide === 4" title="Basic accessibility rules" subtitle="WCAG 2.2 (October 2023)" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 5" title="Follow the law!" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 6" title="" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle title="Thanks" v-if="currentSlide === 10" />
          </SlideHolder>
        </div>
      </div>
    </div>
  </main>
</template>
