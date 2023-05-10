<template>
    <div class="app-aera">
        <div class="inline-block relative">
            <Transition name="vscode">
                <AppVscode v-if="isVscodeShow" class="vscode-app" @click="focuEvent('vscode')" />
            </Transition>
            <AppChatgpt v-if="isChatgptShow" @click="focuEvent('chatgpt')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppsStore } from '~/store/Apps/apps'
import { appsID } from '~/configs/apps/apps.config'
const appStore = useAppsStore()
const isVscodeShow = computed(() => appStore.isOpenApp['vscode'])
const isChatgptShow = computed(() => appStore.isOpenApp['chatgpt'])

/**
 * 
 */

const focuEvent = (activeID: appsID) => {
    appStore.activeAppInstance = activeID
    console.log(activeID)
}
</script>

<style scoped lang="scss">
.vscode-enter-from{
    transform:scale(0,0);
    transform-origin: center,center;
    opacity: 0;
}
.vscode-enter-active{
    transition: display 300ms linear;
    
}
.vscode-leave-active{
    transition: display 300ms linear;
   
}
.vscode-leave-to{
    
    transform:scale(0,0);
    transform-origin: center,center;
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
}
</style>