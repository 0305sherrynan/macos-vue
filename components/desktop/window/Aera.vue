<template>
    <div class="app-aera">
        <div class="inline-block relative" >
             <AppVscode   v-if="isVscodeShow" class="vscode-app"/> 
            <AppChatgpt v-if="isChatgptShow"/>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {useAppsStore} from '~/store/Apps/apps'
const appStore = useAppsStore()
const isVscodeShow = computed(()=>appStore.isOpenApp['vscode'])
const isChatgptShow = computed(()=>appStore.isOpenApp['chatgpt'])

</script>

<style scoped lang="scss">
.app-aera{
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    .vscode-app{
        position: fixed;
    }
}
</style>