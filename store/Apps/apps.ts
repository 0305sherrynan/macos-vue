import { defineStore, StoreDefinition } from 'pinia'
import {appsID} from '~/configs/apps/apps.config'

//需要永久存储的用户信息
interface appStorage {

}

export const useAppsStore = defineStore('apps', {
    state: () => ({
      
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