<script setup lang="ts">

</script>

<template>
    <section>
        <p class="text-xl">
            <ul class="text-left w-[380px] block flex flex-col gap-5 [&_strong]:text-leukeleu [&_code]:bg-leukeleudark [&_code]:py-2 [&_code]:px-3 [&_code]:rounded-md [&>li]:relative [&>li]:after:absolute [&>li]:after:left-0 [&>li]:after:-bottom-3 [&>li]:after:w-4 [&>li]:after:h-1 [&>li]:after:border-white [&>li]:after:border-b [&>li]:after:opacity-25 [&>li]:last:after:hidden">
                <slot />
            </ul>
        </p>
    </section>
</template>
