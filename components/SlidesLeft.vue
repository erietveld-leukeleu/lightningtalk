<script setup lang="ts">
defineProps<{
  animationDirection: "UP" | "DOWN";
  currentSlide?: number;
}>();
</script>

<template>
  <SlideHolder :animationDirection="animationDirection">
    <div v-if="currentSlide === 1">
      <client-only>
        <Vue3Lottie animationLink="logo.json" :height="600" :width="600" />
      </client-only>
    </div>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 2">
      <li><strong>01</strong> &nbsp; Drawing attention</li>
      <li><strong>02</strong> &nbsp; Giving feedback</li>
      <li><strong>03</strong> &nbsp; Communicate a change of state</li>
      <li><strong>04</strong> &nbsp; Showing hierarchy of complex data</li>
      <li><strong>05</strong> &nbsp; Learning how to interact</li>
      <li><strong>06</strong> &nbsp; Because it's fun ✨</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 3">
      <li>When the user must read a message</li>
      <li>When the user must act immediately</li>
      <li>Should not distract from page purpose</li>
      <li>Often a dark pattern: 'fear of loss'</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 4">
      <li>A user's action is recognized by the app</li>
      <li>Prevent change blindness: the action triggers something else on the page</li>
      <li>Mimicking the &lsquo;real world&rsquo; movement: pressing a button</li>
      <li>Prevent confusion: opening an overlay</li>
      <li>Microinteractions: short moments to improve UX</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 5">
      <li>To emphasize a change in component state</li>
      <li>Loading indicators</li>
      <li>Skeleton screens</li>
      <li>Item status: from concept to published</li>
      <li>Form validations</li>
      <li>Toggle switch: on/off</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 6">
      <li>Accordion toggle</li>
      <li>Animating to an anchor link</li>
      <li>Navigating to the next/previous item</li>
      <li>Going deeper into large data structures</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 7">
      <li>Often when initializing a page</li>
      <li>Small and short tutorial</li>
      <li>Onboarding: lead the eye of the user to important functionality</li>
      <li>Short animated tooltip or popover</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 8">
      <li>Branding: background videos, frame animations</li>
      <li>To make the application more fun and memorable</li> <!-- Scroll animations -->
      <li>Animations can be really distracting</li>
      <li>Animations can slow down the experience</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 9">
      <li>Animation should reflect the brand</li> <!-- Consistency -->
      <li>Animations must not waste time - and loading times</li> <!--  -->
      <li>Actions should give immediate feedback</li>
      <li>Use subtle and infrequent animations</li>
      <li>Accessibility considerations <br /><code lang="css" class="text-sm mt-2 inline-block">@media (prefers-reduced-motion)</code></li>
      <li>Impact on SEO</li>
      <li>Development challenges</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideImage image="/animation-timing.gif" v-if="currentSlide === 10" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideImage image="/animation-duration.gif" v-if="currentSlide === 11" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideImage image="/animation-easing.gif" v-if="currentSlide === 12" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideImage image="/animation-triggers.gif" v-if="currentSlide === 13" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideImage image="/animation-exaggeration.gif" v-if="currentSlide === 14" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideImage image="/animation-appeal.gif" v-if="currentSlide === 15" />
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideList v-if="currentSlide === 16">
      <li>For enhancing the experience</li>
      <li>When they are consistent</li>
      <li>Clarity over entertainment</li>
      <li>Performant and rapid</li>
      <li>Test on all devices and browsers</li>
      <li>Provide accessibility</li>
      <li>Users must feel like they are in control</li>
    </SlideList>
  </SlideHolder>
  <SlideHolder :animationDirection="animationDirection">
    <SlideTitle v-if="currentSlide === 17" :animate-in="false">
      <template #animation>
        <div class="animationelement-final">
          <div class="animationelement-finalline vague"></div>
          <div class="animationelement-finalline"></div>
          <div class="animationelement-finaldot"><span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"/></svg>
          </span></div>
        </div>
      </template>
    </SlideTitle>
  </SlideHolder>
</template>
