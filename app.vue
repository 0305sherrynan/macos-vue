<template>
  <div class="app" ref="appRef">
     <!--添加v-app 为了兼容性-->
    <v-app>
      <NuxtPage></NuxtPage>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import '~/store/index'
import { useThemesStore } from '~/store/themes/themes'
const themesStore = useThemesStore()
const appRef = ref<HTMLElement>()
const brightnessCss = computed(() => `${themesStore.brightness}%`)
/**
 * operate
 * 全局注入 appDom
 */
provide('appDom',appRef)
</script>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  filter: brightness(v-bind(brightnessCss));
}
</style>
