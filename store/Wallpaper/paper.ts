import { defineStore, StoreDefinition } from 'pinia'
import {computed } from "vue"
import {wallPaperObj} from '~/configs/wallpaper/paper.config'
interface wallPaperIntf{
image:string
}
export const usePapersStore = defineStore('paper', {
    state: ():wallPaperIntf => ({
        image:wallPaperObj['ventura'].thumbnail
    }),
    getters:{
        imageGetter:(state):ComputedRef=>computed(()=>state.image)
        // brightnessGetter:(state):ComputedRef=>computed(()=>state.brightness)
    },
    actions: {
        // setBrightness(value:number){
        //     this.brightness = value
        // }
        setImage(newPath:string){
            this.image = newPath
        }
    },
  })