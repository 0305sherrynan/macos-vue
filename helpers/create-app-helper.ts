// 除了默认配置外，可以选择的配置
export type appHelper = {
    title:string

    width?:number
    height?: number
    shouldOpenWindow?:boolean
    resizable?:boolean
    expandable?:boolean
    dockBreakBefore?:boolean,
    //当底部应用被点击时，触发的跳转、新开对应网站
    externalBrowserFace?:(e:Event)=>void

}
export const createAppHelper = (config:appHelper)=>({
    /**
     * 配置默认信息
     * width、height默认宽高
     * dockBreakBefore 是否到此有分隔符
     * shouldOpenWindow 是否应该打开新窗口,默认为false
     */
    width:600,
    height:500,
    shouldOpenWindow:false,
    resizable:true,
    dockBreakBefore:false,
    expandable:true,
    ...config
})