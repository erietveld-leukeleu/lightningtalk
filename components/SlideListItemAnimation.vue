<script setup lang="ts"></script>

<template>
  <div class="text-leukeleu">
    <Transition
      appear
      :duration="300"
      enter-from-class="translate-y-[20%] opacity-0"
      enter-active-class="transition duration-300"
      leave-to-class="-translate-y-[20%] opacity-0"
      leave-active-class="transition duration-300"
    >
      <slot />
    </Transition>
  </div>
</template>
