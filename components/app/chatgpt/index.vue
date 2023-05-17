<template>
    <div class="vscode-box" ref="vscodeRef" :style="style" v-show="isVscodeShow">
        <DesktopWindowTrafficLight  
            ref="trafficRef" @btnClick="emitBtnClick"/>
        <iframe ref="vscodeRef"
            class="vscode-iframe"
            src="https://chat1.aichatos.com/#/chat/1683624530512" 
            frameborder="0"
            allowfullscreen="true"
            height="100px"
            >
        </iframe>
    </div>
</template>

<script setup lang="ts">
import {appConfig} from '~/configs/apps/apps.config'
import {useAppsStore} from '~/store/Apps/apps'

const appStore = useAppsStore()
/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * iframe_width_px iframe_height_px 转为px
 * vscodeRef
 * boxOffsetX  boxOffsetY 鼠标距离盒子的偏移值
 * header_height_px 顶部栏的height
 */

const vscodeRef = ref<HTMLElement>()
const iframe_width = ref<string>(appConfig.chatgpt.width+'rem')
const iframe_width_px = appConfig.chatgpt.width*16
let iframe_height = ref<string>(appConfig.chatgpt.height+'rem')
const iframe_height_px = appConfig.chatgpt.height*16
const header_height_px = 1.8*16
const isVscodeShow = computed(() => appStore.isOpenApp['chatgpt'])
//获取窗口的width和height
const { width, height } = useWindowSize()
// const 
/**
 * 
 */
const emitBtnClick = (eventType:string)=>{
    switch (eventType){
        case 'closed':{
            appStore.isOpenApp['chatgpt'] = false
            break
        }
        case 'full':{
            console.log('full')
            iframe_height.value = width.value - header_height_px+'px';
            iframe_width.value = '100vw'
            
  
            x.value = 0
            y.value = header_height_px
            break
        }
        case 'reduce':{
            iframe_height.value = appConfig.chatgpt.height+'rem'
            iframe_width.value = appConfig.chatgpt.width+'rem'
            x.value = width.value/2-iframe_width_px/2
            y.value = height.value/2-iframe_height_px/2
            break
        }
    }
}
/**
 * 监听拖拽事件
 */
let { x, y, style }  = useDraggable(vscodeRef, {
    initialValue: { x: width.value/2-iframe_width_px/2, y: height.value/2-iframe_height_px/2},
})
     
</script>

<style scoped>
.vscode-box{
    /* transition: all 1s linear;
    transform-origin: center,center; */
    border-radius: .75rem;
    background-color: rgb(32, 35, 39);
    padding: .4rem;
    
}
.vscode-iframe{
    width: v-bind(iframe_width);
    height: v-bind(iframe_height);
}
</style>