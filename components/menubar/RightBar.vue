<template>
    <div  ref="arrowRef">
        <div class="arrow" 
            @click="rotate = rotate ==='180deg'?'0deg':'180deg';ifOpenRight=!ifOpenRight" 
           >
        </div>
        <div class="absolute top-10 right-0 translate-x-1/2" v-show="ifOpenRight">
            <MenubarControlList />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const rotate = ref<string>('')
const arrowRef = ref<HTMLElement>()
const ifOpenRight = ref<boolean>(false)
const clickOut = () => {
    rotate.value = '0deg'
    ifOpenRight.value = false
}
onClickOutside(arrowRef, clickOut)
</script>

<style scoped>
.arrow {
    /* border-top: 50px solid white; */
    width: 0px;
    height: 0px;

    border-bottom: .6rem solid rgba(0, 0, 0, .5);
    border-left: .6rem solid transparent;
    border-right: .6rem solid transparent;
    transition: all 300ms linear;
    transform: rotate(v-bind(rotate));

}
</style>