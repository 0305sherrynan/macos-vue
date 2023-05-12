<template>
    <div class="relative">
        <div class="arrow"  @click="rotate = '180deg'" ref="arrowRef"></div>
        <div class="absolute top-10">
            <MenubarControlList/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const rotate = ref<string>('')
const arrowRef = ref<HTMLElement>()
const clickOut = ()=>{
    rotate.value = '0deg'
}
onClickOutside(arrowRef, clickOut)
</script>

<style scoped>
.arrow {
    /* border-top: 50px solid white; */
    width: 0px;
    height: 0px;
    
    border-bottom: .6rem solid  rgba(0,0,0,.5);
    border-left: .6rem solid transparent;
    border-right: .6rem solid transparent;
    transition: all 300ms linear;
    transform:rotate(v-bind(rotate));

}
</style>