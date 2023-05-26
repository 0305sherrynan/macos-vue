import { AppConfig } from 'nuxt/schema'
import { type } from 'os'
import {createAppHelper} from '~/helpers/create-app-helper'
/**
 * 有关apps应用的配置对象
 */
const vscode = createAppHelper({
    title:'VSCode',
    height:27,
    width:50,
    shouldOpenWindow:false,
    // externalBrowserFace:()=>window.open('https://developer.mozilla.org/','_blank')
})
const chatgpt = createAppHelper({
    title:'ChatGpt',
    height:27,
    width:50,
    shouldOpenWindow:false,
    
})
const github = createAppHelper({
    title:'Github',
    height:600,
    width:800,
    shouldOpenWindow:true,
    externalBrowserFace:()=>window.open('https://developer.mozilla.org/','_blank')
})
const qq = createAppHelper({
    title:'QQ',
    height:600,
    width:800,
    shouldOpenWindow:true,
    externalBrowserFace:()=>window.open('https://developer.mozilla.org/','_blank')
})
const terminal = createAppHelper({
    title:'Terminal',
    height:27,
    width:50,
    shouldOpenWindow:false,
  
})
const wallpaper = createAppHelper({
    title:'wallpaper',
    height:22,
    width:32,
    shouldOpenWindow:false
   
})
// const vscode = createAppHelper({
//     title:'VSCode',
//     height:600,
//     width:800,
//     shouldOpenWindow:true,
//     externalBrowserFace:()=>window.open('https://developer.mozilla.org/','_blank')
// })
// const vscode = createAppHelper({
//     title:'VSCode',
//     height:600,
//     width:800,
//     shouldOpenWindow:true,
//     externalBrowserFace:()=>window.open('https://developer.mozilla.org/','_blank')
// })
//appConfig的键还可以继续使用在别的地方作为数据接口
export const appConfig = {
    vscode,
    chatgpt,
    github,
    qq,
    terminal,
    wallpaper
}
export  type appsID = keyof typeof appConfig