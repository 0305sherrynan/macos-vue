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

const appStore = useAppsStore()
const paperStore = usePapersStore()
/**
 * vscodeRef vscode iframe
 * iframe_width vscode_iframe_width
 * iframe_height ..
 * iframe_width_px iframe_height_px 转为px
 * vscodeRef
 * boxOffsetX  boxOffsetY 鼠标距离盒子的偏移值
 * header_height_px 顶部栏的height
 */

const vscodeRef = ref<HTMLElement>()
const iframe_width = ref<string>(appConfig.wallpaper.width + 'rem')
const iframe_width_px = appConfig.wallpaper.width * 16
let iframe_height = ref<string>(appConfig.wallpaper.height + 'rem')
const iframe_height_px = appConfig.wallpaper.height * 16
const dock_height_px = 5*16
const header_height_px = 1.8*16
const traffic_height_px  = 1.6*16
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
    switch (eventType) {
        case 'closed': {
            appStore.isOpenApp['wallpaper'] = false
            break
        }
        case 'full': {
            console.log(height.value,header_height_px)
            iframe_height.value = height.value-traffic_height_px-header_height_px-dock_height_px-0.4*16*2 +'px';
            iframe_width.value = '100vw'
            x.value = 0
            y.value = header_height_px
            break
        }
        case 'reduce': {
            iframe_height.value = appConfig.wallpaper.height+'rem'
            iframe_width.value = appConfig.wallpaper.width+'rem'
            x.value = width.value/2-iframe_width_px/2
            y.value = height.value/2-iframe_height_px/2
            break
        }
    }
}
const switchPaper = (newPath:string) => {
    console.log(newPath)
    paperStore.setImage(newPath)
}
/**
 * 监听拖拽事件
 */
let { x, y, style } = useDraggable(vscodeRef, {
    initialValue: { x: width.value / 2 - iframe_width_px / 2, y: height.value / 2 - iframe_height_px / 2 },
})

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