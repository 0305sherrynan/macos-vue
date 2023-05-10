<template>
    <div class="vscode-box" ref="vscodeRef" :style="style" style="position: fixed">
        <DesktopWindowTrafficLight  
            ref="trafficRef"/>
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

// import {useWindowSize, useDraggable, Position} from "@vueuse/core"
/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * vscodeRef
 * boxOffsetX  boxOffsetY 鼠标距离盒子的偏移值
 */
const vscodeRef = ref<HTMLElement>()
// const boxOffsetX = ref<number>(0)
// const boxOffsetY = ref<number>(0)
// const translateX = ref<string>()
// const translateY = ref<string>()
// const downFlag = ref<boolean>(false)
const iframe_width = appConfig.vscode.width+'rem'
const iframe_height = appConfig.vscode.height+'rem'
let style_dom = {}
const { width, height } = useWindowSize()
console.log(width,height)
/**
 * methods
 */
//  const mouseDownEvent = (e:MouseEvent)=>{
//     console.log('offsetx',e.offsetX,'offsety',e.offsetY)
//     boxOffsetX.value = e.offsetX
//     boxOffsetY.value = e.offsetY
//     downFlag.value = true
//     console.log(1)
// }
// const mouseMoveEvent = (e:MouseEvent)=>{
//     console.log(2)
//     if (downFlag.value) {
//         translateX.value = e.offsetX- boxOffsetX.value   + 'px'
//         translateY.value = e.offsetY - boxOffsetY.value  +'px'
//         console.log('trx',translateX.value,'try',translateY.value)
//     }
// }
// const mouseUpEvent = (e:MouseEvent)=>{
//     console.log(3)
//     downFlag.value = false
// }
    let { x, y, style }  = useDraggable(vscodeRef, {
      initialValue: { x: 1000, y: 1000},

    })
     
</script>

<style scoped>
.vscode-box{
    transition: all 100ms linear;
    /* transform: translate(v-bind(translateX),v-bind(translateY)); */
    border-radius: .75rem;
    background-color: rgb(32, 35, 39);
    padding: .4rem;
}
.vscode-iframe{
    /* width: v-bind(iframe_width); */
    /* height: v-bind(iframe_height); */
}
</style>