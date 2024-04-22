<script setup lang="ts">

</script>

<template>
    <section>
        <p class="text-xl">
            <ul class="text-left w-[380px] block flex flex-col gap-5 [&_strong]:text-leukeleu [&_code]:bg-leukeleudark [&_code]:py-2 [&_code]:px-3 [&_code]:rounded-md">
                <slot />
            </ul>
        </p>
    </section>
</template>
