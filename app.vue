<script setup lang="ts">
  const currentSlide = ref(1);
  const totalSlides = ref(0);
  const slideHolder = ref(null as HTMLElement | null);
  const presentationControls = ref(null as HTMLElement | null);

  onMounted(()=>{
    if(slideHolder.value) {
      totalSlides.value = slideHolder.value.childNodes.length - 1
    }
    if(presentationControls.value) {
      presentationControls.value.focus()
    }
  })

  const toNextSlide = () => currentSlide.value < totalSlides.value ? currentSlide.value++ : totalSlides.value
  const toPreviousSlide = () => currentSlide.value > 1 ? currentSlide.value-- : 1
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
        <div class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden mr-6">
          <div class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-1.5 w-[60px] truncate rounded-xl mb-6 uppercase absolute top-2 left-2 z-10">{{ currentSlide }} &bull; {{ totalSlides }}</div>
          <SlideHolder>
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
          <SlideHolder>
            <SlideList v-if="currentSlide === 2">
              <li>Lightweight animation library</li>
              <li>High quality animations</li>
              <li>Front-end libraries for Vue</li>
              <li>Text-based (JSON) animation files</li>
              <li>275K companies (Microsoft, Netflix, Disney) use Lottie</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder>
            <SlideList v-if="currentSlide === 3">
              <li>Timeline-based animation creation</li>
              <li>High quality (vector, JSON, .dotLottie file)</li>
              <li>Minimal code needed</li>
              <li>Full browser support</li>
              <li>Small animation file size</li>
              <li>Great community support: tools like <strong>LottieLab</strong> and <strong>LottieFiles</strong></li>
              <li>Plug-ins for After Effects, Figma</li>
              <li>Open source</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder>
            <SlideImage image="screenlottielab.jpg" v-if="currentSlide === 4" />
          </SlideHolder>
          <SlideHolder>
            <SlideCode v-if="currentSlide === 5">
            <span>&lt;script setup lang="ts"&gt;</span><br />
            const animationRef = ref()<br /><br />
            onMounted(() => {<br />
              &nbsp;&nbsp;$create({<br />
                &nbsp;&nbsp;&nbsp;&nbsp;mode: 'scroll',<br />
                &nbsp;&nbsp;&nbsp;&nbsp;player: animationRef.value,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;actions: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visibility: [0, 1.0],<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'seek',<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frames: [100, 900],<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;})<br />
            })<br />
            <span>&lt;/script&gt;</span>
            </SlideCode>
          </SlideHolder>
          <SlideHolder>
            <SlideCode v-if="currentSlide === 6">
              <span>&lt;template&gt;</span><br />
              &lt;Vue3Lottie<br />
              &nbsp;&nbsp;id="animation"<br />
              &nbsp;&nbsp;ref="animationRef"<br />
              &nbsp;&nbsp;class="sticky top-0 ml-[50%] h-[100vh] w-[100vw]"<br />
              &nbsp;&nbsp;mode="normal"<br />
              &nbsp;&nbsp;renderer="svg"<br />
              &nbsp;&nbsp;preserveAspectRatio="xMidYMin slice"<br />
              &nbsp;&nbsp;src="<strong>/lottie/intro.json</strong>"<br />
              /&gt;<br />
              <span>&lt;/template&gt;</span>
            </SlideCode>
          </SlideHolder>
          <SlideHolder>
            <SlideList v-if="currentSlide === 7">
              <li>Plug-in for After Effects</li>
              <li><NuxtLink to="https://creator.lottiefiles.com/" target="_blank" rel="noopener" class="text-white hover:text-leukeleu transition-colors">Lottie Creator &rarr;</NuxtLink></li>
              <li><NuxtLink to="https://lottiefiles.github.io/lottie-docs/playground/json_editor/" target="_blank" rel="noopener" class="text-white hover:text-leukeleu transition-colors">JSON editor &rarr;</NuxtLink></li>
              <li><NuxtLink to="https://lottiefiles.com/plugins/figma" target="_blank" rel="noopener" class="text-white hover:text-leukeleu transition-colors">Plug-in for Figma &rarr;</NuxtLink></li>
            </SlideList>
          </SlideHolder>
          <SlideHolder>
            <div v-if="currentSlide === 8">
              <client-only>
                <Vue3Lottie
                  animationLink="logo.json"
                  :height="400"
                  :width="400"
                />
              </client-only>
            </div>
          </SlideHolder>
        </div>
        <div :class="{'!bg-leukeleu': currentSlide === 8}" class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden transition-colors" ref="slideHolder">
          <div class="absolute bottom-2 right-2 flex gap-2 focus:ring-0 focus:ring-offset-0 focus:outline-none opacity-0 transition-opacity group-hover:opacity-100" tabindex="0" @keydown.left.prevent="toPreviousSlide" @keydown.right.prevent="toNextSlide" ref="presentationControls">
            <a href="#" :class="{'pointer-events-none opacity-20' : currentSlide === 1}" class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu" @click.prevent="toPreviousSlide">
              &larr;
            </a>
            <a href="#" :class="{'pointer-events-none opacity-20' : currentSlide === totalSlides}" class="bg-leukeleudark w-7 h-9 rounded-xl font-leukeleucontent text-white flex justify-center items-center transition-colors cursor-pointer hover:bg-leukeleu" @click.prevent="toNextSlide">
              &rarr;
            </a>
          </div>
          <SlideHolder>
            <SlideTitle label="Talk" title="Animations with Lottie" subtitle="in shortread The Geography of Future Water Challenges" v-if="currentSlide === 1" />
          </SlideHolder>
          <SlideHolder>
            <SlideTitle title="What is Lottie?" v-if="currentSlide === 2" link="https://lottiefiles.com/" linktext="Lottiefiles.com" />
          </SlideHolder>
          <SlideHolder>
            <SlideTitle title="Why Lottie?" image="lottietheme.png" v-if="currentSlide === 3" />
          </SlideHolder>
          <SlideHolder>
            <SlideTitle title="Timeline animation in LottieLab" subtitle=".. export it to LottieFiles" link="http://www.lottielab.com" linktext="LottieLab" v-if="currentSlide === 4" />
          </SlideHolder>
          <SlideHolder>
            <SlideTitle title="Implementation in Vue" subtitle="npm install vue3-lottie@latest" link="https://vue3-lottie.vercel.app/" linktext="Vue3-lottie" v-if="currentSlide === 5 || currentSlide === 6" />
          </SlideHolder>
          <SlideHolder>
            <div></div>
          </SlideHolder>
          <SlideHolder>
            <SlideTitle title="Lottie tooling" video="lottiefigma.mp4" subtitle=".. and more in development" v-if="currentSlide === 7" />
          </SlideHolder>
          <SlideHolder>
            <SlideTitle title="Thanks" v-if="currentSlide === 8" />
          </SlideHolder>
        </div>
      </div>
    </div>
  </main>
</template>
