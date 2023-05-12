<template>
    <div>
        <div class="wifi-item" @click="isOpen = !isOpen">
            <svg v-if="!isOpen" t="1683806103011" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3549" width="17" height="17">
                <path
                    d="M358.4 768H426.666667v85.333333H213.333333v-213.333333h85.333334v68.266667l128-128 59.733333 59.733333-128 128z m345.6 0l-128-128 59.733333-59.733333 132.266667 132.266666V640h85.333333v213.333333h-213.333333v-85.333333h64zM358.4 298.666667l128 128-59.733333 59.733333-128-128V426.666667H213.333333V213.333333h213.333334v85.333334H358.4z m345.6 0H640V213.333333h213.333333v213.333334h-85.333333V354.133333l-132.266667 132.266667-59.733333-59.733333 128-128z"
                    fill="#444444" p-id="3550"></path>
            </svg>
            <svg v-if="isOpen" t="1683806103011" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3549" width="17" height="17">
                <path
                    d="M358.4 768H426.666667v85.333333H213.333333v-213.333333h85.333334v68.266667l128-128 59.733333 59.733333-128 128z m345.6 0l-128-128 59.733333-59.733333 132.266667 132.266666V640h85.333333v213.333333h-213.333333v-85.333333h64zM358.4 298.666667l128 128-59.733333 59.733333-128-128V426.666667H213.333333V213.333333h213.333334v85.333334H358.4z m345.6 0H640V213.333333h213.333333v213.333334h-85.333333V354.133333l-132.266667 132.266667-59.733333-59.733333 128-128z"
                    fill="#ffffff" p-id="3550"></path>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false)
watch(isOpen, (newval, oldval) => {
    console.log(newval)
})
const currentColor = computed(() => isOpen.value ? 'var(--control-color-open)' : 'var(--control-color-closed)')
watch(currentColor, (newval, oldval) => {
    console.log(newval)
})
</script>

<style scoped>
.wifi-item {
    /* line-height: 1rem; */
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: v-bind(currentColor);
    display: flex;
    justify-content: center;
    align-items: center;
}</style>
  

  

