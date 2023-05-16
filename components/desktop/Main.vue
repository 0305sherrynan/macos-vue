<script lang="ts" setup>
/**
 *  右键时鼠标的位置
 * contextMenuRef 右键菜单
 * Main 界面的dom
 * MainHeight 界面的高度
 */
 const xPage = ref<number>(0)
  const yPage =  ref<number>(0)
  const contextMenuRef = ref<Element>()
  const Main = ref<HTMLElement>()
  const MainHeight = ref<number | undefined>(undefined)
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
}
/**
 * 
 */
onMounted(()=>{
  MainHeight.value = Main.value?.getBoundingClientRect().height
})
</script>

<template>
  <div id="main" @click.right.native="openRightMenu" ref="Main">
    <DesktopWall/>
    <MenubarDeskBar />
    <DesktopWindowAera class="app-aera"/>
    <DockFrame class="dock"  />
    <DesktopContextMenu :XYpos="{xPage,yPage}" ref="contextMenuRef" :mainHeight="MainHeight?MainHeight:0"/>
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
  // background-image: url('~/assets/image/wallpapers/43.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;

  .dock {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }



}
</style>