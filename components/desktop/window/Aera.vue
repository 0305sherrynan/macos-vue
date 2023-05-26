<template>
    <div class="app-aera">
        <div class="inline-block relative">
            <Transition name="vscode">
                <AppVscode class="vscode-app" @click="focuEvent('vscode')" />
            </Transition>

            <Transition name="vscode">
                <AppChatgpt @click="focuEvent('chatgpt')" class="vscode-app"/>
            </Transition>
            <Transition name="vscode">
                <AppWall @click="focuEvent('wallpaper')" class="vscode-app"/>
            </Transition>
            <Transition name="vscode">
                <AppTerminal @click="focuEvent('terminal')" class="vscode-app"/>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppsStore } from '~/store/Apps/apps'
import { appsID } from '~/configs/apps/apps.config'
const appStore = useAppsStore()

/**
 * 
 */

const focuEvent = (activeID: appsID) => {
    appStore.activeAppInstance = activeID
   
}
</script>

<style scoped lang="scss">
.vscode-enter-from {
    transform: scale(0, 0);
    transform-origin: center, center;
    opacity: 1;
}

.vscode-enter-active {
    transition: all 300ms linear;

}

.vscode-leave-active {
    transition: all 300ms linear;

}

.vscode-leave-to {

    transform: scale(0, 0);
    transform-origin: center, center;
    opacity: 0;
}

.app-aera {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .vscode-app {
        position: fixed;

    }
}</style>