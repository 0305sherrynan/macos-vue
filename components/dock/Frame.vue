<template>
    <div class="flex flex-row ">
        <div class="divider"></div>
        <template v-for="(item,index) in appConfig">
            <DockItem :appItem="item" :AppID="index"></DockItem>
        </template>
    </div>
</template>

<script setup lang="ts">
import { appConfig } from '~/configs/apps/apps.config'
// import {appsID} from '~/configs/apps/apps.config'
</script>

<style scoped lang="scss">

</style>