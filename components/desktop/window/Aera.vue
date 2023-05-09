<template>
    <div class="app-aera">
        <AppVscode v-if="isVscodeShow"/>
        <AppChatgpt v-if="isChatgptShow"/>
    </div>
</template>

<script setup lang="ts">
import {useAppsStore} from '~/store/Apps/apps'
const appStore = useAppsStore()
const isVscodeShow = computed(()=>appStore.isOpenApp['vscode'])
const isChatgptShow = computed(()=>appStore.isOpenApp['chatgpt'])
</script>

<style scoped>
.app-aera{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>