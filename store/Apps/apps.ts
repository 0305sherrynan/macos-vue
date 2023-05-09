import { defineStore, StoreDefinition } from 'pinia'
import {appsID} from '~/configs/apps/apps.config'
interface appStoreIntf{
    //是否打开对应的app
    isOpenApp:Record<appsID,boolean>
    //当前鼠标所在的app实例
    activeAppInstance:appsID
}
export const useAppsStore = defineStore('apps', {
    state: ():appStoreIntf => ({
      isOpenApp:{
        vscode:false,
        github:false,
        qq:false,
        terminal:false,
        chatgpt:false,
        // 'avs':false
      },
      activeAppInstance:'vscode'
    }),
    getters:{

    },
    actions: {
        /**
         * updateAllUserInfo 更新所有的userInfo
         */
        updateAllUserInfo(){

        }
    },
  })