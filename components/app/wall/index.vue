<template>
    <div class="vscode-box" ref="vscodeRef" :style="style" v-show="isVscodeShow">
        <DesktopWindowTrafficLight ref="trafficRef" @btnClick="emitBtnClick" />
        <div class="wall-area">
            <section class="dynamic-wall">
                <header class="text-2xl"><span>Dynamic Wallpapers</span></header>
                <div class="flex flex-row flex-wrap">
                    <div v-for="(item, index) in dynamicPaper" :key="index" class="dynamic-each">
                        <img 
                            :src="wallPaperObj[item[0]].thumbnail" alt="" 
                            @click="switchPaper(wallPaperObj[item[0]].thumbnail)"
                        >
                        <span>{{ wallPaperObj[item[0]].name }}</span>
                    </div>
                </div>
            </section>
            <section class="alone-wall">
                <header class="text-2xl"><span>Standalone Wallpapers</span></header>
                <div>
                    <div v-for="(item, index) in staticPaper" :key="index">
                        <img 
                            :src="wallPaperObj[item[0]].thumbnail" alt=""
                            @click="switchPaper(wallPaperObj[item[0]].thumbnail)"
                        >
                        <span>{{ wallPaperObj[item[0]].name }}</span>
                    </div>
                </div>
            </section>
        </div>


    </div>
</template>

<script setup lang="ts">
import { appConfig } from '~/configs/apps/apps.config'
import { useAppsStore } from '~/store/Apps/apps'
import {usePapersStore} from '~/store/Wallpaper/paper'
import { wallPaperObj } from '~/configs/wallpaper/paper.config'



import useTraffic from '~/hooks/useTraffic'


/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * isVscodeShow 是否显示
 */
const vscodeRef = ref<HTMLElement>()
    const paperStore = usePapersStore()
const appStore = useAppsStore()
const { iframe_height, iframe_width, style, trafficChange } = useTraffic('wallpaper', vscodeRef)
const isVscodeShow = computed(() => appStore.isOpenApp['wallpaper'])


//获取窗口的width和height
const { width, height } = useWindowSize()
// wallpaper数据
//动态数据的键
const dynamicPaper = Object.entries(wallPaperObj).filter(([key, { type }]) => type === 'dynamic')
//静态图片数据的键
const staticPaper = Object.entries(wallPaperObj).filter(([key, { type }]) => type === 'standalone')

/**
 * method 
 * switchPaper 切换新的壁纸
 */

 const emitBtnClick = (eventType: string) => {
    trafficChange(eventType)
}
const switchPaper = (newPath:string) => {
    console.log(newPath)
    paperStore.setImage(newPath)
}

</script>

<style scoped lang="scss">
.vscode-box {
    

    border-radius: .75rem;
    background-color: rgb(255, 255, 255);
    padding: .4rem;

}
.wall-area{
    height: v-bind(iframe_height);
    overflow-y: auto;
    text-align: center;
    line-height: 2rem;
}
.dynamic-wall{
    width: v-bind(iframe_width);

   
    padding: 1rem;
    .dynamic-each {
        width: calc(v-bind(iframe_width)/2 - 1.2rem);
        padding-left:1rem ;
    }
    img{
        border-radius: 0.75rem;
    }
}
.alone-wall {

    width: v-bind(iframe_width);

   
    padding: 1rem;

    img {
        border-radius: 0.75rem;
    }
}
</style>