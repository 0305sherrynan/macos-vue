<template>
    <div class="dock-frame">
        <div class="divider"></div>
        <template v-for="(item,index) in appConfig">
            <DockItem :appItem="item" :AppID="index" @itemMoveEmit="moveChange"></DockItem>
        </template>
    </div>
</template>

<script setup lang="ts">
import { appConfig } from '~/configs/apps/apps.config'
const defaultWidth:string = '39rem'
const bigFrameWidth = ref<string>(defaultWidth)
const moveChange = (scale_width:string)=>{
    bigFrameWidth.value = Number(defaultWidth.replace("rem","")) + Number(scale_width.replace("rem",""))+'rem'
}
</script>

<style scoped lang="scss">
.dock-frame{
    display: flex;
    flex-direction: row;
    border-radius: 1rem;
    justify-content: center;
    // width: v-bind(bigFrameWidth);
    height: 4rem;
    padding: 0 2rem;

    
    background-color: hsla(var(--system-color-light-hsl), 0.4);
    box-shadow: inset 0 0 0 0.2px hsla(var(--system-color-grey-100-hsl), 0.7),
      0 0 0 0.2px hsla(var(--system-color-grey-900-hsl), 0.7), hsla(0, 0%, 0%, 0.3) 2px 5px 19px 7px;

}
</style>