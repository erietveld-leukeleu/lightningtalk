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
      title="Animation for UX"
      subtitle="Motion design theory"
      v-if="currentSlide === 1"
    />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="The roles of animation" v-if="currentSlide === 2" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Drawing attention" :animate-in="true" v-if="currentSlide === 3">
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
    <SlideTitle title="Giving feedback" :animate-in="true" v-if="currentSlide === 4">
      <template #animation>
        <div class="animationelement-buttonyay">
          <div class="animationelement-buttonyay-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>
          </div>
          <div class="animationelement-buttonyay-ani">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </template>
    </SlideTitle>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Communicate a change of state" :animate-in="true"  v-if="currentSlide === 5">
      <template #animation>
        <div class="animationelement-status">
          <span class="animationelement-status-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"/></svg>
          </span>
          <span class="animationelement-status-text"></span>
        </div>
      </template>
    </SlideTitle>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle title="Showing hierarchy of data" v-if="currentSlide === 6">
      <template #animation>
        <div class="animationelement-zoom">
          <div class="animationelement-zoom-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.859 6l-.489-2h21.256l-.491 2h-20.276zm1.581-4l-.439-2h17.994l-.439 2h-17.116zm20.56 16h-24l2 6h20l2-6zm-20.896-2l-.814-6h19.411l-.839 6h2.02l1.118-8h-24l1.085 8h2.019zm2.784-3.995c-.049-.555.419-1.005 1.043-1.005.625 0 1.155.449 1.185 1.004.03.555-.438 1.005-1.044 1.005-.605 0-1.136-.449-1.184-1.004zm7.575-.224l-1.824 2.68-1.813-1.312-2.826 2.851h10l-3.537-4.219z"/></svg>
            <span>6</span>
          </div>
          <div class="animationelement-zoom-grid">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </template>
    </SlideTitle>
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
