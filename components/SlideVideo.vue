<script setup lang="ts">
const videoPlayer = ref();

defineProps<{
  movie: string;
}>();
</script>

<template>
  <section>
    <div
      class="relative bg-leukeleudark shadow-leukeleu [&>video]:border-2 [&>video]:border-leukeleudarker"
    >
      <video width="360" height="290" controls loop ref="videoPlayer">
        <source src="/videos/movie.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>
