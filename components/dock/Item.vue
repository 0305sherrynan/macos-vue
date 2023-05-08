<template>
    <div class="dock-item">
        <span class="app-tip" v-show="isShowText">{{ appItem.title }}</span>
        <img :src="`/img/apps/${AppID}.png`" alt="" @click="openApp" @mouseenter="enterIcon" @mouseleave="leaveIcon"
            ref="dockItemRef">
    </div>
</template>

<script setup lang="ts">
import type { appHelper } from '~/helpers/create-app-helper'
/**
 * isShowText 是否展示文字部分
 * dockItemRef 当前元素节点
 * scaleTimeMax 放大的最大比例
 * scale_width 当前img宽度
 * scale_position_height 每个盒子y方向的偏移
 * default_width 默认img宽度
 * preScaleTimeMax 前一个节点的最大放大尺度
 * preVnodeRef 上一个节点
 * emits 父子事件触发
 */
const isShowText = ref<boolean>(false)
const { appItem, AppID } = defineProps<{
    appItem: appHelper,
    AppID: string
}>()
const emits = defineEmits(['itemMoveEmit'])
const dockItemRef = ref<Element>()
const preVnodeRef = ref<Element | null>()
const default_width: number = 4
const default_height: number = 4
const scale_width = ref<string>('4rem')
const scale_height = ref<string>('4rem')
const scale_position_height = computed(() => Number(scale_height.value.replace('rem', '')) - default_height + 'rem')
const scaleTimeMax: number = 0.6
const preScaleTimeMax:number = 1
const next_width = ref<string>('4rem')

onMounted(() => {
        //定义dockitem的rect对象
        dockItemRef.value?.addEventListener('mousemove', (e) => {
        //获得上一个节点的DOM
        preVnodeRef.value = dockItemRef.value?.previousElementSibling
        //更换img的height
        scale_height.value = '6rem'
        // 偏移量
        const offsetCursorX = computed(() => (e as MouseEvent).offsetX)
        //当年的图片宽度
        const dockRectObjWidth = computed(() => dockItemRef.value?.getBoundingClientRect().width)
        //得到x反向上的百分比
        const offset = computed(() => ((offsetCursorX.value as number)) / (dockRectObjWidth.value as number))
        //更换最终的大小
        scale_width.value = default_width + default_width * scaleTimeMax * (1 - Math.abs(0.5 - offset.value)) + 'rem'
        scale_height.value = default_height + default_height * scaleTimeMax * (1 - Math.abs(0.5 - offset.value)) + 'rem';
        //更换上一个节点的大小
        next_width.value = default_width + default_width * preScaleTimeMax * (1 - Math.abs(0.5 - offset.value)) + 'rem'
        console.log(next_width.value)
        emits('itemMoveEmit',scale_width.value)
        // (preVnodeRef.value as HTMLElement).style.width = default_width + default_width * scaleTimeMax * (1 - Math.abs(0.5 - offset.value)) + 'rem'
    })
    dockItemRef.value?.addEventListener('mouseleave', () => {
        //恢复默认尺寸
        next_width.value = default_width + 'rem'
        scale_width.value = default_width + 'rem'
        scale_height.value = default_height + 'rem'
        
        removeEventListener('mousemove', () => { })
    })

})
/**
 * method
 * openApp 打开app
 */
const openApp = (e: MouseEvent) => {
    if (appItem.shouldOpenWindow) appItem.externalBrowserFace?.(e)
}
const enterIcon = () => {
    isShowText.value = true
}
const leaveIcon = () => {
    isShowText.value = false
}
</script>

<style scoped lang="scss">
.dock-item {
    position: relative;
    bottom: v-bind(scale_position_height);

    >img {
        width: v-bind(scale_width);
        height: v-bind(scale_height);
    }
    + div{
        >img{
            // width: v-bind(next_width);
            // height: v-bind(next_width);
        }
    }
}

.app-tip {
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