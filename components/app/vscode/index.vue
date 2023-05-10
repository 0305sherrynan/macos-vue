<template>
    <div class="vscode-box" ref="vscodeRef" :style="style" >
        <DesktopWindowTrafficLight  
            ref="trafficRef" @btnClick="emitBtnClick"/>
        <iframe ref="vscodeRef"
            class="vscode-iframe"
            src="https://stackblitz.com/github/0305sherrynan/macos-vue?file=app.vue" 
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

// import {useWindowSize, useDraggable, Position} from "@vueuse/core"
/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * iframe_width_px iframe_height_px 转为px
 * vscodeRef
 * boxOffsetX  boxOffsetY 鼠标距离盒子的偏移值
 */
const vscodeRef = ref<HTMLElement>()
const isShow = ref<boolean>()
const iframe_width = appConfig.vscode.width+'rem'
const iframe_width_px = appConfig.vscode.width*16
const iframe_height = appConfig.vscode.height+'rem'
const iframe_height_px = appConfig.vscode.height*16
//获取窗口的width和height
const { width, height } = useWindowSize()
/**
 * 
 */
const emitBtnClick = (eventType:string)=>{
    switch (eventType){
        case 'closed':{
            appStore.isOpenApp['vscode'] = false
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