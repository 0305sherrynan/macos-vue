<template>
    <div class="context-menu" 
        v-show="isShow" 
       ref="rightMenuRef"
    >
        <MenubarSubMenu :EachMenuItem="contextMenuConfig.default"/>
    </div>
</template>

<script setup lang="ts">
import {contextMenuConfig} from '~/configs/menu/context.menu.config'
import { onClickOutside } from '@vueuse/core'
/**
 * data 
 * isShow 是否显示该右键菜单
 * props 右键时的当前坐标
 * xpage ypage 右键时的当前坐标
 * rightMenuRef 当前盒子ref
 */
const isShow = ref<boolean>(false)
const props = defineProps<{
    XYpos:{
        xPage:number,
        yPage:number
    }
}>()
const xpage = computed(()=>props.XYpos.xPage+'px')
const ypage = computed(()=>props.XYpos.yPage+'px')


const rightMenuRef =ref(null)
/**
 * method
 * clickOut 盒子以外点击事件
 */
const clickOut = ()=>{
    isShow.value = false
}
/**
 * onClickOutside 监听hook
 * watch 监听x、y坐标的变化
 */
onClickOutside(rightMenuRef,clickOut)
watch([xpage,ypage],(newValue,oldValue)=>{
    isShow.value = true
})

</script>

<style scoped lang="scss">
.context-menu {
    position: absolute;
    transform: translate(v-bind(xpage),v-bind(ypage));
    font-size: 80px;
    // background-color: black;
    
    span{
        color:white;
    }
}
</style>