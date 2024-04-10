
<template>
    <transition appear enter-from-class="translate-x-[150%] opacity-0" enter-active-class="transition duration-300" leave-to-class="-translate-x-[150%] opacity-0" leave-active-class="transition duration-300" class="absolute">
        <slot />
    </transition>
</template>
