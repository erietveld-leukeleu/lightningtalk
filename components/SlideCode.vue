<script setup lang="ts">
onMounted(() => {
    const { $Prism } = useNuxtApp();
    $Prism.highlightAll();
})
</script>

<template>
    <section>
        <div class="text-left bg-leukeleudark py-8 px-5 max-w-[550px] rounded-xl">
            <pre class="text-left [&_strong]:text-leukeleu [&_span]:text-leukeleudarker py-2 px-3 leading-7 lang-js"> 
               <code>
                <slot />
            </code>
            </pre>
        </div>
    </section>
</template>
