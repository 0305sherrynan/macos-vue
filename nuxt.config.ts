

import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build','@nuxtjs/tailwindcss'],
  mode: 'universal',
  modules:[
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
],
components:[
    {
        path:'~/components/',
        pathPrefix:true  //设置为false 则不会通过路径名拼装
    }
],   
vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@/assets/css/sass/global.scss" as *;'	// 注意文件路径要配成自己的
            }
        }
    }
},

}

export default config
