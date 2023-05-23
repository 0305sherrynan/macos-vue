<template>
    <div class="wall-index" 
        :style="{backgroundImage:'url(' + switchNewPaper + ')'}">
       
    </div>
</template>

<script setup lang="ts">

import {usePapersStore} from '~/store/Wallpaper/paper'
const paperStore = usePapersStore()
const switchNewPaper = ref<string>(paperStore.image)
watch((paperStore.imageGetter),(newValu)=>{
    switchNewPaper.value = newValu
})
</script>

<style scoped>
.wall-index {
    position: absolute;
    width: 100%;
    height: 100vh;
    will-change: background-image;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: background-image 100ms ease-in;
}
</style>