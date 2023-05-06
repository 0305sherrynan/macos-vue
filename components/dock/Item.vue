<template>
    <div class="dock-item">
        <span class="app-tip" v-show="isShowText">{{ appItem.title }}</span>
        <img :src="`/img/apps/${AppID}.png`" 
            alt="" 
            @click="openApp" 
            @mouseenter="enterIcon"
            @mouseleave="leaveIcon"
        >
    </div>
</template>

<script setup lang="ts">
import type {appHelper} from '~/helpers/create-app-helper'
const isShowText = ref<boolean>(false)
const {appItem,AppID} = defineProps<{
    appItem:appHelper,
    AppID:string
}>()
const enterIcon = ()=>{
    isShowText.value = true
}
const leaveIcon = ()=>{
    isShowText.value = false
}
/**
 * method
 * openApp 打开app
 */
const openApp = (e:MouseEvent)=>{
    if (appItem.shouldOpenWindow) appItem.externalBrowserFace?.(e)
}
</script>

<style scoped lang="scss">
.dock-item{
    position: relative;
    width: 70px;
    height: 70px;
    >img{
        width: 4rem;
        height:4rem;
    }
}
.app-tip{
    position: absolute;
    top: -3rem;
    // left: ;
    --double-border: 0 0 0 0 white;
    background-color: hsla(var(--system-color-light-hsl), 0.5);
    backdrop-filter: blur(5px);

    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;

    box-shadow: hsla(0deg, 0%, 0%, 30%) 0px 1px 5px 2px, var(--double-border);
}
</style>