<script setup lang="ts">
const props = defineProps<{
    animationDirection?: 'UP' | 'DOWN'
}>()    

const enterFromClass = computed(() => !props.animationDirection ? '-translate-y-[150%] opacity-0' : 'translate-y-[150%] opacity-0' )
const leaveToClass = computed(() => props.animationDirection ? '-translate-y-[150%] opacity-0' : 'translate-y-[150%] opacity-0' )
</script>

<template>
    <Transition appear :duration="300" :enter-from-class="enterFromClass" enter-active-class="transition duration-300" :leave-to-class="leaveToClass" leave-active-class="transition duration-300">

        <slot />
    </Transition>
</template>
