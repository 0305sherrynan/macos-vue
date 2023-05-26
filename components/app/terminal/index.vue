<template>
    <div class="vscode-box" ref="vscodeRef" :style="style" v-show="isVscodeShow">
        <DesktopWindowTrafficLight ref="trafficRef" @btnClick="emitBtnClick" />

        <div ref="vscodeRef" class="vscode-iframe">
            <AppTerminalRow />
        </div>

    </div>
</template>

<script setup lang="ts">
import { useAppsStore } from '~/store/Apps/apps'
import useTraffic from '~/hooks/useTraffic'

const appStore = useAppsStore()
/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * isVscodeShow 是否显示
 */
const vscodeRef = ref<HTMLElement>()
const {iframe_height,iframe_width,style,trafficChange} = useTraffic('terminal', vscodeRef)
const isVscodeShow = computed(() => appStore.isOpenApp['terminal'])
/**
 * 
 * @param eventType  事件的类型 包括 reduce、full、closed
 */
const emitBtnClick = (eventType: string) => {
    trafficChange(eventType)
}


</script>

<style scoped>
.vscode-box {
    border-radius: .75rem;
    background-color: rgba(28, 28, 30, 0.95);
    padding: .4rem;

}

.vscode-iframe {
    width: v-bind(iframe_width);
    height: v-bind(iframe_height);
}
</style>