<template>
    <div class="context-menu" v-show="isShow" ref="rightMenuRef">
        <MenubarSubMenu :EachMenuItem="contextMenuConfig.default" />
    </div>
</template>

<script setup lang="ts">
import { contextMenuConfig } from '~/configs/menu/context.menu.config'
import { onClickOutside } from '@vueuse/core'
/**
 * 1
 * 2
 * data 
 * isShow 是否显示该右键菜单
 * props 右键时的当前坐标
 * xpage ypage 右键时的当前坐标
 * rightMenuRef 当前盒子ref
 */
const isShow = ref<boolean>(false)
const props = defineProps<{
    XYpos: {
        xPage: number,
        yPage: number
    },
    mainHeight: number | undefined
}>()
let right_menu_height = ref<number | undefined>()
let right_menu_top = ref<number | undefined>()
const xpage = computed(() => props.XYpos.xPage + 'px')
const ypage = computed(() => {
    return props.XYpos.yPage + (right_menu_height.value as number) + (right_menu_top.value as number) < (props.mainHeight as number) ?
        props.XYpos.yPage + 'px' :  props.XYpos.yPage-(right_menu_height.value as number) + 'px'
})
const rightMenuRef = ref<HTMLElement>()
/**
 * method
 * clickOut 盒子以外点击事件
 */
const clickOut = () => {
    isShow.value = false
}
/**
 * onClickOutside 监听hook
 * watch 监听x、y坐标的变化
 */
onClickOutside(rightMenuRef, clickOut)
onMounted(() => {
    watch([xpage], () => {
        //展示右键菜单
        isShow.value = true
        //当dom更新时候，height和top才不会为0 所以才能获取到
        nextTick(() => {
            right_menu_height.value = rightMenuRef.value?.getBoundingClientRect().height
            right_menu_top.value = rightMenuRef.value?.getBoundingClientRect().top
            console.log(props.XYpos.yPage, (right_menu_height.value as number), (right_menu_top.value as number), props.mainHeight)
        })
    })
})

</script>

<style scoped lang="scss">
.context-menu {
    position: absolute;
    transform: translate(v-bind(xpage), v-bind(ypage));
    font-size: 80px;
    // background-color: black;

    span {
        color: white;
    }
}
</style>