<script setup lang="ts">
defineProps<{
  label?: string;
  title?: string;
  subtitle?: string;
  subsubtitle?: string;
  link?: string;
  linktext?: string;
  image?: string;
  video?: string;
}>();
</script>

<template>
  <section>
    <span
      class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-3 px-5 rounded-full mb-6 uppercase"
      v-if="label"
      >{{ label }}</span
    >
    <h1 class="text-xxl mb-5 px-5" v-if="title">{{ title }}</h1>
    <h2 class="text-lg" v-if="subtitle">{{ subtitle }}</h2>
    <h2 class="text-lg opacity-50" v-if="subtitle">{{ subsubtitle }}</h2>
    <NuxtLink
      :to="link"
      target="_blank"
      rel="noopener"
      class="bg-leukeleu font-leukeleucontent tracking-wider inline-block py-3 px-5 rounded-full mb-6 uppercase mt-8"
      v-if="link"
      >{{ linktext }} &rarr;</NuxtLink
    >
    <div class="absolute bottom-[200px] -left-1/2 w-[900px]" v-if="image">
      <NuxtImg :src="image" loading="lazy" width="900" class="block" />
    </div>
    <div class="absolute bottom-[200px] -left-10 w-[900px]" v-if="video">
      <video width="720" height="350" loop autoplay>
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </section>
</template>
