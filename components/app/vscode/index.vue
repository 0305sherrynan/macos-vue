<template class="vscode-tpl">
    <div class="vscode-box" ref="vscodeRef" :style="style" v-show="isVscodeShow">
        <DesktopWindowTrafficLight  
            ref="trafficRef" @btnClick="emitBtnClick"/>
        <iframe ref="vscodeRef"
            class="vscode-iframe"
            
            src="https://stackblitz.com/edit/vitejs-vite-cmserv?file=src%2FApp.vue"
            frameborder="0"
            allowfullscreen="true"
            height="100px"
            >

            <!--src="https://stackblitz.com/github/0305sherrynan/macos-vue?file=app.vue" -->
        </iframe>
    </div>
</template>

<script setup lang="ts">
import { useAppsStore } from '~/store/Apps/apps'
import useTraffic from '~/hooks/useTraffic'


/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * isVscodeShow 是否显示
 */
const vscodeRef = ref<HTMLElement>()
const appStore = useAppsStore()
const { iframe_height, iframe_width, style, trafficChange } = useTraffic('vscode', vscodeRef)
const isVscodeShow = computed(() => appStore.isOpenApp['vscode'])
/**
 * 
 * @param eventType  事件的类型 包括 reduce、full、closed
 */
const emitBtnClick = (eventType: string) => {
    trafficChange(eventType)
}
</script>

<style scoped>
.vscode-tpl{

}
.vscode-box{
     /* transition: all 1s linear; */
    /* transform-origin: center,center;  */
    border-radius: .75rem;
    background-color: rgb(32, 35, 39);
    padding: .4rem;
    
}
.vscode-iframe{
    width: v-bind(iframe_width);
    height: v-bind(iframe_height);
}
</style>