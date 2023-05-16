import { defineStore, StoreDefinition } from 'pinia'
import {computed } from "vue"
import {appsID} from '~/configs/apps/apps.config'
interface themesAndControlIntf{
    //是否为暗主题模式
    dark:boolean,
    brightness:number,
    soundSize:number,
    fullScreen:()=>void


}
export const useThemesStore = defineStore('themes', {
    state: ():themesAndControlIntf => ({
        dark:false,
        brightness:100,
        soundSize:100,
        fullScreen:()=>{
            
        }
    }),
    getters:{
        brightnessGetter:(state):ComputedRef=>computed(()=>state.brightness)
    },
    actions: {
        setBrightness(value:number){
            this.brightness = value
        }
    },
  })