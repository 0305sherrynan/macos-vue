<template>
    <div class="header-list" @mouseenter="btn_enter" @mouseleave="btn_leave">
        <span >
            {{ item.title }}</span>
        
        <MenubarSubMenu :EachMenuItem=" item.menu " v-show=" isShow " @mouseenter.native="btn_enter"
            @mouseleave.native="btn_leave" class="menubar-sub-menu"/>
    </div>
</template>

<script setup lang="ts">

/**
 * props 父组件传入的参数
 * isShow 是否显示下拉菜单
 * scale css变量 缩放的比例
 */
const props = defineProps<{
    headlist: {
        item: { title: string, menu: Object }
        index: string
    }
}>()
const { item, index } = props.headlist  //解构赋值
const isShow = ref<boolean>(false)
const scale = ref<number>(0)
watch(isShow,(newValue,oldValue)=>{
    scale.value = isShow.value?1:0
})
/**
 * method
 * btn_enter 当鼠标滑入单个选项时
 */
const btn_enter = ()=>{
    isShow.value = true
   
}
const btn_leave = ()=>{
    isShow.value = false
   
}


</script>

<style scoped lang="scss" >
.header-list {
    height: 100%;
    span {
        z-index: 2;
    }

    &::after {
        border-radius: .25rem;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
       
        background-color: transparent;
        background-color: hsla(var(--system-color-dark-hsl), 0.2);
        transform: scale(v-bind(scale), v-bind(scale));
        transform-origin: center center;
        z-index: -1;

        transition: transform 100ms ease;

    }
}
.menubar-sub-menu{
    position: absolute;
    top: 28px;
}
</style>