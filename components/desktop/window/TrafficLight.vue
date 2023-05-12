<template>
    <div class="traffic-circle">

        <div class="closed" ref="closedRef" @click="closedCurrentWindow">
            <div v-show="isShowIcon">
                <svg height="15" viewBox="0 0 48 48" width="15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
            </div>
        </div>
        <div class="reduce" ref="reduceRef">
            <div v-show="isShowIcon">
                <!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="15px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z"/></svg>
            </div>

        </div>
        <div class="full" ref="fullRef" @click="fullCurrentWindow">
            <div v-show="isShowIcon">
                <svg fill="none" height="15" stroke-width="1.5" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M4 20L9 15M9 15V19M9 15H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4L15 9M15 9V5M15 9H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useAppsStore} from '~/store/Apps/apps'
const appStore = useAppsStore()
/**
 * default_scale 默认红绿灯大小
 * current_scale [] 当前每个红绿灯大小
 * enter_scale 放大后的大小
 * closedRef closedRef closedRef 三个灯的dom
 * ele_arr 存放三个灯的dom
 * isShowIcon 是否展示图标
 */
const emit = defineEmits(['btnClick'])
const default_scale = 1
const current_scale = reactive<Array<number>>([1, 1, 1])
const enter_scale = 1.2
const closedRef = ref<HTMLElement>()
const reduceRef = ref<HTMLElement>()
const fullRef = ref<HTMLElement>()
let ele_arr = new Array<Ref<HTMLElement | undefined>>
const isShowIcon = ref<boolean>(false)
ele_arr.push(closedRef, reduceRef, fullRef)
const cur_closed = computed(() => current_scale[0])
const cur_reduce = computed(() => current_scale[1])
const cur_full = computed(() => current_scale[2])

/**
 * method
 * closedCurrentWindow 关闭当前窗口事件
 * fullCurrentWindow 全屏当前窗口事件
 */
const closedCurrentWindow = ()=>{
    emit('btnClick','closed')
}
const fullCurrentWindow = ()=>{
    emit('btnClick','full')
}
/**
 *  监听三个灯的鼠标事件
 */
onMounted(() => {
    ele_arr.forEach((item, index) => {
        item.value?.addEventListener('mouseenter', () => {
            current_scale[index] = enter_scale
            isShowIcon.value = true
        })
        item.value?.addEventListener('mouseleave', () => {
            current_scale[index] = default_scale
            isShowIcon.value = false
        })
    })
})
</script>

<style scoped lang="scss">
.traffic-circle {
    display: flex;
    flex-direction: row;

    >div {
        width: 1rem;
        height: 1rem;
        margin: .3rem;
        border-radius: 50%;
        transition: all 100ms linear;
        transform-origin: center center;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .closed {
        transform: scale(v-bind(cur_closed), v-bind(cur_closed));
        background-color: rgb(255, 95, 86);
        

    }

    .reduce {
        transform: scale(v-bind(cur_reduce), v-bind(cur_reduce));
        background-color: rgb(255, 189, 46);

    }

    .full {
        transform: scale(v-bind(cur_full), v-bind(cur_full));
        background-color: rgb(39, 201, 63);
    }
}
</style>