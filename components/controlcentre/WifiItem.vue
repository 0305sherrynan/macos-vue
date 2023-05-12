<template>
    <div>
        <div class="wifi-item" @click="isOpen = !isOpen">
            <svg v-show="!isOpen" t="1683797462359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2746" width="17" height="17">
                <path
                    d="M0 352.832l93.12 98.752c231.296-245.44 606.464-245.44 837.76 0L1024 352.832C741.44 53.056 283.008 53.056 0 352.832z m372.352 395.008L512 896l139.648-148.16c-76.8-81.92-202.048-81.92-279.296 0zM186.24 550.4l93.12 98.752c128.448-136.32 336.96-136.32 465.408 0L837.824 550.4c-179.648-190.592-471.488-190.592-651.648 0z"
                    fill="#2c2c2c" p-id="2747"></path>
            </svg>
            <svg v-show="isOpen" t="1683797462359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2746" width="17" height="17">
                <path
                    d="M0 352.832l93.12 98.752c231.296-245.44 606.464-245.44 837.76 0L1024 352.832C741.44 53.056 283.008 53.056 0 352.832z m372.352 395.008L512 896l139.648-148.16c-76.8-81.92-202.048-81.92-279.296 0zM186.24 550.4l93.12 98.752c128.448-136.32 336.96-136.32 465.408 0L837.824 550.4c-179.648-190.592-471.488-190.592-651.648 0z"
                    fill="#ffffff" p-id="2747"></path>
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
}
</style>
  

  

