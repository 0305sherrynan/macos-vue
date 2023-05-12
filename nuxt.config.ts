

import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build','@nuxtjs/tailwindcss'],
  mode: 'universal',
  modules:[
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@invictus.codes/nuxt-vuetify'
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
vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true ,
      useIconCDN: true ,
      /* vite-plugin-vuetify options */
      styles: true  ,
      autoImport: true ,
    }
  }
}

export default config
