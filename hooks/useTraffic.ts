import { useAppsStore } from '~/store/Apps/apps'
import { appConfig } from '~/configs/apps/apps.config'
/**
 * 
 * @param eventType 事件的类型 包括 reduce、full、closed
 * @param eventApp 事件的app对象
 * @param boxRef 监听的盒子
 */

const useTraffic = (eventApp: string, boxRef: globalThis.Ref<HTMLElement | undefined>) => {
    /**
     * vscodeRef vscode iframe
     * iframe_width vscode_iframe_width
     * iframe_height ..
     * iframe_width_px iframe_height_px 转为px
     * vscodeRef
     * boxOffsetX  boxOffsetY 鼠标距离盒子的偏移值
     * header_height_px 顶部栏的height
     */
    const appStore = useAppsStore()
    const { width, height } = useWindowSize()
    const dock_height_px = 5 * 16
    const header_height_px = 1.8 * 16
    const traffic_height_px = 1.6 * 16
    let iframe_height = ref<string>(appConfig[eventApp].height + 'rem')
    const iframe_width = ref<string>(appConfig[eventApp].width + 'rem')
    const iframe_width_px = appConfig[eventApp].width * 16
    const iframe_height_px = appConfig[eventApp].height * 16
    let { x, y, style } = useDraggable(boxRef, {
        initialValue: { x: width.value / 2 - iframe_width_px / 2, y: height.value / 2 - iframe_height_px / 2 },
    })
    function trafficChange(eventType: String) {
        switch (eventType) {
            case 'closed': {
                appStore.isOpenApp[eventApp] = false
                break
            }
            case 'full': {
                iframe_height.value = height.value - traffic_height_px - header_height_px - dock_height_px - 0.4 * 16 * 2 + 'px';
                iframe_width.value = '100vw'
                x.value = 0
                y.value = header_height_px
                break
            }
            case 'reduce': {
                iframe_height.value = appConfig.chatgpt.height + 'rem'
                iframe_width.value = appConfig.chatgpt.width + 'rem'
                x.value = width.value / 2 - iframe_width_px / 2
                y.value = height.value / 2 - iframe_height_px / 2
                break
            }
        }
    }

    return {
        iframe_width,
        iframe_height,
        style,
        trafficChange
    }
}
export default useTraffic