<template>
    <div class="flex flex-row">
        <v-icon class="relative top-1 left-2 mr-5" icon="mdi-television-ambient-light"></v-icon>
        <v-slider v-model="brightValue" color="rgb(206, 207, 209) " elevation="10" min="35" max="135"> </v-slider>
    </div>
</template>

<script setup lang="ts">
import {useThemesStore} from '~/store/themes/themes'
/**
 * data
 * brightValue 屏幕亮度
 */
const themesStore = useThemesStore()
const brightValue = ref<number>(themesStore.brightness)

/**
 * method 
 * watch brightValue 修改屏幕亮度 brightnessGetter 护眼模式切换 该slider也要动态变化
 */
watch(brightValue,(newvalue)=>{
    themesStore.setBrightness(brightValue.value)
},{
    immediate:true
})
watch(themesStore.brightnessGetter,(newvalue)=>{
    brightValue.value = themesStore.brightness
})
</script>

<style scoped>

</style>