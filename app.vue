<script setup lang="ts">
const currentSlide = ref<number>(1);
const totalSlides = ref<number>(0);
const slideHolder = ref<HTMLElement | null>(null);
const presentationControls = ref<HTMLElement | null>(null);
const controlNext = ref<HTMLElement | null>(null);

const animationDirection = ref<"UP" | "DOWN">("DOWN");

import { useWindowFocus } from "@vueuse/core";

const focused = useWindowFocus();

onMounted(() => {
  if (slideHolder.value) {
    totalSlides.value = slideHolder.value.childNodes.length;
  }
  if (presentationControls.value) {
    presentationControls.value.focus();
  }
  nextTick(() => {
    controlNext.value?.focus();
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

watch(focused, (isFocused) => {
  if (isFocused) controlNext.value?.focus();
});

const logoRotation = computed(
  () => `transform: rotate(${currentSlide.value * 10}deg)`
);

const progressBar = computed(
  () => `width: ${Math.ceil((currentSlide.value / totalSlides.value) * 100)}%`
);
</script>

<template>
  <main>
    <Head>
      <Title>Lightning Talk</Title>
    </Head>
    <div class="bg-leukeleudarker w-full p-1 flex top-0">
      <div
        :style="progressBar"
        class="bg-leukeleu h-1 transition-all duration-500 rounded-full"
      ></div>
    </div>
    <div
      class="bg-leukeleudark bg-leukeleugradient text-white font-leukeleu leading-tight overflow-hidden select-none"
    >
      <div
        class="w-[120rem] h-[120rem] absolute -right-1/2 top-1/2 z-0 opacity-80"
      >
        <NuxtImg
          src="logo-big.svg"
          class="w-full transition duration-400 ease-in-out"
          loading="lazy"
          width="100%"
          height="100%"
          :style="logoRotation"
        />
      </div>
      <div class="px-6 pt-6 pb-9 flex min-h-screen relative z-10">
        <div
          class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 max-w-[800px] min-w-[750px] flex justify-center items-center text-center relative group overflow-hidden mr-6 [&>*]:absolute"
        >
          <div
            v-if="currentSlide !== totalSlides && currentSlide !== 1"
            class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-1.5 w-[70px] truncate rounded-full mb-6 uppercase absolute top-2 left-2 z-10"
          >
            {{ currentSlide }} &bull; {{ totalSlides }}
          </div>
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
              <li>27% of Europe's population has a disability</li>
              <!-- 135 million people, worldwide 1/6 -->
              <li>
                Visual impairments, motor disabilities, hearing, cognitive,
                speech disorders
              </li>
              <li class="focus">
                <br /><br />97% of websites are not Web Content Accessibility
                Guidelines (WCAG) compliant
              </li>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 3 || currentSlide === 4">
              <li v-if="currentSlide !== 4"><strong>P O U R</strong></li>
              <li>Perceivable</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">
                  Captions, descriptions, display orientation, contrast,
                  resizing
                </li>
              </SlideListItemAnimation>
              <li>Operable</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">
                  Keyboard usage, enough reading time, stop moving content
                </li>
              </SlideListItemAnimation>
              <li>Understandable</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">
                  Specified language, labels, order of navigation
                </li>
              </SlideListItemAnimation>
              <li>Robust</li>
              <SlideListItemAnimation>
                <li v-if="currentSlide === 4">
                  Future-proof, semantic code, role of components
                </li>
              </SlideListItemAnimation>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 5">
              <li>
                Government websites are legally required to be accessible (2018)
              </li>
              <li><strong>European Accessibility Act (june 2025)</strong></li>
              <!-- Local governments adjust to country's situation -->
              <li>More people with access to products, job market</li>
              <!-- People must be able to use something like any other -->
              <li>Computers, smartphones, TVs, banking devices, etc.</li>
              <li>
                OSs, webshops, e-books, streaming services, internet banking
              </li>
              <li>
                Checks contrast, semantics, alternative texts, language and
                links
              </li>
              <li>50% of Dutch webshops not ready</li>
              <li>.. some exceptions to this law</li>
              <!-- Like the public broadcaster NPO, schools, non-government health organizations, postal services -->
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/ecommerce.png"
              v-if="currentSlide === 6"
            >
            </SlideImage>
            <!-- Can lead to 15% more revenue in e-commerce platforms, also PR -->
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 7">
              <li><strong>Focus on</strong></li>
              <li>Keyboard navigation</li>
              <li>Semantic HTML</li>
              <li>Helpful links</li>
              <li>Focus management</li>
              <li>Accessible forms</li>
              <li><code>aria</code> attributes</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/arialabel.png"
              v-if="currentSlide === 8"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/accessibilitylandmarks.png"
              v-if="currentSlide === 9"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/skiplink.png"
              v-if="currentSlide === 10"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/focusmanagement.png"
              v-if="currentSlide === 11"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/colormodes.png"
              v-if="currentSlide === 12"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/tailwind.png"
              v-if="currentSlide === 13"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideImage
              image="/screenshots/eslint.png"
              v-if="currentSlide === 14"
              :shadow="true"
            >
            </SlideImage>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 15">
              <li>Set a nice page title for every Nuxt page</li>
              <li>Setup the <code>tabindex</code> attribute correctly</li>
              <li>Notify the user that the page has changed</li>
              <li>Focused styling on input elements</li>
              <li>
                Descriptive page loading
                <svg
                  class="w-4 h-4 text-gray-300 inline animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="leukeleudark"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-900"
                  ></path>
                </svg>
              </li>
              <li>...</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideList v-if="currentSlide === 16">
              <li>
                Check the basic rules for accessibility in every page you make
              </li>
              <li>Use packages to rapidly develop accessible code</li>
              <li>
                Use tooling to test pages for accessibility (WAVE or AXE
                Chrome-plugins)
              </li>
              <li><br /><br />Check if clients needs to comply with the EAA</li>
              <li>And.. implement some things in our default toolset?</li>
            </SlideList>
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <client-only>
              <Vue3Lottie
                v-if="currentSlide === 17"
                animationLink="logo.json"
                :height="400"
                :width="400"
              />
            </client-only>
          </SlideHolder>
        </div>
        <div
          :class="{
            '!bg-leukeleu': currentSlide === totalSlides || currentSlide === 7,
          }"
          class="bg-leukeleudarker rounded-xl py-3 px-8 flex-1 flex justify-center items-center text-center relative group overflow-hidden transition-colors [&>*]:absolute"
          ref="slideHolder"
        >
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
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              label="Talk"
              title="Something about accessibility"
              subtitle="Rules and best practices"
              v-if="currentSlide === 1"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 2"
              title="Accessibility"
              subtitle="for people with a disability.. or for special environments"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 3 || currentSlide === 4"
              title="Basic accessibility rules"
              subtitle="WCAG 2.2 (October 2023)"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 5" title="Follow the law" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 6"
              title="Websites and apps"
              subtitle="Companies with > &euro;2M revenue"
              subsubtitle="Fines (probably) up to 4% of yearly revenue"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 7"
              title="Accessibility in modern front-ends"
              subtitle="Especially important in one-page applications (Nuxt)"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 8"
              title="Labels"
              subtitle="Following WCAG specs"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 9"
              title="Accessibility landmarks"
              subtitle="Roles of elements - for screen readers"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 10" title="Skiplinks" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 11"
              title="Focus management"
              subtitle="For example in modals and changing form layouts"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 12"
              title="Color modes"
              subtitle="Also for special environments"
              subsubtitle="Save user preference in profile"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 13"
              title="Helpful tools"
              subtitle="Tailwind's .sr-only class"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 14"
              title="Helpful tools"
              subtitle="ESLint configuration for accessibility"
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle v-if="currentSlide === 15" title=".. and more" />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle
              v-if="currentSlide === 16"
              title="So what now?"
              subtitle="Panic! 😱 "
            />
          </SlideHolder>
          <SlideHolder :animationDirection="animationDirection">
            <SlideTitle title="Thanks" v-if="currentSlide === 17" />
          </SlideHolder>
        </div>
      </div>
    </div>
  </main>
</template>
