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
    width: 39rem;
    height: 4rem;
    border-radius: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    
    background-color: hsla(var(--system-color-light-hsl), 0.4);
    box-shadow: inset 0 0 0 0.2px hsla(var(--system-color-grey-100-hsl), 0.7),
      0 0 0 0.2px hsla(var(--system-color-grey-900-hsl), 0.7), hsla(0, 0%, 0%, 0.3) 2px 5px 19px 7px;

  }

}
</style>