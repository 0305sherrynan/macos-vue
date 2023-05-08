<script lang="ts" setup>
/**
 *  右键时鼠标的位置
 */
 const xPage = ref<number>(0)
  const yPage =  ref<number>(0)
/**
 * method
 * openRightMenu 打开右侧窗口
 */
const openRightMenu = (e:MouseEvent)=>{
  //阻止默认事件
  e.preventDefault()
  //获取相对于文档的x、y轴坐标
  xPage.value = e.pageX
  yPage.value = e.pageY
  console.log('123')

  
}
</script>

<template>
  <div id="main" @click.right.native="openRightMenu">
    <MenubarDeskBar />
    <DockFrame class="dock"  />
    <DesktopContextMenu :XYpos="{xPage,yPage}" class="main-context-menu"/>
  </div>
</template>

<style scoped lang="scss">
#main {
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;

  will-change: background-image;
  background-image: url('~/assets/image/wallpapers/43.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .dock {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);



  }

}
</style>