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
    <SlideTitle title="The roles of animation" v-if="currentSlide === 2" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Drawing attention" v-if="currentSlide === 3">
      <template #animation>
        <div class="animationelement-drawingattention">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-5.971 5h2v10h-2v-10zm1 14.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
            />
          </svg>
          <div class="animationelement-line"></div>
          <div class="animationelement-dot"><span></span></div>
        </div>
      </template>
    </SlideTitle>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Giving feedback" v-if="currentSlide === 4" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Communicate a change of state" v-if="currentSlide === 5" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Showing hierarchy of complex data" v-if="currentSlide === 6" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Learning how to interact" v-if="currentSlide === 7" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Because it's fun ✨" v-if="currentSlide === 8" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="When to (not) use animation" v-if="currentSlide === 9" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Timing" subtitle="The order of things" v-if="currentSlide === 10" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Duration" subtitle="The speed of the animation" v-if="currentSlide === 11" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Easing" subtitle="Natural movement" v-if="currentSlide === 12" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Triggers" subtitle="Immediate feedback" v-if="currentSlide === 13" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Fluidity" subtitle="To make things more fun" v-if="currentSlide === 14" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Appeal" subtitle="To emphasize positive feedback" v-if="currentSlide === 15" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="So.." v-if="currentSlide === 16" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="The end" v-if="currentSlide === 17" />
  </SlideHolder>
</template>
