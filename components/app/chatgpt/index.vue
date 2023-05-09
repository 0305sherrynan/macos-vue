<template>
    <div class="vscode-box">
        <DesktopWindowTrafficLight />
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
/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 */
const vscodeRef = ref<HTMLElement>()
const iframe_width = appConfig.vscode.width+'rem'
const iframe_height = appConfig.vscode.height+'rem'
</script>

<style scoped>
.vscode-box{
    border-radius: .75rem;
    background-color: rgb(32, 35, 39);
    padding: .4rem;
}
.vscode-iframe{
    width: v-bind(iframe_width);
    height: v-bind(iframe_height);
}
</style>